document.addEventListener("DOMContentLoaded", function () {
  // Petición de cod para carga dinámica de formularios.
  const enlaces = document.querySelectorAll("a[data-code]");
  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", function (e) {
      e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
      const cod = this.getAttribute("data-code");
      cargarFormulario(cod);
    });
  });

  function cargarFormulario(cod) {
    const estado = document.getElementById("estado");
    estado.innerText = "Cargando..."; // Mostrar estado de carga

    fetch("../php/index.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Requested-With": "XMLHttpRequest",
      },
      body: `cod=${cod}`,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar el formulario");
        }
        return response.text();
      })
      .then((html) => {
        document.getElementById("formulario").innerHTML = html;
        estado.innerText = ""; // Limpiar estado después de la carga exitosa
        initializeAllForm();
      })
      .catch((error) => {
        document.getElementById("formulario").innerHTML = "";
        estado.innerText = "Error: " + error.message; // Mostrar mensaje de error
      });
  }

  // Inicializar formulario de login y de la act6
  function initializeAllForm() {
    let loginForm = document.getElementById("loginform");
    let estado1 = document.getElementById("estado1");
    let formularioAlumno = document.getElementById("formularioAlumno");

    if (loginForm) {
      loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // datos del loginform
        let formDataLogin = new FormData(loginForm);
        let email = document.getElementById("logemail").value;
        let password = document.getElementById("logpass").value;

        fetch("Functions/login.php", {
          method: "POST",
          body: formDataLogin,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.status === "success") {
              // Almacenar el usuario y la contraseña en localStorage
              localStorage.setItem("email", email);
              localStorage.setItem("password", password);
              // Recargar la página
              window.location.reload();
            } else {
              estado1.innerHTML = "Error: " + data.message;
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        console.log("Email:", email);
        console.log("Password:", password);
      });
    }

    if (formularioAlumno) {
      formularioAlumno.addEventListener("submit", function (event) {
        event.preventDefault();

        // datos del formulario de notas de alumnos
        let formDataAlum = new FormData(formularioAlumno);
        let nota = document.getElementById("nota").value;
        let nombre = document.getElementById("nombre").value;

        fetch("../Functions/notas.php", {
          method: "POST",
          body: formDataAlum,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.status === "success") {
              // Obtener el array de alumnos almacenado en localStorage
              let alumnos = JSON.parse(localStorage.getItem("alumnos")) || [];
              // Crear un nuevo objeto alumno con id, nombre y nota
              let listaAlumnos = {
                id: alumnos.length + 1,
                nombre: nombre,
                nota: nota,
                calificacion: data.calificacion,
              };

              // Añadir el nuevo alumno al array
              alumnos.push(listaAlumnos);
              // Almacenar el array actualizado en localStorage
              localStorage.setItem("alumnos", JSON.stringify(alumnos));

              window.location.reload();
            } else {
              estado1.innerHTML = "Error: " + data.message;
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        console.log("Nombre:", nombre);
        console.log("Nota:", nota);
      });
    }
  }

  function displayUserInfo() {
    // Mostrar datos de los dos formularios (notas y login)
    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");

    let alumnos = JSON.parse(localStorage.getItem("alumnos")) || [];

    let estado1 = document.getElementById("estado1");
    let userInfo = document.getElementById("userInfo");
    let alumInfo = document.getElementById("alumInfo");
    let textExito = "Cargado Exitoso <br /> <br />";

    if (storedEmail && storedPassword) {
      if (userInfo) {
        userInfo.innerHTML = `Email: ${storedEmail}<br>Contraseña: ${storedPassword}`;
        estado1.innerHTML = textExito;
      }
    }

    if (alumnos && alumnos.length > 0) {
      if (alumInfo) {
        if (!storedEmail) {
          userInfo.innerHTML = `<br /> <br />`;
        }
        alumInfo.innerHTML = "<h3>Notas de Alumnos</h3>";
        alumnos.forEach((alumno) => {
          alumInfo.innerHTML += `ID: ${alumno.id}<br>Alumno: ${alumno.nombre}<br>Nota: ${alumno.nota}<br>Calificación: ${alumno.calificacion}<br><br>`;
        });
        if (storedEmail && storedNombre) {
          alumInfo.innerHTML = "<br />";
        }
        estado1.innerHTML = textExito;
      }
    }
  }

  displayUserInfo();

  // Petición AJAX para obtener el JSON generado por PHP
  fetch("../Functions/search.php")
    .then((response) => response.json())
    .then((data) => cargarArchivosPHPSecuencialmente(data)) // Llama a la función secuencial
    .catch((error) => console.error("Error al cargar el JSON:", error));

  // Función para cargar archivos PHP de forma secuencial
  function cargarArchivosPHPSecuencialmente(archivos) {
    // Función auxiliar para cargar un archivo PHP y continuar con el siguiente
    function cargarArchivo(indice) {
      if (indice < archivos.length) {
        fetch(archivos[indice])
          .then((response) => response.text())
          .then((html) => {
            let nuevoDiv = document.createElement("div");
            nuevoDiv.className = "Script_php";
            nuevoDiv.id = "archivo_php_" + indice;
            nuevoDiv.innerHTML = html;
            document.getElementById("contenidoPHP").appendChild(nuevoDiv);
            cargarArchivo(indice + 1); // Carga el siguiente archivo de forma recursiva
          })
          .catch((error) =>
            console.error("Error al cargar el archivo PHP:", error)
          );
      }
    }

    // Inicia la carga del primer archivo PHP. Modificar para ver un solo archivo.
    cargarArchivo(5);
  }

  // Manejar el clic en el botón para limpiar localStorage
  const clearButton = document.getElementById("clearStorage");
  if (clearButton) {
    clearButton.addEventListener("click", function () {
      localStorage.clear();
      window.location.reload();
    });
  }
});
