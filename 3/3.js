/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит проверку входных параметров на тип number.
 */

// Решение

function f(params1, params2, params3) {
  let result = null;

  for (const iterator of arguments) {
    if(typeof iterator !== 'number') {
      throw new Error('all parameters type should be a Number');
    }
  }

  result = (params1 - params2) / params3;
  console.log(result);
}

/* не удалять */
f(9, 3, 2); // 3
f('s', 9, 3); // Error: all parameters type should be a Number

exports.f = f;
// /* не удалять */