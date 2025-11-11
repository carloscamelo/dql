
// main.js - script simples para controlar o menu mobile
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');

  toggle.addEventListener('click', function(){
    if(nav.style.display === 'block') nav.style.display = '';
    else nav.style.display = 'block';
  });
});


const modal = document.getElementById("modalGallery");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("modalCaption");
const images = document.querySelectorAll(".gallery .card img");
const closeBtn = document.querySelector(".modal .close");
const prevBtn = document.querySelector(".modal .prev");
const nextBtn = document.querySelector(".modal .next");

let currentIndex = 0;

// Abre modal ao clicar na imagem
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.textContent = img.alt;
    currentIndex = index;
  });
});

// Fecha modal
closeBtn.onclick = function() { modal.style.display = "none"; }

// Navegação
function showImage(index) {
  if(index < 0) index = images.length -1;
  if(index >= images.length) index = 0;
  modalImg.src = images[index].src;
  captionText.textContent = images[index].alt;
  currentIndex = index;
}

prevBtn.onclick = function() { showImage(currentIndex -1); }
nextBtn.onclick = function() { showImage(currentIndex +1); }

// Fecha modal clicando fora da imagem
modal.onclick = function(event) {
  if(event.target === modal) { modal.style.display = "none"; }
}

//JS do Carrossel da hero img index

// Hero Carousel
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.hero-image.carousel img');
  let current = 0;

  setInterval(() => {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
  }, 3000); // troca a cada 4 segundos
});
