// Seleccionamos el checkbox
const checkbox = document.getElementById('check');

const elementosLista = document.querySelectorAll('.elemento-lista');
  elementosLista.forEach(elemento => {
    elemento.addEventListener('click', () => {
      checkbox.checked = false;
    });
  });

var currentSlide = "";
var slideIndex = 1

function openModal(myModal, slide) {
    document.getElementById(myModal).style.display = "block";
    currentSlide = slide;
    slideIndex = 1;
    showSlides(slideIndex);
}

// Close the Modal
function closeModal(myModal) {
    document.getElementById(myModal).style.display = "none";
}

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName(currentSlide);
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    console.log("Slides");
    console.log(slides);
}
