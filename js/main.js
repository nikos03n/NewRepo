<<<<<<< HEAD
//Урок 3.9. Стандарт ES6. Интерполяция
//знак долора новый
let name = "Ivan",
    age = 30,
    mail = 'ex@mail.ru';

document.write(`Пользователю ${name} ${age} лет. Его почтовый адрес: ${mail}`);
=======
let btn = document.querySelectorAll('button')
wrap = document.querySelector('.wrapper')
link = document.querySelector('a')
// btn[0].onclick = function () {
//     alert('вы нажали первую кнопку')
// }
// btn[0].addEventListener('click', function () {
//     alert('вы нажали первую кнопку')
//     alert('вы опять нажали первую кнопку')
// })
//---------------
// btn[0].addEventListener('click', function () {
//     alert('вы нажали первую кнопку')
// })
// btn[0].addEventListener('click', function () {
//     alert('вы опять нажали первую кнопку')
// })
//----------------------------
// btn[0].addEventListener('mouseenter', function () {
//     alert('Вы навели на первую кнопку, вылазит при наведении')
// })
//-------------------------------event объект тоесть событие 
btn[0].addEventListener('click', function (event) {
    console.log(event)
    let target = event.target
    target.style.display = 'none'
    // console.log('произошло событие: ' + event.type + ' на элименте ' + event.target)
})

// wrap.addEventListener('click', function () {
//     console.log('произошло событие: ' + event.type + ' на элименте ' + event.target)
// })

//сылка делается не переходной
// link.addEventListener('click', function (event) {
//     event.preventDefaunt()
//     console.log('произошло событие: ' + event.type + ' на элименте ' + event.target)
// })
////-оброботчик сабытий-----item это каждая кнопка на псевдомасиве благодаря querySelectorAll
btn.forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        console.log('Вышли')
    })
})
>>>>>>> 13ff7e819f0b16b4cde4d3d11745bd1e216739b5
