//Iterator
const createiterator = () => {
  let number = 1;
  return {
    next: () => {
      if (number > 100) {
        return { done: true };
      } else if (number % 15 === 0) {
        number++;
        return 'FizzBuzz';
      } else if (number % 3 === 0) {
        number++;
        return 'Fizz';
      } else if (number % 5 === 0) {
        number++;
        return 'Buzz';
      } else {
        number++;
        const result = { value: number, done: false };
        return result.value;
      }
    },
  };
};

const iterator = createiterator();

let counter = 0;
while (counter < 100) {
  console.log(iterator.next());
  counter++;
}

//Generator function

function* FizzBuzz() {
  for (let i = 1; i < 100; i++) {
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

let result = generator.next();
while (!result.done) {
  console.log(result.value);
  result = generator.next();
}

// Random number generator
function* random(max, quantity) {
  for (let i = 0; i < quantity; i++) {
    yield Math.floor(Math.random() * max);
  }
}

const randomNumbers = random(100, 5);

for (let numbers of randomNumbers) {
  console.log(numbers);
}
