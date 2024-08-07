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

    fetch("../Server/index.php", {
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
    let ladoPerimetro = document.getElementById("perimetroForm");
    let formularioPalabra = document.getElementById("formularioPalabra");
    let formularioMes = document.getElementById("formularioMes");

    if (loginForm) {
      loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // datos del loginform
        let formDataLogin = new FormData(loginForm);
        let email = document.getElementById("logemail").value;
        let password = document.getElementById("logpass").value;

        fetch("../Server/login.php", {
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

        fetch("../Server/notas.php", {
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
    if (ladoPerimetro) {
      ladoPerimetro.addEventListener("submit", function (event) {
        event.preventDefault();

        let ladoForm = new FormData(ladoPerimetro);
        let lado = document.getElementById("lado").value;

        fetch("../Server/Act7.php", {
          method: "POST",
          body: ladoForm,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.status === "success") {
              let listaLado = [
                {
                  lado: lado,
                  perimetro: data.perimetro,
                  superficie: data.superficie,
                },
              ];
              localStorage.setItem("calculoLado", JSON.stringify(listaLado));
              window.location.reload();
            } else {
              estado1.innerHTML = "Error: " + data.message;
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        console.log("Lado:", lado);
      });
    }

    if (formularioPalabra) {
      formularioPalabra.addEventListener("submit", function (event) {
        event.preventDefault();

        let formPalabra = new FormData(formularioPalabra);
        let palabra = document.getElementById("palabra").value;

        fetch("../Server/Act7.php", {
          method: "POST",
          body: formPalabra,
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("La respuesta del servidor no esta bien.");
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            if (data.status === "success") {
              let listPalabra = [
                {
                  palabra: palabra,
                  mayuscula: data.mayuscula,
                  minuscula: data.minuscula,
                  resultadoPalabra: data.resultadoPalabra,
                  palabraOriginal: data.palabraOriginal,
                  palabraReversa: data.palabraReversa,
                },
              ];
              localStorage.setItem("listPalabra", JSON.stringify(listPalabra));
              window.location.reload();
            } else {
              estado1.innerHTML = "Error: " + data.message;
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        console.log("Palabra:", palabra);
      });
    }

    if (formularioMes) {
      formularioMes.addEventListener("submit", function (event) {
        event.preventDefault();

        let mesForm = new FormData(formularioMes);
        let mesNumber = document.getElementById("mesNumber").value;

        fetch("../Server/Act7.php", {
          method: "POST",
          body: mesForm,
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.status === "success") {
              let listaMes = [
                {
                  mesNumber: mesNumber,
                  mes: data.mes,
                  mesMensaje: data.mesMensaje,
                },
              ];
              localStorage.setItem("listaMes", JSON.stringify(listaMes));
              window.location.reload();
            } else {
              estado1.innerHTML = "Error: " + data.message;
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        console.log("Mes:", mesNumber);
      });
    }
  }

  function displayUserInfo() {
    // Estado de la carga de información.
    let estado1 = document.getElementById("estado1");
    let textExito = "<p>Cargado Exitoso </p><br>";

    // Datos de los usuarios logeados.
    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");

    // Dato del formulario de alumnos para obtener calificaciones.
    let alumnos = JSON.parse(localStorage.getItem("alumnos")) || [];

    // Dato del formulario para calcular perímetro de un cuadrado.
    let calculoLado = JSON.parse(localStorage.getItem("calculoLado")) || [];

    // Palabra del formulario palabra
    let listPalabra = JSON.parse(localStorage.getItem("listPalabra"));

    // Variables para el formulario del mes
    let listaMes = JSON.parse(localStorage.getItem("listaMes")) || [];

    // Id de divs dentro del index.html para mostrar los datos en pantalla.
    let userInfo = document.getElementById("userInfo");
    let alumInfo = document.getElementById("alumInfo");
    let ladoInfo = document.getElementById("ladoInfo");
    let palabraInfo = document.getElementById("palabraInfo");
    let mesInfo = document.getElementById("mesInfo");

    if (storedEmail && storedPassword && userInfo) {
      userInfo.innerHTML = `<p>Email: ${storedEmail}<br>Contraseña: ${storedPassword}</p> <br>`;
      estado1.innerHTML = textExito;
    }

    if (alumnos && alumnos.length > 0 && alumInfo) {
      alumInfo.innerHTML = "<h3>Notas de Alumnos</h3>";
      alumnos.forEach((alumno) => {
        alumInfo.innerHTML += `<p>ID: ${alumno.id}<br>Alumno: ${alumno.nombre}<br>Nota: ${alumno.nota}<br>Calificación: ${alumno.calificacion}</p> <br>`;
      });
      if (storedEmail) {
        alumInfo.innerHTML = "<br />";
      }
      estado1.innerHTML = textExito;
    }

    if (calculoLado.length > 0) {
      ladoInfo.innerHTML = `<h3>Calculo del perímetro del cuadrado en CM</h3>
      <p>Lado del cuadrado: ${calculoLado[0].lado} cm<br>Perimetro: ${calculoLado[0].perimetro} cm<br>Superficie: ${calculoLado[0].superficie} cm²</p> <br>`;
    }

    if (listPalabra) {
      palabraInfo.innerHTML = `<h3>La palabra almacenada aplicando sus funciones</h3>
        <p>Palabra: ${listPalabra[0].palabra}<br>
        Mayúscula: ${listPalabra[0].mayuscula}<br>
        Minúscula: ${listPalabra[0].minuscula}<br>
        Resultado: ${listPalabra[0].resultadoPalabra}<br>
        Palabra Original: ${listPalabra[0].palabraOriginal}<br>
        Palabra Reversa: ${listPalabra[0].palabraReversa} <br><br></p>`;
    }

    if (listaMes.length > 0) {
      mesInfo.innerHTML = `<h3>El numero del mes escrito es: ${listaMes[0].mesNumber}</h3>
        <p>Mes: ${listaMes[0].mes}<br>Mensaje: ${listaMes[0].mesMensaje}</p> <br>`;
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
    cargarArchivo(0);
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
