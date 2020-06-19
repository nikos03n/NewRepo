let btn = document.getElementsByTagName('button')
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
link.addEventListener('click', function (event) {
    event.preventDefaunt()
    console.log('произошло событие: ' + event.type + ' на элименте ' + event.target)
})