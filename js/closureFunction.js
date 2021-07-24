// замыкание
const createCounter = () => {
  let privateValue = 0;

  const increment = () => {
    privateValue += 1;
    console.log('изменение переменной при замыкании', privateValue);
  };

  return {
    increment,
  };
};

const counterA = createCounter();
counterA.increment();
counterA.increment();
counterA.increment();

const counterB = createCounter();
counterB.increment();
counterB.increment();
counterB.increment();

const makeShef = function (name) {
  /*
   * Параметр name это локальная переменная для функции makeShef.
   * Это значит что она будет доступна функции makeDish через замыкание.
   */
  return function makeDish(dish) {
    console.log(`${name} is cooking ${dish}`);
  };
};

const mango = makeShef('Mango');
mango('apple pie'); // Mango is cooking apple pie
mango('beef stew'); // Mango is cooking beef stew

const poly = makeShef('Poly');
poly('pancakes'); // Poly is cooking pancakes
poly('eggs and bacon'); // Poly is cooking eggs and bacon

// Контекст исполнения (this)

const petya = {
  name: 'Петя',
  showThis() {
    console.log(this);
  },
  showName() {
    console.log('вызов свойствв в обьекте', this.name);
  },
};
petya.showName();
petya.showThis();

const fn = () => {
  console.log('this в глобальной видимости', this);
};

fn();

const showThis = () => console.log('this in showThis', this);

const user = { name: 'Petya' };

user.showContext = showThis;

user.showContext();

const hotel = {
  name: 'Resort Hotel',
  showThis() {
    console.log('вызов this в функциях обратого вызова', this);
  },
};

const fn2 = callBack => {
  callBack();
};

fn2(hotel.showThis);
// ---
const showThis2 = () => {
  console.log('this in showThis: ', this);
};

showThis2(); // this in showThis: window

const fruit = { name: 'Mango' };
fruit.showContext2 = showThis2;

fruit.showContext2(); // this in showThis:

// ---

const color = {
  name: 'green',
  showThis() {
    const fn = () => {
      console.log('this in fn', this);
    };
    fn();
    console.log('this in showThis', this);
  },
};

color.showThis();

// методы функций call, apply, bind

const greet = function () {
  return `welcome to ${this.name} hotel`;
};

const Hotel = {
  name: 'Saraya',
};

console.log('Метод функции call:', greet.call(Hotel));
console.log('Метод функции apply:', greet.apply(Hotel));
// call и аргументы

const greet2 = function (quest, stars) {
  return `${quest} welcome to ${stars}-star ${this.name} !`;
};

const motel = { name: 'У Резеды' };
const hostel = { name: 'Срань господня' };

console.log('Метод функции call:', greet2.call(motel, 'Петр', 3));
console.log('Метод функции call:', greet2.call(hostel, 'Федр', 2));

// apply и аргументы

const greet3 = function (quest, stars) {
  return `${quest} welcome to ${stars}-star ${this.name} !`;
};

const house = { name: 'У Радика' };
const villa = { name: 'У Марата' };

console.log('Метод функции apply:', greet3.apply(house, ['Ильдус', 3]));
console.log('Метод функции apply:', greet3.apply(villa, ['Альфред', 2]));

// bind

const home = {
  adress: 'Kul Gali 36-36',

  showThis() {
    console.log(this);
  },
};

const fun = function (callBack) {
  callBack();
};

fun(home.showThis.bind(home));
