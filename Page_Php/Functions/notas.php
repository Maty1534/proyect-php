<?php
/* 2. Se pide ingresar por un formulario el nombre de un alumno y su nota numérica.
Mostrar la calificación resultante según la nota ingresada con el nombre del alumno:
0-2: Muy deficiente
3-5: Insuficiente
6-7: Bien
8-9: Notable
10: Sobresaliente */
$response = array();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Obtener los datos del formulario
  $nombre = isset($_POST['nombre']) ? htmlspecialchars(trim($_POST['nombre'])) : '';
  $nota = isset($_POST['nota']) ? intval($_POST['nota']) : -1;

  if ($nombre === '' || $nota < 0 || $nota > 10) {
    $response = array(
      'status' => 'error',
      'message' => 'Datos inválidos',
    );
  } else {
    // Determinar la calificación según la nota
    if ($nota >= 0 && $nota <= 2) {
      $calificacion = "Muy deficiente";
    } elseif ($nota >= 3 && $nota <= 5) {
      $calificacion = "Insuficiente";
    } elseif ($nota >= 6 && $nota <= 7) {
      $calificacion = "Bien";
    } elseif ($nota >= 8 && $nota <= 9) {
      $calificacion = "Notable";
    } elseif ($nota == 10) {
      $calificacion = "Sobresaliente";
    } else {
      $calificacion = "Nota no válida";
    }

    //Depuración. 
    error_log("Nombre recibido: $nombre");
    error_log("Nota recibida: $nota");
    error_log("Calificación determinada: $calificacion");

    // response es respuesta para el ajax
    $response = array(
      'status' => 'success',
      'message' => 'Datos recibidos correctamente',
      'nombre' => $nombre,
      'nota' => $nota,
      'calificacion' => $calificacion,
    );
  }
} else {
  $response = array(
    'status' => 'error',
    'message' => 'Método no permitido',
  );
}

header('Content-Type: application/json');
echo json_encode($response);
