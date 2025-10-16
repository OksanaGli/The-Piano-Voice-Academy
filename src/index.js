import './js/Aos.js';

let navMenuElement = document.querySelector('.navigation');
let navMenuButtonOpened = document.querySelector('.hamburger');
let navMenuButtonClosed = document.querySelector('.button__closed');
let navLinkElement = document.querySelectorAll('.navigation__link');
let overlay = document.querySelector('.overlay');

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if(window.scrollY > 0) {
    header.classList.add('header__shadow')
  } else {
    header.classList.remove('header__shadow')
  }
})

navMenuButtonOpened.addEventListener('click', () => {
  navMenuElement.classList.add('navigation__opened');  
  document.body.classList.add('no-scroll');
  overlay.classList.add('overlay__active');
})

navMenuButtonClosed.addEventListener('click', () => {
  navMenuElement.classList.remove('navigation__opened');  
  document.body.classList.remove('no-scroll');
  overlay.classList.remove('overlay__active');
})

const onMenuLinkClick = (evt) => {
  if (evt.target.classList.contains('navigation__link')) {
    navMenuElement.classList.remove('navigation__opened');  
    document.body.classList.remove('no-scroll');
    overlay.classList.remove('overlay__active');
  }
}

navLinkElement.forEach(item => {
  item.addEventListener('click', onMenuLinkClick)
})

const onWindowClick = (evt) => {    
  if (evt.target.closest('.overlay__active')) { 
    navMenuElement.classList.remove('navigation__opened');    
    document.body.classList.remove('no-scroll');    
    overlay.classList.remove('overlay__active');
  }
}

window.addEventListener('click', onWindowClick);