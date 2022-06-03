// # Задача 10

// Отсортируйте массив по возрастанию.

// Использовать встроенные методы массивов — нельзя.


const arr = [6, 5, 4, 3, 2, 1];
// [1,2,3,4,5,6]
let arrLength = arr.length;

for (let i = 0; i < arrLength - 1; i++) {

  for (let k = i + 1; k < arrLength; k++) {
    if(arr[k] < arr[i]) {
      let temp = arr[k];
      min = arr[i];
      arr[k] = min; 
      arr[i] = temp;
    }
  }
}

console.log(arr);