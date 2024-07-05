<?php
$response = array();
// $response1 = array();
// $response2 = array();
// $response3 = array();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $lado = $_POST['lado'] ?? null;
  $palabra = $_POST['palabra'] ?? null;
  $mesNumber = $_POST['mesNumber'] ?? null;

  error_log("Lado del cuadrado: $lado");

  if (!empty($lado)) {
    $response1 = verificacionLados($lado);
  } else {
    $response1 = array();
  }
  if (!empty($palabra)) {
    $response2 = verificacionPalabra($palabra);
  } else {
    $response2 = array();
  }
  if (!empty($mesNumber)) {
    $response3 = verificacionMes($mesNumber);
  } else {
    $response3 = array();
  }
  $response = array_merge($response1, $response2, $response3);
  if (empty($response)) {
    $response = array(
      'status' => 'error',
      'message' => 'El dato no fue ingresado',
    );
  } else {
    $response = array_merge($response, exito($response));
  }
} else {
  $response = array(
    'status' => 'error',
    'message' => 'Dato invalido',
  );
}

// Zona de verificaciones
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
  if (empty($var)) {
    return array(
      'status' => 'error',
      'message' => 'La palabra no puede estar vacía',
    );
  }
  return array_merge(array(
    'palabra' => $var,
    'mayuscula' => mayuscula($var),
    'minuscula' => minuscula($var),
  ), palindromo($var));
}

function verificacionMes($var)
{
  if (is_numeric($var)) {
    switch ($var) {
      case 1:
        $mes = 'Enero';
        $mesMensaje = "Este mes si tiene 31 días";
        break;
      case 2:
        $mes = 'Febrero';
        $mesMensaje = "Este mes no llega a los 30 o 31 días";
        break;
      case 3:
        $mes = 'Marzo';
        $mesMensaje = "Este mes si tiene 31 días";
        break;
      case 4:
        $mes = 'Abril';
        $mesMensaje = "Este mes si tiene 30 días";
        break;
      case 5:
        $mes = 'Mayo';
        $mesMensaje = "Este mes si tiene 31 días";
        break;
      case 6:
        $mes = 'Junio';
        $mesMensaje = "Este mes si tiene 30 días";
        break;
      case 7:
        $mes = 'Julio';
        $mesMensaje = "Este mes si tiene 31 días";
        break;
      case 8:
        $mes = 'Agosto';
        $mesMensaje = "Este mes si tiene 31 días";
        break;
      case 9:
        $mes = 'Septiembre';
        $mesMensaje = "Este mes si tiene 30 días";
        break;
      case 10:
        $mes = 'Octubre';
        $mesMensaje = "Este mes si tiene 31 días";
        break;
      case 11:
        $mes = 'Noviembre';
        $mesMensaje = "Este mes si tiene 30 días";
        break;
      case 12:
        $mes = 'Diciembre';
        $mesMensaje = "Este mes si tiene 31 días";
        break;
      default: // Caso erróneo
        $mes = 'Error';
        $mesMensaje = "Código de mes invalido";
        break;
    }
  };
  return array(
    'mesNumber' => $var,
    'mes' => $mes,
    'mesMensaje' => $mesMensaje,
  );
}

function exito($array)
{
  return array_merge($array, array(
    'status' => 'success',
    'message' => 'Cálculo realizado',
  ));
}

// Funciones para calcular el cuadrado
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

// Funciones para modificar las palabras
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

function palindromo($varP)
{
  $a = 0;
  $varP = str_split($varP);
  $arrayT = array();
  for ($i = count($varP) - 1; $i >= 0; $i--) {
    $arrayT[$a] = $varP[$i];
    $a++;
  }
  $arrayT = implode($arrayT);
  $varP = implode($varP);
  $palabraOriginal = $varP;
  $palabraReversa = $arrayT;
  $varP = minuscula($varP);
  $varP = str_replace(" ", "", $varP);
  $arrayT = minuscula($arrayT);
  $arrayT = str_replace(" ", "", $arrayT);
  if ($arrayT == $varP) {
    return array(
      'resultadoPalabra' => 'Si, es un palindromo',
      'palabraOriginal' => $palabraOriginal,
      'palabraReversa' => $palabraReversa,
    );
  } else {
    return array(
      'resultadoPalabra' => 'No, no es un palindromo',
      'palabraOriginal' => $palabraOriginal,
      'palabraReversa' => $palabraReversa,
    );
  }
}

header('Content-Type: application/json; charset=utf-8');
echo json_encode($response);
