import './style.css';
import refresh from './Img/refresh.png';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = `
    <img src=${refresh}>
  `;
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());