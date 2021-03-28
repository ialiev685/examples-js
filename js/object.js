// создание
const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
};

// доступ
console.log('значение ключа hotel.name', hotel.name);
console.log('значение ключа через hotel["name"]', hotel['name']);

hotel.name = 'saraya resort and spa';

console.log('изменение значения ключа', hotel.name);

// удаление
hotel.adress = 'Egypt';
hotel.manager = 'Mahmud';

console.log('добавили ключи adress и manager', hotel);

delete hotel.manager;
console.log('удаление ключа manager', hotel);

// короткие свойства
let name = 'Silva Beach';
let stars = 4;
const es6Hotel = {
  name,
  stars,
  capacity: 200,
};
const es5Hotel = {
  name: name,
  stars: stars,
  capacity: 200,
};

console.log(
  'es5 - присвоение значений черезе глобальные переменные:',
  es5Hotel,
);
console.log(
  'es6 -  присвоение значений черезе  глобальные переменные:',
  es6Hotel,
);

// вычисляемые свойства
const key = 'person';
const getKey = function () {
  return 'age';
};

const fruit = {
  [key]: 'kiwi',
  [getKey()]: '1 month',
};

console.log('присвоение название ключей через глобальные переменные:', fruit);

// методы обьекта

const hotelTitanic = {
  greetES5: function () {
    console.log('es5: welcome');
  },

  greetES6() {
    console.log('es6: welcome');
  },
};

console.log(
  'значение ключа через функцию внутри по  es5',
  hotelTitanic.greetES5,
);
console.log(
  'значение ключа через функцию внутри по  es6',
  hotelTitanic.greetES6,
);

hotelTitanic.greetAdd = function () {
  console.log('Еще раз привет!');
};

hotelTitanic.greetAdd();
console.log(
  'добавление ключа и обьявление значения через глобальную функцию',
  hotelTitanic,
);

// Доступ к объекту через this

let HotelTurkish = {
  name: 'Titanic',
  capacity: 396,
  showName() {
    console.log(this.name);
  },
  changeCapacity(value) {
    this.capacity = value;
  },
};

HotelTurkish.showName();
HotelTurkish.changeCapacity(598);
console.log(
  'изменение  значения через вызов функции вне',
  HotelTurkish.capacity,
);
console.log(HotelTurkish);

// перебор обьекта

for (const key in hotel) {
  console.log('перебор обьекта hotel через for..in названия key:', key);
}
for (const key in hotel) {
  console.log(
    'перебор обьекта hotel через for..in значений ключей:',
    hotel[key],
  );
}

const keys = Object.keys(hotel);
const values = Object.values(hotel);
const entries = Object.entries(hotel);
console.log('ключи обьекта:', keys);
console.log('значения обьекта:', values);
console.log('массивы в массиве:', entries);

for (const key of keys) {
  console.log(
    'перебор значения value обьекта hotel через for..of массива keys:',
    hotel[key],
  );
}

for (const entry of entries) {
  const key = entry[0];
  const value = entry[1];
  console.log(
    `перебор двумерного массива entries обьекта hotel через for..of ${key} : ${value}`,
  );
}

const goods = {
  apple: 7,
  orange: 10,
  kiwi: 23,
  banana: 9,
};

let total = 0;
for (const value in goods) {
  total += goods[value];
}
console.log('перебор обьекта goods через for..in значений ', total);

total = 0;
const goodsSum = Object.values(goods);
for (const value of goodsSum) {
  total += value;
}

console.log('перебор массива values обьекта goods через  for..of', total);
