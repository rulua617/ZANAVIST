
// Script para cambiar automáticamente las imágenes del héroe
var currentImageIndex = 0;
var images = document.querySelectorAll('#hero img');
var dots = document.querySelectorAll('.dot');
var navbar = document.getElementById('navbar');

// Oculta todas las imágenes excepto la primera al principio
for (var i = 1; i < images.length; i++) {
    images[i].style.opacity = 0;
}

// Actualiza la barra de progreso
function updateProgressBar() {
    dots.forEach(function(dot, index) {
        if (index === currentImageIndex) {
            dot.classList.add('active-dot'); 
        } else {
            dot.classList.remove('active-dot'); 
        }
    });
}

setInterval(function() {
    // Oculta la imagen actual
    images[currentImageIndex].style.opacity = 0;
    // Calcula el índice de la siguiente imagen
    currentImageIndex = (currentImageIndex + 1) % images.length;
    // Muestra la siguiente imagen
    images[currentImageIndex].style.opacity = 1;
    // Actualiza la barra de progreso
    updateProgressBar();
}, 5000); // Cambia la imagen cada 5 segundos (5000 milisegundos)

// Ocultar y mostrar el nav cuando se desplaza
var lastScrollTop = 0;
window.addEventListener("scroll", function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    lastScrollTop = currentScroll;
}, false);
