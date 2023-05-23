import { getArray, getSet } from './dataManager.js';

const renderArray = (arrayElement) => {
  const array = getArray();

  arrayElement.innerHTML = array.join(',');
  };


const renderSet = (setElement) => {
  const set = getSet();

 setElement.innerHTML = Array.from(set).join(',');
  

};

export { renderArray, renderSet };
