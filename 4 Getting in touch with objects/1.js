/**
 * Задача 1.
 *
 * Создайте объект `person` у которого будет одно свойство `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 */

const person = {};

// Решение

Object.defineProperty(person, 'salary', {
  get daysInMounth() {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    return new Date(year, month, 0).getDate();
  },
  value: (this.daysInMounth > 20) ? 'good salary' : 'bad salary',
});

person.salary = 'good salary';

person.salary; // good salary

exports.person = person;
