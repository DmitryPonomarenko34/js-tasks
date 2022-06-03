// # Задача 8

// Напишите код, который посчитает сумму всех парных элементов в массиве. В суммировании участвуют только элементы больше 3.

// Использовать встроенные методы массивов — нельзя.


const array = [1, 2, 3, 4, 5, 6];
let result = 0;

for (let i = 0; i < array.length; i++) {
  const element = array[i];

  if (element < 3)
    continue;

  if (element % 2 === 0) {
    result += element;
  }
}

console.log(result);


