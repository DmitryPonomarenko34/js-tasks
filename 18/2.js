// # Задача 2

// Улучшить класс `DB` из предыдущей задачи.

// -   Добавить метод `find`, который будет возвращать массив пользователей которые удовлетворяют условие переданное в качестве параметра
// -   Генерировать ошибку, если query не валидный
// -   Поля `name` и `country` ищут 100% совпадение
// -   Поля `age` и `salary` принимают объект в котором должны быть или 2 параметра `min` и `max` или хотя-бы один из них
// -   Возвращать пустой массив если не удалось найти пользователей которые удовлетворяют объект запроса

class DB {
    map = new Map();
    idCount = 0;

    create = (obj) => {
        if (!obj instanceof Object) {
            throw new Error('Param must be an object');
        }

        if (!obj.hasOwnProperty('name')) {
            throw new Error('the object must contain the name field');
        }

        if (!obj.hasOwnProperty('age')) {
            throw new Error('the object must contain the age field');
        }

        if (!obj.hasOwnProperty('country')) {
            throw new Error('the object must contain the country field');
        }

        if (!obj.hasOwnProperty('salary')) {
            throw new Error('the object must contain the salary field');
        }

        if (typeof obj.name !== 'string') {
            throw new Error('field name must be a string');
        }

        if (typeof obj.age !== 'number') {
            throw new Error('field name must be a number');
        }

        if (typeof obj.country !== 'string') {
            throw new Error('field country must be a string');
        }

        if (typeof obj.salary !== 'number') {
            throw new Error('field salary must be a number');
        }

        let stringCount = this.idCount.toString();
        this.idCount++
        this.map.set(stringCount, obj)
        return stringCount;
    }

    read = (userId) => {
        if (userId === undefined) {
            throw new Error('you didn\'t pass a parameter');

        } else if (typeof userId !== 'string') {
            throw new Error('Yout param not a string');
        }

        if (this.map.has(userId)) {
            const currentObj = this.map.get(userId);
            const copyObj = { ...currentObj };

            copyObj.id = userId;

            return copyObj;
        } else {
            return null;
        }
    }

    readAll = (...arg) => {
        if (arg.length >= 1) {
            throw new Error('This method must not contain parameters');
        }
        return [...this.map];
    }

    update = (userId, obj) => {
        if (userId === undefined || obj === undefined) {
            throw new Error('This method must contain two parameters');
        }

        if (!this.map.has(userId)) {
            throw new Error('User with this id does not exist');
        }

        if (typeof userId !== 'string') {
            throw new Error('First parametr must a string');
        }

        if (!obj instanceof Object) {
            throw new Error('Param must be an object');
        }

        const getObj = this.map.get(userId);
        const updateObj = this.map.set(userId, { ...getObj, ...obj });

        console.log(userId);
        return updateObj;
    }

    delete = (userId) => {

        if (userId === undefined) {
            throw new Error('This method must contain two parameters');
        }

        if (!this.map.has(userId)) {
            throw new Error('User with this id does not exist');
        }

        if (typeof userId !== 'string') {
            throw new Error('First parametr must a string');
        }

        const removeUser = this.map.delete(userId);

        console.log(removeUser);
        return removeUser;
    }

    find = (query) => {
        let newArray = [];

        for (const item of this.map) {
            if (typeof query.name === 'string') {
                if (query.name !== item[1].name) continue;
            }

            if (typeof query.country === 'string') {
                if (query.country !== item[1].country) continue;
            }

            if (typeof query.age === 'object') {
                if (query.age.min > item[1].age || query.age.max < item[1].age) continue; 
            }

            if (typeof query.salary === 'object') {
                if (query.salary.min > item[1].salary || query.salary.max < item[1].salary) continue; 
            }
            newArray.push(item[1]);
        }

        return newArray;
    }
}

const db = new DB();

const person = {
    name: 'Pitter', // обязательное поле с типом string
    age: 21, // обязательное поле с типом number
    country: 'ua', // обязательное поле с типом string
    salary: 500 // обязательное поле с типом number
};

const person2 = {
    name: 'Anna', // обязательное поле с типом string
    age: 21, // обязательное поле с типом number
    country: 'ua', // обязательное поле с типом string
    salary: 500 // обязательное поле с типом number
};

const id = db.create(person);
const id2 = db.create(person2);

const query = {
    country: 'ua',
    age: {
        min: 21,
    },
    salary: {
        min: 300,
        max: 600
    }
};

const customers = db.find(query); // массив пользователей
console.log(customers);

