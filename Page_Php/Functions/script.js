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
        initializeLoginForm(); // Re-initialize login form after loading new content
      })
      .catch((error) => {
        document.getElementById("formulario").innerHTML = "";
        estado.innerText = "Error: " + error.message; // Mostrar mensaje de error
      });
  }

  // Inicializar formulario de login
  function initializeLoginForm() {
    let loginForm = document.getElementById("loginform");
    let estado1 = document.getElementById("estado1");

    if (loginForm) {
      loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        let formData = new FormData(loginForm);
        let email = document.getElementById("logemail").value;
        let password = document.getElementById("logpass").value;

        console.log("Email:", email);
        console.log("Password:", password);

        fetch("Functions/login.php", {
          method: "POST",
          body: formData,
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
      });
    }

    // Mostrar usuario y contraseña si están almacenados en localStorage
    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");

    if (storedEmail && storedPassword) {
      let userInfo = document.getElementById("userInfo");
      if (userInfo) {
        userInfo.innerHTML = `Email: ${storedEmail}<br>Contraseña: ${storedPassword}`;
      }
      if (estado1) {
        estado1.innerHTML = "Login exitoso";
      }
    }
  }

  function displayUserInfo() {
    initializeLoginForm();
    // Datos del login Form
    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");

    if (storedEmail && storedPassword) {
      let userInfo = document.getElementById("userInfo");
      let estado1 = document.getElementById("estado1");
      if (userInfo) {
        userInfo.innerHTML = `Email: ${storedEmail}<br>Contraseña: ${storedPassword}`;
      }
      if (estado1) {
        estado1.innerHTML = "Login exitoso";
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
