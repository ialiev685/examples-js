// КОНСТРУКТОРЫ
// функция-конструктор создавает новый обьект
const Hotel = function (name, stars, capacity) {
  this.name = name;
  this.stars = stars;
  this.capacity = capacity;
};

// вызываем функцию конструктор через оператор new
const hotel = new Hotel('Titanic resort & spa', 5, 200);

// получаем такой обьект
console.log(hotel);

// создадим еще один обект
const motel = new Hotel('У бабы Хали', 1, 3);

// получаем такой обьект
console.log(motel);

//добавление методов в обьект
const HotelTwo = function (name, stars, capacity) {
  this.name = name;
  this.stars = stars;
  this.capacity = capacity;
  this.guestCount = 0;

  this.greet = function (greetName) {
    console.log(`Hello ${greetName} welcome to  ${this.name}`);
  };

  this.addGuest = function (amount) {
    this.guestCount += amount;
  };

  this.removeGuest = function (amount) {
    this.guestCount -= amount;
  };
};

const hotelTwo = new HotelTwo('Saraya Makady Bay', 5, 300);
console.log(hotelTwo); //HotelTwo {name: "Saraya Makady Bay", stars: 5, capacity: 300, guestCount: 0, greet: ƒ, …}
hotelTwo.greet('Мухмут'); //Hello Мухмут welcome to  Saraya Makady Bay
hotelTwo.addGuest(50);
hotelTwo.removeGuest(10);
console.log(hotelTwo); //HotelTwo {name: "Saraya Makady Bay", stars: 5, capacity: 300, guestCount: 40, greet: ƒ, …}

// Управление магазином
const Manager = function (name = 'Manager', sales = 0) {
  this.name = name;
  this.sales = sales;

  this.sell = function (product) {
    this.sales += 1;
    return `Manager ${this.name} sold ${product}`;
  };
};

const alfred = new Manager('Alfred', 5);
console.log('было продано:', alfred.sales); //5
console.log('продал', alfred.sell('TV')); //Manager Alfred sold TV
console.log('теперь продано:', alfred.sales); //6

const ildus = new Manager('Ildus', 10);
console.log(ildus.sales); //5
console.log(ildus.sell('TV')); //Manager Ildus sold TV
console.log(ildus.sell('gandom')); //Manager Ildus sold gandom
console.log(ildus.sales); //7

// ПРОТОТИПЫ

const dog = { eats: true };
const animal = { barks: true };

dog.__proto__ = animal; //animal протип обьекта dog

console.log(' значение свойства у dogs', dog.eats); //true
console.log('взял значение свойства у animal', dog.barks); //true

//  Object.create()
const mouse = { eats: true };
const cat = Object.create(mouse); //создание протатипа
cat.meows = true;

console.log('кошка мяучит', cat.meows);
console.log('кошка кушает', cat.eats);

console.log(cat);

// Object.prototype.hasOwnProperty()

for (const key in cat) {
  console.log('перебор через for...in, возвращает не свои ключи тоже', key);
}
// перебор через for...in, возвращает не свои ключи тоже meows
// OOP.js:93 перебор через for...in, возвращает не свои ключи тоже eats

for (const key in cat) {
  if (!cat.hasOwnProperty(key)) continue;
  console.log('перебор через for...in c проверкой на собственность', key);
  //перебор через for...in c проверкой на собственность meows
}

const catKeys = Object.keys(cat);
console.log('возращает только свои ключи', catKeys);

// Function.prototype  - динамическое создание протатипа

const Guest = function (name, room) {
  this.name = name;
  this.room = room;
};

Guest.prototype.showGuestInfo = function () {
  console.log(`name:${this.name}, room:${this.room}`);
};

// console.log(Guest.prototype);
const marat = new Guest('Марат', 51);
console.log(marat);
const aidar = new Guest('Айдар', 57);
console.log(aidar);
marat.showGuestInfo(); // name:Марат, room:51
aidar.showGuestInfo(); // name:Айдар, room:57

// Свойство constructor

const GuestTwo = function (name, room) {
  this.name = name;
  this.room = room;
};

GuestTwo.prototype = {
  constructor: GuestTwo,
};

//  Наследование и конструкторы

const Hero = function (name, xp) {
  this.name = name;
  this.xp = xp;
};

// Теперь у нас есть конструктор базового класса героя,
// добавим в prototype какой-то метод.

Hero.prototype.gainXp = function (amount) {
  console.log(`${this.name} получил ${amount} опыта`);
  this.xp += amount;
};

const rembo = new Hero('Рэмбо', 100);
console.log('характеристики рэмбо', rembo);
rembo.gainXp(57);
console.log('обновленные характеристики рэмбо', rembo);

const Warrior = function (name, xp, weapon) {
  /*
   * Во время выполнения функции Warrior вызываем функцию Hero
   * в контексте объекта создающегося в Warrior, а так же передаем
   * аргументы для инициализации полей this.name и this.xp
   *
   * this это будущий экземпляр Warrior
   */

  Hero.call(this, name, xp);

  // Тут добавляем новое свойство - оружие
  this.weapon = weapon;
};

Warrior.prototype = Object.create(Hero.prototype);

// Не забываем добавить в Warrior.prototype свойство constructor
Warrior.prototype.constructor = Warrior; // ??? дочитать

Warrior.prototype.attack = function () {
  console.log(`${this.name} атакует ${this.weapon}`);
};

const maximus = new Warrior('Максимум', 0, 'мечь');
console.log(Hero.prototype);
maximus.attack();
maximus.gainXp(150);
