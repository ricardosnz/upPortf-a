
import './scss/app.scss';


// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const menu: HTMLElement = document.querySelector('.navbar__menu');
const menuBtn: HTMLButtonElement = document.querySelector('.navbar__btn');

const showMenu = () => menu.classList.toggle('navbar__menu--show');

menuBtn.addEventListener('click', showMenu);
menu.children[0].addEventListener('click', showMenu);



// const button = (document.querySelector('.header__button') as HTMLButtonElement)
// const nav    = (document.querySelector('.header__nav')    as HTMLElement)

// button.addEventListener('click',() : void =>{
//     nav.classList.toggle('header__nav--activo')
// })
