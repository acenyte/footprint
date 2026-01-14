# permanently_delete_unreferenced.ps1
# Scans repository for files with no references in common source files and deletes them permanently.

# Config
$excludeNames = @('.gitignore','.gitattributes','README.md','LICENSE.txt','package.json','package-lock.json','bower.json','composer.json','php.ini','.user.ini','.htaccess')
$excludeDirs = @('.git','.github','node_modules','backup_unreferenced')
$searchFileTypes = @('*.html','*.htm','*.css','*.js','*.php','*.json','*.md','*.scss','*.less')
$considerExts = @('.jpg','.jpeg','.png','.gif','.svg','.webp','.css','.js','.ts','.php','.html','.htm','.json','.scss','.less','.md','.py','.rb','.java','.cs','.c','.cpp','.h','.woff','.woff2','.ttf','.eot','.otf','.mp4','.webm','.ogv','.mov','.map')

Write-Output "Scanning repository for unreferenced files..."
$allFiles = Get-ChildItem -Path . -Recurse -File | Where-Object {
    $p = $_.FullName
    $name = $_.Name
    $ext = $_.Extension.ToLower()
    # exclude control files and directories
    if ($excludeNames -contains $name) { return $false }
    foreach ($d in $excludeDirs) { if ($p -match "\\$d(\\|$)") { return $false } }
    if ($considerExts -notcontains $ext) { return $false }
    return $true
}

# Build search corpus (where references would appear)
$searchFiles = Get-ChildItem -Path . -Recurse -File -Include $searchFileTypes | Select-Object -ExpandProperty FullName

$candidates = @()
foreach ($f in $allFiles) {
    $name = $f.Name
    # skip macOS resource forks or other junk
    if ($name -like '._*') { continue }
    # If file is itself one of the search files, ignore (we only look for references in other files)
    $isSearchFile = $searchFiles -contains $f.FullName
    $searchTargets = $searchFiles
    if ($isSearchFile) { $searchTargets = $searchFiles | Where-Object { $_ -ne $f.FullName } }
    $found = $false
    if ($searchTargets.Count -gt 0) {
        try {
            $found = Select-String -Path $searchTargets -Pattern $name -SimpleMatch -Quiet -ErrorAction SilentlyContinue
        } catch {
            $found = $false
        }
    }
    if (-not $found) { $candidates += $f.FullName }
}

# Write candidates list
$candidates | Out-File unreferenced_candidates_all.txt -Encoding utf8
Write-Output ("Found candidates: " + $candidates.Count)
if ($candidates.Count -eq 0) { Write-Output "No unreferenced files found. Exiting."; exit 0 }

# Permanently delete candidates
$deleted = @()
$failed = @()
foreach ($p in $candidates) {
    try {
        if (Test-Path $p) {
            Remove-Item -LiteralPath $p -Force -Recurse -ErrorAction Stop
            $deleted += $p
            # also ensure git forgets it if tracked
            git rm --ignore-unmatch -- "$p" > $null 2>&1
        } else {
            $failed += $p
        }
    } catch {
        $failed += $p
    }
}

# Commit deletions if any tracked files were removed or git index changed
# git add -A to update index
try {
    git add -A > $null 2>&1
    $status = git status --porcelain
    if ($status) {
        git commit -m "chore(cleanup): permanently delete unreferenced files" > $null 2>&1
        git push > $null 2>&1
    }
} catch {
    # continue
}

# Log results
$deleted | Out-File deleted_unreferenced_permanent.txt -Encoding utf8
$failed | Out-File failed_unreferenced_permanent.txt -Encoding utf8
Write-Output ("Deleted: " + $deleted.Count)
Write-Output ("Failed: " + $failed.Count)
Write-Output "Done. See deleted_unreferenced_permanent.txt for the full list of deleted files."