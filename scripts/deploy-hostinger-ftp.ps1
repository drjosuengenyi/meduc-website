# Deploy ./out to Hostinger via FTPS (WinSCP or curl)
# Required env vars (never commit these):
#   HOSTINGER_FTP_HOST, HOSTINGER_FTP_USER, HOSTINGER_FTP_PASSWORD, HOSTINGER_FTP_REMOTE_DIR
# Example remote dir: /public_html/
# Usage:
#   $env:HOSTINGER_FTP_HOST="ftp.yourdomain.com"
#   $env:HOSTINGER_FTP_USER="u123456789"
#   $env:HOSTINGER_FTP_PASSWORD="***"
#   $env:HOSTINGER_FTP_REMOTE_DIR="/public_html/"
#   pwsh ./scripts/deploy-hostinger-ftp.ps1

$ErrorActionPreference = "Stop"

foreach ($k in @("HOSTINGER_FTP_HOST","HOSTINGER_FTP_USER","HOSTINGER_FTP_PASSWORD","HOSTINGER_FTP_REMOTE_DIR")) {
  if (-not [string]$env:$k) { throw "Missing env var: $k" }
}

Write-Host "==> Build"
npm ci
npm run build
if (-not (Test-Path "./out")) { throw "Build output ./out missing" }

$remote = $env:HOSTINGER_FTP_REMOTE_DIR.TrimEnd("/") + "/"
Write-Host "==> FTPS upload to $($env:HOSTINGER_FTP_HOST)$remote"

# Mirror local out/ to Hostinger public_html via curl FTPS (explicit TLS)
Get-ChildItem -Path "./out" -Recurse -File | ForEach-Object {
  $rel = $_.FullName.Substring((Resolve-Path "./out").Path.Length + 1).Replace("\", "/")
  $url = "ftps://$($env:HOSTINGER_FTP_HOST)$remote$rel"
  $dirUrl = "ftps://$($env:HOSTINGER_FTP_HOST)$remote$((Split-Path $rel -Parent).Replace('\','/'))/"
  if ($rel.Contains("/")) {
    curl.exe -s --ssl-reqd --user "$($env:HOSTINGER_FTP_USER):$($env:HOSTINGER_FTP_PASSWORD)" --ftp-create-dirs -Q "NOOP" $dirUrl | Out-Null
  }
  curl.exe --ssl-reqd --user "$($env:HOSTINGER_FTP_USER):$($env:HOSTINGER_FTP_PASSWORD)" `
    --ftp-create-dirs -T $_.FullName $url
  if ($LASTEXITCODE -ne 0) { throw "Upload failed: $rel" }
  Write-Host "uploaded $rel"
}

Write-Host "DONE — verify https://meduc.tech and https://www.meduc.tech"
