// # Задача 2

// Улучшите класс `Customers` добавив функцию генератор.

// **Обратите внимание**:

// 1. Класс `Customers` после этого должен работать **идентично** предыдущей задаче.

// Пример использования:

// ```javascript

class Customers {
    constructor() {
        this.array = [];
    }

    add = (obj) => {
        if (typeof obj !== 'object') {
            throw new Error('parameter must be an object');
        } else if (!obj.name) {
            throw new Error('the parameter must have a name field');
        } else if (typeof obj.name !== 'string') {
            throw new Error('name field values ​​must be of data type "string"');
        } else if (obj.verified && typeof obj.verified !== 'boolean') {
            throw new Error('verified field values ​​must have data type "boolean"');
        }

        this.array.push(obj);
        return this.array;
    }


    #verified () {
        const filterArray = this.array.filter((item) => item.verified);
        return filterArray;
    }

    *[Symbol.iterator]() {
        let i = 0;
        const verifiedArray = this.#verified();

        while (i < verifiedArray.length) {
            yield verifiedArray[i++];
        }
    }
}

const customers = new Customers();
customers.add({name: 'Alex'});
customers.add({name: 'Victor'});
customers.add({name: 'Marcus'});
customers.add({name: 'Andrii', verified: true});
customers.add({name: 'Marco', verified: true});
customers.add({name: 'Oliver'});
customers.add({name: 'Lisa', verified: true});
customers.add({name: 'John'});
customers.add({name: 'Ivan', verified: true});

for (const customer of customers) {
    console.log(customer);
}

// В консоли будет
// { name: 'Andrii', verified: true }
// { name: 'Marco', verified: true }
// { name: 'Lisa', verified: true }
// { name: 'Ivan', verified: true }

