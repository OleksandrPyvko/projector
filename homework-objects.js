// 1 Задача про обчислення різниці часу


function periodOfTime(startDate, endDate, timeCounter) {
  if (timeCounter === 'days') {
    const diffInDays =
      (Date.parse(startDate) - Date.parse(endDate)) / 1000 / 86400;
    return Math.abs(diffInDays);
  }
  if (timeCounter === 'seconds') {
    const diffInSeconds = (Date.parse(startDate) - Date.parse(endDate)) / 1000;
    return Math.abs(diffInSeconds);
  } else {
    // Додав щоб не розписувати за місяці роки і т.д.
    return 'Wrong period format';
  }
}

console.log(periodOfTime('02 Aug 1985', '03 Aug 1985', 'days'));
console.log(periodOfTime('02 Aug 1985', '03 Aug 1985', 'seconds'));
console.log(periodOfTime('1993 Jan 8', '13 mar 2023', 'days'));

// 2 Задача про перетворення об'єкту

const priceData = {
  Apples: '23.4',
  BANANAS: '48',
  oRAngGEs: '48.7584',
};
function optimizer(data) {
  // тут ваш код
  const optimized = {};
  for (const prop in data) {
    const lowerKey = prop.toLowerCase();
    const fixedValue = data[prop].toFixed(2);
    optimized[lowerKey] = fixedValue;
  }
  return optimized;
}
let updatedPriceData = optimizer(priceData);
console.log(updatedPriceData); // {apples: '23.40', bananas: '48.00', oranges: '48.76'}
