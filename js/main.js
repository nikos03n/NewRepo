let box = document.getElementById('box')
btn = document.getElementsByTagName('button')
circle = document.getElementsByClassName('circle')
heart = document.querySelectorAll('.heart')
oneHeart = document.querySelector('.heart')
wrapper = document.querySelector('.wrapper')

//console.log(oneHeart)


box.style.backgroundColor = 'blue'
btn[3].style.borderRadius = '100%'

circle[0].style.backgroundColor = '#ccff00'
circle[1].style.backgroundColor = 'rgb(0, 255, 31)'
circle[2].style.backgroundColor = 'rgb(230, 16, 75)'


//цикл-----------------------------------1, 2
// for (let i = 0; i <h1 heart.length; i++) {
// heart[i].style.backgroundColor = 'blue'
// }


//1-moi - это каждая конфета которую попроб, 
//2-i это номер конфеты, 
//3moi2 - это все конфетты1 
// heart.forEach(function (moi, i, moi2) {
// moi.style.backgroundColor = 'black'
// })

//----------------создать элемент
let div = document.createElement('div')
text = document.createTextNode('тутбыл я')
div.textContent = 'heloy'
div.classList.add('black')
console.log(div)
//div.innerHTML = 'heloy word'

//dfocument.body.appendChild(div) //вывели на сайт
//wrapper.appendChild(div) //вывел в конец wrapper
document.body.insertBefore(div, circle[1]) //вывел куда надо
document.body.removeChild(circle[2]) //удаляет элемент
wrapper.removeChild(heart[1])

//замена одного на другой элемент
//document.body.replaceChild(btn[1], circle[1]);
//wrapper.replaceChild(btn[0], heart[2]);
//wrapper.replaceChild(btn[1], heart[0]);

//--------------добовляем текст в htm.l----
// div.innerHTML = '<h1>heloy word < /h1>'
// document.body.insertBefore(div, circle[1]) //вывел куда надо
//div.textContent = 'heloy'


//console.log(div)