document.addEventListener("DOMContentLoaded", function () {
  // Petición AJAX para obtener el JSON generado por PHP
  fetch("../EcoScript/search.php")
    .then((response) => response.json())
    .then((data) => cargarArchivosPHP(data))
    .catch((error) => console.error("Error al cargar el JSON:", error));

  // Función para cargar archivos PHP de forma secuencial
  function cargarArchivosPHP(archivos) {
    archivos.forEach((archivo, indice) => {
      fetch(archivo)
        .then((response) => response.text())
        .then((html) => {
          var nuevoDiv = document.createElement("div");
          nuevoDiv.className = "Script_php";
          nuevoDiv.id = "archivo_php_" + indice;
          nuevoDiv.innerHTML = html;
          document.getElementById("contenidoPHP").appendChild(nuevoDiv);
        })
        .catch((error) =>
          console.error("Error al cargar el archivo PHP:", error)
        );
    });
  }
});
