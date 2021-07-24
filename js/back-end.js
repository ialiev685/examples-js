// Headers

const headers = new Headers({ 'Content-Type': 'application/json' });

console.log('headers:', headers);

console.log('получить значение:', headers.get('Content-Type'));

headers.set('Content-Type', 'text/html'); // установить значение

console.log('получить значение:', headers.get('Content-Type'));

headers.append('Content-Type', 'application/html'); // дабавить значение

console.log('получить значение:', headers.get('Content-Type'));

headers.delete('Content-Type');

console.log('получить значение:', headers.get('Content-Type'));

// метод fetch

const btnReqEl = document.querySelector('.js-request');
const tableEl = document.querySelector('table > tbody');
btnReqEl.addEventListener('click', onButtonClick);

function onButtonClick() {
  fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
    .then(response => {
      return response.json();
    })
    .then(data => {
      createTable(data);
    })
    .catch(error => {
      console.log(error);
    });
}

function createTable(data) {
  const row = data.reduce((acc, elem) => {
    return acc + createRow(elem);
  }, '');
  tableEl.innerHTML = row;
}

function createRow({ ccy, buy, sale }) {
  return `<tr>
                <td>${ccy}</td>
                <td>${buy}</td>
                <td>${sale}</td>
            </tr>`;
}
