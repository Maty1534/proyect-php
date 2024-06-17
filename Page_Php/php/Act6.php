<?php

function botonV()
{
  echo "<button onclick=window.location.href='../'>Volver</button>";
}

if (isset($_POST['email']) && isset($_POST['password'])) {
  $email = $_POST['email'];
  $password = $_POST['password'];
  if (!empty($email) && !empty($password)) {
    echo '<h2>Hola, su correo es: ' . htmlspecialchars($email) . ' </h2>';
    echo '<h2>Su contraseña es: ' . htmlspecialchars($password) . ' </h2>';
    botonV();
  } else {
    echo 'El correo electrónico esta vació.';
  }
}

/* 1. Obtener y mostrar el resultado del factorial de 8 (investigar que es el factorial y no
utilizar gmp_fact, solamente estructuras de repetición).*/



/* 2. Se pide ingresar por un formulario el nombre de un alumno y su nota numérica.
Mostrar la calificación resultante según la nota ingresada con el nombre del alumno:
0-2: Muy deficiente
3-5: Insuficiente
6-7: Bien
8-9: Notable
10: Sobresaliente
3. Al ejercicio anterior, agregarle validaciones con php, para indicar que los datos
fueron ingresados incorrectamente:
- Cuando el alumno no fue ingresado.
- Cuando la nota no fue ingresada.
- Cuando la nota no es un número.
- Cuando la nota no es un número entre el 0 y el 10.
Mostrar un mensaje diferente para cada situación. Tip: Investigar la función isset y
is_numeric */
