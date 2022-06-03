/**
 * Задача 6.
 *
 * Реализуйте класс Student , который наследует от класса User.
 * 
 * Класс User должен обладать следующими свойствами:
 * - firstName — имя;
 * - lastName — фамилия;
 * - getName() — метод, который возвращает имя и фамилию пользователя.
 * 
 * Класс Student должен обладать следующими свойствами:
 * - year — год поступления в вуз;
 * - getCourse() - метод, который возвращает текущий курс студента (от 1 до 5).
 * 
 * Курс, на котором учится студент вычисляется так: нужно от текущего года отнять год поступления в вуз.
 * Текущий год получите самостоятельно.
 * 
 * Условия:
 * - Реализация решения — это синтаксис современных классов JavaScript;
 * - В реализации работы метода getCourse обязательно использовать конструктор Date.
 */

 // Решение

 class Student {
   date = new Date();
   constructor (firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
   }


   getName = () => `${this.firstName} ${this.lastName}`;
   getCourse = () => this.date.getFullYear() - this.year;
 }

const student = new Student('Water', 'White', 2019);

console.log(student.getName()); // Walter White
console.log(student.getCourse()); // 4

exports.User = User;
exports.Student = Student;