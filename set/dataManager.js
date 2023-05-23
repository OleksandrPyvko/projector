const array = [];
const set = new Set();

const addToArrayAndSet = (value) => {
  if (array.length >= 15) {
    array.shift();
  }
  array.push(value);
  
  set.add(value);
};

const getArray = () => array;
const getSet = () => set;

export { addToArrayAndSet, getArray, getSet };
