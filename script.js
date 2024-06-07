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