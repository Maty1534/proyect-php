<?php
echo "<h1>Tercer trabajo de ejercicios</h1>";

// Crear una variable llamada n, asignarle un valor numérico y validar si es un número
// mayor o igual a 10 o menor a 2. Si el número es mayor o igual a 10 o menor a 2, imprimir un
// mensaje diciendo "El número ingresado es mayor o igual a 10 o menor a 2". En caso
// contrario, mostrar un mensaje diciendo que "El número ingresado no pudo ser validado".
echo '<h2>Primera act.</h2>';
$n = rand(-3, 15);
if (10 <= $n || $n < 2) {
  echo '<p>El numero ingresado es mayor o igual a 10 o menor a 2</p>';
} else {
  echo '<p>El numero ingresado no pudo ser validado</p>';
}
echo '<p>El numero es: ' . $n . '</p>';

// Crear dos variables, una con el nombre numero1 y otra con el nombre numero2, y
// asignarles dos valores numéricos. Si numero1 es mayor a numero2, imprimir la suma y la
// resta. Si numero2 es mayor a numero1, mostrar por pantalla la multiplicación, la división
// entera y el resto. Si numero1 y numero2 son iguales, imprimir el mensaje "Los números
// ingresados son iguales".
echo '<h2>Segunda act.</h2>';
$numero1 = rand(0, 10);
$numero2 = rand(0, 10);

echo '<p>Numero 1 = ' . $numero1 . '</br>';
echo 'Numero 2 = ' . $numero2 . '</p>';


if ($numero2 < $numero1) {
  echo '<p>La suma es: ' . ($numero1 + $numero2) . '</p>';
  echo '<p>La resta es: ' . ($numero1 - $numero2) . '</p>';
} elseif ($numero2 > $numero1) {
  echo '<p>La multiplicación es: ' . ($numero1 * $numero2) . '</p>';
  if ($numero1 != 0) {
    echo '<p>La division es: ' . ($numero2 / $numero1) . '</br>';
    echo 'El resto es: ' . ($numero2 % $numero1) . '</p>';
  }
} else {
  echo '<p>Los números ingresados son iguales</p>';
}

// DESAFÍO! Mediante estructuras de repetición, realizar los siguientes ejercicios
// (investigar while o for):
// a) Mostrar los números del 1 al 9.
// b) Mostrar los números del 9 al 1
echo '<h2>Tercera act.</h2>';
echo '<p>Estructura de repetición A (for) </p>';
for ($a = 1; $a <= 9; $a++) {
  if ($a == 9) {
    echo $a;
  } else {
    echo $a . ' - ';
  }
}

echo '<p>Estructura de repetición B (while) </p>';
$b = 9;
while ($b > 0) {
  if ($b == 1) {
    echo $b;
  } else {
    echo $b . ' - ';
  }
  $b--;
}
