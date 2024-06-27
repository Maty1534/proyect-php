<?php
$response = [];

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $email = $_POST['email'];
  $password = $_POST['password'];

  // Añadir depuración
  error_log("Email recibido: $email");
  error_log("Password recibido: $password");

  // Aceptar cualquier combinación de correo electrónico y contraseña
  $response['status'] = 'success';
  $response['message'] = 'Login exitoso';
  $response['email'] = $email;  // Devolver el email
  $response['password'] = $password;  // Devolver la contraseña
} else {
  $response['status'] = 'error';
  $response['message'] = 'Método no permitido';
}

header('Content-Type: application/json');
echo json_encode($response);
