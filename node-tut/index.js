const message = 'Node.js in amazing!';
console.log(message);

const validator = require('validator');

const validateEmail = email => {
  return validator.isEmail(email);
};

console.log('Валидный тект email:', validateEmail('ialiev685@gmail.com'));

console.log('Валидный тект email:', validateEmail('ialiev685'));

const greeting = require('./greeting');

console.log('импорт с другого модуля - hello:', greeting.hello);
console.log('импорт с другого модуля - goobye:', greeting.goodbye);
