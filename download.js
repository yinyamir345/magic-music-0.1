// Selecciona todos los botones de descarga
const downloadButtons = document.querySelectorAll(".downloadButton");

// Agrega un evento de clic a cada botón
downloadButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Obtiene la ruta del archivo y el nombre del archivo desde los atributos data
    const filePath = this.getAttribute("data-file");
    const fileName = this.getAttribute("data-name");

    // Crea un enlace temporal
    const link = document.createElement("a");
    link.href = filePath; // Ruta del archivo
    link.download = fileName; // Nombre del archivo que se descargará

    // Simula un clic en el enlace
    document.body.appendChild(link);
    link.click();

    // Elimina el enlace temporal
    document.body.removeChild(link);
  });
});
