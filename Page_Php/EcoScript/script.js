document.addEventListener("DOMContentLoaded", function () {
  // Petición AJAX para obtener el JSON generado por PHP
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var archivosPHP = JSON.parse(this.responseText); // Convierte el JSON a objeto JavaScript
      cargarArchivosPHP(archivosPHP, 0); // Inicia la carga de archivos PHP
    }
  };
  xhr.open("GET", "../EcoScript/search.php", true); // Cambia la ruta al archivo PHP
  xhr.send();

  // Función para cargar archivos PHP de forma secuencial
  function cargarArchivosPHP(archivos, indice) {
    if (indice < archivos.length) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", archivos[indice], true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // Crea un nuevo div para cada archivo PHP y agrega la clase "Script_php" y un ID único
          var nuevoDiv = document.createElement("div");
          nuevoDiv.className = "Script_php";
          nuevoDiv.id = "archivo_php_" + indice; // ID único basado en el índice del archivo
          nuevoDiv.innerHTML = xhr.responseText;

          // Agrega el nuevo div al elemento con ID "contenidoPHP"
          document.getElementById("contenidoPHP").appendChild(nuevoDiv);

          cargarArchivosPHP(archivos, indice + 1); // Carga el siguiente archivo
        } else if (xhr.readyState === 4 && xhr.status !== 200) {
          console.error(
            "Error al cargar el archivo PHP:",
            xhr.status,
            xhr.statusText
          );
          cargarArchivosPHP(archivos, indice + 1); // Salta al siguiente archivo en caso de error
        }
      };
      xhr.send();
    }
  }
});
