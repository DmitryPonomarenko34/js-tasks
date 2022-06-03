/**
 * Задача 2.
 *
 * Напишите функцию calculate(), которая в качестве аргументов принимает неограниченное количество функций.
 * 
 * При запуске calculate() последовательно запускает коллбек-функции из аргументов.
 * Каждая коллбек-функция из цепочки в качестве своего аргумента принимает то, что возвращает предыдущая коллбек-функция.
 * То есть возвращаемое значение каждой коллбек-функции из цепочки
 * становится доступным из параметра следующей коллбек-функции в цепочке.
 * 
 * Первая коллбек-функция не принимает параметров.
 * 
 * После выполнения всей цепочки, функция calculate() должна вернуть результат выполнения последней коллбек-функции.
 *
 * Генерировать ошибки если:
 * - Любой из аргументов функции calculate() не является функцией;
 * - Любая функция из аргументов не вернула значение.
 */

// Решение

function calculate(...rest) {
    // debugger;
    const funcCheck = rest.every(el => typeof el === 'function' && el !== undefined);

    if (!funcCheck) {
        throw new Error('params has not function value or not return value');
    }

    const result = rest.reduce((acc, item) => {
        
        if(item() === undefined) {
            throw new Error('callback at index 0 did not return any value.');
        }

        return item(acc);

    }, rest[0]());

    return result;
}

const result = calculate(
    () => {
        return 7;
    },
    prevResult => {
        return prevResult + 4;
    },
    prevResult => {
        return prevResult * 5;
    },
);

console.log(result); // 55

exports.calculate = calculate;