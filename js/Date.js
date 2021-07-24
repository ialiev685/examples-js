//Date

const date = new Date();
console.log(date);

const date2 = new Date('june 6 1985');
console.log(date2);

// 7 аргументов

//new Date(year, month, date, hours, minutes, seconds, ms);

const date3 = new Date(1985, 5, 6); //c 0 идет месяц
console.log(date3);

//unix

const date4 = new Date(551656151651); //Fri Jun 26 1987 01:49:11
console.log('дата из милисекунд:', date4);

console.log('прошло милисекунд с 1970:', Date.now()); // сколько прошло милисекунд с 1970

// Методы Date
// Геттеры

// возвращает день месяца от 1 до 31
console.log('getDate(): ' + date.getDate());

// возвращает день недели от 0 до 6
console.log('getDay(): ' + date.getDay());

// возвращает месяц от 0 до 11
console.log('getMonth(): ' + date.getMonth());

// возвращает год из 4 цифр
console.log('getFullYear(): ' + date.getFullYear());

// возвращает час
console.log('getHours(): ' + date.getHours());

// возвращает минуты
console.log('getMinutes(): ' + date.getMinutes());

// возвращает секунды
console.log('getSeconds(): ' + date.getSeconds());

// возвращает миллисекунды
console.log('getMilliseconds(): ' + date.getMilliseconds());

// возвращает кол-во миллисекунд прошедших со старта эпохи Unix
console.log('getTime(): ' + date.getTime());

const date5 = new Date();

console.log('Время в мс с начала эпохи Unix:', date5.getTime());

let result = 'Date: ';

result += date5.getFullYear() + '/';
result += date5.getMonth() + '/';
result += date5.getDate() + ' Day of week: ';
result += date5.getDay() + '. ';

result += date5.getHours() + ':';
result += date5.getMinutes() + ':';
result += date5.getSeconds() + ':';
result += date5.getMilliseconds();

console.log('Дата и время: ', result);

//
const date6 = new Date();

date6.setFullYear(2020, 5, 6);
console.log('Установка года 2020: ', date6);

let date7 = new Date();

// формат вывода
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};

// Украина
const localeUk = date7.toLocaleString('RU-ru', options);
console.log(localeUk); // понеділок, 19 бер. 2018 р., 17:42

//toString(), toDateString(), toTimeString()
const toString = date7.toString();
console.log('toString: ', toString);

const toDateString = date7.toDateString();
console.log('toDateString: ', toDateString);

const toTimeString = date7.toTimeString();
console.log('toTimeString: ', toTimeString);
