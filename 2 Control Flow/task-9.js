// # Задача 9

// Отсортируйте массив по убыванию.

// Использовать встроенные методы массивов — нельзя.

const arr = [1, 2, 3, 10, 4, 5, 6];
let arrLength = arr.length;

for (let i = 0; i < arrLength - 1; i++) {

  for (let k = i + 1; k < arrLength; k++) {
    if(arr[k] > arr[i]) {
      let temp = arr[i];
      min = arr[k];
      arr[i] = min; 
      arr[k] = temp;
    }

  }
}

console.log(arr);
