/**
 * Задача 3.
 *
 * Создайте функцию truncate(string, maxLength).
 * Функция проверяет длину строки string.
 * Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength.
 * Результатом функции должна быть (при необходимости) усечённая строка.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров;
 * - Первый параметр должен обладать типом string;
 * - Второй параметр должен обладать типом number.
 */

// Решение

function truncate(string, maxLength) {
  if (typeof string !== 'string' && string === '') {
    console.log('Значения должно быть не пустой строкой');
    return;
  } else if (typeof maxLength !== 'number' && typeof maxLength < 0) {
    console.log('Значения должно быть числом больше 0');
    return;
  }

  const stringLength = string.length;

  if (stringLength > maxLength) {
    maxLength -= 3;
    const pruningString = string.substring(-1, maxLength);
    const newString = pruningString + '...';
    return newString;
  }
}

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 21)); // 'Вот, что мне хотел...'

exports.truncate = truncate;
