//  События
const fnFirst = () => alert('вы нажали на кнопку отправить.'); //вызываемая функция для обработки события
const fnSecond = () => alert('еще одно уведомление'); //можно вешать два события

const btn = document.querySelector('.btn');
btn.addEventListener('click', fnFirst);
btn.addEventListener('click', fnSecond);

//  addEventListener и this

const user = {
  name: 'Mango',
  showName() {
    console.log(this);
    // this будет ссылаться на button если использовать showName как callback
    console.log(`My name is: ${this.name}`);
    // тут undefined так как поля name у button нет
  },
};

user.showName(); //работает - My name is: Mango

// btn.addEventListener('click', user.showName); // не работает т к this принадлежит btn у которого нет name
btn.addEventListener('click', user.showName.bind(user)); // работает

// Метод elem.removeEventListener()

const addBtn = document.querySelector('button[data-action="add"]');
const removeBtn = document.querySelector('button[data-action="remove"]');
const btnClickMe = document.querySelector('#btn-second');

const handleClick = () => {
  alert('CLICK EVENT LISTENER ALERT!');
};

addBtn.addEventListener('click', () => {
  btnClickMe.addEventListener('click', handleClick);
});

removeBtn.addEventListener('click', () => {
  //?????????????????????????????
  btnClickMe.removeEventListener('click', handleClick);
});

// Объект события
const fnThree = event => {
  //посмотреть обьект event мыши
  console.log('event - обьект целиком клика мышки: ', event); //откройте консоль чтобы увидеть весь объект целиком

  console.log('event type: ', event.type); // event type:  click

  // будет window, так как мы используем стрелочную функцию,
  // которая использует внешний контекст
  // Если использовать обычную функцию то this будет самим элементом
  // button и равен currentTarget
  console.log('this: ', this);
  console.log('target: ', event.target); // <button id="btn">CLICK ME!</button>
  console.log('event.currentTarget:', event.currentTarget);
};

btnClickMe.addEventListener('click', fnThree);

// Действия браузера по умолчанию

const form = document.querySelector('.form');

const fnFour = event => {
  event.preventDefault(); // Предотвращаем поведение перезагрузки
  alert('сообщение отправлено');
};

form.addEventListener('submit', fnFour);

//  События клавиатуры

const btnClear = document.querySelector('.claar');
const logList = document.querySelector('.log-list');

const callObject = event => {
  console.log('event - обьект целиком клавиатуры', event);
};

const logMessage = ({ type, code, key }) => {
  const text = document.createElement('p');
  text.textContent = `type: ${type} | code: ${code} | key: ${key}`;
  //   logList.append(text);
  logList.appendChild(text);
};

window.addEventListener('keydown', logMessage);
window.addEventListener('keyup', logMessage);

window.addEventListener('keydown', callObject); //посмотреть обьект event клавиатуры

//  События элементов форм

const input = document.querySelector('.login');
const log = document.activeElement;
console.log(log);
//document.activeElement. ????????????????
//elem.focus()

//elem.blur()

//  Загрузка документа

const callback = () => {
  console.log(
    'страница загрузилась, скрипты выполены, можно вешать обработчик',
  );
};
document.addEventListener('DOMContentLoaded', callback);

//load
// Событие срабатывает на window, когда загружается вся страница, включая ресурсы на ней — стили, картинки и т.д. Его используют редко, поскольку обычно нет нужды ждать загрузки всех ресурсов.

// unload
// Когда человек уходит со страницы или закрывает окно, на window срабатывает событие unload. В нём можно сделать что-то, не требующее ожидания, например закрыть вспомогательные popup-окна, но отменить сам переход нельзя.
//Событие почти не используется — мало что можно сделать зная, что вкладка браузера сейчас закроется.

// beforeunload
// Если посетитель инициировал переход на другую страницу или нажал закрыть окно, то обработчик beforeunload может приостановить процесс и спросить подтверждение.
