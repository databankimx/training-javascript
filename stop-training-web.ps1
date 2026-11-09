$pidFile = Join-Path $env:TEMP "javascript-training-runner.pid"

if (-not (Test-Path $pidFile)) {
    Write-Host "No training web server PID file was found."
    exit 0
}

$serverPid = [int](Get-Content $pidFile -Raw).Trim()

$result = taskkill.exe /PID $serverPid /T /F 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "Stopped the training web server (PID $serverPid)."
} else {
    Write-Host "The training web server is already stopped or PID $serverPid is no longer available."
}

Remove-Item -LiteralPath $pidFile -Force -ErrorAction SilentlyContinue
