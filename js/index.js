// JS goes here

//NAVIGATION
const toggleMenu = () => {
    menu.classList.toggle('menu--open');
    menuButtonClose.classList.remove('hamburger-close');
    menuButton.classList.toggle('hamburger-close');
}

const closeMenu = () => {
    menu.classList.remove('menu--open');
    menuButton.classList.remove('hamburger-close');
    menuButtonClose.classList.toggle('hamburger-close');
}

const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.hamburger-open');
const menuButtonClose = document.querySelector('.hamburger-close');

menuButton.addEventListener('click', toggleMenu);
menuButtonClose.addEventListener('click', closeMenu); // <-- navigation.js



// SERVICES PAGE - TAB COMPONENT


