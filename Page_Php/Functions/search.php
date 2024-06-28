<?php

$carpeta_php = "../php";
$rutas_archivos_php = array();

// Escanea la carpeta y obtiene el contenido
$contenido_carpeta = scandir($carpeta_php);

// Filtra los archivos PHP y obtiene sus rutas
foreach ($contenido_carpeta as $archivo) {
  if (pathinfo($archivo, PATHINFO_EXTENSION) === 'php') {
    $ruta_archivo = $carpeta_php . DIRECTORY_SEPARATOR . $archivo;
    $rutas_archivos_php[] = $ruta_archivo;
  }
}

header('Content-Type: application/json');

// Para archivos JavaScript
header('Content-Type: application/javascript; charset=utf-8');

// Para archivos CSS
header('Content-Type: text/css; charset=utf-8');


// print_r($rutas_archivos_php);
// Imprime el contenido como un array en formato JSON
echo json_encode($rutas_archivos_php);
