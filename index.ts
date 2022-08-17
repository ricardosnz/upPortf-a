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
menuBtn.addEventListener('click', showMenu);

const switchMode = document.querySelector('.navbar__item--switch');

const dark = () => document.body.classList.toggle('darkmode');

switchMode.addEventListener('click', dark);

// let root = document.documentElement; es lo mismo
// let root = document.body;

// menuBtn.addEventListener('click', () => roo.style.setProperty('--blue-dark', 'red'));

let roo = document.querySelector(':root');
// solo lo obtiene si en el mismo bloque esta la variable
console.log(getComputedStyle(roo).getPropertyValue('--color-red'));
