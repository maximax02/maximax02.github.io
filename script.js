// Cierra menú al hacer clic en un enlace
const checkbox = document.getElementById('check');
document.querySelectorAll('.elemento-lista').forEach(link => {
    link.addEventListener('click', () => checkbox.checked = false);
});

// Galería mejorada
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
    showSlides(modalId, 1);
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function plusSlides(modalId, n) {
    const modal = document.getElementById(modalId);
    const slides = modal.querySelectorAll('.mySlides');
    let index = parseInt(modal.dataset.index || "1") + n;

    if (index > slides.length) index = 1;
    if (index < 1) index = slides.length;

    modal.dataset.index = index;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[index - 1].style.display = "block";
}

function showSlides(modalId, n) {
    const modal = document.getElementById(modalId);
    const slides = modal.querySelectorAll('.mySlides');
    modal.dataset.index = n;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slides[n - 1]) slides[n - 1].style.display = "block";
}

// Cierra modal con tecla ESC
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.querySelectorAll('.modal').forEach(modal => {
            if (modal.style.display === "block") {
                modal.style.display = "none";
            }
        });
    }
});
