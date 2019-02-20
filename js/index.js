//NAVIGATION
const openMenu = () => {
    menu.classList.toggle('menu--open');
    menuButtonClose.classList.remove('hamburger-close');
    menuButton.classList.toggle('hamburger-close');
    // GreenSock animation for menu appearance
    TweenMax.from(menu, 2, {y:-1000, ease: Circ.easeOut});
    TweenMax.to(menu, 2, {backgroundColor:"#98A2AE"});
    const nav = document.querySelector('nav');
    TweenMax.from(nav, 2, {backgroundColor:"rgba(152, 162, 174,0.1)", ease: Circ.easeOut});
}

const closeMenu = () => {
    menu.classList.remove('menu--open');
    menuButton.classList.remove('hamburger-close');
    menuButtonClose.classList.toggle('hamburger-close');
}

const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.hamburger-open');
const menuButtonClose = document.querySelector('.hamburger-close');

menuButton.addEventListener('click', openMenu);
menuButtonClose.addEventListener('click', closeMenu); // <-- navigation.js