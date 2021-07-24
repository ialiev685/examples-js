const menuItemByClass = document.querySelector('.dom__item');
menuItemByClass.style.color = 'green'; //перекрасил в зеленых цвет
console.log('вернет один первый элемент:', menuItemByClass);

const menuItemsByClass = document.querySelectorAll('.dom__item');
console.log('вернет массив найденых элементов:', menuItemsByClass);

const valueInputbyClass = document.querySelector('.input');
console.log('содержание введеных данных inpu:t', valueInputbyClass.value);

//Свойство Node.textContent

const text = document.querySelector('.text');
console.log('выпод содержиние тега <p>:', text.textContent);
text.textContent = 'Welcome to Dom';
console.log('изменение текста внутри тега:', text.textContent);

//Свойство HTMLElement.style

const listByClass = document.querySelector('.dom');
console.log('список всех свойств:', listByClass.style);
listByClass.style.backgroundColor = 'salmon';

// Свойство Element.classList

console.log('элемент html:', listByClass);
console.log('список классов:', listByClass.classList);

console.log(
  'Ищем название класса dom - contains:',
  listByClass.classList.contains('dom'),
);
console.log('добавляем класс list - add', listByClass.classList.add('list'));
console.log(
  'Именяем название класса -replace:',
  listByClass.classList.replace('list', 'salmon'),
);
console.log(
  'если есть удалит, если нет добавит класс - toggle:',
  listByClass.classList.toggle('salmon'),
);
console.log(
  'если есть удалит, если нет добавит класс - toggle:',
  listByClass.classList.toggle('salmon'),
);
console.log('список классов:', listByClass.classList);

//атрибуты

const imageByClass = document.querySelector('.image');
console.log('обьект', imageByClass);
console.log('возвращает коллекцию атрибутов:', imageByClass.attributes);

console.log('наличие атрибута:', imageByClass.hasAttribute('src'));

console.log('значение атрибута - alt:', imageByClass.getAttribute('alt'));
imageByClass.setAttribute('alt', 'живопись');
console.log(
  'изменение значения атрибута - alt:',
  imageByClass.getAttribute('alt'),
);
imageByClass.removeAttribute('src');
console.log('удаление атрибута - src:', imageByClass);

// HTML5  - data - атрибуты

const btnSend = document.querySelector('button[data-action = "send"]');
console.log(
  'вывод значение через getAttribute:',
  btnSend.getAttribute('data-action'),
);
const btnData = btnSend.dataset.action;
console.log('вывод значение через dataset:', btnData);

//создание элементов

const title = document.createElement('h1'); //пишем название тега, без откр и закр тегов
title.textContent = 'Заголовок';
console.log('создание эелемента h1:', title); //<h1>Заголовок</h1>

const image = document.createElement('img');
image.setAttribute('src', '../image/eats.jpg');
image.setAttribute('alt', 'Еда');
image.style.width = '100px'; //уменьшим размер
console.log('создание эелемента img:', image); //<h1>Заголовок</h1>

// добавление созданного элемента

const container = document.querySelector('.container');
const btn = document.querySelector('.increment');
container.appendChild(title); //вставить в конец контейнера

container.insertBefore(image, btn); //вставить перед выбранным элементов в контейнере, btn

//

const list = document.querySelector('.list');
const item = document.createElement('li');
const item2 = document.createElement('li');

item.textContent = 'второй элемент';
list.append(item); //добавлеет в конце элемента
item2.textContent = 'нулевой элемент';
list.prepend(item2); //добавлеет в начало элемента
const titleClone = title.cloneNode(true);
list.before(titleClone); //добавляет  перед узлом
// list.replaceWith(image); //заменяет эелемент list другим эелементо imahe

// удаление

// item.remove(); //новый метод
// list.removeChild(item2); //старый метод

//клонирование
const li = document.querySelector('.list__item');
const itemClone = li.cloneNode(true);
//клинирование с параметром
//true c дочерними элементами, если false то без дочерних элементов

itemClone.textContent = 'клонированый первый  элемент';

// list.append(itemClone);
list.appendChild(itemClone);

// создание улов

const arrayLang = ['HTML', 'CSS', 'JavaScript', 'Node', 'REACT'];

const markup = arrayLang.reduce((acc, elem) => acc + `<li>${elem}</li>`, '');

const listLang = document.querySelector('.language');
listLang.innerHTML = markup;

//свойство, позволяет получить содержимое элемента
//Оно доступно как для чтения, так и для записи.

// !!! Изменение innerHTML полностью удалит и пересоздаст всех потомков контейнера.
//В результате мы получаем дополнительные затраты на сериализацию уже существующей разметки,
//что не очень хорошо.

//  Метод insertAdjacentHTML()
const arrayLang2 = ['PHP', 'VBASIC', 'VUE'];

const markup2 = arrayLang2.reduce((acc, elem) => acc + `<li>${elem}</li>`, '');

// listLang.insertAdjacentHTML('afterbegin', markup2);
listLang.insertAdjacentHTML('beforeend', markup2); //вставляет HTML
// Это позволяет избежать дополнительного этапа сериализации, делая его быстрее,
//чем непосредственная манипуляция innerHTML.

//'beforebegin' - перед element
//'afterbegin' - внутрь element, в самое начало контента
//'beforeend' - внутрь element, в самый конец контента
//'afterend' - после element

const listItemAlien = document.querySelector('.list__item');
const liistItemClone = listItemAlien.cloneNode(true);

listLang.insertAdjacentElement('afterbegin', liistItemClone); //вставляет  эелемент
listLang.insertAdjacentText('beforeend', 'вставил текст'); //вставляет  текст
