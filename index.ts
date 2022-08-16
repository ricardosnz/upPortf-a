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
