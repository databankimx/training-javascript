# setup.ps1
#
# Prepares training-javascript for the lesson runner (QUICKSTART.md). It can be run from anywhere:
#   0. Checks Git, and clones the repository into C:\Development\training\training-javascript if this script isn't inside it.
#      Then runs the cloned copy of this script, so every later step uses the repository's own files.
#   1. Checks Node.js 24 or later.
#   2. Installs the npm packages exactly as recorded in package-lock.json (npm ci).
#      This includes dependencies for both the Electron and web-based runners.
#   3. Runs the course's own checks: the tests, and the curriculum check.
#
# With -InstallMissing, the script installs what's missing: Git and Node.js LTS with winget.
# Installing needs an elevated (Administrator) PowerShell. Safe to run again: anything already in place is skipped.
#
# Run from anywhere with:
#   powershell -ExecutionPolicy Bypass -File .\setup.ps1
#   powershell -ExecutionPolicy Bypass -File .\setup.ps1 -InstallMissing

param(
    [switch]$NoInstall = $false,
    [string]$RepoUrl = "https://github.com/databankimx/training-javascript.git",
    [string]$Branch = "main"
)
$InstallMissing = -not $NoInstall

$ErrorActionPreference = "Stop"
$root = $PSScriptRoot
Set-Location $root

$defaultRepoPath = "C:\Development\training\training-javascript"
$gitDefault = "C:\Program Files\Git\cmd\git.exe"
$nodeDefaultDir = "C:\Program Files\nodejs"
$requiredNodeMajor = 24
$summary = [ordered]@{}

function Write-Step([string]$title) {
    Write-Host ""
    Write-Host "== $title ==" -ForegroundColor Cyan
}

function Stop-Setup([string]$message) {
    Write-Host ""
    Write-Host "SETUP STOPPED: $message" -ForegroundColor Red
    Write-Host "Fix the problem above, then run this script again. Steps already done are skipped."
    exit 1
}

function Add-Warning([string]$message) {
    Write-Host "   WARNING: $message" -ForegroundColor Yellow
}

function Test-Administrator {
    $identity = [Security.Principal.WindowsIdentity]::GetCurrent()
    $principal = New-Object Security.Principal.WindowsPrincipal($identity)
    return $principal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
}

function Invoke-Winget([string]$id) {
    if (-not (Get-Command winget -ErrorAction SilentlyContinue)) {
        Stop-Setup "winget is not available. Install 'App Installer' from the Microsoft Store, or install $id by hand."
    }
    Write-Host "   winget install -e --id $id" -ForegroundColor Gray
    & winget install -e --id $id --silent --accept-package-agreements --accept-source-agreements
    # winget exit code -1978335189 means the package is already installed, which is fine here.
    if ($LASTEXITCODE -ne 0 -and $LASTEXITCODE -ne -1978335189) {
        Stop-Setup "winget could not install $id (exit code $LASTEXITCODE)."
    }
}

function Find-Node {
    # A program installed in this session isn't on PATH until a new window opens, so the default folder is checked too.
    $command = Get-Command node -ErrorAction SilentlyContinue
    if ($command) { return (Split-Path $command.Source -Parent) }
    if (Test-Path (Join-Path $nodeDefaultDir "node.exe")) { return $nodeDefaultDir }
    return $null
}

function Test-BuildTools {
    # Check for C++ Build Tools using vswhere
    # The key is checking for the actual VC.Tools component, not just the presence of any VS installation
    $vswhere = Join-Path ${env:ProgramFiles(x86)} "Microsoft Visual Studio\Installer\vswhere.exe"
    if (-not (Test-Path $vswhere)) {
        return $false
    }
    
    try {
        $path = & $vswhere -products * -requires Microsoft.VisualStudio.Component.VC.Tools.x86.x64 -latest -property installationPath 2>$null
        if ($path) {
            return $true
        }
    } catch {
        return $false
    }
    
    return $false
}

function Install-BuildTools {
    Write-Host "   Installing Visual Studio Build Tools with C++ workload..."
    Write-Host "   This will download ~4-5 GB and may take several minutes."
    Write-Host ""
    
    # Install Build Tools with C++ workload using winget override parameter
    # This ensures the workload is installed during initial setup, not as a separate step
    $override = "--quiet --wait --norestart --add Microsoft.VisualStudio.Workload.VCTools --includeRecommended"
    
    if (-not (Get-Command winget -ErrorAction SilentlyContinue)) {
        Stop-Setup "winget is not available. Install 'App Installer' from the Microsoft Store, or install Visual Studio Build Tools by hand."
    }
    
    Write-Host "   winget install --id Microsoft.VisualStudio.BuildTools --override ""$override""" -ForegroundColor Gray
    & winget install --id Microsoft.VisualStudio.BuildTools -e --accept-package-agreements --accept-source-agreements --override $override
    
    # Exit code -1978335189 means already installed, 0 = success, 3010 = success but restart needed
    if ($LASTEXITCODE -eq 0 -or $LASTEXITCODE -eq 3010 -or $LASTEXITCODE -eq -1978335189) {
        Write-Host "   Build Tools installation initiated."
        Start-Sleep -Seconds 5
        
        # Verify the installation
        if (Test-BuildTools) {
            Write-Host "   C++ Build Tools with VC++ workload confirmed"
            return $true
        } else {
            Add-Warning "Build Tools was installed but C++ workload verification failed."
            Add-Warning "The installer may still be running. Please wait a moment and run this script again."
            return $false
        }
    } else {
        Stop-Setup "winget could not install Build Tools (exit code $LASTEXITCODE)."
    }
}

Write-Host ""
Write-Host "training-javascript setup" -ForegroundColor Yellow

if ($InstallMissing -and -not (Test-Administrator)) {
    Stop-Setup "-InstallMissing needs an elevated PowerShell. Open PowerShell as Administrator, and run the script again."
}

# 0. Git and the repository ------------------------------------------------------------------------------

Write-Step "0. Git and the repository"

$gitExe = $gitDefault
if (-not (Test-Path $gitExe)) {
    $gitCommand = Get-Command git -ErrorAction SilentlyContinue
    if ($gitCommand) { $gitExe = $gitCommand.Source }
}
if (-not (Test-Path $gitExe)) {
    if ($InstallMissing) {
        Write-Host "   Git is missing: installing it"
        Invoke-Winget "Git.Git"
        $gitExe = $gitDefault
    } else {
        Stop-Setup "Git isn't installed. Run this script with -InstallMissing, or install Git from https://git-scm.com."
    }
}
Write-Host "   Git: $gitExe"
$summary["Git"] = "ok"

if (-not (Test-Path (Join-Path $root "package.json"))) {
    # The script is running outside the repository. Clone it, or use the existing clone, then run its copy.
    if (Test-Path (Join-Path $defaultRepoPath "package.json")) {
        Write-Host "   Using the repository at $defaultRepoPath"
        $repoRoot = $defaultRepoPath
    } else {
        Write-Host "   Cloning $RepoUrl ($Branch) into $defaultRepoPath"
        New-Item -ItemType Directory -Force -Path (Split-Path $defaultRepoPath -Parent) | Out-Null
        & $gitExe clone --branch $Branch $RepoUrl $defaultRepoPath
        if ($LASTEXITCODE -ne 0) {
            Stop-Setup "git clone failed (exit code $LASTEXITCODE). Check the address, and your access to the repository."
        }
        $repoRoot = $defaultRepoPath
    }
    Write-Host "   Continuing from the repository at $repoRoot"
    $childScript = Join-Path $repoRoot "setup.ps1"
    if (Test-Path $childScript) {
        # The repository has its own copy of this script, so run that copy.
        $childParams = @{}
        if ($NoInstall) { $childParams["NoInstall"] = $true }
        & $childScript @childParams
        exit $LASTEXITCODE
    }
    # The repository doesn't have this script yet, so carry on here, using the clone's files.
    Write-Host "   The repository has no setup.ps1 yet, so this copy continues the setup." -ForegroundColor Yellow
    $root = $repoRoot
    Set-Location $root
}

if (-not $root.StartsWith("C:\Development\", [StringComparison]::OrdinalIgnoreCase)) {
    # QUICKSTART asks for the repository under C:\Development. Security software may remove programs built elsewhere.
    Add-Warning "the repository is at $root, not under C:\Development. See QUICKSTART, 'Where to clone the repository'."
}
$summary["Repository"] = $root

# 1. Node.js ---------------------------------------------------------------------------------------------

Write-Step "1. Node.js $requiredNodeMajor or later"

$nodeDir = Find-Node
if (-not $nodeDir -and $InstallMissing) {
    Write-Host "   Node.js is missing: installing the LTS release"
    Invoke-Winget "OpenJS.NodeJS.LTS"
    $nodeDir = Find-Node
}
if (-not $nodeDir) {
    Stop-Setup "Node.js isn't installed. Run this script with -InstallMissing, or install Node.js $requiredNodeMajor or later from https://nodejs.org."
}

# The folder goes first on PATH for this script, and for the npm and node commands it starts.
$env:Path = "$nodeDir;$env:Path"

$nodeVersion = (& (Join-Path $nodeDir "node.exe") --version | Select-Object -First 1).Trim()
if ($nodeVersion -match "^v(\d+)\.") {
    $nodeMajor = [int]$Matches[1]
} else {
    Stop-Setup "Couldn't read the Node.js version: $nodeVersion"
}
if ($nodeMajor -lt $requiredNodeMajor) {
    Stop-Setup "Node.js $nodeVersion was found, but the course needs Node.js $requiredNodeMajor or later. Install a current LTS release from https://nodejs.org, then run this script again."
}
Write-Host "   Node.js $nodeVersion in $nodeDir"
$summary["Node.js"] = $nodeVersion

$npmCmd = Join-Path $nodeDir "npm.cmd"
if (-not (Test-Path $npmCmd)) {
    Stop-Setup "npm wasn't found next to Node.js at $npmCmd. Reinstall Node.js, then run this script again."
}

# 1b. C++ Build Tools (for native modules) -----------------------------------------------------------

Write-Step "1b. C++ Build Tools (for native modules)"

$hasBuildTools = Test-BuildTools
if ($hasBuildTools) {
    Write-Host "   C++ Build Tools with VC++ workload found and ready"
    $summary["C++ Build Tools"] = "ok"
} elseif ($InstallMissing) {
    Write-Host "   C++ Build Tools not found. These are needed to build native Node.js modules."
    if (Install-BuildTools) {
        $hasBuildTools = Test-BuildTools
    }
    
    if ($hasBuildTools) {
        Write-Host "   C++ Build Tools installation confirmed"
        $summary["C++ Build Tools"] = "ok"
    } else {
        Add-Warning "C++ Build Tools couldn't be fully verified. The installer may still be running. Please wait a moment and run this script again."
        $summary["C++ Build Tools"] = "not verified (may still installing)"
    }
} else {
    Add-Warning "C++ Build Tools not found. Run this script as Administrator with -InstallMissing to install automatically."
    $summary["C++ Build Tools"] = "not available"
}

# 2. npm packages ----------------------------------------------------------------------------------------

Write-Step "2. npm packages (from package-lock.json)"
Write-Host "   Installing dependencies for both Electron and web runners (including Markdown and math rendering)..."
& $npmCmd ci
if ($LASTEXITCODE -ne 0) {
    Stop-Setup "npm ci failed (exit code $LASTEXITCODE). Check the messages above, and your network access to the npm registry."
}
$summary["npm packages"] = "ok"

# 2b. Electron binary verification and repair -------------------------------------------------------

Write-Step "2b. Electron binary verification"
$electronExe = Join-Path $root "node_modules\electron\dist\electron.exe"
if (-not (Test-Path $electronExe)) {
    Write-Host "   Electron binary not found. Downloading..."
    $electronInstall = Join-Path $root "node_modules\electron\install.js"
    if (Test-Path $electronInstall) {
        & (Join-Path $nodeDir "node.exe") $electronInstall 2>&1 | Tee-Object -Variable electronOutput | Out-Null
        
        # Check if the error is the npm optional dependencies bug (issue #4828)
        if ($LASTEXITCODE -ne 0) {
            $errorOutput = $electronOutput -join "`n"
            if ($errorOutput -like "*Cannot find native binding*" -or $errorOutput -like "*extract-zip*") {
                Write-Host "   Detected npm optional dependencies issue (npm bug #4828). Attempting recovery..."
                
                Write-Host "   Step 1: Removing @electron-internal and electron packages..."
                Remove-Item -Path (Join-Path $root "node_modules\@electron-internal") -Recurse -Force -ErrorAction SilentlyContinue | Out-Null
                Remove-Item -Path (Join-Path $root "node_modules\electron") -Recurse -Force -ErrorAction SilentlyContinue | Out-Null
                Remove-Item -Path (Join-Path $root "package-lock.json") -Force -ErrorAction SilentlyContinue | Out-Null
                
                Write-Host "   Step 2: Clearing npm cache..."
                & $npmCmd cache clean --force 2>&1 | Out-Null
                
                Write-Host "   Step 3: Reinstalling dependencies..."
                & $npmCmd install
                if ($LASTEXITCODE -ne 0) {
                    Stop-Setup "npm install failed (exit code $LASTEXITCODE)."
                }
                
                Write-Host "   Step 3b: Setting up compiler environment for native builds..."
                Invoke-BuildToolsEnvironment | Out-Null
                
                Write-Host "   Step 4: Running npm rebuild to compile native modules..."
                & $npmCmd rebuild
                if ($LASTEXITCODE -ne 0) {
                    Write-Host "   (npm rebuild had issues, but continuing...)" -ForegroundColor Yellow
                }
                
                Write-Host "   Step 5: Checking for node-gyp and build tools..."
                # Try to set up compiler environment in case it's available but not in PATH
                Invoke-BuildToolsEnvironment | Out-Null
                
                $gyp = & $npmCmd config get prefix | Join-Path -ChildPath "node_modules\node-gyp\bin\node-gyp.js"
                $hasGyp = Test-Path $gyp
                if ($hasGyp) {
                    Write-Host "   Step 6: Attempting explicit native module rebuild with node-gyp..."
                    $extractZipPath = Join-Path $root "node_modules\@electron-internal\extract-zip"
                    if (Test-Path $extractZipPath) {
                        Push-Location $extractZipPath
                        & (Join-Path $nodeDir "node.exe") $gyp rebuild 2>&1 | Out-Null
                        Pop-Location
                        if ($LASTEXITCODE -eq 0) {
                            Write-Host "   node-gyp rebuild succeeded"
                        } else {
                            Write-Host "   (node-gyp rebuild warning, but continuing...)" -ForegroundColor Yellow
                        }
                    }
                } else {
                    Write-Host "   (node-gyp not available, skipping explicit rebuild)" -ForegroundColor Yellow
                }
                
                Write-Host "   Step 7: Retrying Electron binary download..."
                $electronInstall = Join-Path $root "node_modules\electron\install.js"
                & (Join-Path $nodeDir "node.exe") $electronInstall 2>&1 | Tee-Object -Variable electronRetryOutput | Out-Null
                
                if ($LASTEXITCODE -ne 0) {
                    $retryError = $electronRetryOutput -join "`n"
                    if ($retryError -like "*Cannot find native binding*") {
                        Write-Host ""
                        Write-Host "   ERROR: The native binding for @electron-internal/extract-zip still cannot be built." -ForegroundColor Red
                        Write-Host "   This requires C++ compiler and build tools." -ForegroundColor Red
                        Write-Host ""
                        Stop-Setup "Electron requires C++ Build Tools. Run this script as Administrator (or with -InstallMissing) to install them automatically."
                    } else {
                        Stop-Setup "Electron binary download failed (exit code $LASTEXITCODE). Check network access to github.com."
                    }
                }
            } else {
                Write-Host "   First attempt error output:" -ForegroundColor Yellow
                $errorOutput | ForEach-Object { Write-Host "   $_" }
                Stop-Setup "Electron binary download failed (exit code $LASTEXITCODE). Check your network connection and try again."
            }
        }
    } else {
        Stop-Setup "Electron install.js not found. Run 'npm ci' again and check for errors."
    }
}

if (Test-Path $electronExe) {
    Write-Host "   Electron binary ready"
    $summary["Electron binary"] = "ok"
} elseif ($summary["Electron binary"] -ne "skipped (requires C++ build tools)") {
    Add-Warning "Electron binary not available. The web-based runner (npm start) will work fine."
    $summary["Electron binary"] = "not available"
}

# 3. Checks ----------------------------------------------------------------------------------------------

Write-Step "3. Course checks"
& $npmCmd test
if ($LASTEXITCODE -ne 0) {
    Stop-Setup "The tests failed. Check the messages above, then run this script again."
}
$summary["Tests"] = "ok"

& $npmCmd run check
if ($LASTEXITCODE -ne 0) {
    Stop-Setup "The curriculum check failed. Check the messages above, then run this script again."
}
$summary["Curriculum check"] = "ok"

# Summary ------------------------------------------------------------------------------------------------

# VS Code ----------------------------------------------------------------------------------------------

Write-Step "VS Code"
$codeCommand = Get-Command code -ErrorAction SilentlyContinue
if (-not $codeCommand -and $InstallMissing) {
    Write-Host "   VS Code isn't on PATH, so it will be installed with winget."
    & winget install -e --id Microsoft.VisualStudioCode --accept-package-agreements --accept-source-agreements
    if ($LASTEXITCODE -ne 0 -and $LASTEXITCODE -ne -1978335189) {
        Add-Warning "VS Code couldn't be installed with winget (exit code $LASTEXITCODE). Install it from code.visualstudio.com, then run this script again."
    }
    foreach ($folder in @((Join-Path $env:LOCALAPPDATA "Programs\Microsoft VS Code\bin"), (Join-Path $env:ProgramFiles "Microsoft VS Code\bin"))) {
        if (Test-Path (Join-Path $folder "code.cmd")) { $env:Path = "$folder;$env:Path" }
    }
    $codeCommand = Get-Command code -ErrorAction SilentlyContinue
}
if (-not $codeCommand) {
    Add-Warning "VS Code isn't on PATH. Install VS Code (winget install --id Microsoft.VisualStudioCode -e), open a new PowerShell window, and run this script again."
    $summary["VS Code"] = "missing"
} else {
    Write-Host "   Found VS Code at $($codeCommand.Source)."
    $summary["VS Code"] = "ok"
}

Write-Step "Summary"
foreach ($item in $summary.GetEnumerator()) {
    Write-Host ("   {0,-22} {1}" -f $item.Key, $item.Value)
}
Write-Host ""
Write-Host "Setup finished. To start the lesson runner:" -ForegroundColor Green
Write-Host "   .\start-training-web.ps1  (web-based runner - works on any browser)"
Write-Host "   npm start                  (Electron app runner)"
Write-Host ""
