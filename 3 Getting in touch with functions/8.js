/**
 * Задача 7.
 *
 * Дан массив с числами `[1, 2, 3]`.
 * Создайте функцию `f`, которая принимает массив в качестве параметра,
 * а затем последовательно выводит на экран его элементы.
 *
 * Условия:
 * - Входной параметр должен быть не пустым массивом;
 * - Обязательно использовать рекурсию;
 * - Использовать цикл запрещено.
 *
 * Заметки:
 * - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

// Решение

function f(params) {
  if (!Array.isArray(params)) {
    throw new Error('parameter type should be an array');
  } else if (!params.length) {
    throw new Error('parameter can\'t be an empty');
  }

  if (params.length) {
    const element = params.splice(0, 1);
    const current = element[0]; 

    console.log(current);
    f(params);
  }
}

/* не удалять */
f([1, 2, 3]);
f(1, 2, 3); // Error: parameter type should be an array
f('Content'); // Error: parameter type should be an array
f([]); // Error: parameter can't be an empty

exports.f = f;
/* не удалять */
