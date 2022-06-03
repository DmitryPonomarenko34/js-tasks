/**
 * Задача 4.
 *
 * Дана стоимость в виде строки: `"$120"`.
 * Первый символ — валюта, затем – число.
 * Создайте функцию `extractCurrencyValue(source)`, которая будет из такой строки выделять число-значение, в данном случае 120.
 * Обратите внимание что нужно возвращать не строку 120 а именно число 120.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

const PRICE = '$120';

// Решение

function extractCurrencyValue(params) {
  // let newString = parseInt(params.replace(/\D+/g,"")); // самое простое и эффективное решение)
  // console.log(newString);

  const newArray = [];
  const array = params.split('');
  let string;

  for (const iterator of array) {
    if (iterator === '$') {
      continue;
    } else {
      newArray.push(Number(iterator));
    }
  }

  string = newArray.toString();
  const replaceString = string.replace(/\D+/g,"");
  const newString = Number(replaceString);
  
  return newString; 
}

extractCurrencyValue(PRICE); // 120

exports.extractCurrencyValue = extractCurrencyValue;