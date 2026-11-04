$pidFile = Join-Path $env:TEMP "javascript-training-runner.pid"

if (-not (Test-Path $pidFile)) {
    Write-Host "No training runner PID file was found."
    exit 0
}

$runnerPid = [int](Get-Content $pidFile -Raw).Trim()

$result = taskkill.exe /PID $runnerPid /T /F 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "Stopped the training runner (PID $runnerPid)."
} else {
    Write-Host "The training runner is already stopped or PID $runnerPid is no longer available."
}

Remove-Item -LiteralPath $pidFile -Force -ErrorAction SilentlyContinue
