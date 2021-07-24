// Создание

let autoName = 'toyota';

const promise = new Promise((resolve, reject) => {
  if (autoName === 'toyota') {
    setTimeout(() => {
      resolve(`Это машины ${autoName}`);
    }, 2000);
  } else {
    setTimeout(() => {
      reject(`Это машины не ${autoName}`);
    }, 2000);
  }
});
console.log('🚀 promise', promise);

const onResolve = data => {
  console.log('Положительные ответ: ', data);
};

const onReject = error => {
  console.log('Отрицательный отвкт: ', error);
};
// promise.then(onResolve, onReject); // длинная запись

//сокращенно

promise.then(
  data => {
    console.log('короткая запись, Это "TOYOTA"?, положительный ответ: ', data);
  },
  error => {
    console.log('короткая запись, Это "TOYOTA"?, отрицательный ответ: ', error);
  },
);

// методы then catch finally

autoName = 'lexus';

const promiseSecond = new Promise((resolve, reject) => {
  if (autoName === 'toyota') {
    setTimeout(() => {
      resolve(`Это машина ${autoName}`);
    }, 2000);
  } else {
    setTimeout(() => {
      reject(`Это машина ${autoName}`);
    }, 2000);
  }
});

// promiseSecond.then(
//   data => {
//     console.log('Это "TOYOTA"?, положительный ответ: ', data);
//   },
//   error => {
//     console.log('Это "TOYOTA"?, отрицательный ответ: ', error);
//   },
// );

promiseSecond
  .then(data => {
    console.log('Это "TOYOTA"?, положительный ответ: ', data);
  })
  .catch(error => {
    console.log('Это "TOYOTA"?, отрицательный ответ: ', error);
  })
  .finally(() => {
    console.log('Выбор сделан!');
  });

//

const promiseThree = new Promise((resolve, reject) => {
  resolve(6);
});

promiseThree
  .then(value => {
    console.log(value);
    return value * 3;
  })
  .then(value => {
    console.log(value);
    return value * 3;
  })
  .then(value => {
    console.log(value);
    return value * 3;
  })
  .then(value => {
    console.log(value);
    return value * 3;
  })
  .then(value => {
    console.log(value);
    return value * 3;
  })
  .catch(value => {
    console.log(value);
  });

// метод all и rice

autoName = 'lexus';

const makePromise = (text, delay) => {
  return new Promise((resolve, reget) => {
    if (text === 'lexus') {
      setTimeout(() => resolve(text), delay);
    } else {
      setTimeout(() => reget(text), delay);
    }
  });
};

const promiseA = makePromise('toyota', 1000);
const promiseB = makePromise('lexus', 3000);
//ждет все выполневшие промисы
// Promise.all([promiseA, promiseB])
//   .then(result => console.log('положительный результат метода all:', result)) //["promiseA", "promiseB"]
//   .catch(error => console.log('отрицательный ответ метода all:', error));

//ждет первого выполнившегося
Promise.race([promiseA, promiseB])
  .then(result => console.log('положительный результат метода race:', result)) //["promiseA", "promiseB"]
  .catch(error => console.log('отрицательный ответ метода race:', error));

//Вызов статического метода

const getMessage = () => {
  const input = prompt('Как тебя завут?');

  return Promise.resolve(input);
};

const logger = message => alert(`Привет, ${message}`);

getMessage().then(message => logger(message));

//еще короче

// getMessage().then(logger);
