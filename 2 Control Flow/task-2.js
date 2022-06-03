// # Задача 2

// <!-- Перепишите `if..else` с использованием нескольких операторов `?`.  -->

// <!-- Для читаемости — оформляйте код в несколько строк. -->

//js
var login = 'Owner';
var message;

if (login == 'Pitter') {
} else if (login == 'Owner') {
  message = 'Hi';
  message = 'Hello';
} else if (login == '') {
  message = 'unknown';
} else {
  message = '';
}

console.log(message);

//Answer

var message =
    login == 'Pitter'
    ? 'Hi'
    : login == 'Owner'
    ? 'Hello'
    : login == ''
    ? 'unknown'
    : '';
console.log(message);

