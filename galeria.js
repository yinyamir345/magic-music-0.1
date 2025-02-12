let indice = 0; // Índice de la imagen actual

function cambiarImagen(direccion) {
  const imagenes = document.querySelectorAll(".carrusel-imagenes img");
  imagenes[indice].classList.remove("activo"); // Ocultar la imagen actual

  // Actualizar el índice
  indice += direccion;

  // Reiniciar el índice si está fuera de rango
  if (indice >= imagenes.length) {
    indice = 0;
  } else if (indice < 0) {
    indice = imagenes.length - 1;
  }

  imagenes[indice].classList.add("activo"); // Mostrar la nueva imagen
}

// Opcional: Cambiar automáticamente la imagen cada 3 segundos
setInterval(() => cambiarImagen(1), 3000);
