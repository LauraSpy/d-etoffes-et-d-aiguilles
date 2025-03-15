<?php
$imagePath = $_GET['path'];
$allowedDir = '/ressources/images/';

if (strpos($imagePath, $allowedDir) === 0 && file_exists($imagePath)) {
    $imageInfo = getimagesize($imagePath);
    header("Content-type: " . $imageInfo['mime']);
    readfile($imagePath);
} else {
    header("HTTP/1.0 403 Forbidden");
    echo "Accès refusé";
}
