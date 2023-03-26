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

// 3 Sorting

const movies = [
  {
    movieName: 'The Thing',
    releaseYear: 1982,
    directedBy: 'Carpenter',
    runningTimeInMinutes: 109,
  },
  {
    movieName: 'Aliens',
    releaseYear: 1986,
    directedBy: 'Cameron',
    runningTimeInMinutes: 137,
  },
  {
    movieName: 'Men in Black',
    releaseYear: 1997,
    directedBy: 'Sonnenfeld',
    runningTimeInMinutes: 98,
  },
  {
    movieName: 'Predator',
    releaseYear: 1987,
    directedBy: 'McTiernan',
    runningTimeInMinutes: 107,
  },
];

console.log(movies.sort(byProperty('releaseYear', '>')));
console.log(movies.sort(byProperty('runningTimeInMinutes', '<')));
console.log(movies.sort(byProperty('movieName', '<')));

function byProperty(property, direction) {
  return function (a, b) {
    if (direction === '>') {
      return a[property] > b[property] ? -1 : 1;
    } else if (direction === '<') {
      return a[property] < b[property] ? -1 : 1;
    }
  };
}

// 4 Detonator timer

detonatorTimer(3);

function detonatorTimer(delay) {
  //   if (delay === 0) {
  //     console.log('BOOM!');
  //   }
  //   if (delay > 0) {
  //     console.log(delay);
  //     setTimeout(() => {
  //       detonatorTimer(delay - 1);
  //     }, 1000);
  //   }
  // }

  const intervalTimer = setInterval(() => {
    if (delay > 0) {
      console.log(delay);
      delay--;
    } else {
      console.log('BOOM!');
      clearInterval(intervalTimer);
    }
  }, 1000);
}
