// c Сашой Репетой

// Прототипы

const objC = {
  z: 5,
};

console.log('objC', objC);

const objB = Object.create(objC);
objB.y = 2;

console.log('objB', objB);

const objA = Object.create(objB);
objA.x = 1;

console.log('objA', objA);

// создание обьекта "автомобиль"

const Car = function ({ brand, model, price } = {}) {
  // const { brand, model, price } = config;
  //config - параметр по умолчанию если ничего не прийдет

  this.brand = brand;
  this.model = model;
  this.price = price;
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

const myCar = new Car({ brand: 'audi', model: 'Q7', price: 3500 });
console.log(myCar);

myCar.changePrice(10533);
console.log(myCar);
