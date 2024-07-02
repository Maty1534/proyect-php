<?php
// Primer if para no mostrar lo de adentro luego de la indexación con ajax
if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
  $cod = $_REQUEST['cod'] ?? '';

  switch ($cod) {
    case 0:
      echo '<div id="formulario">Seleccione un formulario.</div>';
      break;
    case 1:
      readfile('../Components/form_login.html');
      break;
    case 2:
      readfile('../Components/form_creacion_venta.html');
      break;
    case 3:
      readfile('../Components/form_edicion_venta.html');
      break;
    case 4:
      readfile('../Components/form_notas.html');
      break;
    case 5:
      readfile('../Components/form_perimetro.html');
      break;
    case 6:
      readfile('../Components/form_palabra.html');
      break;
    default:
      echo 'Código no válido';
      break;
  }
} else {
  // Si no es una solicitud AJAX, no mostrar nada
  echo '';
}
