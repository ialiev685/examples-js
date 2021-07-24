// КЛАССЫ;

class Guest {}
console.log(typeof Guest); //function
console.log(Guest.prototype); //{constructor: ƒ}

const guest = new Guest();
console.log(guest); //Guest {}

class Client {
  //анаорн функции-конструктор
  constructor({ name, numberRoom }) {
    this._name = name;
    this.room = numberRoom;
  }

  // Аналог Guest.prototype.getFullInfo
  // остальные методы записываются в Guest.prototype
  getFullinfo() {
    console.log(`${this.name} room number ${this.room}`);
  }

  // геттеры и сеттеры
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

const client = new Client({ name: 'Ильфат', numberRoom: 513 });
console.log('информация о клиенте', client);
client.getFullinfo(); //вызов метода

// console.log('проверка принаджедности к классу', client instanceof Client);
// console.log('проверка принаджедности к классу', client instanceof Object);
client.name = 'Альфред'; //изменения имени через set

console.log(client.name); //вызов имени через get
client.getFullinfo(); //вызов метода
class Calc {
  //М ожно создавать собственные свойства класса
  // и собственные методы класса для вызова по имени класса без создания объекта.
  // Такие свойства и методы называют статическими.
  // Для их создания в классе перед свойством или
  // методом нужно добавить служебное слово static.
  constructor() {}

  // Статический метод
  static get PI() {
    return 3.14;
  }

  // Статический метод
  static mult(...args) {
    let sum = 0;
    for (let elem of args) {
      sum += elem;
    }
    return sum;
  }
}

console.log(Calc.PI); // 3.14
console.log(Calc.mult(2, 4, 1)); // 7

// НАСЛЕДОВАНИЕ

class Animal {
  constructor(name) {
    this.name = name;
  }
  move() {
    console.log(`I ${this.name}, am moving`);
  }
}
const tuzik = new Animal('Тузик');
console.log(tuzik);

// Ключевое слово extends указывает на родительский класс,
// чьи свойства будут унаследованы.
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    //В конструкторе потомка мы обязаны вызвать super()
    //до первого обращения к ключевому слову this.
    //До вызова super() не существует this,
    //так как по спецификации в этом случае именно super инициализирует this.
    this.breed = breed;
  }

  bark() {
    console.log('woof!');
  }

  moveAndMakeSound() {
    super.move(); //вызов родительского метода
    this.bark();
  }
}

const muhtar = new Dog('Мухтар', 'овчарка');

muhtar.move(); // I, Mango, am moving!
muhtar.bark(); // woof!
muhtar.moveAndMakeSound(); // I, Mango, am moving! woof!
console.log(muhtar);
