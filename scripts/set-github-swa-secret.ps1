# Sets the GitHub Actions secret for Azure SWA "meducweb" (white-ground).
# Prerequisites: az login, GitHub CLI (gh) authenticated.
# Usage: pwsh ./scripts/set-github-swa-secret.ps1

$ErrorActionPreference = "Stop"

$SubscriptionId = "dac4422e-6510-4ecc-b55e-0d6722cef2dd"
$ResourceGroup = "meducaht-rg"
$StaticWebAppName = "meducweb"
$Repo = "drjosuengenyi/meduc-website"
$SecretName = "AZURE_STATIC_WEB_APPS_API_TOKEN_WHITE_GROUND_0F7456110"

az account set --subscription $SubscriptionId
$token = az staticwebapp secrets list `
  --name $StaticWebAppName `
  --resource-group $ResourceGroup `
  --query "properties.apiKey" -o tsv

if (-not $token) { throw "Could not read SWA deployment token for $StaticWebAppName" }

gh secret set $SecretName --body $token --repo $Repo
Write-Host "OK: secret $SecretName set on $Repo"
Write-Host "Re-run workflow: gh workflow run `"Azure Static Web Apps CI/CD (meducweb)`" --repo $Repo"
