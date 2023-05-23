const inputElement = document.querySelector('.input');
const buttonElement = document.querySelector('.button');
const arrayElement = document.querySelector('.array');
const setElement = document.querySelector('.set');

import { generateRandomEmoji, updateEmoji } from './generateEmoji.js';
const emoji = generateRandomEmoji();

import { addToArrayAndSet } from './dataManager.js';
import { renderArray, renderSet } from './render.js';


inputElement.value = emoji;
buttonElement.addEventListener('click', (event) => {
  event.preventDefault();
  const value = inputElement.value;
  addToArrayAndSet(value);
  event;
  renderArray(arrayElement);
  renderSet(setElement);
  updateEmoji(inputElement);
});
