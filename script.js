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

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
          top: targetElement.offsetTop - 90,
          behavior: 'smooth'
      });
  });
});



/*
const navLinkEls = document.querySelectorAll(".carousel-cell a");
const sectionEls = document.querySelectorAll("section");

let currentSection = "salgado-frito";

window.addEventListener("scroll", () => {
  sectionEls.forEach((section) => {
    if (window.scrollY >= (section.offsetTop - 100)) {
      currentSection = section.id;
    }
  });

  navLinkEls.forEach(navLinkEl => {
    if (navLinkEl.href.includes(currentSection)) {
      const activeLink = document.querySelector(".carousel-cell.active");
      if (activeLink) {
        activeLink.classList.remove("active");
      }
      navLinkEl.closest(".carousel-cell").classList.add("active");
    }
  });
});

*/


function updateCarousel() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPosition = window.scrollY + 100;

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



