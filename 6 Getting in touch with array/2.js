/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

// Решение

function filter(array, cb) {
    if (arguments.length !== 2) {
        throw new Error('must have at least 2 parameters');
    } else if (!Array.isArray(array)) {
        throw new Error('first parameter should be a array');
    } else if (!typeof cb === 'function') {
        throw new Error('2 argument must be a function');
    }

    const newArray = [];

    for (let index = 0; index < array.length; index++) {
        const status = cb(array[index], index, array);

        if (status) {
            newArray.push(array[index]);
        }
    }

    return newArray;
}

const filteredArray = filter(array, function (item, i , arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив
    
    return item === 'Добрый вечер!';
})

console.log(filteredArray); // ['Добрый вечер!']

exports.filter = filter;
