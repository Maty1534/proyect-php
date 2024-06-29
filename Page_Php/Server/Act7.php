<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $lado = $_POST['lado'];

  error_log("Lado del cuadrado: $lado");

  if (empty($lado)) {
    $response = array(
      'status' => 'error',
      'message' => 'El dato del lado no fue ingresado',
    );
  } elseif (!is_numeric($lado)) {
    $response = array(
      'status' => 'error',
      'message' => 'El dato del lado no es numérico',
    );
  } else {
    $response = array(
      'status' => 'success',
      'message' => 'Calculo realizado',
      'lado' => $lado,
      'perimetro' => cuadradoLados($lado),
      'superficie' => superficieLados($lado),
    );
  }
} else {
  $response['status'] = 'error';
  $response['message'] = 'Dato invalido';
}

function cuadradoLados($cuadrado)
{
  $resultado = 4 * $cuadrado;
  return $resultado;
}

function superficieLados ($cuadrado){
  $resultado = $cuadrado ** 2;
  return $resultado;
}

header('Content-Type: application/json');

// Para archivos JavaScript
header('Content-Type: application/javascript; charset=utf-8');

// Para archivos CSS
header('Content-Type: text/css; charset=utf-8');

echo json_encode($response);
