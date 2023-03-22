//1 Sum of all numbers

function addThemAll(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log(addThemAll(2, 4));
console.log(addThemAll(1, 2, 3, 4));
console.log(addThemAll(5, 5, 10));

//2 Closure / multiply

function multiply(a) {
  return function (b) {
    return a * b;
  };
}

console.log(multiply(5)(5)); // 25*
console.log(multiply(2)(-2)); // -4*
console.log(multiply(4)(3)); // 12*
