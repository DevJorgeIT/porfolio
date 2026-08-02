param(
    [Parameter(Mandatory = $true)]
    [string]$Passphrase
)

$normalized = $Passphrase.Trim()

$sha = [System.Security.Cryptography.SHA256]::Create()
$bytes = [System.Text.Encoding]::UTF8.GetBytes($normalized)
$hash = $sha.ComputeHash($bytes)
$hex = ($hash | ForEach-Object { $_.ToString('x2') }) -join ''

Write-Output "Passphrase SHA-256: $hex"
Write-Output ""
Write-Output "const CREATOR_PASSPHRASE_SHA256 = \"$hex\";"
Write-Output ""
Write-Output "Note: hashing uses Passphrase.Trim() to match app.js validation."
