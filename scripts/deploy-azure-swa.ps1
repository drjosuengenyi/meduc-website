# Deploy built static export to Azure SWA "meducweb" (white-ground)
# Prerequisites: az login, Node.js, npm
# Usage: pwsh ./scripts/deploy-azure-swa.ps1

$ErrorActionPreference = "Stop"

$TenantId = "650ddf14-bd38-43a9-85f0-74c2bff89851"
$SubscriptionId = "dac4422e-6510-4ecc-b55e-0d6722cef2dd"
$ResourceGroup = "meducaht-rg"
$StaticWebAppName = "meducweb"

Write-Host "==> Azure context"
az login --tenant $TenantId --only-show-errors | Out-Null
az account set --subscription $SubscriptionId
az account show --query "{tenantId:tenantId, id:id, name:name, state:state}" -o json

Write-Host "==> Build Next.js static export"
npm ci
npm run build
if (-not (Test-Path "./out")) { throw "Build output ./out missing" }

Write-Host "==> Fetch deployment token (not printed)"
$token = az staticwebapp secrets list `
  --name $StaticWebAppName `
  --resource-group $ResourceGroup `
  --subscription $SubscriptionId `
  --query "properties.apiKey" -o tsv
if (-not $token) { throw "Deployment token missing for $StaticWebAppName" }

Write-Host "==> Deploy via SWA CLI"
npx --yes @azure/static-web-apps-cli@latest deploy ./out `
  --deployment-token $token `
  --env production

Write-Host "==> Verify"
az staticwebapp show --name $StaticWebAppName --resource-group $ResourceGroup `
  --query "{name:name, defaultHostname:defaultHostname, customDomains:customDomains}" -o json
curl.exe -sI "https://white-ground-0f7456110.7.azurestaticapps.net" | Select-Object -First 8
Write-Host "DONE"
