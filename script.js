// Seleccionamos el checkbox del menú móvil
const checkbox = document.getElementById('check');

// Cerrar menú al hacer clic en un enlace
const elementosLista = document.querySelectorAll('.elemento-lista');
elementosLista.forEach(elemento => {
    elemento.addEventListener('click', () => {
        checkbox.checked = false;
    });
});

// Variables globales para el modal
let currentSlides = []; // Array con las rutas de las imágenes actuales
let slideIndex = 1;     // Índice de la imagen actual
const modal = document.getElementById('modalDinamico');
const slidesContainer = modal.querySelector('.slides-container');
const slideCounter = document.getElementById('slideCounter');

// Función para abrir el modal con un conjunto de imágenes
function openModal(imagesArray, startIndex = 0) {
    currentSlides = imagesArray;
    slideIndex = startIndex + 1; // +1 porque mostramos desde 1, no desde 0

    // Limpiamos el contenedor de slides
    slidesContainer.innerHTML = '';

    // Creamos un div por cada imagen
    currentSlides.forEach((imgSrc, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.classList.add('mySlides'); // Clase genérica
        slideDiv.style.display = index === startIndex ? 'block' : 'none'; // Solo mostramos la inicial

        const img = document.createElement('img');
        img.src = imgSrc;
        img.style.width = '100%';
        img.alt = `Imagen ${index + 1} de la galería`;

        const numbertext = document.createElement('div');
        numbertext.classList.add('numbertext');
        numbertext.textContent = `${index + 1} / ${currentSlides.length}`;

        slideDiv.appendChild(numbertext);
        slideDiv.appendChild(img);
        slidesContainer.appendChild(slideDiv);
    });

    // Actualizamos contador
    updateCounter();

    // Mostramos el modal
    modal.style.display = "block";

    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';
}

// Cerrar modal
function closeModal() {
    modal.style.display = "none";
    // Permitir scroll de nuevo
    document.body.style.overflow = '';
}

// Siguiente / anterior
function plusSlides(n) {
    const slides = slidesContainer.querySelectorAll('.mySlides');
    if (slides.length === 0) return;

    // Ocultar todas
    slides.forEach(slide => slide.style.display = 'none');

    // Calcular nuevo índice
    slideIndex += n;

    // Loop infinito (opcional: quitar si no lo quieres)
    if (slideIndex > slides.length) slideIndex = 1;
    if (slideIndex < 1) slideIndex = slides.length;

    // Mostrar slide actual
    slides[slideIndex - 1].style.display = 'block';

    // Actualizar contador
    updateCounter();
}

// Función auxiliar para actualizar el contador
function updateCounter() {
    slideCounter.textContent = `${slideIndex} / ${currentSlides.length}`;
}

// Cerrar modal con tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && modal.style.display === "block") {
        closeModal();
    }
});
