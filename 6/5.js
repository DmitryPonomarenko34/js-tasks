/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано три аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 * - В качестве третьего аргумента было передан не число.
 */

const array = [1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;

// Решение

function reduce(array, cb, acc) {
    if (arguments.length !== 3) {
        throw new Error('must have at least 3 parameters');
    } else if (!Array.isArray(array)) {
        throw new Error('first parameter should be a array');
    } else if (!typeof cb === 'function') {
        throw new Error('2 argument must be a function');
    } else if (!typeof acc === 'number') {
        throw new Error('3 argument must be a number');
    }

    let result = 0;

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const status = cb(acc, element, index, array);

        if (index === 0) {
            result += status;
            continue;
        }

        result += element;
    }

    return result;
}

const result = reduce(
    array,
    function(accumulator, item, i, arrayRef) {
        console.log(accumulator); // значение-аккумулятор
        console.log(item); // элемент массива
        console.log(i); // индекс элемента
        console.log(arrayRef); // ссылка на обрабатываемый массив

        return accumulator + item;
    },
    INITIAL_ACCUMULATOR,
);

console.log(result); // 21

exports.reduce = reduce;
