const items = document.querySelectorAll('.list li');

items.forEach((item, index) => {
  item.style.animationDelay = `${index * 0.2}s`;
});

document.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');
  const sec = document.querySelector('section');

  if (window.scrollY >= header.offsetHeight) {
    nav.classList.add('fixed');
    sec.classList.add('ad-margin');
  } else {
    nav.classList.remove('fixed');
    sec.classList.remove('ad-margin');
  }
});

// Função para adicionar classe "active" ao item da lista de navegação correspondente à seção atual
function setActiveNavItem() {
  // Obter todas as seções da página
  const sections = document.querySelectorAll('section');
  
  // Iterar sobre as seções
  sections.forEach(section => {
      // Verificar se a seção está visível na tela
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          // Remover a classe "active" de todos os itens da lista de navegação
          document.querySelectorAll('.splide__list li').forEach(item => {
              item.classList.remove('active');
          });
          
          // Obter o link correspondente à seção atual
          const link = document.querySelector(`.splide__list a[href="#${section.id}"]`);
          if (link) {
              // Adicionar a classe "active" ao item da lista de navegação
              link.parentNode.classList.add('active');
          }
      }
  });
}

// Chamar a função quando a página for carregada e quando a janela for rolada
window.addEventListener('DOMContentLoaded', setActiveNavItem);
window.addEventListener('scroll', setActiveNavItem);

