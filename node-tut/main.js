import { square, result } from './myModule.js';
import fn from './fn.js';

// или import * as myModule from './myModule.js';

console.log('возведение в квадрат:', square(10));
console.log('извлечение из корня квадрата:', result(3, 3));

console.log(fn());
