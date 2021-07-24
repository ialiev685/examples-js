function towerBuilder(nFloors) {
  // build here
  const newArray = [];
  let stars = '';
  let countStars = 1;
  for (let i = 1; i <= nFloors; i += 1) {
    for (let j = 1; j <= countStars; j += 1) {
      stars += '*';
    }
    if (countStars === 1) stars = `  ${stars}  `;
    if (countStars === 3) stars += ` ${stars} `;
    newArray.push(stars);
    stars = '';
    countStars += 2;
  }
  return newArray;
}

console.log(towerBuilder(1));

console.log(towerBuilder(2));

console.log(towerBuilder(3));

//next
// function alphabetPosition(text) {
//   const alphabetArray = 'zyxwvutsrqponmlkjihgfedcba'.split('').reverse();
//   const newArray = [];
//   for (let i = 0; i <= text.length; i += 1) {
//     if (typeof text[i] === 'string') {
//       let str = text[i].toLowerCase();
//       if (alphabetArray.includes(str)) {
//         newArray.push(alphabetArray.indexOf(str) + 1);
//       }
//     }
//   }
//   return newArray
//     .reduce((acc, elem, index) => {
//       return acc + ' ' + elem;
//     }, '')
//     .trim();
// }
// alphabetPosition("The sunset sets at twelve o' clock."); //"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")
//next
// function countLanguages(list) {
//   2;
//   // thank you for checking out the Coding Meetup kata :)
//   3;
//   const language = list.reduce((acc, elem) => {
//     4;
//     acc.push(elem.language);
//     5;
//     return acc;
//     6;
//   }, []);
//   7;
//   return language.reduce((acc, elem) => {
//     8;
//     if (!acc.hasOwnProperty(elem)) {
//       9;
//       acc[elem] = 0;
//       10;
//     }
//     11;
//     acc[elem] += 1;
//     12;
//     return acc;
//     13;
//   }, {});
//   14;
// }

// next
// function solution(roman) {
//   const romeObject = { N: 0, I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 100 };
//   const keys = Object.keys(romeObject);

//   return roman.split('').reduce((acc, element, index, array) => {
//     if (acc === 0) {
//       return acc + romeObject[element];
//     } else if (acc < keys.indexOf(element)) {
//       return romeObject[element] - acc;
//     }
//     return acc + romeObject[element];
//   }, 0);
// }

// console.log(solution('XXI'));
// console.log(solution('IV'));
//next...
// function persistence(num) {
//   //code me
//   if (num < 10) return 0;
//   let value = num;
//   if (typeof value === 'number') {
//     value = String(value).split('');
//   }
//   console.log(value);

//   console.log('длинна', value.length);
//   while (value.length > 1) {
//     value = value.reduce((acc, elem) => {
//       return acc * elem;
//     });
//     console.log(value);
//     value = String(value).split('');
//   }

//   return Number(value.join());
// }

// console.log(persistence(444));
//next...
// function well(x) {
//   let countIdeas = 0;
//   x.forEach(element => {
//     element.forEach(item => {
//       if (String(item).toLowerCase() === 'good') {
//         countIdeas += 1;
//       }
//     });
//   });

//   // const result = x
//   //   .flatMap(elem => elem)
//   //   .forEach(elem => {
//   //     console.log(elem.toLowerCase());
//   //     if (elem.toLowerCase() === 'good') {
//   //       countIdeas += 1;
//   //     }
//   //   });
//   if (countIdeas === 0) {
//     return 'Fail!';
//   } else if (countIdeas > 2) {
//     return 'I smell a series!';
//   } else {
//     return 'Publish!';
//   }
// }
// console.log(
//   well([
//     ['bad', 'bAd', 'bad'],
//     ['bad', 'bAd', 'bad'],
//     ['bad', 'bAd', 'bad'],
//   ]),
// );
// console.log(
//   well([
//     ['gOOd', 'bad', 'BAD', 'bad', 'bad'],
//     ['bad', 'bAd', 'bad'],
//     ['GOOD', 'bad', 'bad', 'bAd'],
//   ]),
// );
// console.log(
//   well([
//     ['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'],
//     ['bad'],
//     ['gOOd', 'BAD'],
//   ]),
// );
//next...
// function inArray(array1, array2) {
//   //...
//   const newArray = [];
//   array2.forEach(item => {
//     array1.forEach(elem => {
//       let len = elem.length;
//       if (item.slice(0, len) === elem || item.slice(-len) === elem) {
//         if (!newArray.includes(elem)) newArray.push(elem);
//       }
//     });
//   });

//   return newArray;
// }

// const a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];

// const a1 = ['xyz', 'live', 'strong'];

// console.log(inArray(a1, a2));
//next...
// function switcher(x) {
//   const alphabet = 'zyxwvutsrqponmlkjihgfedcba';
//   const newAlphabet = [...alphabet.split(''), ...['!', '?', ' ']];

//   return x.reduce((acc, elem, index, array) => {
//     console.log(elem);
//     return acc + newAlphabet[elem - 1];
//   }, '');
// }
// console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']));

//next ...
// function evenLast(numbers) {
//   // Good lack
//   const sum = numbers.reduce((acc, elem, index, array) => {
//     if (index % 2 === 0) {
//       if (index === array.length - 1) {
//         return (acc + elem) * elem;
//       }
//       return acc + elem;
//     }
//     if (index === array.length - 1) {
//       return acc * elem;
//     }
//     return acc;
//   }, 0);
//   return sum;
// }
// console.log(evenLast([2, 3, 4, 5, 6]));

// next ...
// var paintLetterboxes = function (start, end) {
//   let newArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//   for (let i = start; i <= end; i += 1) {
//     let toString = String(i).split('');
//     for (let j = 0; j < toString.length; j += 1) {
//       console.log(Number(toString[j]));
//       let toNumber = Number(toString[j]);
//       newArray[toNumber] += 1;
//     }
//   }
//   return newArray;
// };

// console.log(paintLetterboxes(125, 132));
// next...

// function digitize(n) {
//   n = String(n);
//   n.split('');
//   const newArray = [];
//   for (const letter of n) {
//     newArray.push(Number(letter));
//   }
//   return newArray;
// }

// console.log(digitize(123));
// digitize(1);
// digitize(0);
// digitize(1230);
// digitize(8675309);

// next...

// function bald(x) {
//   x = x.split('');
//   console.log(x);
//   const newArray = [];
//   let countHeir = 0;
//   let result1 = '';
//   let result2 = '';
//   for (const hair of x) {
//     if (hair === '/') {
//       countHeir += 1;
//     }
//     result1 += '-';
//   }

//   newArray.push(result1);
//   if (countHeir === 0) {
//     result2 = 'Clean!';
//   }
//   if (countHeir === 1) {
//     result2 = 'Unicorn!';
//   }
//   if (countHeir === 2) {
//     result2 = 'Homer!';
//   }
//   if (countHeir > 2 && countHeir <= 5) {
//     result2 = 'Careless!';
//   }
//   if (countHeir > 5) {
//     result2 = 'Hobo!';
//   }
//   newArray.push(result2);

//   return newArray;
// }

// console.log(bald('/---------'));
// console.log(bald('/-----/-'));
// console.log(bald('--/--/---/-/---'));

// next...

// function maskify(cc) {
//   const wordLength = cc.length;
//   const arrayLetter = cc.split('');
//   let changeLength = 0;
//   if (wordLength > 4) {
//     changeLength = wordLength - 4;
//     for (let i = 0; i < changeLength; i += 1) {
//       arrayLetter[i] = '#';
//     }
//     return arrayLetter.join('');
//   }
//   return cc;
// }
// console.log(maskify('4556364607935616'));
// console.log(maskify('1'));
// console.log(maskify('11111'));
