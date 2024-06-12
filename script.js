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

document.addEventListener("DOMContentLoaded", function() {
  const splideItems = document.querySelectorAll('.splide__slide a');
  const sections = document.querySelectorAll('section');

  function makeActive() {
      sections.forEach(function(section, index) {
          const bounding = section.getBoundingClientRect();
          if (
              bounding.top >= 0 &&
              bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
          ) {
              splideItems.forEach(function(item) {
                  item.parentElement.classList.remove('active');
              });
              splideItems[index].parentElement.classList.add('active');
          }
      });
  }

  window.addEventListener('scroll', makeActive);
  window.addEventListener('resize', makeActive);

  makeActive();
});
