document.addEventListener("DOMContentLoaded", function () {
  // Array con las ubicaciones de los archivos PHP
  var archivosPHP = ["../php/Act1.php", "../php/Act2.php"];

  // Función para cargar archivos PHP de forma secuencial
  function cargarArchivosPHP(archivos, indice) {
    if (indice < archivos.length) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", archivos[indice], true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          document.getElementById("contenidoPHP").innerHTML += xhr.responseText;
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

  // Inicia la carga de archivos PHP al cargar la página
  cargarArchivosPHP(archivosPHP, 0);
});
