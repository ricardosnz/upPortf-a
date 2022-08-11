import { api, techs } from './apiProjects';
import { listProjects } from './types';
const projectsContainer: HTMLElement = document.querySelector('.project__list');
const projectsFragmet: DocumentFragment = document.createDocumentFragment();

api.map(({ title, img, linkCode, linkDemo, description, listTechs }) => {
  let newProject = document.createElement('li');
  newProject.classList.add('project__item');
  newProject.innerHTML = `
    <h3 class="project__title">${title}</h3>
    <img
      lazy="load"
      src="${img}"
      alt="${title}"
    />
    <a href="" class="project__link project__link--code">Code</a>
    <a href="" class="project__link project__link--demo">Website</a>`;
  projectsFragmet.appendChild(newProject);
});

if (projectsFragmet.children.length > 1) {
  projectsContainer.appendChild(projectsFragmet);
}

const newItems = (content, classitem) => {
  let newProject = document.createElement('li');
  newProject.classList.add(classitem);
  newProject.innerHTML = content;
  // projectsFragmet.appendChild(newProject)
};

techs.map(({ title, img, color }) => {
  const contentItem = `
    <img
      lazy="load"
      src="${img}"
      alt="${title}"
    />
    <h3 class="tech__modal" style="">${title}</h3>`;
  newItems(contentItem, 'tech__item');
});