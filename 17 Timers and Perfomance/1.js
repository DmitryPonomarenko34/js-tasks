/**
 * Задача 1.
 *
 * Напишите функцию postpone, которая выводит в консоль счетчик с задержкой.
 *
 * Функция принимает 3 параметра:
 * - Первый параметр `start` — число, c которого начнется отсчет;
 * - Второй параметр `end` — верхний порог, до которого будет идти отсчет;
 * - Третий параметр `delay` — это время в `мс` между выводами.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит валидацию входных параметров на тип number;
 * - Обязательно использование таймера setTimeout и цикла for;
 * - Функция должна уметь считать в обе стороны.
 */

// Решение

function postpone(start, end, delay) {
  if(arguments.length !== 3) {
    throw new Error('the function must contain 3 parameters')
  } else if ([...arguments].some((item) => typeof item !== 'number')) {
    throw new Error('each parameter must be a number');
  }

  console.log(start);
  setTimeout(recursion = () => {
    if (start > end && start !== end) {
      start--;
      console.log(start);
      return setTimeout(recursion, delay);
    } else {
      if (start !== end) {
        start++;
        console.log(start);
        return setTimeout(recursion, delay);
      }
    }
  }, delay);
}

postpone(1, 3, 1000);
// 1
// 2
// 3

postpone(3, 1, 1000);
// 3
// 2
// 1

exports.postpone = postpone;
