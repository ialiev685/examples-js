//Асинхронный код

//setTimeout и setInterval

const onClick = () => {
  setTimeout(() => alert('Ба-бах!!!'), 2000);
};

clearTimeout(onClick);

const btnEl = document.querySelector('.btn-mdl-11');
btnEl.addEventListener('click', onClick);

//

function sayHello() {
  alert('Hello!');
}

const dalay = setTimeout(sayHello, 1000);
clearTimeout(dalay);

//setInterval и clearInterval

let timerid = null;

const btnStartEl = document.querySelector('[data-start]');
const btnStopEl = document.querySelector('[data-stop]');
btnStartEl.addEventListener('click', () => {
  timerid = setInterval(() => {
    console.log(Date.now());
  }, 2000);
});

btnStopEl.addEventListener('click', () => {
  clearInterval(timerid);
  console.log('счетчик интервала удален!');
});
