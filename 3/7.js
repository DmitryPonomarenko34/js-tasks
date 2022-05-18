/**
 * Задача 7.
 *
 * Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 * Если чётное — функция возвращает `true`, если нечётное — `false`.
 *
 * Условия:
 * - Входной параметр должен обладать типом number;
 * - Входной параметр должен быть больше 0.
 */

// Решение

// Решил эту задачу 2 способами. Первый с помощью цикла, а второй с помощью рекурсии.

//1 cпособ

function getDivisors(params) {
  const resultArray = [];

  if (typeof params !== 'number') {
    throw new Error('Error: parameter type is not a Number');
  } else if (params === 0) {
    throw new Error('parameter can\'t be a 0');
  }

  for (let i = 0; i <= params; i++) {
    if (params % i === 0) {
      resultArray.push(i);
   }
  }

  return console.log(resultArray);
}


//2 cпособ

// let step = 0;
// const resultArray = [];

// function getDivisors(params) {

//   if (typeof params !== 'number') {
//     throw new Error('Error: parameter type is not a Number');
//   } else if (params === 0) {
//     throw new Error('parameter can\'t be a 0');
//   }

//   if (step <= params) {

//     if (params % step === 0) {
//       resultArray.push(step);
//     }

//     step++;
//     getDivisors(params);
//   } else {
//     return resultArray;
//   }
// }
// console.log(resultArray);

/* не удалять */
getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0

exports.getDivisors = getDivisors;
/* не удалять */
