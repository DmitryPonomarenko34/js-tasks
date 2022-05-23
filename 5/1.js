/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение

function upperCaseFirst(string) {
  if (typeof string === 'string' && string) {
     const firstUpperLater = string[0].toUpperCase();
     const firstLatter = string.charAt(0);
     const replaceStr = string.replace(firstLatter, firstUpperLater);
     console.log(replaceStr);
  } else {
    console.log('\'\'');
  }
}

upperCaseFirst('pitter'); // Pitter
upperCaseFirst(''); // ''

// exports.upperCaseFirst = upperCaseFirst;
