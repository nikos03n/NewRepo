window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });

    // Timer 

    let deadline = '2020-07-1';//первый нунтк задали конечную дату

    function getTimeRemaining(endtime) {//сюда будим передовать эту дату
        let t = Date.parse(endtime) - Date.parse(new Date()),//в t лужит разница в милисик
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        return {//возврвщает целый объект объект который содержит
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {//куда устанавливаем (setClockберет различные переменные со страници)
        let timer = document.getElementById(id),//
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {//вызов каждую секунду(updateClock которая получает разницу со временм при помощи фунgetTimeRemaining)
            let t = getTimeRemaining(endtime);

            function addZero(num) {
                if (num <= 9) {
                    return '0' + num;
                } else return num;
            };
            //записываем все данные прямо в верстку 2
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {//остановить 
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }

    setClock('timer', deadline);//для того чтобы сразу увидить эту функцию
    // Modal


    let more = document.querySelector('.more'),//бутон кнопка
        overlay = document.querySelector('.overlay'),//div class="overlay fade"
        close = document.querySelector('.popup-close');//кнопка div class="popup-close">&times

    more.addEventListener('click', function () { //берем оброботчик (ставим ему клик и функ)
        overlay.style.display = 'block';         //наш оверлей должен менять свои стили
        this.classList.add('more-splash');       //при клике воспроизводилась небольшая анимация
        document.body.style.overflow = 'hidden'; //запрет лестать страницу пока открыто модальное окно
    });

    close.addEventListener('click', function () {//клик по крестику
        overlay.style.display = 'none';//ноне не применять стили задаем
        more.classList.remove('more-splash');//клас не добавляем а убираемю, клас лист удаляем у переменной more
        document.body.style.overflow = '';//отмена на, (запрет лестать страницу пока открыто модальное окно)
    });

});

// Второе задание

// let age = document.getElementById('age');

// function showUser(surname, name) {
//          alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// }

// showUser.apply(age, ["Горький","Максим"]);