// # Задача 1

// Перепишите код, заменив оператор `if` на тернарный оператор `?`

// js
const a = 2;
const b = 1;
let result = null;

if (a + b < 4) {
    result = true;
} else {
    result = false;
}

console.log(result);

//Answer

// 1.
// let result = (a + b < 4) ? true : false; // я считаю можна было обойтись и без присвоения переменной null и сразу ей присвоить результат условия.

//2. 
// result = (a + b < 4) ? true : false;

// console.log(result);

//Еще можна записать условный оператор if сокращенно без скобок.

// if (a + b < 4)
//     result = true;
// else
//     result = false;

// console.log(result);

// Минус такого синтаксиса в том что выполниться лишь 1 строка после условия. Если-бы я на следующей строке написал еще код то он бы выполнился независимо от условия.

// if (a + b < 4)
//     result = true;
// else
//     result = false;
//     console.log('1'); // даже если условие вернет true единичка выведится в консоль потому-что эта строка не часть условия.

//     console.log(result);