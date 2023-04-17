class Animal {
  constructor(name, age, type) {
    this._name = name;
    this._age = age;
    this._type = type;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get age() {
    return this._age;
  }

  set age(age) {
    this._age = age;
  }

  get type() {
    return this._type;
  }

  set type(type) {
    this._type = type;
  }

  eat(food) {
    console.log(`${this._name} is eating ${food}.`);
  }

  sleep() {
    console.log(`${this._name} is sleeping.`);
  }

  get sound() {
    return '';
  }

  set sound(sound) {
    this._sound = sound;
  }
  #isHungry = true;
}

class Cat extends Animal {
  constructor(name, age, breed) {
    super(name, age, 'cat');
    this._breed = breed;
  }

  get sound() {
    return 'Meow';
  }

  #isDrivingCar = false;

  meow() {
    console.log(`${this._name} says ${this.sound}.`);
  }

  drive() {
    this.#isDrivingCar = true;
    console.log(`${this._name} is driving a car.`);
  }

  chase(mouse) {
    console.log(`${this._name} is chasing the ${mouse}.`);
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age, 'dog');
    this._breed = breed;
  }

  get sound() {
    return 'Woof';
  }

  #isTrained = false;

  bark() {
    console.log(`${this._name} says ${this.sound}.`);
  }

  train() {
    this.#isTrained = true;
    console.log(`${this._name} is trained.`);
  }

  chase(ball) {
    console.log(`${this._name} is chasing the ${ball}.`);
  }
}

class Fish extends Animal {
  constructor(name, age, type, waterType) {
    super(name, age, type);
    this._waterType = waterType;
  }

  get sound() {
    return 'Буль';
  }

  #isSwiming = false;

  swim() {
    this.#isSwiming = true;
    console.log(`${this._name} is swiming.`);
  }

  breathe() {
    console.log(`${this._name} is breathing underwater.`);
  }

  fly() {
    console.log(`${this._name} is swimming, not flying!`);
  }
}

class Bird extends Animal {
  constructor(name, age, type, wingspan) {
    super(name, age, type);
    this._wingspan = wingspan;
  }

  get sound() {
    return 'Tweet';
  }

  #isFlying = false;

  chirp() {
    console.log(`${this._name} says ${this.sound}.`);
  }

  takeOff() {
    this.#isFlying = true;
    console.log(`${this._name} is taking off.`);
  }

  fly() {
    this.#isFlying = true;
    console.log(`${this._name} is flying!`);
  }
}

class Mammal extends Animal {
  constructor(name, age, type, furColor) {
    super(name, age, type);
    this._furColor = furColor;
  }
}
