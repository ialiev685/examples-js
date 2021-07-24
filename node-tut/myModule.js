const sqrt = Math.sqrt;

const square = x => x * x;
const result = (x, y) => sqrt(square(x) + square(y));

export { square, result };
