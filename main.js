const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-nav');
const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
