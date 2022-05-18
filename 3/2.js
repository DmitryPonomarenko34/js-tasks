/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех параметров.
 *
 * Условия:
 * - Функция принимает любое количество параметров;
 * - Функция содержит проверку входных параметров на тип number.
 */

// Решение

function f() {
  let result = 0;

  for (const iterator of arguments) {
    if (typeof iterator !== 'number') {
       throw new Error('all parameters should be a Number type');
    }

    result += iterator;
  }

  console.log(result);
}

/* не удалять */
f(1, 2, 3); // 6
f(1, 1, 1, 1, 1, 1, 1, 1); // 8
f(1, 2, 's', 4); // Error: all parameters should be a Number type

exports.f = f;
// /* не удалять */