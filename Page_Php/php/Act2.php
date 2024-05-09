<?php
echo "<h1>Segundo trabajo de ejercicios</h1>";
// Realizar la transformación de grados Celsius a 
// Fahrenheit para el Valor 20°C y luego lo imprima por pantalla.
echo '<h1>Primera Act.</h1>';
$num_a = rand(-10, 40);

echo '<p>El numero utilizado es: ' . $num_a . " (el rango del numero es de -10 a 40)</p>";
$fahrenheit = ($num_a * 1.8) + 32;
$celsius = ($fahrenheit - 32) / 1.8;

echo "<br> El numero utilizado se lo convertirá a grados Celsius y Fahrenheit";
echo "<br> Fahrenheit: " . $fahrenheit . " °F";
echo "<br> Celsius: " . $celsius . " °C";

// Implementar el código que permita:
// - Calcular e imprimir el perímetro y el área de un rectángulo con base de 18cm y
// altura 12cm.
// - Calcular e imprimir el perímetro y el área de un círculo dado que su radio es de
// 30cm.
echo '<h1>Segunda Act.</h1>';
$base = 18;
$altura = 12;
$perímetro = 2 * ($base + $altura);
$area = $base * $altura;

echo "<p> Tenemos un rectángulo con base de " . $base . "cm y altura de " . $altura . "cm.</p>";
echo "<p>El perímetro es: " . $perímetro . "cm.</p>";
echo "<p>El area es: " . $area . "cm&sup2.</p> <br>";

$radio = 30;
$perímetro_r = pi() * ($radio * 2);
$area_r = pi() * ($radio ** 2);

echo "<p> Tenemos un circulo con radio de " . $radio . "cm.</p>";
echo "<p>El perímetro es: " . number_format($perímetro_r, 2) . "cm.</p>";
echo "<p>El area es: " . number_format($area_r, 2) . "cm&sup2.</p>";

// Investigar Estructuras de Control en PHP. DESAFÍO: Crear un variable llamada n,
// asignarle un valor numérico y validar si es un número positivo. Si es un número positivo,
// imprimir un mensaje diciendo "El número ingresado es un número positivo". En caso
// contrario, no mostrar nada.

$n = rand(-50, 50);
if ($n >= 0) {
  echo '<h1>Tercera Act.</h1>';
  echo "<p>El número " . $n . ", es un número positivo. </p>";
}

// DESAFÍO: Crear una variable llamada n, asignarle un valor numérico y validar si es un
// número mayor a 1 y menor a 10. Si el número es mayor a 1 y menor a 10, imprimir un
// mensaje diciendo "El número ingresado es mayor a 1 y menor a 10". En caso contrario, no
// mostrar nada.
$max = 10;
$min = 1;
$n2 = rand(-4, 14);
if ($n2 > $min && $max > $n2) {
  echo '<h1>Cuarta Act.</h1>';
  echo '<p>El número ' . $n2 . ', es mayor a ' . $min . ' y menor a ' . $max . '</p>';
}
