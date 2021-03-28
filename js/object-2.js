// операция spread
// Распыление аргументов

const temp = [2, 4, 5, 15, 24, -15];
console.log('минимальное число:', Math.min(...temp));

// Распыление массивов

const fruits = ['banana', 'kiwi', 'orange', 'apple', 'mango'];
const copyFruits = [...fruits];

console.log(
  'новый массив:',
  copyFruits,
  'сравнение массивов:',
  fruits === copyFruits,
);

const sliceCopyFruits = fruits.slice();
console.log('копия через метод slice()', sliceCopyFruits);

// добавить в массив

const addFruits = [...fruits, 'grapefruit'];
console.log('добавили в массив', addFruits);

// соеденить массивы

const vegetables = ['tomato', 'cucumber', 'potato'];
const unitedArray = [...fruits, ...vegetables];
console.log('соеденеие массива фрукто и овощец', unitedArray);

//вырезка элемента из массива

const modernFruits = [...fruits.slice(0, 2), ...fruits.slice(3)];
console.log('вырезали orange', modernFruits);

// обновление элементов в массиве

const modernFruitsChange = [
  ...fruits.slice(0, 3),
  'grapefruit',
  ...fruits.slice(4),
];
console.log('вырезали apple', modernFruitsChange);

// распыление обьектов

const a = { x: 'apple', y: 'banana' };
const b = { x: 'orange', z: 'mango' };

const c = Object.assign({}, a, b);

console.log('распыли(через babel) обьект двух обьектов в один:', c);

const d = { ...a, ...b };
console.log('распыли(через spread) обьект двух обьектов в один:', c);

const e = { x: 'kiwi', ...a, ...b, z: 'papaya' };
console.log('добавили в обьект новые свойства', e);

// операция rest

const func = (number, ...array) => {
  console.log('первое число:', number);
  console.log('массив переданное через rest:', array);
};

func(10, 1, 2, 3);

// диструктуризация обьектов

const hostel = {
  name: 'dog',
  stars: 1,
  capacity: 20,
};

const { name, stars, capacity } = hostel;
console.log('присвоение значения обьекта переменным:', name, stars, capacity);
// const {
//   name = 'hotel',
//   stars = '5',
//   capacity = '50',
//   adress = 'street avenu 29',
// } = hostel;
// console.log('если  ключи отсутсвуют в обьекте:', name, stars, capacity, adress);

const hotel = {
  name: 'Titanic',
  stars: 5,
  capacity: 500,
};
const { name: hotelName, stars: hotelStars, capacity: hotelCapacity } = hotel;
console.log(
  'переопределние имен перменных',
  hotelName,
  hotelStars,
  hotelCapacity,
);

const hotelTurkish = {
  caption: 'Paraise',
  stars: 5,
  capacity: 300,
};

const { caption, ...rest } = hotelTurkish;
console.log(
  `частичное присвоение значений через name: ${name} и ...rest: `,
  rest,
);

// Деструктуризация массивов

const rgb = [255, 170, 336];

const [red, green, blue, alpha = 3] = rgb;
console.log(
  `диструктуризация массивов red: ${green}, : ${green}, blue: ${blue}, alpha: ${alpha}`,
);

const colors = ['purple', 'green', 'black', 'yellow'];
const [color, ...arrayColors] = colors;
console.log(
  `присвоение первого элемента через переменную color: ${color}, вторую через ...rest: ${arrayColors}`,
);

const [, , , yellow] = colors;
console.log(`берем последнее значение обьекта colors: ${yellow}`);
