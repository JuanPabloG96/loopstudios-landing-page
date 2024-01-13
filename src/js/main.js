const openCloseBtn = document.querySelectorAll('.open-close-btn');
const dropMenu = document.querySelector('.dropdown-menu');
const menuLinks = document.querySelectorAll('.menu-link');

function toggleMenu() {
  dropMenu.classList.toggle('show-menu');
  document.body.classList.toggle('lock-body');
  window.scrollTo(0, 0);
}

function closeMenu() {
  dropMenu.classList.remove('show-menu');
  document.body.classList.remove('lock-body');
}

openCloseBtn.forEach(btn => {
  btn.addEventListener('click', toggleMenu)
})

menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu)
})