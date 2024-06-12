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

document.addEventListener('DOMContentLoaded', function() {
  var splide = new Splide('.splide');
  splide.mount();

  var sections = document.querySelectorAll('.section');

  function setActiveNavItem() {
      var scrollPosition = window.scrollY;

      sections.forEach(function(section) {
          var top = section.offsetTop;
          var height = section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
              var id = section.getAttribute('id');
              var navItem = document.querySelector('a[href="#' + id + '"]');
              navItem.parentNode.classList.add('active');
          } else {
              var id = section.getAttribute('id');
              var navItem = document.querySelector('a[href="#' + id + '"]');
              navItem.parentNode.classList.remove('active');
          }
      });
  }

  window.addEventListener('scroll', setActiveNavItem);
  setActiveNavItem(); // Ativar o item de navegação ao carregar a página
});