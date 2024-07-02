<?php
header('Content-Type: application/json; charset=utf-8');

$response = array();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $lado = $_POST['lado'] ?? null;
  $palabra = $_POST['palabra'] ?? null;
  $band = 0;

  error_log("Lado del cuadrado: $lado");

  if (!empty($lado)) {
    $band = $band + 1;
  }
  if (!empty($palabra)) {
    $band = $band + 2;
  }

  switch ($band) {
    case 0:
      $response = array(
        'status' => 'error',
        'message' => 'El dato del lado no fue ingresado',
      );
      break;
    case 1:
      $response = verificacionLados($lado);
      $response = exito($response);
      break;
    case 2:
      $response = verificacionPalabra($palabra);
      $response = exito($response);
      break;
    case 3:
      $response = verificacionPalabra($palabra);
      $responseLados = verificacionLados($lado);
      $response = array_merge($response, $responseLados);
      $response = exito($response);
      break;
  }
} else {
  $response['status'] = 'error';
  $response['message'] = 'Dato invalido';
}

function verificacionLados($var)
{
  if (!is_numeric($var)) {
    return array(
      'status' => 'error',
      'message' => 'El dato del lado no es numérico',
    );
  } else {
    return array(
      'lado' => $var,
      'perimetro' => cuadradoLados($var),
      'superficie' => superficieLados($var),
    );
  }
}

function verificacionPalabra($var)
{
  return array(
    'palabra' => $var,
    'mayuscula' => mayuscula($var),
    'minuscula' => minuscula($var),
  );
}

function exito($array)
{
  return array_merge($array, array(
    'status' => 'success',
    'message' => 'Cálculo realizado',
  ));
}

function cuadradoLados($cuadrado)
{
  $resultado = 4 * $cuadrado;
  return $resultado;
}

function superficieLados($cuadrado)
{
  $resultado = $cuadrado ** 2;
  return $resultado;
}

function mayuscula($mayuscula)
{
  $mayuscula = strtoupper($mayuscula);
  return $mayuscula;
}

function minuscula($minuscula)
{
  $minuscula = strtolower($minuscula);
  return $minuscula;
}

// Para archivos JavaScript
header('Content-Type: application/javascript; charset=utf-8');

// Para archivos CSS
header('Content-Type: text/css; charset=utf-8');

echo json_encode($response);
