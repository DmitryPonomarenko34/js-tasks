// # Задача 1

// Создать класс `DB` который будет имплементировать `CRUD` модель.

// -   В качестве структуры данных использовать `Map`.
// -   Метод `create`:
// -   -   принимает объект и валидирует его, в случае невалидности объекта – генерирует ошибку.
// -   -   возвращает `id`
// -   -   при создании пользователя генерирует уникальный `id`, который является ключом для объекта пользователя в структуре `Map`
// -   Метод `read`:
// -   -   принимает идентификатор пользователь
// -   -   если такого пользователя нет возвращать `null`
// -   -   если есть — возвращать объект пользователя с полем `id` внутри объекта.
// -   -   если в метод `read` передать не строку, или не передать параметр вообще — генерировать ошибку.
// -   Метод `readAll`:
// -   -   возвращает массив пользователей
// -   -   генерировать ошибку если в метод `readAll` передан параметр
// -   Метод `update`:
// -   -   обновляет пользователя
// -   -   принимает 2 обязательных параметра
// -   -   генерирует ошибку если передан несуществующий `id`
// -   -   генерирует ошибку если передан `id` с типом не строка
// -   -   генерирует ошибку если второй параметр не валидный
// -   Метод `delete`:
// -   -   удаляет пользователя
// -   -   Генерировать ошибку если передан в метод `delete` несуществующий или невалидный `id`

// ```javascript
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
}

const db = new DB();

const person = {
    name: 'Pitter', // обязательное поле с типом string
    age: 21, // обязательное поле с типом number
    country: 'ua', // обязательное поле с типом string
    salary: 500 // обязательное поле с типом number
};

const id = db.create(person);
const customer = db.read(id);
const customers = db.readAll(); // массив пользователей
console.log(customers);
db.update(id, { age: 22 }); // id

db.delete(id); // true
