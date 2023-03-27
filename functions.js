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

//5

let me = {
  name: 'Oleksandr',
  city: 'Yahotyn',
  age: 30,
  born: '08.01.1993',
  gender: 'male',

  allData() {
    return console.log('All information', {
      name: this.name,
      city: this.city,
      age: this.age,
      gender: this.gender,
      born: this.born,
    });
  },

  myname() {
    return console.log(`My name is ${this.name}`);
  },

  bornInfo() {
    return console.log(`I was born in ${this.born} in ${this.city} city`);
  },
};

me.myname();
me.bornInfo();
me.allData();

// 6

let securedMyName = me.myname.bind(me);
let securedBornInfo = me.bornInfo.bind(me);
let securedAllData = me.allData.bind(me);

setTimeout(securedMyName, 5000);
setTimeout(securedBornInfo, 5000);
setTimeout(securedAllData, 5000);

//7

function someFunction(a, b) {
  console.log(a + b);
}

function decorator(func, seconds) {
  console.log('Chill out, you will get you result in 5 seconds');
  return function (...args) {
    setTimeout(() => {
      func.apply(this, args);
    }, seconds * 1000);
  };
}

let slowedSomeFunction = decorator(someFunction, 5);

slowedSomeFunction(2, 3);
