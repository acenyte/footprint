# Scan tracked assets and find candidates not referenced by HTML/CSS/JS/PHP/JSON files
$tracked = Get-Content tracked_files.txt
$searchFiles = Get-Content search_files.txt

function FindUnref($list, $exts) {
    $unref = @()
    foreach ($f in $list) {
        $ext = [IO.Path]::GetExtension($f).ToLower()
        if ($exts -notcontains $ext) { continue }
        $name = Split-Path $f -Leaf
        if (-not (Select-String -Path $searchFiles -Pattern $name -SimpleMatch -Quiet -ErrorAction SilentlyContinue)) {
            $unref += $f
        }
    }
    return $unref
}

$images = FindUnref $tracked @('.jpg','.jpeg','.png','.gif','.svg','.webp')
$images | Out-File images_unreferenced_tracked.txt -Encoding utf8
Write-Output ("images_unreferenced: " + $images.Count)

$css = FindUnref $tracked @('.css')
$css | Out-File css_unreferenced_tracked.txt -Encoding utf8
Write-Output ("css_unreferenced: " + $css.Count)

$js = FindUnref $tracked @('.js')
$js | Out-File js_unreferenced_tracked.txt -Encoding utf8
Write-Output ("js_unreferenced: " + $js.Count)

$fonts = FindUnref $tracked @('.woff','.woff2','.ttf','.eot','.otf','.svg')
$fonts | Out-File fonts_unreferenced_tracked.txt -Encoding utf8
Write-Output ("fonts_unreferenced: " + $fonts.Count)

$videos = FindUnref $tracked @('.mp4','.webm','.ogv','.mov')
$videos | Out-File videos_unreferenced_tracked.txt -Encoding utf8
Write-Output ("videos_unreferenced: " + $videos.Count)
