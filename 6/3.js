/**
 * Задача 3.
 *
 * Вручную создать имплементацию функции `every`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = [1, '2', 3, 4, 5, 6];

// Решение

function every(array, cb) {
    if(arguments.length !== 2) {
        throw new Error('must have at least 2 parameters');
    } else if (!Array.isArray(array)) {
        throw new Error('first parameter should be a array');
    } else if (!typeof cb === 'function') {
        throw new Error('2 argument must be a function');
    }

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const status = cb(element, index, array);

        if (status) {
            continue;
        } else {
            return false;
        }
    }

    return true;
}


const result = every(array, function(item, i, arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив

    return typeof item === 'number';
});

console.log(result); // true

exports.every = every;
