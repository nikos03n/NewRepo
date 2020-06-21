Let box = document.querySelector('.box');

// box.addEventListener('touchstart', function (e) {
// 	e.preventDefault();
// 	console.log('Red box: touchstart');
// 	console.log(e.target);
// 	console.log(e.touches[0].target);
// 	console.log(e.changedTouches);
// 	console.log(e.targetTouches);

box.addEventListener('touchmove', function (e) {
	e.preventDefault();
	console.log("Red box: " + e.touches[0].pageX);
});





//-----------------ругулярные вырожения

// /new ReqExp('pattern', 'flang');
// /pattern/

// let ans = prompt('Введенме ваше имя');

// let red = /n/i;

// console.log(ans.search(reg));

//лучше метод
let ans = prompt('Введенме ваше имя');

let red = /n/gi;

console.log(ans.match(reg));

//-------
//i
//g
//m
let pass = promt('Введите пароль');

console.log(pass.replace(/./g, "*"));
alert('12-34-56'.replace(/-/g, ':'))



//----------ищим глобально все цифры которые будут в этой строке /\d/g;
//let ans = prompt('Введение число');

//let reg = /\d/g;

//console.log(ans.match(reg));
//------------------

let str = 'Me name is R2D2';

console.log(str.match(/\w\d\w\d/i));
//регулярные выражения позваляют найти все \ водим здесь все\
});