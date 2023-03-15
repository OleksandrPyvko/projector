//   1 Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку:

const userNames = [
  'Петрик Ольга Іванівна',
  'Гнатюк Петро Антонович',
  'Рудко Андрій Опанасович',
  'Олег',
  'Артем Іванович',
];

let initials;

const firstLetters = userNames.map((name) => {
  const words = name.split(' ');
  const letters = words.map((word) => word.charAt(0) + '.');
  return letters.join('');
});

initials = firstLetters;
initials.sort();

console.log(initials); 

// 2 Задача на розворот числа:

const currentMaxValue = 4589;
let reverseMaxValue;

reverseMaxValue = currentMaxValue.toString().split('').reverse().join('');

console.log(reverseMaxValue); 
console.log(typeof reverseMaxValue); 

// 3 Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:

const resultsArray = [1, 2, [3, [4]]];
let productOfArray;

const flatArr = resultsArray.flat(Infinity);

productOfArray = flatArr.reduce(
  (accumulator, currentValue) => accumulator * currentValue
);

console.log(productOfArray); 
