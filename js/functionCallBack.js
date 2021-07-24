const functionCallback = message => {
  console.log('резульат обратной функции:', message);
};

const functionTop = callBack => {
  const string = 'hello world';
  callBack(string);
};

functionTop(functionCallback);

// абстрагированое повторение

// const descPrint = value => {
//   console.log('decscription do:', value);
// };

// const printValue = value => {
//   console.log(value);
// };

// const repeat = (n, action) => {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// repeat(5, descPrint);

// repeat(5, printValue);

// анонимыне call back фукция

const repeat = (n, action) => {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
};

const apples = [];

repeat(5, value => {
  apples.push(`apple ${value + 1}`);
});

console.log(apples);

// фильтрация массив

const filter = (array, check) => {
  const filtredElements = [];

  for (const element of array) {
    const passed = check(element);

    if (passed) {
      filtredElements.push(element);
    }
  }
  return filtredElements;
};

const fruits = [
  { name: 'banana', quantity: 120, isFresh: false },
  { name: 'kiwi', quantity: 300, isFresh: true },
  { name: 'mango', quantity: 50, isFresh: true },
];

const freshFruits = filter(fruits, fruit => fruit.isFresh);
console.log('фильтр массива по свежести через обратный вызов:', freshFruits);

const FruitsWithQuantity = filter(fruits, fruit => fruit.quantity > 70);
console.log(
  'фльтр массима по количеству через обратный вызов:',
  FruitsWithQuantity,
);

// стэк вызовов

/*теория */
