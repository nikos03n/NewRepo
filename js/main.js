//console.log(typeof (String(4)));

console.log(typeof ("" + false));

console.log('http://f0433670.xsph.ru/' + 5);


////приобразоваваем числа----динамическая типизация
//1
console.log(typeof (Number('5')));//v namber

//2вариант
console.log(typeof (+'5')); //перед любым типом данных ставим + приврящает в число
console.log(typeof (5 + +'5'));//v namber

//3

console.log(typeof (parseInt('15px', 10))); //v namber

let ans = +prompt('Helloy', '');//добавили + и все что получ от пользоватиля будит числом

// то что привращается в неправду
//0, '', null, undefined, nan  //всегда неправда а если 'пробел' то это значение
//1
let switcher = null;

if (switcher) {
    console.log('Working')
}

switcher = 1

if (switcher) {
    console.log('Working')
}
//2
console.log(typeof (Boolean('5')));
//3


