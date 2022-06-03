// # Задача 5

// Перепишите код, заменив цикл `for` на `while`, без изменения поведения цикла.


for (var i = 0; i < 3; i++) {
    console.log('номер ' + i + '!');
}

//Answer

let k = 0;

while (k < 3) {
    console.log('номер ' + k + '!');
    k++;
}
