// gallery-modal.js

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modalGallery");
  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("modalCaption");
  const closeBtn = modal.querySelector(".close");
  const prevBtn = modal.querySelector(".prev");
  const nextBtn = modal.querySelector(".next");
  const cards = document.querySelectorAll(".gallery .card");

  let currentGallery = [];
  let currentIndex = 0;

  // Definir as galerias de cada categoria
  const galleries = {
    sala: [
{ src: "img/sala_estar/sala_estar(1).jpg", caption: "Sala de Estar 1" },
{ src: "img/sala_estar/sala_estar(2).jpg", caption: "Sala de Estar 2" },
{ src: "img/sala_estar/sala_estar(3).jpg", caption: "Sala de Estar 3" },
{ src: "img/sala_estar/sala_estar(4).jpg", caption: "Sala de Estar 4" },
{ src: "img/sala_estar/sala_estar(5).jpg", caption: "Sala de Estar 5" },
{ src: "img/sala_estar/sala_estar(6).jpg", caption: "Sala de Estar 6" },
{ src: "img/sala_estar/sala_estar(7).jpg", caption: "Sala de Estar 7" },
{ src: "img/sala_estar/sala_estar(8).jpg", caption: "Sala de Estar 8" },
{ src: "img/sala_estar/sala_estar(9).jpg", caption: "Sala de Estar 9" },
{ src: "img/sala_estar/sala_estar(10).jpg", caption: "Sala de Estar 10" },
{ src: "img/sala_estar/sala_estar(11).jpg", caption: "Sala de Estar 11" },
{ src: "img/sala_estar/sala_estar(12).jpg", caption: "Sala de Estar 12" },
{ src: "img/sala_estar/sala_estar(13).jpg", caption: "Sala de Estar 13" },
{ src: "img/sala_estar/sala_estar(14).jpg", caption: "Sala de Estar 14" },
{ src: "img/sala_estar/sala_estar(15).jpg", caption: "Sala de Estar 15" },
{ src: "img/sala_estar/sala_estar(16).jpg", caption: "Sala de Estar 16" },
{ src: "img/sala_estar/sala_estar(17).jpg", caption: "Sala de Estar 17" },
{ src: "img/sala_estar/sala_estar(18).jpg", caption: "Sala de Estar 18" },
{ src: "img/sala_estar/sala_estar(19).jpg", caption: "Sala de Estar 19" },
{ src: "img/sala_estar/sala_estar(20).jpg", caption: "Sala de Estar 20" },
{ src: "img/sala_estar/sala_estar(21).jpg", caption: "Sala de Estar 21" },
{ src: "img/sala_estar/sala_estar(22).jpg", caption: "Sala de Estar 22" },
{ src: "img/sala_estar/sala_estar(23).jpg", caption: "Sala de Estar 23" },
{ src: "img/sala_estar/sala_estar(24).jpg", caption: "Sala de Estar 24" },
{ src: "img/sala_estar/sala_estar(25).jpg", caption: "Sala de Estar 25" },
{ src: "img/sala_estar/sala_estar(26).jpg", caption: "Sala de Estar 26" },
{ src: "img/sala_estar/sala_estar(27).jpg", caption: "Sala de Estar 27" },
{ src: "img/sala_estar/sala_estar(28).jpg", caption: "Sala de Estar 28" },
{ src: "img/sala_estar/sala_estar(29).jpg", caption: "Sala de Estar 29" },
{ src: "img/sala_estar/sala_estar(30).jpg", caption: "Sala de Estar 30" },
{ src: "img/sala_estar/sala_estar(31).jpg", caption: "Sala de Estar 31" },
    ],
    banheiro: [
      { src: "img//banheiros/banheiro(1).jpg", caption: "Banheiro 1" },
      { src: "img//banheiros/banheiro(2).jpg", caption: "Banheiro 2" },
      { src: "img//banheiros/banheiro(3).jpg", caption: "Banheiro 3" },
      { src: "img//banheiros/banheiro(4).jpg", caption: "Banheiro 4" },
      { src: "img//banheiros/banheiro(5).jpg", caption: "Banheiro 5" },
      { src: "img//banheiros/banheiro(6).jpg", caption: "Banheiro 6" },
      { src: "img//banheiros/banheiro(7).jpg", caption: "Banheiro 7" },
      { src: "img//banheiros/banheiro(8).jpg", caption: "Banheiro 8" },
      { src: "img//banheiros/banheiro(9).jpg", caption: "Banheiro 10" },
      { src: "img//banheiros/banheiro(10).jpg", caption: "Banheiro 11" },
      { src: "img//banheiros/banheiro(11).jpg", caption: "Banheiro 12" },
      { src: "img//banheiros/banheiro(12).jpg", caption: "Banheiro 13" },
      { src: "img//banheiros/banheiro(13).jpg", caption: "Banheiro 14" },
      { src: "img//banheiros/banheiro(14).jpg", caption: "Banheiro 15" },
      { src: "img//banheiros/banheiro(15).jpg", caption: "Banheiro 16" },
      { src: "img//banheiros/banheiro(16).jpg", caption: "Banheiro 17" },
      { src: "img//banheiros/banheiro(17).jpg", caption: "Banheiro 18" },
      { src: "img//banheiros/banheiro(18).jpg", caption: "Banheiro 19" },
      { src: "img//banheiros/banheiro(19).jpg", caption: "Banheiro 20" },
      { src: "img//banheiros/banheiro(20).jpg", caption: "Banheiro 21" },
      { src: "img//banheiros/banheiro(22).jpg", caption: "Banheiro 22" },
      { src: "img//banheiros/banheiro(23).jpg", caption: "Banheiro 23" },
      { src: "img//banheiros/banheiro(24).jpg", caption: "Banheiro 24" },
      { src: "img//banheiros/banheiro(25).jpg", caption: "Banheiro 25" },
      { src: "img//banheiros/banheiro(26).jpg", caption: "Banheiro 26" },
      { src: "img//banheiros/banheiro(27).jpg", caption: "Banheiro 27" },
      { src: "img//banheiros/banheiro(28).jpg", caption: "Banheiro 28" },
      { src: "img//banheiros/banheiro(29).jpg", caption: "Banheiro 29" },
      { src: "img//banheiros/banheiro(30).jpg", caption: "Banheiro 30" },
    ],
    quartos: [
      { src: "img/quartos/quarto(1).jpg", caption: "Quarto 1" },
      { src: "img/quartos/quarto(2).jpg", caption: "Quarto 2" },
      { src: "img/quartos/quarto(3).jpg", caption: "Quarto 3" },
      { src: "img/quartos/quarto(4).jpg", caption: "Quarto 4" },
      { src: "img/quartos/quarto(5).jpg", caption: "Quarto 5" },
      { src: "img/quartos/quarto(6).jpg", caption: "Quarto 6" },
      { src: "img/quartos/quarto(7).jpg", caption: "Quarto 7" },
      { src: "img/quartos/quarto(8).jpg", caption: "Quarto 8" },
      { src: "img/quartos/quarto(9).jpg", caption: "Quarto 9" },
      { src: "img/quartos/quarto(10).jpg", caption: "Quarto 10" },
      { src: "img/quartos/quarto(11).jpg", caption: "Quarto 11" },
      { src: "img/quartos/quarto(12).jpg", caption: "Quarto 12" },
      { src: "img/quartos/quarto(13).jpg", caption: "Quarto 13" },
      { src: "img/quartos/quarto(14).jpg", caption: "Quarto 14" },
      { src: "img/quartos/quarto(15).jpg", caption: "Quarto 15" },
      { src: "img/quartos/quarto(16).jpg", caption: "Quarto 16" },
      { src: "img/quartos/quarto(17).jpg", caption: "Quarto 17" },
      { src: "img/quartos/quarto(18).jpg", caption: "Quarto 18" },
      { src: "img/quartos/quarto(19).jpg", caption: "Quarto 19" },
      { src: "img/quartos/quarto(20).jpg", caption: "Quarto 20" },
      { src: "img/quartos/quarto(21).jpg", caption: "Quarto 21" },
      { src: "img/quartos/quarto(22).jpg", caption: "Quarto 22" },
      { src: "img/quartos/quarto(23).jpg", caption: "Quarto 23" },
      { src: "img/quartos/quarto(24).jpg", caption: "Quarto 24" },
      { src: "img/quartos/quarto(25).jpg", caption: "Quarto 25" }	
    ],
    loft: [
      { src: "img/loft/loft(1).jpg", caption: "Loft 1" },
      { src: "img/loft/loft(2).jpg", caption: "Loft 2" },
      { src: "img/loft/loft(3).jpg", caption: "Loft 3" },
      { src: "img/loft/loft(4).jpg", caption: "Loft 4" },
      { src: "img/loft/loft(5).jpg", caption: "Loft 5" },
      { src: "img/loft/loft(6).jpg", caption: "Loft 6" },
      { src: "img/loft/loft(7).jpg", caption: "Loft 7" },
      { src: "img/loft/loft(8).jpg", caption: "Loft 8" },
      { src: "img/loft/loft(9).jpg", caption: "Loft 9" },
      { src: "img/loft/loft(10).jpg", caption: "Loft 10" },
      { src: "img/loft/loft(11).jpg", caption: "Loft 11" },
      { src: "img/loft/loft(12).jpg", caption: "Loft 12" },
      { src: "img/loft/loft(13).jpg", caption: "Loft 13" },
      { src: "img/loft/loft(14).jpg", caption: "Loft 14" },
      { src: "img/loft/loft(15).jpg", caption: "Loft 15" },
      { src: "img/loft/loft(16).jpg", caption: "Loft 16" },
      { src: "img/loft/loft(17).jpg", caption: "Loft 17" },
      { src: "img/loft/loft(18).jpg", caption: "Loft 18" },
      { src: "img/loft/loft(19).jpg", caption: "Loft 19" },
      { src: "img/loft/loft(20).jpg", caption: "Loft 20" },
      { src: "img/loft/loft(21).jpg", caption: "Loft 21" },
      { src: "img/loft/loft(22).jpg", caption: "Loft 22" },
      { src: "img/loft/loft(23).jpg", caption: "Loft 23" },
      { src: "img/loft/loft(24).jpg", caption: "Loft 24" },
      { src: "img/loft/loft(25).jpg", caption: "Loft 25" },
      { src: "img/loft/loft(26).jpg", caption: "Loft 26" },
      { src: "img/loft/loft(27).jpg", caption: "Loft 27" },
      { src: "img/loft/loft(28).jpg", caption: "Loft 28" },
      { src: "img/loft/loft(29).jpg", caption: "Loft 29" },
      { src: "img/loft/loft(30).jpg", caption: "Loft 30" },
    ],
    fachadas: [
      { src: "img/fachadas/fachada(1).jpg", caption: "Fachada 1" },
      { src: "img/fachadas/fachada(2).jpg", caption: "Fachada 2" }
    
    ],
    cozinhas: [
      { src: "img/cozinhas/cozinha(1).jpg", caption: "Cozinha 1" },
      { src: "img/cozinhas/cozinha(2).jpg", caption: "Cozinha 2" },
      { src: "img/cozinhas/cozinha(3).jpg", caption: "Cozinha 3" },
      { src: "img/cozinhas/cozinha(4).jpg", caption: "Cozinha 4" },
      { src: "img/cozinhas/cozinha(5).jpg", caption: "Cozinha 5" },
      { src: "img/cozinhas/cozinha(6).jpg", caption: "Cozinha 6" },
      { src: "img/cozinhas/cozinha(7).jpg", caption: "Cozinha 7" },
      { src: "img/cozinhas/cozinha(8).jpg", caption: "Cozinha 8" },
      { src: "img/cozinhas/cozinha(9).jpg", caption: "Cozinha 9" },
      { src: "img/cozinhas/cozinha(10).jpg", caption: "Cozinha 10" },
      { src: "img/cozinhas/cozinha(11).jpg", caption: "Cozinha 11" },
      { src: "img/cozinhas/cozinha(12).jpg", caption: "Cozinha 12" },
      { src: "img/cozinhas/cozinha(13).jpg", caption: "Cozinha 13" },
      { src: "img/cozinhas/cozinha(14).jpg", caption: "Cozinha 14" },
      { src: "img/cozinhas/cozinha(15).jpg", caption: "Cozinha 15" },
      { src: "img/cozinhas/cozinha(16).jpg", caption: "Cozinha 16" },
      { src: "img/cozinhas/cozinha(17).jpg", caption: "Cozinha 17" },
      { src: "img/cozinhas/cozinha(18).jpg", caption: "Cozinha 18" },
      { src: "img/cozinhas/cozinha(19).jpg", caption: "Cozinha 19" },
      { src: "img/cozinhas/cozinha(20).jpg", caption: "Cozinha 20" },
      { src: "img/cozinhas/cozinha(21).jpg", caption: "Cozinha 21" },
      { src: "img/cozinhas/cozinha(22).jpg", caption: "Cozinha 22" },
      { src: "img/cozinhas/cozinha(23).jpg", caption: "Cozinha 23" },
      { src: "img/cozinhas/cozinha(24).jpg", caption: "Cozinha 24" },
      { src: "img/cozinhas/cozinha(25).jpg", caption: "Cozinha 25" },
      { src: "img/cozinhas/cozinha(26).jpg", caption: "Cozinha 26" },
      
    ],
    escritorio: [
      { src: "img/escritorio/escritorio(1).jpg", caption: "Escritório 1" },
      { src: "img/escritorio/escritorio(2).jpg", caption: "Escritório 2" },
      { src: "img/escritorio/escritorio(3).jpg", caption: "Escritório 3" },
      { src: "img/escritorio/escritorio(4).jpg", caption: "Escritório 4" },
      { src: "img/escritorio/escritorio(5).jpg", caption: "Escritório 5" },
      { src: "img/escritorio/escritorio(6).jpg", caption: "Escritório 6" },
      { src: "img/escritorio/escritorio(7).jpg", caption: "Escritório 7" },
      { src: "img/escritorio/escritorio(8).jpg", caption: "Escritório 8" },
      { src: "img/escritorio/escritorio(9).jpg", caption: "Escritório 9" },
      { src: "img/escritorio/escritorio(10).jpg", caption: "Escritório 10" },
      { src: "img/escritorio/escritorio(11).jpg", caption: "Escritório 11" },
      { src: "img/escritorio/escritorio(12).jpg", caption: "Escritório 12" },
      { src: "img/escritorio/escritorio(13).jpg", caption: "Escritório 13" },
      { src: "img/escritorio/escritorio(14).jpg", caption: "Escritório 14" },
      { src: "img/escritorio/escritorio(15).jpg", caption: "Escritório 15" },
      { src: "img/escritorio/escritorio(16).jpg", caption: "Escritório 16" },
      { src: "img/escritorio/escritorio(17).jpg", caption: "Escritório 17" },
      { src: "img/escritorio/escritorio(18).jpg", caption: "Escritório 18" },
      { src: "img/escritorio/escritorio(19).jpg", caption: "Escritório 19" },
      { src: "img/escritorio/escritorio(20).jpg", caption: "Escritório 20" },
      { src: "img/escritorio/escritorio(21).jpg", caption: "Escritório 21" },
      { src: "img/escritorio/escritorio(22).jpg", caption: "Escritório 22" },
      { src: "img/escritorio/escritorio(23).jpg", caption: "Escritório 23" },
      { src: "img/escritorio/escritorio(24).jpg", caption: "Escritório 24" },
      { src: "img/escritorio/escritorio(25).jpg", caption: "Escritório 25" },
      { src: "img/escritorio/escritorio(26).jpg", caption: "Escritório 26" },
                                        
    ],                                  
	restaurante: [                      
      { src: "img/shop/shop(1).jpg", caption: "Comercial 1" },
      { src: "img/shop/shop(2).jpg", caption: "Comercial 2" },
      { src: "img/shop/shop(3).jpg", caption: "Comercial 3" },
      { src: "img/shop/shop(4).jpg", caption: "Comercial 4" },
      { src: "img/shop/shop(5).jpg", caption: "Comercial 5" },
      { src: "img/shop/shop(6).jpg", caption: "Comercial 6" },
      { src: "img/shop/shop(7).jpg", caption: "Comercial 7" },
      { src: "img/shop/shop(8).jpg", caption: "Comercial 8" },
      { src: "img/shop/shop(9).jpg", caption: "Comercial 9" },
      { src: "img/shop/shop(10).jpg", caption: "Comercial 10" }
                                                        
    ],                                                  
    externa: [                                          
      { src: "img/externa/externa(1).jpg", caption: "Áre23a Externa 1" },
      { src: "img/externa/externa(2).jpg", caption: "Áre24a Externa 2" },
      { src: "img/externa/externa(3).jpg", caption: "Áre25a Externa 3" },
      { src: "img/externa/externa(4).jpg", caption: "Área Externa 4" },
      { src: "img/externa/externa(5).jpg", caption: "Área Externa 5" },
      { src: "img/externa/externa(6).jpg", caption: "Área Externa 6" },
      { src: "img/externa/externa(7).jpg", caption: "Área Externa 7" },
      { src: "img/externa/externa(8).jpg", caption: "Área Externa 8" },
      { src: "img/externa/externa(9).jpg", caption: "Área Externa 9" },
      { src: "img/externa/externa(10).jpg", caption: "Área Externa 10" },
      { src: "img/externa/externa(11).jpg", caption: "Área Externa 11" },
      { src: "img/externa/externa(12).jpg", caption: "Área Externa 12" },
      { src: "img/externa/externa(13).jpg", caption: "Área Externa 13" },
      { src: "img/externa/externa(14).jpg", caption: "Área Externa 14" },
      { src: "img/externa/externa(15).jpg", caption: "Área Externa 15" },
      { src: "img/externa/externa(16).jpg", caption: "Área Externa 16" },
      { src: "img/externa/externa(17).jpg", caption: "Área Externa 17" },
      { src: "img/externa/externa(18).jpg", caption: "Área Externa 18" },
      { src: "img/externa/externa(19).jpg", caption: "Área Externa 19" },
      { src: "img/externa/externa(20).jpg", caption: "Área Externa 20" },
      { src: "img/externa/externa(21).jpg", caption: "Área Externa 21" },
      { src: "img/externa/externa(22).jpg", caption: "Área Externa 22" },
      { src: "img/externa/externa(23).jpg", caption: "Área Externa 23" },
      { src: "img/externa/externa(24).jpg", caption: "Área Externa 24" },
      { src: "img/externa/externa(25).jpg", caption: "Área Externa 25" },
      { src: "img/externa/externa(26).jpg", caption: "Área Externa 26" },
      { src: "img/externa/externa(27).jpg", caption: "Área Externa 27" },
      { src: "img/externa/externa(28).jpg", caption: "Área Externa 28" },
      { src: "img/externa/externa(29).jpg", caption: "Área Externa 29" },
      { src: "img/externa/externa(30).jpg", caption: "Área Externa 30" },
      { src: "img/externa/externa(31).jpg", caption: "Área Externa 31" },
      { src: "img/externa/externa(32).jpg", caption: "Área Externa 32" },
      { src: "img/externa/externa(33).jpg", caption: "Área Externa 33" },
      
    ]
  };

  // Função para abrir modal
  function openModal(galleryName) {
    currentGallery = galleries[galleryName];
    currentIndex = 0;
    showImage(currentIndex);
    modal.style.display = "block";
  }

  // Função para mostrar imagem específica
  function showImage(index) {
    if (!currentGallery || currentGallery.length === 0) return;
    if (index < 0) index = currentGallery.length - 1;
    if (index >= currentGallery.length) index = 0;
    modalImg.src = currentGallery[index].src;
    captionText.textContent = currentGallery[index].caption;
    currentIndex = index;
  }

  // Eventos dos cards
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const galleryName = card.getAttribute("data-gallery");
      if (galleries[galleryName]) {
        openModal(galleryName);
      }
    });
  });

  // Navegação do modal
  prevBtn.onclick = () => showImage(currentIndex - 1);
  nextBtn.onclick = () => showImage(currentIndex + 1);

  // Fechar modal
  closeBtn.onclick = () => { modal.style.display = "none"; }

  // Fechar clicando fora da imagem
  modal.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
  }

  // Navegação pelo teclado
  document.addEventListener("keydown", (e) => {
    if (modal.style.display === "block") {
      if (e.key === "ArrowLeft") showImage(currentIndex - 1);
      if (e.key === "ArrowRight") showImage(currentIndex + 1);
      if (e.key === "Escape") modal.style.display = "none";
    }
  });
});
