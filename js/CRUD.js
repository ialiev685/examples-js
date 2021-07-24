// const url = 'https://pokeapi.co/api/v2/pokemon/';

// console.dir(fetch(`${url}${12}`));

// Метода POST  создание поста
const postToAdd = {
  author: 'ilfat',
  content: 'study to be developer',
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(postToAdd),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
})
  .then(response => response.json())
  .then(post => console.log('создание поста:', post))
  .catch(error => console.log(error));

// Просмотр всех постов
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(post => console.log('просмотр всех постов:', post))
  .catch(error => console.log(error));

// Просмотр одного поста

const postID = 1;
fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
  .then(response => response.json())
  .then(post => console.log('просмотр одного поста:', post))
  .catch(error => console.log(error));

//Обновление поста
const postId = 101;
const postToUpdate = {
  content: 'I want study to be developer!!!',
};

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
  method: 'PATCH',
  body: JSON.stringify(postToUpdate),
  headers: {
    'content-type': 'application/json',
  },
})
  .then(response => response.json())
  .then(post => console.log('обновление одного поста:', post))
  .catch(error => console.log(error));

//Удаление поста

const POSTid = 99;
fetch(`https://jsonplaceholder.typicode.com/posts/${POSTid}`, {
  method: 'DELETE',
})
  .then(response => response.json())
  .then(post => console.log('Удаление одного поста:', post))
  .catch(error => console.log(error));
