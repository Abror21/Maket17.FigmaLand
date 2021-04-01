const wrapper = document.querySelector('.wrapper');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const nav = document.querySelector('.nav');
const menuClose = document.querySelector('.menu-close');
const modalBtn = document.querySelector('.Modal__btn');

const modal = document.querySelector('.Modal')
const orderBtns = document.querySelectorAll('.modal-btn');

menu.addEventListener('click', () => {
    if (menu.classList.contains('active') && nav.classList.contains('active')) {
        wrapper.classList.remove('active')
        nav.classList.remove('active')
        menu.classList.remove('active')
        body.style.overflow = 'visible'
    }else{
        wrapper.classList.add('active')
        nav.classList.add('active')
        menu.classList.add('active')
        body.style.overflow = 'hidden'
    }
})
wrapper.addEventListener('click', () => {
    wrapper.classList.remove('active')
    nav.classList.remove('active')
    menu.classList.remove('active')
    body.style.overflow = 'visible'
});
menuClose.addEventListener('click', () => {
    wrapper.classList.remove('active')
    nav.classList.remove('active')
    menu.classList.remove('active')
    body.style.overflow = 'visible'
})
// =include ./components/videoPleer.js