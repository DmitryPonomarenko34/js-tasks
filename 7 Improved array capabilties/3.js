/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение

function createArray(value, count) {
  if (arguments.length < 2) {
    throw new Error('must have at least 2 parameters');
  } else if (!(Array.isArray(arguments[0]) || arguments[0] instanceof Object || typeof arguments[0] === 'string' || typeof arguments[0] === 'number')) {
    throw new Error('The first argument was not a number, not a string, not an object, not an array');
  } else if (typeof arguments[1] !== 'number') {
    throw new Error('first argument must be an Array');
  }

  const result = new Array(count);
  return result.fill(value);
}

const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;
