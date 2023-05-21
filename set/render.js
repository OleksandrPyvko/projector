import { getArray, getSet } from './dataManager.js';

const renderArray = (arrayElement) => {
  const array = getArray();

  arrayElement.innerHTML = '';
  array.forEach((value) => {
    const listItem = document.createElement('li');
    listItem.textContent = value + ',';
    arrayElement.appendChild(listItem);
    console.log(value);
  });
};

const renderSet = (setElement) => {
  const set = getSet();

  setElement.innerHTML = '';
  set.forEach((value) => {
    const listItem = document.createElement('li');
    listItem.textContent = value + ',';
    setElement.appendChild(listItem);
  });
};

export { renderArray, renderSet };
