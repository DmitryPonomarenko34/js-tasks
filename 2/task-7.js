// # Задача 7

// Напишите код, который посчитает сумму всех парных элементов в массиве.

// Использовать встроенные методы массивов — нельзя.

// ```js
const array = [1, 2, 3, 4];
let result = 0;

for (let i = 0; i < array.length; i++) {
  const element = array[i];

  if (element % 2 === 0) {
    result += element;
  }
}

console.log(result);
