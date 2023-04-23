function Animals(name, age, habitat) {
  this.name = name;
  this.age = age;
  this.habitat = habitat;
}

Animals.prototype.speak = function () {
  console.log(` I'm ${this.name}`);
};

Animals.prototype.getAge = function () {
  console.log(this.age);
};

function Dog(name, age, habitat, breed) {
  Animals.call(this, name, age, habitat);
  this.breed = breed;
}

Dog.prototype = Object.create(Animals.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log(`${this.name} is barking `);
};

function Cat(name, age, habitat, breed) {
  Animals.call(this, name, age, habitat);
  this.breed = breed;
}

Cat.prototype = Object.create(Animals.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.meow = function () {
  console.log(`${this.name} is meowing `);
};

function Bird(name, age, habitat, wingspan) {
  Animals.call(this, name, age, habitat);
  this.wingspan = wingspan;
}

Bird.prototype = Object.create(Animals.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.fly = function () {
  console.log(`${this.name} is flying `);
};

function Raven(name, age, habitat, wingspan, flyingspeed) {
  Bird.call(this, name, age, habitat, wingspan);
  this.flyingspeed = flyingspeed;
}

Raven.prototype = Object.create(Bird.prototype);
Raven.prototype.constructor = Raven;

Raven.prototype.flyingspeed = function () {
  console.log(`${this.name} max speed is ${this.flyingspeed} `);
};

function Ostrich(name, age, habitat, wingspan, runningspeed) {
  Bird.call(this, name, age, habitat, wingspan);
  this.runningspeed = runningspeed;
}

Ostrich.prototype = Object.create(Bird.prototype);
Ostrich.prototype.constructor = Ostrich;

Ostrich.prototype.runningspeed = function () {
  console.log(`${this.name} is running with speed ${this.speed} `);
};
