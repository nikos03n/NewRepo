let options = {
    width: 1024,
    height: 1024,
    name: 'test'
};

console.log(options.name);
options.bool = false;                                 //доп свойства
options.colors = {
    border: 'black',
    bg: 'red'
};

delete options.bool;

console.log(options);

//вытащить из шкафа dsfdssdf22222222222222

for (let key in options) {
    console.log('Свойство ' + key + ' имеет значение ' + options[key]);
}
console.log(Object.keys(options).length);

////-------------------------НАЧАЛО УРОКА Урок 2.15. Массивы и псевдомассивы
//let arr = [1, 2, 3, 4, 5,];

////arr.pop();           //последний уберает
////arr.push('5');
////arr.shift();           //первый уберает
////arr.unshift('1');

////перебераем масиф
////arr[99] = 99;           //не желательно
////console.log(arr.length);//99элементов +1
////console.log(arr);

////for (let i = 0; i < arr.length; i++) {
////    console.log(arr[i]);
////}
//                                             //i это номер нашего элементо можно ставить любое название кот используют функци/
//arr.forEach(function (item, i, mass) {     //item это каждый элемент в нашем масиве //arr-mass это сам масив,название сами придумали 
//    console.log(i + ': ' + item + '(массив: ' + mass + ')');
//});    

//console.log(arr);

////---------------------нов метад к объектам не подходит
////let mass = [1, 3, 4, 6, 7];

////for (let key in mass) {
////    console.log(key);
////}


//--------------------------------
//let mass = [1, 3, 4, 6, 7];

//for (let key of mass) {
//    console.log(key);
//}

//ans будет получать ответ от пользоватиля при помощью каманды prompt
//let ans = prompt('', ''),
//    arr = [];
//arr = ans.split(',');
//console.log(arr);




//let arr = ['dfdfd', 'wdwd','dwdwdw','dwdw'],
//    i = arr.join(',');

//console.log(arr);
////console.log(i);



//------------если нужно сортировать по алфовиту


//let arr = ['dfdfd', 'wdwd','dwdwdw','dwdw'],
//    i = arr.sort();

//console.log(arr);

let arr = [1, 15, 4],
    i = arr.sort(compareNum);//вставляем compareNum чтобы цифры по возростанию

function compareNum(a, b) {
    return a - b;
}

console.log(arr);
//Полное описание массивов
////https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array

////Урок 2.16. Объектно-ориентированное программирование (ООП)

let soldier = {   //глабальный клас солдат
    health: 400,
    armor: 100
};

let jonn = {
    health: 100
};

jonn.__proto__ = soldier;

console.log(jonn);
console.log(jonn.armor); //armor бирем это свойства из его прототипа солдата



//https://learn.javascript.ru/classes //Классы
//https://learn.javascript.ru/constructor-new  //Функции-конструкторы

