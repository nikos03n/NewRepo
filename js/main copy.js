
"use strict";

// //var leftBorderWidth = 1; грузит все
// //let second = 2; быстрей груится бра
// //const pi = 3.14;менять нельзя
// //console.log(pi);

// //типы даанных 

// var number = 5;       //число
// var String = "Hello"; //cтока 
// var sym = Symbol();    //новый тип данны
// var Boolean = true;   //логический либо да  либо нет
// null;
// undefined;
// var obj = {};            //объект

// console.log(4/0);
// console.log("string"*9);
// let something;              //undefined 
// console.log(something);

// let persone = {
//     name: "Jora",
//     age: 25,
//     isMarried: false
// };

console.log(persone.name);

console.log(persone["name"]);

создадим мосив с перечень фото

let arr = ["plum.png","orange.jpg","apple.bmp"];

console.log(arr[0]);

alert("Hello");

let answer = confirm("Are you here");

console.log(answer);

// let answer = prompt("есть вам 18", "да");

// console.log(typeof(answer));

// console.log("arr" + " - object");
// console.log(4 + " - object");
// console.log(4 + + " - object");



// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

// console.log(incr);
// console.log(decr);

let incr = 10,
decr = 10;

console.log(++incr);  mojno//console.log(incr--);
console.log(--decr);

//     console.log(5%2);
//     console.log("2" == 2);

// let isChecked = true,
//     isClose = true;

//     console.log(isChecked && isClose);
//     console.log(isChecked || isClose);



Урок 2.7. Подготавливаем проект к дальнейшим урокам


Практическое задание
1) Создать HTML страницу и подключить к ней файл скрипта
2) В файле скрипта создать 2 переменные (money и time), которые будут получать данные от пользователя:
- Первая будет спрашивать "Ваш бюджет на месяц?"
- Вторая "Введите дату в формате YYYY-MM-DD"
3) Создать объект appData, который будет содержать такие данные:
- бюджет (передаем сюда переменную из п.2)
- данные времени - timeData (передаем сюда переменную из пункта 2)
- объект с обязательными расходами - expenses (смотри пункт 4)
- объект с необязательными расходами - optionalExpenses (оставляем пока пустым)
- массив данных с доп. доходом - income (оставляем пока пустым)
- свойство savings (выставляем его как false)
4) Задать пользователю по 2 раза вопросы:
- “Введите обязательную статью расходов в этом месяце”
- “Во сколько обойдется?”

Записать ответы в объект expenses в формате:
expenses: {
“ответ на первый вопрос” : “ответ на второй вопрос”
}
5) Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней, использовать alert)
6) Проверить, чтобы все работало без ошибок в консоли
7) Создать свой репозиторий на GitHub и поместить туда папку с первым заданием

    
let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);















