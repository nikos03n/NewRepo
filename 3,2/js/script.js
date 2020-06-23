// //в данном случии this как бомж привязон к окну виндавс
// // function showThis() {
// //     console.log(this);
// // }
// // showThis()
// // //-------------------это неправельно 
// // function showThis(a, b) {//доб два аргумента
// //     console.log(this);//консол оставим чтобы смотреть
// //     function sum() {//внутрь добавим еще одну функцию
// //         console.log(this);
// //         return this.a + this.b;//должна вернуть а+b которые передаются showThis
// //     }
// //     console.log(sum());//смотрим
// // }
// // showThis(4, 5);
// // showThis(5, 5);

// //-------------------ПРАВЕЛЬНО делать нужно ЗАМЫКАНИЕ
// // function showThis(a, b) {            //доб два аргумента
// //     console.log(this);           //консол оставим чтобы смотреть
// //     function sum() {            //внутрь добавим еще одну функцию
// //         console.log(this);
// //         return a + b;//            (ЗАМЫКАНИЕ)всебе a b не находит ищит выше showThis здесь она видит что есто два параметра showThis(4, 5);
// //     }
// //     console.log(sum());             //смотрим
// // }
// // showThis(4, 5);
// // showThis(5, 5);

// //----------------------------
// let obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this);
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();//(получили наш объект). sum это функция но когда она является методом кокогото объекта то контекст выполнения это и есть сам объект 

// //---------РУЧНОЙ метод-передачи контекст вызова-----------------------------------
// // let user = {
// //     name: "John"
// // };

// // function saName() {
// //     console.log(this);
// //     console.log(this.name);
// // }
// // console.log(saName.call(user));
// // console.log(saName.apply(user));
// //--------------------------
// let user = {
//     name: "John"
// };

// function saName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }
// console.log(saName.call(user, 'Smith'));//строку передаем
// console.log(saName.apply(user, 'Snow'));//масиф передаем

// //-----------------------------------
// function count(number) {
//     return this * number;
// }

// let double = count.bind(2); //к this при помощи метода bind привязываем(2) если просто то то что передаем в bind всегда заменяет this
// console.log(double(3));
// console.log(double(10));


//--Указание конкретного контекста - coll, apply, bind--------------------------------
// let btn = document.querySelector('button');//ВЫЗВАЛИ КНОПКУ В КОНСОЛ

// btn.addEventListener('click', function () {
//     console.log(this);
// })
//----------------------
let btn = document.querySelector('button');

btn.addEventListener('click', function () {
    console.log(this)
    this.style.backgroundColor = 'red'
})

// let btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//     console.log(this)
//     this.style.backgroundColor = 'red'
//     function showThis() {
//         console.log(this)
//     }
//     showThis()
// })

// //1) Просто вызов функции - window/uandefind
// //2) Метод объекта - this = объекту
// //3) Конструктор ( new)- this = новый созданый объект
// //4) Указание конкретного контекста - coll, apply, bind