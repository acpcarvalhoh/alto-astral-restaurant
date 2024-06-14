const items = document.querySelectorAll('.list li');

items.forEach((item, index) => {
  item.style.animationDelay = `${index * 0.2}s`;
});

document.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');


  if (window.scrollY >= header.offsetHeight) {
    nav.classList.add('fixed');
   
  } else {
    nav.classList.remove('fixed');

  }
});

function updateCarousel() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPosition = window.scrollY + 95;

  sections.forEach((section, index) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const session = section.getAttribute('id');
      const carouselCell = document.querySelector(`.carousel-cell[data-session="${session}"]`);

      if (carouselCell) {
          if (scrollPosition >= top && scrollPosition < top + height) {
              flkty.select(index);
              carouselCell.classList.add('active');
          } else {
              carouselCell.classList.remove('active');
          }
      }
  });
}


window.addEventListener('scroll', updateCarousel);

window.addEventListener('load', updateCarousel);



