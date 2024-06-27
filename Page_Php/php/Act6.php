<?php

/* 1. Obtener y mostrar el resultado del factorial de 8 (investigar que es el factorial y no
utilizar gmp_fact, solamente estructuras de repetición).*/

echo '<h1>Sexto trabajo de ejercicios</h1>';
echo '<h2>Primera act.</h2>';

function factorial($num)
{
  for ($i = $num; $i >= 3; $i--) {
    $num = $num * ($i - 1);
    echo $num . '<br>';
  }
  return $num;
}

echo '<p>Total: ' . factorial(8) . '</p>';
