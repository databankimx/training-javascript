# setup.ps1
#
# Prepares training-javascript for the lesson runner (QUICKSTART.md). It can be run from anywhere:
#   0. Checks Git, and clones the repository into C:\Development\training\training-javascript if this script isn't inside it.
#      Then runs the cloned copy of this script, so every later step uses the repository's own files.
#   1. Checks Node.js 24 or later.
#   2. Installs the npm packages exactly as recorded in package-lock.json (npm ci).
#   3. Runs the course's own checks: the tests, and the curriculum check.
#
# With -InstallMissing, the script installs what's missing: Git and Node.js LTS with winget.
# Installing needs an elevated (Administrator) PowerShell. Safe to run again: anything already in place is skipped.
#
# Run from anywhere with:
#   powershell -ExecutionPolicy Bypass -File .\setup.ps1
#   powershell -ExecutionPolicy Bypass -File .\setup.ps1 -InstallMissing

param(
    [switch]$InstallMissing,
    [string]$RepoUrl = "https://github.com/databankimx/training-javascript.git",
    [string]$Branch = "main"
)

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
        if ($InstallMissing) { $childParams["InstallMissing"] = $true }
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

# 2. npm packages ----------------------------------------------------------------------------------------

Write-Step "2. npm packages (from package-lock.json)"
& $npmCmd ci
if ($LASTEXITCODE -ne 0) {
    Stop-Setup "npm ci failed (exit code $LASTEXITCODE). Check the messages above, and your network access to the npm registry."
}
$summary["npm packages"] = "ok"

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

Write-Step "Summary"
foreach ($item in $summary.GetEnumerator()) {
    Write-Host ("   {0,-22} {1}" -f $item.Key, $item.Value)
}
Write-Host ""
Write-Host "Setup finished. To start the lesson runner:" -ForegroundColor Green
Write-Host "   .\start-training.ps1"
Write-Host "   (or, in the foreground: npm start)"
Write-Host ""
