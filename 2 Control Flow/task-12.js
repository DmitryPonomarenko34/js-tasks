// # Задача 12

// Найдите сумму положительных элементов массива.

// Использовать встроенные методы массивов — нельзя.

const array = [2, -1, -3, 15, 0, 4];
let result = 0;

for (const iterator of array) {
  if (iterator > 0)
    result += iterator;
}

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];

//   if(element > 0)
//     result += element;

// }

console.log(result);