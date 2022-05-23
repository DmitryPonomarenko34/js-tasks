/**
 * Задача 2.
 *
 * Создайте объект `person` у которого будет 2 свойства: `rate` и `salary`.
 * Свойство `rate` можно читать и записывать, но нельзя удалять, а также это свойство не должно участвовать в перечислении всех свойств при переборе.
 * Свойство `salary` можно читать, но нельзя менять.
 * При чтении свойства `salary` возвращает результат умножения поля `rate` на текущее число в месяце.
 * Если rate не установлен — возвращаем число 0.
 */

const person = {};

// Решение

Object.defineProperties(person, {
  'rate': {
    enumerable: false,
    writable: true,
    configurable: false,
  },

  'salary': {
    get: function() {
      const today = new Date();
      const currentMounth = today.getMonth();
      const calcSum = this.rate * currentMounth;
      
      return (this.rate) ? calcSum : 0;
    },
  },
});

person.rate = 30;
person.salary;

// Предположим что сегодня 10 января, в этом случае это свойство возвращает число 300

console.log(person);

exports.person = person;
