<?php
echo "<h1>Primer trabajo de ejercicios</h1>";
// Impreso por pantalla
echo "Hola mundo", "<br>", "<br>";

// Impreso por variable
$a = "Hola mundo";
print $a;
echo "<br>", "<br>";

// Dos variables enteras junto a sus operaciones matemáticas
$num_a = rand(-10, 10);
$num_b = rand(-10, 10);

echo "<h3>Los números son: ", "A = ", $num_a, ", B = ", $num_b, "</h3>";
$suma = $num_a + $num_b;
echo "La suma dio el siguiente resultado: ", $suma;
$resta = $num_a - $num_b;
echo "<br>", "La resta dio el siguiente resultado: ", $resta;
$multi = $num_a * $num_b;
echo "<br>", "La multiplicación dio el siguiente resultado: ", $multi;

$answer = "La division dio el siguiente resultado: ";
$resto = fmod($num_a, $num_b);
if ($num_a >= $num_b && $num_b != 0 && $resto == 0) {
  $div = $num_a / $num_b;
  echo "<br>", $answer, $div;
} else {
  if ($num_a == 0 || $num_b == 0) {
    echo "<br>", $answer, "No existe solución";
  } else {
    if ($num_b < 0) {
      $num_b = $num_b * -1;
      $num_a = $num_a * -1;
    }
    echo "<br>", $answer, $num_a, "/", $num_b;
  }
}
