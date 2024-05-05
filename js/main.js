//? Задание 1
// Вам дана функция checkTask, принимающая массив arr
// с числами, выведите в консоль массив, в котором
// будут только положительные числа из массива arr.

// Например:
// function checkTask(arr) {
//   return arr.filter((el) => el > 0);
// }
// console.log(checkTask([2, 3, 5, 9, 8, -11, 6, 7, 47, 53, -1, -3, 17]));
// Вывод:

// [2, 3, 5, 9, 8, 6, 7, 47, 53, 17]
// Используйте метод filter()

//? Задание 2
// Вам дана функция checkTask, принимающая массив arr с числами.
// Используя метод forEach() найдите сумму элементов массива.

// Например:
// function checkTask(arr) {
//   let sum = 0;
//   arr.forEach((el) => (sum += el));
//   return sum;
// }
// console.log(checkTask([10, 25, 25, 15, 5, 10]));
// Вывод:

// 90

//? Задание 3
// Вам дана функция checkTask, принимающая массив arr с числами.
// Используя метод reduce(), вычтите числа в массиве начиная с
// начала и выведите в консоль результат.

// Например:
// const checkTask = function (arr) {
//   return arr.reduce((acc, el) => acc - el);
// };
// console.log(checkTask([175, 50, 25]));
// Вывод:

// 100
// т.к 175-50-25=100

//? Задание 4
// Напишите функцию checkTask(arr), которая принимает в аргументы
// массив и возвращает элемент массива с максимальным значением.

// К примеру, для массива:

// [4, 15, -4, 27, 12, 8];
// Возвращенным значением будет:

// 27
// Нельзя использовать sort()!

// const checkTask = (arr) => {
//   return arr.reduce((acc, el) => (acc > el ? acc : el));
// };
// console.log(checkTask([4, 15, -4, 27, 12, 8]));

// function checkTask(arr) {
//   return arr.);
// }
// console.log(checkTask([4, 15, -4, 27, 12, 8]));
//? Задание 5
// Данa функция checkTask(arr), принимающая в аргументы массив с числами.

// Используя forEach() и push(), создайте новый массив, состоящий из
// квадратов этих чисел.

// Результат возвратите из функции.

// Например, для массива:

// [1, 2, 3]
// Возвращенным значением будет:

// [1, 4, 9]

// function checkTask(arr) {
//   let num = [];
//   arr.forEach((element) => {
//     num.push(element ** 2);
//   });
//   return num;
// }
// console.log(checkTask([1, 2, 3]));

//? Задание 6
// Дана функция checkTask(arr), принимающая в
// аргументы массив с числами.

// Используя метод every(), проверьте то, что все
// элементы в массиве больше нуля.

// Например, если в arr будет хранится массив вида:

// [4, 5, 8, 9]
// то выводом в консоли будет:

// true

// let checkTask = (arr) => {
//   let res = arr.every((el) => el > 0);
//   return res;
// };
// console.log(checkTask([(4, 5, 8, 9)]));

//? Задание 7
// Напишите функцию checkTask(arr), принимающую
// в аргументы массив со строками.

// Используя метод filter(), оставьте в массиве
// только те строки, длина которых больше пяти символов.

// Результат выведите в консоль.

// Например, для массива:

// ['июнь', 'октябрь', 'май', 'ноябрь', 'март']
// Вывод будет:

// ['октябрь','ноябрь']

// function checkTask(arr) {
//   return arr.filter((el) => el.length > 5);
// }
// console.log(checkTask(["июнь", "октябрь", "май", "ноябрь", "март"]));
//? Задание 8
// Напишите функцию checkTask(arr), принимающую в
// аргументы массив с числами.

// Используя метод reduce(), найдите сумму всех
// элементов до первого нуля.

// Результат выведите в консоль.

// Например, для массива:

// [1, 2, 3, 0, 4, 5, 6]
// суммируем первые 3 элемента, так как дальше
// стоит элемент с числом 0.

// Вывод будет:

// 6

// const checkTask = function (arr) {
//   let result = 0;
//   arr.reduce((acc, el) => {
//     if (el === 0) {
//       result = acc;
//     } else {
//       return acc + el;
//     }
//   });
//   return result;
// };
// console.log(checkTask([1, 2, 3, 4, 5, 0, 6]));

//? Задание 12
// Напишите функцию checkTask(arr), принимающую в
// аргументы массив состоящий из других массивов.

// Используя метод reduce(), найдите сумму всех элементов.

// Результат выведите в консоль.

// Например, для массива:

// [1,2, [4,5,6], [7,8]]
// Вывод будет:

// 33

// function checkTask(arr) {
//   let res = arr.flat().reduce((acc, el) => acc + el);
//   console.log(res);
// }
// checkTask([1, 2, [4, 5, 6], [7, 8]]);

//! forEach()

// let arr = [1, 2, 3, 4, 5];

// for (let i of arr) {
//   console.log(i, "for loops");
// }

// for (let i in arr) {
//   console.log(i);
// }

// arr.forEach((el, index) => console.log(el));

//! map()

// let arr = [1, 2, 3, 4, 5];

// arr = arr.map((el, index) => index);

// console.log(arr);

//! filter()
// let arr = [1, "2", undefined, 3, "4", 5, null];

// let result = arr.filter(
//   (el, index, array) => typeof el === "number" || typeof el === "string"
// );

// console.log(result);

//! includes()

// let arr = [1, 2, 3, 4, 5];

// console.log(arr.includes(3, 2));

//! reduce

// let arr = [1, 2, 3, 4, 5];

// let sum = arr.reduce((acc, el, index) => {
//   console.log(acc * 2);
// });

// console.log(sum);

//! find()

// let arr = [1, 2, 2, 3];

// let res = arr.find((el, index, array) => el === 2);

// console.log(res);

//! findIndex()

// const arr = ["nick", "jack", "ostin", "sam"];

// let res = arr.findIndex((el, index) => index === 2);

// console.log(res);

//! indexOf()

// const arr = ["nick", "jack", "ostin", "sam"];

// let index = arr.indexOf("jack", 2);

// console.log(index);

//! every() - &&

// let arr = ["a", "a", "b"];

// let res = arr.some((el, index) => index === 2);
// console.log(res);

//! some() - ||

// console.log(typeof null);

//? ================================================================================

// 4, 5, 6

// let arr = [3, 2, 1, 7];
// let result = [];
// let maxNum = arr.reduce((acc, el) => (acc > el ? acc : el));
// let minNum = arr.reduce((acc, el) => (acc < el ? acc : el));

// for (let i = minNum; i <= maxNum; i++) {
//   if (!arr.includes(i)) {
//     result.push(i);
//   }
// }
// console.log(result);

// Вам дана функция которая принимает строку в виде предложения.
// Необходимо заменить регистр каждого символа и вернуть строку.

// Пример: Дана строка 'The Quick Brown Fox'.
// Результатом должно быть: 'tHE qUICK bROWN fOX'

// function checkTask(str) {
//   let arr = str
//     .split("")
//     .map((el) => {
//       if (el === el.toUpperCase()) {
//         return el.toLowerCase();
//       } else {
//         return el.toUpperCase();
//       }
//     })
//     .join("");
//   console.log(arr);
// }
// checkTask("The Quick Brown Fox");

// Нам дана функция checkTask(arr) которая принимает массив с
// объектами с ключами name. Нужно перебрать этот массив так,
// чтобы функция нам вернула просто массив с именами в виде строк.

// Пример: Дан массив:

// let person = [
//   {
//     name: "Askat",
//   },
//   {
//     name: "Begimay",
//   },
//   {
//     name: "Mirdin",
//   },
//   {
//     name: "Aiday",
//   },
// ];

// let result = person.map((el) => el.name);
// console.log(result);

// Вам дан сложный вложенный список.
// Используя цикл выведите все элементы в виде ключ: значение
// Ввод:
// let aboutUs = [
//   ["name", "Mition"],
//   ["type", "Web"],
//   ["place", "Bishkek"],
//   ["languages", "JavaScript, Python"],
//   ["simply", "the best!"],
// ];

// for (let i of aboutUs) {
//   console.log(`${i[0]}: ${i.slice(1)}`);
// }

// Вывод:
// name: Motion
// type: Web
// place: Bishkek
// languages: JavaScript, Python
// simply: the best!

// let arr = ["pen", "pineapple", "apple", "pen"];

// let minSum = arr.reduce((acc, el) => (acc.length > el.length ? acc : el));
// console.log(minSum);

// Так же найдите самый короткий элемент этого же массива

// let person = [
//   {
//     name: "John",
//     price: 2000,
//     work: "IT-BACKEND",
//     salary: 20000,
//   },
//   {
//     name: "John",
//     price: 2000,
//     work: "BANK",
//     salary: 9000,
//   },
//   {
//     name: "Dastan",
//     price: 2000,
//     work: "IT-FRONTEND",
//     salary: 15000,
//   },
//   {
//     name: "John",
//     price: 2000,
//     work: "JOURNALIST",
//     salary: 10000,
//   },
// ];

// let result = person.filter((el) => {
//   if (el.work.includes("IT")) {
//     return el;
//   }
// });

// console.log(result);

// Дан массив с объектами: [
//     {mark: 'Wolksvagen', year: 2005, price: 8000, sale: 0},
//     {mark: 'Audi', year: 1996, price: 2500, sale: 0},
//     {mark: 'Mercedes', year: 2001, price: 5000, sale: 0},
//     {mark: 'BMW', year: 2015, price: 18000, sale: 0},
//     {mark: 'Porsche', year: 2020, price: 120000, sale: 0},
// ]
// задача: на все автомобили, которые старше 2007 года, поставить
// скидку 20%(для скидки использовать свойство 'sale')

// Дан массив с объектами:
// [
//     {name: 'Jack', age: 15},
//     {name: 'Helen', age: 34},
//     {name: 'Tom', age: 20},
//     {name: 'Bob', age: 54},
//     {name: 'Jessica', age: 13}
// ]
// задача: реализовать рассылку сообщений типа: 'Hello, [Здесь должно быть имя клиента],
// the grand sale has begun, prices are reduced by 20%!',
// игнорировать клиентов, которым нет 18-ти лет

// При помощи метода reduce, вывести средний возраст всех юзеров.

// let users = [
//   {
//     name: 'Askat',
//     age: 21,
//   },
//   {
//     name: 'Mirdin',
//     age: 20,
//   },
//   {
//     name: 'Begimay',
//     age: 24,
//   },
//   {
//     name: 'Mikhail',
//     age: 27,
//   },
//   {
//     name: 'Almas',
//     age: 38,
//   },
// ];
