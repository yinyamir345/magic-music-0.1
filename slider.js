const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
let index = 0;

function showNextSlide() {
  index++;
  if (index >= images.length) {
    index = 0; // Reinicia el índice si llega al final
  }
  const offset = -index * 11; // Calcula el desplazamiento
  slides.style.transform = `translateX(${offset}%)`; // Mueve a la siguiente imagen
  slides.style.transition = "transform 0.5s ease-in-out"; // Transición suave
}

// Cambia de imagen cada 3 segundos
setInterval(showNextSlide, 2000);
