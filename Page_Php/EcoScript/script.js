document.addEventListener("DOMContentLoaded", function () {
  // Petición AJAX para obtener el JSON generado por PHP
  fetch("../EcoScript/search.php")
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
            var nuevoDiv = document.createElement("div");
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
});
