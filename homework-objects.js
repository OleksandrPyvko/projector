// 1 Задача про обчислення різниці часу

function periodOfTime(
  startDate = '01 Jan 1990',
  endDate = '15 Mar 2023',
  timeCounter = 'hours'
) {
  if (timeCounter === 'days') {
    const diffInDays =
      (Date.parse(startDate) - Date.parse(endDate)) / 1000 / 86400;
    return Math.abs(diffInDays);
  }
  if (timeCounter === 'hours') {
    const diffInHours =
      (Date.parse(startDate) - Date.parse(endDate)) / 1000 / 3600;
    return Math.abs(diffInHours);
  }
  if (timeCounter === 'minutes') {
    const diffInMinutes =
      (Date.parse(startDate) - Date.parse(endDate)) / 1000 / 60;
    return Math.abs(diffInMinutes);
  }
  if (timeCounter === 'seconds') {
    const diffInSeconds = (Date.parse(startDate) - Date.parse(endDate)) / 1000;
    return Math.abs(diffInSeconds);
  } else {
    return 'Wrong period format';
  }
}

console.log(periodOfTime('02 Aug 1985', '03 Aug 1985', 'minutes'));
console.log(periodOfTime('02 Aug 1985', '03 Aug 1985', 'hours'));
console.log(periodOfTime('02 Aug 1985', '03 Aug 1985', 'seconds'));
console.log(periodOfTime('31 Jan 2022', '03 Feb 2021', 'days'));
console.log(periodOfTime());

// 2

const priceData = {
  Apples: '23.4',
  BANANAS: '48',
  oRAngGEs: '48.7584',
};
function optimizer(data) {
  const formattedObj = {};
  for (const [key, value] of Object.entries(data)) {
    formattedObj[key.toLowerCase()] = Number(value).toFixed(2);
  }
  return formattedObj;
}
let updatedPriceData = optimizer(priceData);
console.log(updatedPriceData); // {apples: '23.40', bananas: '48.00', oranges: '48.76'}

// 3  recursive

function recursiveOddSumTo(number) {
  if (number <= 0) {
    return 0;
  }
  if (number % 2 === 0) {
    number--;
  }
  return number + recursiveOddSumTo(number - 2);
}

console.log(recursiveOddSumTo(1)); // 1
console.log(recursiveOddSumTo(10)); // 25

// 3.1 iterative

function iterativeOddSumTo(number) {
  let sum = 0;
  for (let i = 1; i <= number; i += 2) {
    sum += i;
  }
  return sum;
}

console.log(iterativeOddSumTo(1)); // 1
console.log(iterativeOddSumTo(10)); // 25
