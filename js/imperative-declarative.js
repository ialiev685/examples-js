// императивный подход

const numbers = [1, 2, 3, 4, 5];
let filterNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > 3) {
    filterNumbers.push(numbers[i]);
  }
}

console.log('отфильтрованные числа по императивному подходу', filterNumbers);

// декларированный подход

filterNumbers = [];

filterNumbers = numbers.filter(value => {
  return value > 3;
});

console.log('отфильтрованные числа по декларированному подходу', filterNumbers);

// функции с побочным эфектами

const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};

dirtyMultiply(numbers, 2);
console.log('мутация массив за счет гразной функции', numbers);

// чистая функция

const numbersDouble = [1, 2, 3, 4, 5];

const pureMultiple = (array, value) => {
  const result = [];

  for (let i = 0; i < array.length; i += 1) {
    result.push(array[i] * value);
  }
  return result;
};

const numbersChange = pureMultiple(numbers, 2);
console.log('Не произошло мутации исходных данных', numbersDouble);
console.log(
  'Функция вернула новый массив с измененными даннымии',
  numbersChange,
);

// метод массива forEach

numbers.forEach((item, index) => {
  console.log(`forEach: index ${index}, value ${item}`);
});

// метод массива map

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

const arrayNumbersChange = arrayNumbers.map(item => {
  return item * 3;
});
console.log(
  `map: исходный массив ${arrayNumbers} и новый массив ${arrayNumbersChange}`,
);

const users = [
  { name: 'Alfred', isActive: true },
  { name: 'Ildus', isActive: false },
  { name: 'Tagir', isActive: true },
  { name: 'Firdus', isActive: false },
];

const names = users.map(item => item.name);
console.log(`map: список имен в новом массиве ${names}`);

// метод массива filter

const checkNumbers = arrayNumbers.filter(item => item > 3 && item < 7);
console.log(`filter: отфильтрованные числа новом массиве ${checkNumbers}`); //4,5,6

const checkUsers = users.filter(item => item.isActive);
console.log(`filter: отфильтрованные активные имена ${checkUsers}`);

// метод массива find

const arrayString = ['cherry', 'apple', 'kiwi', 'banana', 'papaya'];

const stringFind = arrayString.find(item => item === 'banana');

console.log('find: фрукт', stringFind);

const players = [
  { id: '002', name: 'John' },
  { id: '005', name: 'David' },
  { id: '007', name: 'Arnold' },
];

const player = players.find(item => item.id === '005');
console.log('find: игрок', player);

const fnPlayer = (arr, id) => arr.find(item => item.id == id);

console.log('find: игрок через функцию', fnPlayer(players, '002'));

// метод массива every и some

const isBigEnough = value => value > 18;

console.log(
  'every: все число должны проходить',
  [25, 23, 58, 45, 69, 47].every(isBigEnough), //true
);
console.log(
  'every: все число должны проходить',
  [25, 23, 58, 5, 69, 47].every(isBigEnough), //false
);

console.log(
  'some: хотя бы одно число должно проходить',
  [25, 23, 58, 5, 69, 47].some(isBigEnough), //true
);

const fruits = [
  { name: 'banana', amount: 10 },
  { name: 'kiwi', amount: 5 },
  { name: 'papaya', amount: 0 },
];

const allAvailable = fruits.every(item => item.amount > 0);
console.log('every: все ли в наличии', allAvailable);
const anyAvailable = fruits.some(item => item.amount > 0);
console.log('some: хоят бы одно в наличии', anyAvailable);

// метод массива reduce

const numbersThree = [1, 1, 1, 1];

const sum = numbersThree.reduce((acc, item) => acc + item, 3);
console.log('reduce:', sum);
// аккумулято асс + значение item, 3 - первоначальное значение, прибавляется к аккумулятору до перебора

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 22, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const countLikes = tweets => tweets.reduce((acc, item) => acc + item.likes, 0);
console.log('reduce: сумма лайков', countLikes(tweets)); //52

const getTags = tweets =>
  tweets.reduce((acc, item) => {
    acc.push(...item.tags);
    return acc;
  }, []);

const tags = getTags(tweets);
console.log('reduce: список тэгов', tags);

const getTagsStats = (acc, item) => {
  if (!acc.hasOwnProperty(item)) {
    acc[item] = 0;
  }
  acc[item] += 1;

  return acc;
};

const tagsCount = tags.reduce(getTagsStats, {});
console.log('reduce: подсчет уникальных тэгов', tagsCount); //{js: 3, nodejs: 3, html: 2, css: 2, react: 2}

// метод массива sort

const flowers = ['ромашка', 'роза', 'гвоздика', 'тюльпан', 'пион', 'гербер'];

console.log('до сортировки', flowers);
console.log('после сортировки', flowers.sort());

// свой порядок sort
const usersTwo = [
  { name: 'Mango', daysActive: 15 },
  { name: 'Poly', daysActive: 4 },
  { name: 'Ajax', daysActive: 27 },
  { name: 'Chelsey', daysActive: 2 },
];

const sortByActiveDays = (a, b) => {
  console.log(a.daysActive - b.daysActive);
};

console.log(usersTwo.sort(sortByActiveDays)); //??? дописать после конспекта

//цепочка методов массива sort

const numbersFour = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbersFour
  .filter(item => item % 2 === 0)
  .map(item => item * 2)
  .reverse();
console.log('после цепочки методов, filter, map, reverse', result);
