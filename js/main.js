let box = document.getElementById('box')
btn = document.getElementsByTagName('button')
circle = document.getElementsByClassName('circle')
heart = document.querySelectorAll('.heart')
oneHeart = document.querySelector('.heart')

box.style.backgroundColor = 'blue'
btn[3].style.borderRadius = '100%'

circle[0].style.backgroundColor = '#ccff00'
circle[1].style.backgroundColor = 'rgb(0, 255, 31)'
circle[2].style.backgroundColor = 'rgb(230, 16, 75)'


//цикл-----------------------------------1, 2
// for (let i = 0; i < heart.length; i++) {
// heart[i].style.backgroundColor = 'blue'
// }


//1-moi - это каждая конфета которую попроб, 
//2-i это номер конфеты, 
//3moi2 - это все конфетты 
// heart.forEach(function (moi, i, moi2) {
// moi.style.backgroundColor = 'black'
// })

//----------------создать элемент
let div = document.createElement('div')
text = document.createTextNode('тутбыл я')

div.classList.add('black')

document.body.appendChild(div) //вывели на сайт

console.log(div)