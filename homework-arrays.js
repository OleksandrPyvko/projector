//   1 Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку:

const userNames = [
  'Петрик Ольга Іванівна',
  'Гнатюк Петро Антонович',
  'Рудко Андрій Опанасович',
  '',
];
let initials;

const getInitials = userNames.map(names => {
  const splitNames = names.split(' ');
  const initialsLet = splitNames.map(pieces => pieces[0][0] + '');
  return initialsLet;
})
initials = getInitials;   

initials.sort();

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

// 2 Задача на розворот числа:

const currentMaxValue = 4589;
let reverseMaxValue;

reverseMaxValue = currentMaxValue.toString().split('').reverse().join('');

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

// 3 Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:

const resultsArray = [1, 2, [3, [4]]];
let productOfArray;

const flatArr = resultsArray.flat(Infinity);

productOfArray = flatArr.reduce(
  (accumulator, currentValue) => accumulator * currentValue
);

console.log(productOfArray); // 24

