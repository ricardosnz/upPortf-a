import './scss/app.scss';

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const menu: HTMLElement = document.querySelector('.navbar__menu');
const menuBtn: HTMLButtonElement = document.querySelector('.navbar__btn');

const showMenu = (): boolean => menu.classList.toggle('navbar__menu--show');

const classChild = ['navbar__menu--close', 'navbar__item'];

menu.addEventListener('click', ({ target }: MouseEvent) => {
  // console.log(target.classList.keys);
  if (classChild.includes(target.className)) showMenu();
});
// menuBtn.addEventListener('click', showMenu);
const dark = () => document.body.classList.toggle('darkmode');

menuBtn.addEventListener('click', dark);

// button.addEventListener('click',() : void =>{
//     nav.classList.toggle('header__nav--activo')
// })

import variables from './scss/variables.scss';

let roo = document.querySelector(':root');

// console.log(roo.getPropertyValue('--blue'));
// console.log(roo.getPropertyValue());
// const propiedad = getComputedStyle(document.documentElement).getPropertyValue(
//   'blue'
// );
// let root = document.documentElement;
// let root = document.body;

console.log(getComputedStyle(roo).getPropertyValue('--color-red'));
// console.log(getComputedStyle(menuBtn).getPropertyValue('--color-red'));

// const color = document.getElementById("app").style.padding = variables.padding;
// console.log(menuBtn.style.color);

// r.style.setProperty('--blue', 'lightblue');
// .style.setProperty('--font-family', 'Verdana');
