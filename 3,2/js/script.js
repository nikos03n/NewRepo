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

    let deadline = '2020-09-1';//первый нунтк задали конечную дату

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

// Form

let message = {//объект вкотором будет содержаться различные сочтаяния нашего запрса (в будующем это может быть картинки анимации)
    loading: 'Загрузка...',//свойства
    success: 'Спасибо! Скоро мы с вами свяжемся!',//свойства
    failure: 'Что-то пошло не так...'
};

let form = document.querySelector('.main-form'),//переменные со стронице это форма, и получаем эту форму через селектор класа маин
    input = form.getElementsByTagName('input'),//и импуты ,нам все необходимо, селектор input
    statusMessage = document.createElement('div');//div новый добавляем

statusMessage.classList.add('status');//добовляем клас новому диву
//навешуем на кнопку обробочик события на форму form
form.addEventListener('submit', function (event) {
    event.preventDefault();//мы должны отменить стондартное паведение браузера (кнопку вкл) странице не будет отправлять запрос приклике на кнопку
    form.appendChild(statusMessage);//пользователя нужно уповестить для этого на необходимо новый элемент поместить в нашу форму(добовляем новый див который лежит с названием статусмеседж)
    //создаем наш запрос
    let request = new XMLHttpRequest();//созд перемен и помещаем новый конструкторы
    request.open('POST', 'server.php');//и настроить (какие продукты и др)обращаемся к серверуPOST
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');//настройки заголовка httpзапроса(это команда которая говорит что будет содержать данные полученные из формы)
    //отправлять данные с form на сервер нужно чтобы в импутах стояли парамер name=''
    let formData = new FormData(form);//так помещают все то что внес пользователь 
    //request.send(formData); можно вместо let formData = new FormData(form);//передаем данные которые вел польз и уже на сервере должно быть
    //пока для  пользователя толку нету он нечего не видит , дорабатываес скрипт

    let obj = {};
    formData.forEach(function (value, key) {
        obj[key] = value;
    });
    let json = JSON.stringify(obj);

    request.send(json);

    request.addEventListener('readystatechange', function () {//отслеживаем изменения нашего запроса
        if (request.readyState < 4) {
            statusMessage.innerHTML = message.loading;//если сервер тупит получ
        } else if (request.readyState === 4 && request.status == 200) {//здесь можно ввсе и контент на странице ставить и полоску с загруской
            statusMessage.innerHTML = message.success;
        } else {
            statusMessage.innerHTML = message.failure;
        }
    });

    for (let i = 0; i < input.length; i++) {//вычисляем количество импутов и укаждого возьмем значение и превратим в пустую строку и очистим все наши импутыы
        input[i].value = '';
    }
});
//jSON - фаилы отправляет а не обычные , создаем промежуточный объкт и используем метот форич и внутри обж заполняем знач
//подом let json = JSON.stringify(obj);