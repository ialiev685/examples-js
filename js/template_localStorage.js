//  Шаблоны

const source = document.querySelector('#menu-template').innerHTML.trim();
console.log('шаблон:', source);

const template = Handlebars.compile(source);
console.log('шаблон преобразованный в функцию:', typeof template);

const menuData = {
  title: 'Eat it createElement, templates rule!',
  items: ['Handlebars', 'LoDash', 'Pug', 'EJS', 'lit-html'],
};

const markup = template(menuData);
console.log('результат функции:', markup);

//  JSON parse и stringify

const human = { name: 'ilfat', age: 36, isHappy: true };

const jsonFormatTo = JSON.stringify(human);
console.log('преобразование в JSON.stringify:', jsonFormatTo);
const jsonFormatFrom = JSON.parse(jsonFormatTo);
console.log('преобразование в JSON.parse', jsonFormatFrom);

//  localStorage
console.log('Хранилище localStorage:', window.localStorage);
// запись
localStorage.setItem('name', 'Ilfat');

console.log('Хранилище localStorage:', window.localStorage);

const jsonToHuman = JSON.stringify(human);
localStorage.setItem('human', jsonToHuman);

console.log('Хранилище localStorage:', window.localStorage);
// чтение
const takeData = localStorage.getItem('human');
const parseData = JSON.parse(takeData);
console.log('Распарсенные данные:', parseData);
//  удаление
localStorage.removeItem('name');
localStorage.removeItem('humane');
console.log('Хранилище localStorage:', window.localStorage);
//очистить хранилище
// localStorage.clear();
console.log('Хранилище localStorage:', window.localStorage);
