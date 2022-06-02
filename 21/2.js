// # Задача 2

// Создайте функцию `getCustomers` которая умеет объединять 2 массива с объектами.

// Операция объединения происходит по ключу `id` и только для объектов у которых установлен флаг `verified: true`.

// **Обратите внимание**:

// 1. Функция `getCustomers` должна возвращать промис;
// 2. Использование `async & await` **запрещено**;
// 3. Использование посторонних библиотек **запрещено**;
// 4. В том случае если в массиве `countries` отсутствует необходимый `id` промис **должен** реджектится с текстом `We don't have information about country for this customer: ${customer.name}`;
// 5. Склеивание происходит **только** для объектов с флагом `verified: true`.

// **Пример использования**:

function getCustomers(userArray, countryArray) {

    if (arguments.length !== 2) {
        throw new Error('2 parameters must be passed to the function');
    } else if (userArray.length === 0) {
        throw new Error('first param empty');
    } else if (countryArray.length === 0) {
        throw new Error('two param empty');
    } else if (!Array.isArray(userArray)) {
        throw new Error('first param must be an array');
    } else if (!Array.isArray(countryArray)) {
        throw new Error('two param must be an array');
    } else if (userArray.some((item) => typeof item !== 'object')) {
        throw new Error('An first param must contain at objects');
    } else if (countryArray.some((item) => typeof item !== 'object')) {
        throw new Error('An two param must contain at objects');
    }

    return new Promise((resolve, reject) => {
        const newArray = userArray.map((item, index) => {
            if (item.id && item.verified === true) {
                if (item.id === countryArray[index].id) {
                    return Object.assign(item, countryArray[index]);
                } else {
                    reject(`We don\'t have information about country for this customer: ${item.name}`);
                }
            }
        }).filter((item) => item !== undefined || typeof item !== 'undefined');


        if (newArray.length !== 0) {
            resolve(newArray);
        }
    });
}

// ```javascript
const customers = [
    {
        id: 'A1',
        name: 'Oliver',
        verified: true
    },
    {
        id: 'A2',
        name: 'alex',
    }
];

const countries = [
    {
        id: 'A1',
        country: 'usa'
    },
    {
        id: 'A2',
        country: 'poland'
    },
];

getCustomers(customers, countries)
    .then((customers) => console.log(customers))
    .catch(error => console.log(error))

