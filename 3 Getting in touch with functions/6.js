/**
 * Задача 6.
 *
 * Сделайте функцию `isEven()`, которая параметром принимает целое число и проверяет: чётное оно или нет.
 * Если чётное — функция возвращает `true`, если нечётное — `false`.
 *
 * Условия:
 * - Входной параметр должен обладать типом number.
 *
 * Заметки:
 * - Чётные числа могут делится на 2 без остатка.
 */

// Решение

const isEven = function (params) {
  if (typeof params !== 'number') {
    throw new Error('Error: parameter type is not a Number');
  }

  if(params % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

/* не удалять */ 
console.log(isEven(3)); // false
console.log(isEven(4)); // true
isEven('Content'); // Error: parameter type is not a Number

exports.isEven = isEven;
/* не удалять */
