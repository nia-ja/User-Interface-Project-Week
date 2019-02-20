//NAVIGATION
// GreenSock animation for navigation onload
window.onload = function(){
    TweenMax.from(nav, 2, {y:-30, ease: Power4.easeOut});
}

const openMenu = () => {
    menu.classList.toggle('menu--open');
    menuButtonClose.classList.remove('hamburger-close');
    menuButton.classList.toggle('hamburger-close');
    // GreenSock animation for the menu appearance
    TweenMax.from(menu, 2, {y:-1000, x:-300, ease: Circ.easeOut});
    TweenMax.to(menu, 2, {backgroundColor:"#98A2AE"});
    TweenMax.from(nav, 2, {backgroundColor:"rgba(152, 162, 174,0.1)", ease: Circ.easeOut});

    TweenMax.from('a', 2, {opacity:0, x:-300});
}

const closeMenu = () => {
    // GreenSock animation for the menu close
    TweenMax.to(nav, 1, {backgroundColor:"rgba(152, 162, 174,0.1)", y:-50, ease: SlowMo.ease.config(0.1, 0.7, true)});
    menu.classList.remove('menu--open');
    menuButton.classList.remove('hamburger-close');
    menuButtonClose.classList.toggle('hamburger-close');
}

const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.hamburger-open');
const menuButtonClose = document.querySelector('.hamburger-close');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', openMenu);
menuButtonClose.addEventListener('click', closeMenu); // <-- navigation.js
