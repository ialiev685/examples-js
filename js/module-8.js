// Всплытие событий

const parent = document.querySelector('.parent');
const child = document.querySelector('.child');
const innerChild = document.querySelector('.inner-child');

const onParentClick = () => {
  //   alert('Нажалии на родителя'); //ловит все события от детей
  alert(
    `event target(от кого произошло событие): ${event.target.className} & event currentTarget(до коого дошло событие): ${event.currentTarget.className}`,
  ); //описание от кого произошло событие и где сейчас прозшло всплытие
};

const onChildClick = () => {
  //   alert('Нажалии на ребенка');
  alert(
    `event target(от кого произошло событие): ${event.target.className} & event currentTarget(до коого дошло событие): ${event.currentTarget.className}`,
  );
};

const onInnerChildClick = () => {
  //   alert('Нажалии на внутреннего ребенка ребенка');
  event.stopPropagation(); // запретить всплытие от контейнра inner-child
  alert(`event target: ${event.target.className}`);
};

parent.addEventListener('click', onParentClick);
child.addEventListener('click', onChildClick);
innerChild.addEventListener('click', onInnerChildClick);

// Прекращение всплытия

//event.stopPropagation(); // запретить всплытие с момента места клика

//  Делегирование

const nav = document.querySelector('.js-nav');
nav.addEventListener('click', onBtnClick);

function onBtnClick() {
  event.preventDefault(); // отмены перезагрузки страница т к жмем на ссылку

  const target = event.target;
  console.log('event target:', target);
  if (target.nodeName !== 'A') return;
  setActiveLink(target);
}

function setActiveLink(nextActiveLink) {
  const currentActiveLink = document.querySelector('a.active');

  if (currentActiveLink) {
    currentActiveLink.classList.remove('active');
  }

  nextActiveLink.classList.add('active');
}

//throttle и debounce

document.querySelector('.btn').addEventListener(
  'click',
  _.throttle(() => {
    console.log('Клик вызова обработчика событий каждые 1000 мс.');
  }, 1000),
);

document.querySelector('input').addEventListener(
  'input',
  _.debounce(() => {
    console.log('Вызов обработчика событий ввода после 1000 мс бездействия.');
  }, 1000),
);

// Концепция Intersection Observer
const lookObserver = document.querySelector('.look');

const options = {
  rootMargin: '0px', //задать отступы от границ контекста
  threshold: 0.5,
  //. Порог означает, сколько процентов элемента должно попасть в область видимости
  //для срабатывания коллбэка.Значения могут варьироваться от 0.01 до 1.0
};

const onEntry = (entries, observer) => {
  // alert('Появился обьект');
  console.log(entries); //методы элементы
  console.log(observer); //опция обозревателья
  entries.target.style.backgroundColor = 'green';
  entries.forEach(entry => {});
};

const observer = new IntersectionObserver(onEntry, options);
observer.observe(lookObserver);
