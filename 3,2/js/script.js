// window.addEventListener('DOMContentLoaded', function () {

//     'use strict';
//     let tab = document.querySelectorAll('.info-header-tab'),
//         info = document.querySelector('.info-header'),
//         tabContent = document.querySelectorAll('.info-tabcontent');

//     function hideTabContent(a) {
//         for (let i = a; i < tabContent.length; i++) {
//             tabContent[i].classList.remove('show');
//             tabContent[i].classList.add('hide');
//         }
//     }

//     hideTabContent(1);

//     function showTabContent(b) {
//         if (tabContent[b].classList.contains('hide')) {
//             tabContent[b].classList.remove('hide');
//             tabContent[b].classList.add('show');
//         }
//     }

//     info.addEventListener('click', function (event) {
//         let target = event.target;
//         if (target && target.classList.contains('info-header-tab')) {
//             for (let i = 0; i < tab.length; i++) {
//                 if (target == tab[i]) {
//                     hideTabContent(0);
//                     showTabContent(i);
//                     break;
//                 }
//             }
//         }

//     });

//     // -----------Timer ---------------

//     let deadline = '2020-06-23';//первый нунтк задали конечную дату

//     function getTimeRemaining(endtime) {//сюда будим передовать эту дату
//         let t = Date.parse(endtime) - Date.parse(new Date()),//в t лужит разница в милисик
//             seconds = Math.floor((t / 1000) % 60),
//             minutes = Math.floor((t / 1000 / 60) % 60),
//             hours = Math.floor((t / (1000 * 60 * 60)));

//         return {//возврвщает целый объект объект который содержит
//             'total': t,
//             'hours': hours,
//             'minutes': minutes,
//             'seconds': seconds
//         };
//     }

//     function setClock(id, endtime) {//куда устанавливаем (setClockберет различные переменные со страници)
//         let timer = document.getElementById(id),//
//             hours = timer.querySelector('.hours'),
//             minutes = timer.querySelector('.minutes'),
//             seconds = timer.querySelector('.seconds'),
//             timeInterval = setInterval(updateClock, 1000);

//         function updateClock() {//вызов каждую секунду(updateClock которая получает разницу со временм при помощи фунgetTimeRemaining)
//             let t = getTimeRemaining(endtime);

//             function addZero(num) {
//                 if (num <= 9) {
//                     return '0' + num;
//                 } else return num;
//             };
//             //записываем все данные прямо в верстку 
//             hours.textContent = addZero(t.hours);
//             minutes.textContent = addZero(t.minutes);
//             seconds.textContent = addZero(t.seconds);

//             if (t.total <= 0) {//остановить 
//                 clearInterval(timeInterval);
//                 hours.textContent = '00';
//                 minutes.textContent = '00';
//                 seconds.textContent = '00';
//             }
//         }

//     }

//     setClock('timer', deadline);//для того чтобы сразу увидить эту функцию
// });

class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {//методы нашего клас (то что он умеет делать)
        console.log('Hello ${this.name}')
    }
    exit() {
        console.log('Пользователь ${this.name} ушел')
    }
}
let ivan = new User('Ivan', 23);
let alex = new User('Alex', 20);
console.log(ivan);
console.log(alex);
ivan.hello();
alex.hello();


