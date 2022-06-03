// # Задача 3
// Создайте функцию `send` которая будет оберткой для функции `get` которая поддерживает только `callback` технологию.

// **Обратите внимание**:

// 1. Функция `send` должна возвращать промис;
// 2. Использование `async & await` **запрещено**.
// 3. Нужно использовать библиотеку для отправки запросов [fetch](https://github.com/andris9/fetch)
// 4. Использование посторонних библиотек кроме [библиотеки fetch](https://github.com/andris9/fetch) **запрещено**.
// 5. Если сервер ответил статус кодом `200` промис **должен** резолвиться с параметром, аргументом для которого будет массив который содержит список объектов-стран.
// 6. В том случае если сервер ответил статус кодом не `200` промис **должен** реджектится с текстом `We have error, status code: ${statusCode}`

// **До рефакторинга**:

// ```javascript
const get = require('fetch').fetchUrl;

const url = 'https://jsonplaceholder.typicode.com/users';


const getData = url => {
	return new Promise((resolve, reject) => {
		get(url, (error, meta, body, status) => {
			const newArray = [];

			if (error) {
				return reject('We have error: ' + error.message);
			}

			const users = JSON.parse(body);

			for (const iterator of users) {
				if (iterator.address) {
					newArray.push(iterator.address);
				}
			}

			if (meta.status === 200) {
				return resolve(newArray);
			}
		});
	});
};

getData(url)
	.then(data => {
		console.log(data);
	})
	.catch(error => {
		console.log(error);
	});