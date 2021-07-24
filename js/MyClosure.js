// Кто поедет на какой машине

const driver = nameDriver => {
  return nameCar => {
    console.log(`${nameDriver} поедет на машине марки ${nameCar}`);
  };
};

let car = driver('Ирина');

car('Toyota Raf4'); // Ирина поедет на машине марки Toyota Raf4
car('Toyota Camry'); // Ирина поедет на машине марки Toyota Camry

car = driver('Ильфат');
car('Kalina'); // Ильфат поедет на машине марки Kalina

// Входи в систему через пароль

const password = titlePassword => {
  return addPassword => {
    if (addPassword === titlePassword) {
      console.log('Добро пожаловать на сайт...');
    } else {
      console.log('Пароль неверный!');
    }
  };
};

const log = password('рыба мечь');

log('qwery'); // Пароль неверный!
log('рыба мечь'); // Добро пожаловать на сайт...
