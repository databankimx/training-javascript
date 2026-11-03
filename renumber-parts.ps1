$ErrorActionPreference = "Stop"

$root = $PSScriptRoot
$part3 = Join-Path $root "part-iii-working-with-html"
$part4 = Join-Path $root "part-iv-advanced"

$moves = @(
    @{ From = (Join-Path $part3 "ch13-browser"); To = (Join-Path $part3 "_tmp-ch14-browser") },
    @{ From = (Join-Path $part3 "ch14-forms"); To = (Join-Path $part3 "_tmp-ch15-forms") },
    @{ From = (Join-Path $part3 "ch15-xss"); To = (Join-Path $part3 "_tmp-ch16-xss") },
    @{ From = (Join-Path $part3 "ch16-dynamic-forms"); To = (Join-Path $part3 "_tmp-ch17-dynamic-forms") },
    @{ From = (Join-Path $part4 "ch01-recursion"); To = (Join-Path $part4 "_tmp-ch18-recursion") },
    @{ From = (Join-Path $part4 "ch02-regular-expressions"); To = (Join-Path $part4 "_tmp-ch19-regular-expressions") },
    @{ From = (Join-Path $part4 "ch03-complexity"); To = (Join-Path $part4 "_tmp-ch20-complexity") },
    @{ From = (Join-Path $part4 "ch04-bitwise-operations"); To = (Join-Path $part4 "_tmp-ch21-bitwise-operations") },
    @{ From = (Join-Path $part4 "ch05-closures"); To = (Join-Path $part4 "_tmp-ch22-closures") },
    @{ From = (Join-Path $part4 "ch06-internationalized-formatting"); To = (Join-Path $part4 "_tmp-ch23-internationalized-formatting") },
    @{ From = (Join-Path $part4 "ch07-typed-arrays"); To = (Join-Path $part4 "_tmp-ch24-typed-arrays") },
    @{ From = (Join-Path $part4 "ch08-iterators-and-generators"); To = (Join-Path $part4 "_tmp-ch25-iterators-and-generators") },
    @{ From = (Join-Path $part4 "ch09-functional-tools"); To = (Join-Path $part4 "_tmp-ch26-functional-tools") }
)

foreach ($move in $moves) {
    if (-not (Test-Path -LiteralPath $move.From)) {
        throw "Source folder not found: $($move.From)"
    }

    Move-Item -LiteralPath $move.From -Destination $move.To
}

$temporaryFolders = Get-ChildItem -Path $part3, $part4 -Directory -Filter "_tmp-ch*"
foreach ($folder in $temporaryFolders) {
    $finalName = $folder.Name -replace '^_tmp-', ''
    Rename-Item -LiteralPath $folder.FullName -NewName $finalName
}

Write-Host "Part III and Part IV chapter folders renumbered successfully."
