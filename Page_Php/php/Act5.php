<?php
// a) Almacenar en un array los 10 primeros números pares y mostrarlos en
// pantalla uno debajo del otro.

echo "<h1>Quinto trabajo de ejercicios</h1>";
echo '<h2>Primera act.</h2>';
$array = array();
$band = false;
$j = 0;
$i = 0;

while ($j < 10) {
  if (($i % 2) == 0) {
    $array[] = $i;
    $j++;
  }
  $i++;
}

print_r($array);

echo '<p>Los valores del array son: ';
for ($i = 0; $i < count($array); $i++) {
  echo $array[$i];
  if ($i < (count($array) - 1))
    echo ' - ';
}
echo '</p>';

// Crear un array asociativo e introducir los siguientes valores:
// Nombre: Pedro
// Apellido: Torres
// Dirección: Av. Mayo 3703
// Teléfono: 1122334455
echo '<h2>Segunda act.</h2>';
$personaArray = array(
  'Nombre' => 'Pedro',
  'Apellido' => 'Torres',
  'Dirección' => 'Av. Mayo 3703',
  'Teléfono' => '1122334455'
  // El numero de teléfono es un string debido a que no se puede ser operado con aritmética, 
  // como también sucede con aquellos que no se modifican, como los DNI, al menos asi tengo entendido.
);
echo '<p>Array asociativo:</p>';
foreach ($personaArray as $clave => $valor) {
  echo  $clave . ' = ' . $valor . '<br>';
}
unset($valor);

// Crear un array introduciendo las ciudades: Madrid, Barcelona, Londres, New
// York, Los Ángeles y Chicago. A continuación, mostrar el contenido del array
// con la siguiente estructura: "La ciudad con el índice 0 tiene el nombre
// Madrid".
echo '<h2>Tercera act.</h2>';
$ciudadArray = array('Madrid', 'Barcelona', 'Londres', 'New York', 'Los Ángeles', 'Chicago');
foreach ($ciudadArray as $indice => $valor) {
  echo '<p>La ciudad con el indice ' . $indice . ' tiene el nombre ' . $valor . '</p>';
}
unset($valor);

// Repite el ejercicio anterior pero ahora con un array asociativo con los índices
// MD para el valor Madrid, BCL para Barcelona, LD para Londres, NY para
// New York, LA para Los Ángeles y CCG para Chicago. Mostrarlo de la
// siguiente manera: "El índice de Madrid es MD".
echo '<h2>Cuarta act.</h2>';
$ciudadArray_Indice = array(
  'MD' => 'Madrid',
  'BCL' => 'Barcelona',
  'LD' => 'Londres',
  'NY' => 'New York',
  'LA' => 'Los Ángeles',
  'CCG' => 'Chicago'
);
foreach ($ciudadArray_Indice as $indice => $valor) {
  echo '<p>El índice de ' . $valor . ' es ' . $indice . '</p>';
}
