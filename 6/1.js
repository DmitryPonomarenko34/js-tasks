/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = [1, 2, 3];

// Решение

function forEach(array, cb) {
    if (arguments.length !== 2) {
        throw new Error('must have at least 2 parameters');
    } else if (!Array.isArray(array)) {
        throw new Error('first parameter should be a array');
    } else if (!typeof cb === 'function') {
        throw new Error('2 argument must be a function');
    }


    for (let index = 0; index < array.length; index++) {
        cb(array[index], index, array);
    }
}

const result = forEach(array, function (item, index, arrayRef) {
     console.log(item); // элемент массива
     console.log(index); // индекс элемента
     console.log(arrayRef); // ссылка на обрабатываемый массив
});

console.log(result); // undefined

// exports.forEach = forEach;
