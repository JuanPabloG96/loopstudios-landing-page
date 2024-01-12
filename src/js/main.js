const openCloseBtn = document.querySelectorAll('.open-close-btn');
const dropMenu = document.querySelector('.dropdown-menu');
const menuLinks = document.querySelectorAll('.menu-link');

openCloseBtn.forEach(btn =>{
  btn.addEventListener('click', ()=>{
    dropMenu.classList.toggle('show-menu');
    document.body.classList.toggle('lock-body');
    window.scrollTo(0,0);
  })
})

menuLinks.forEach(link =>{
  link.addEventListener('click', ()=>{
    dropMenu.classList.remove('show-menu');
    document.body.classList.toggle('lock-body');
  })
})