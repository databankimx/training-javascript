$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$stdout = Join-Path $env:TEMP "javascript-training-$PID.out.log"
$stderr = Join-Path $env:TEMP "javascript-training-$PID.err.log"
$pidFile = Join-Path $env:TEMP "javascript-training-runner.pid"

$existing = netstat.exe -ano | Select-String "127\.0\.0\.1:4173\s+.*LISTENING\s+(\d+)"
if ($existing) {
    $existingPid = [regex]::Match($existing.ToString(), "LISTENING\s+(\d+)").Groups[1].Value
    Write-Error "Port 4173 is already in use by PID $existingPid. Stop it with: taskkill /PID $existingPid /T /F"
    exit 1
}

$server = Start-Process `
    -FilePath "node.exe" `
    -ArgumentList "lesson-runner/server.js" `
    -WorkingDirectory $root `
    -RedirectStandardOutput $stdout `
    -RedirectStandardError $stderr `
    -WindowStyle Hidden `
    -PassThru

$server.Id | Set-Content -LiteralPath $pidFile -NoNewline

$url = $null

for ($attempt = 0; $attempt -lt 60 -and -not $server.HasExited; $attempt++) {
    Start-Sleep -Milliseconds 250

    if (Test-Path $stdout) {
        $text = Get-Content $stdout -Raw
        if ($text -match "Open (http://127\.0\.0\.1:\d+/\?token=[^\s]+)") {
            $url = $Matches[1]
            break
        }
    }
}

if ($url) {
    Start-Process $url
    Write-Host "Opened $url"
    Write-Host "Runner PID: $($server.Id)"
    Write-Host "Stop it later with .\stop-training.ps1"
} else {
    Write-Error "The runner did not report a URL. Check $stdout and $stderr"
}
