<?php
echo "<h1>Cuarto trabajo de ejercicios</h1>";
// a) Mostrar los números pares del 1 al 20. Utilizar estructuras de repetición.
// b) Mostrar los números impares del 1 al 20. Utilizar estructuras de repetición.
// c) Mostrar la suma de los números del 1 al 20. Utilizar estructuras de repetición.
// d) Mostrar la suma de los números pares del 1 al 20. Utilizar estructuras de
// repetición.
// e) Crear un array e introducir los siguientes valores: Pedro, Ana, 34 y 1. Mostrar
// el esquema del array con print_r().
// f) DESAFÍO! Sabiendo que la posición inicial de un array es 0, si el array tiene
// n elementos, cuál es la posición del último elemento?
echo '<h2>Primera act.</h2>';
echo '<p>Numero pares: ';
for ($i = 1; $i <= 20; $i++) {
  if (($i % 2) == 0) {
    echo $i;
    if ($i < 19)
      echo ' - ';
  }
}
echo '</p>';

echo '<h2>Segunda act.</h2>';
echo '<p>Numero impares: ';
for ($i = 1; $i <= 20; $i++) {
  if (($i % 2) == 1) {
    echo $i;
    if ($i < 19)
      echo ' - ';
  }
}
echo '</p>';

echo '<h2>Tercera act.</h2>';
$i = 1;
$j = 0;
echo '<p>Suma del 1 al 20: ';
while ($i <= 20) {
  $j = $j + $i;
  echo $i;
  if ($i < 20) {
    echo ' + ';
  }
  $i++;
}
echo '<p>Total: ' . $j . '</p>';

echo '<h2>Cuarta act.</h2>';
$i = 1;
$j = 0;
echo '<p>Suma del 1 al 20: ';
while ($i <= 20) {
  if (($i % 2) == 0) {
    $j = $j + $i;
    echo $i;
    if ($i < 20) {
      echo ' + ';
    }
  }
  $i++;
}
echo '<p>Total: ' . $j . '</p>';

echo '<h2>Quinta act.</h2>';
$caja = array('Pedro', 'Ana', 34, 1);
print_r($caja);

echo '<h2>Sexta act.</h2>';
echo '<p>La ultima posición del anterior array es: ' . (count($caja) - 1) . '</p>';

// Profe, opte por el count en la última actividad, pero creo que usted había 
// mencionado que se podía con estructura de repetición.