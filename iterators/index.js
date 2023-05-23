// //Iterator
const createIterator = () => {
  let number = 0;
  return {
    next: () => {
      number++;
      if (number > 100) {
        return { done: true };
      }
      if (number % 15 === 0) {
        return {value: 'FizzBuzz', done: false };
      }
      if (number % 3 === 0) {
        return { value: 'Fizz', done: false };
      }
      if (number % 5 === 0) {
        return { value: 'Buzz', done: false };
      }
      return { value: number, done: false };
    },
  };
};

const iterator = createIterator();

const iterate = () => {
  const currentValue = iterator.next();
  if (!currentValue.done) { 
    console.log(currentValue);
    iterate(); 
  }
}
 
iterate();

//Generator function

function* FizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      yield 'FizzBuzz';
    } else if (i % 3 === 0) {
      yield 'Fizz';
    } else if (i % 5 === 0) {
      yield 'Buzz';
    } else {
      yield i;
    }
  }
}

const generator = FizzBuzz();

const iterate = () => {
  let currentValue = generator.next();
  if (!currentValue.done) {
    console.log(currentValue);
    iterate();
  }
};

iterate();

// // Random number generator
function* random(max, quantity) {
  for (let i = 0; i < quantity; i++) {
    yield Math.floor(Math.random() * max);
  }
}

const randomNumbers = random(100, 5);

for (let numbers of randomNumbers) {
  console.log(numbers);
}
