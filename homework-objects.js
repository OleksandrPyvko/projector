// 1 Задача про обчислення різниці часу

function periodOfTime(
  startDate = '01 Jan 1990',
  endDate = '15 Mar 2023',
  timeCounter = 'hours'
) {
  const timePeriod = {
    days: 86400,
    hours: 3600,
    minutes: 60,
    seconds: 1,
  };

  const starting = Date.parse(startDate);
  const ending = Date.parse(endDate);
  const diffInSeconds = Math.abs(starting - ending) / 1000;
  const difference = diffInSeconds / timePeriod[timeCounter];
  return difference;
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
  const rrr = Object.entries(data)
    .map(([key, value]) => [key.toLowerCase(), Number(value)])
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value.toFixed(2) }), {});
  return rrr;
}
updatedPriceData = optimizer(priceData);

console.log(updatedPriceData); // {apples: '23.40', bananas: '48.00', oranges: '48.76'}

// 3  recursive

function recursiveOddSumTo(number) {
  const newNumber = number % 2 === 0 ? number - 1 : number;
  if (newNumber <= 0) {
    return 0;
  }
  return newNumber + recursiveOddSumTo(newNumber - 2);
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
