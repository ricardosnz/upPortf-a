const BASE_URL = 'https://images.pexels.com/photos/';
import {listProjects} from "./types"

const trasformImg = (idImg) =>
  `${BASE_URL}${idImg}/pexels-photo-${idImg}.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`;

export const api: listProjects[] = [
  {

    id:1,
    title: 'filtrador de personajes de rick and morty',
    img: trasformImg('3671394'),
    linkCode: '',
    linkDemo: '',
    description: '',
    listTechs: '',
  },
  {
    id:2,
    title: 'acortador de urls y calculadora',
    img: trasformImg('5499833'),
    linkCode: '',
    linkDemo: '',
    description: '',
    listTechs: '',
  },
  {
    id:3,
    title: 'busca el clima de cada ciudad',
    img: trasformImg('3671394'),
    linkCode: '',
    linkDemo: '',
    description: '',
    listTechs: '',
  },
  {
    id:4,
    title: 'preguntas de cultura general',
    img: trasformImg('47061'),
    linkCode: '',
    linkDemo: '',
    description: '',
    listTechs: '',
  },
  {
    id:5,
    title: 'portfolio',
    img: trasformImg('578355'),
    linkCode: '',
    linkDemo: '',
    description: '',
    listTechs: '',
  },
  {
    id:6,
    title: 'Contador',
    img: trasformImg('389503'),
    linkCode: '',
    linkDemo: '',
    description: '',
    listTechs: '',
  },
  {
    id:7,
    title: 'Lista de pendientes',
    img: trasformImg('535243'),
    linkCode: '',
    linkDemo: '',
    description: '',
    listTechs: '',
  },
  {
    id:8,
    title: 'Numero ramdom',
    img: trasformImg('535423'),
    linkCode: '',
    linkDemo: '',
    description: '',
    listTechs: '',
  },
];

const apiInitial =
  'https://images.pexels.com/photos/3671394/pexels-photo-3671394.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load';


export const techs = [
 {title: 'npm', img: '', color: '435'},
 {title: 'javascript', img: '', color: ''},
 {title: 'typescript', img: '', color: ''},
 {title: 'css', img: '', color: ''},
 {title: 'sass', img: '', color: ''},
 {title: 'styled-components', img: '', color: ''},
 {title: 'react', img: '', color: ''},
 {title: 'react-router', img: '', color: ''},
 {title: 'redux', img: '', color: ''},
 {title: 'form hook', img: '', color: ''},
 {title: 'express', img: '', color: ''},
 {title: 'mongo', img: '', color: ''},
 {title: 'JWT', img: '', color: ''},
 {title: 'webáck', img: '', color: ''},
]



