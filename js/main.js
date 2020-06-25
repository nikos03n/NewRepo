//Урок 3.10. ES6. let и const

let name = "Ivan",
    age = 30,
    mail = 'ex@mail.ru';

document.write(`Пользователю ${name} ${age} лет. Его почтовый адрес: ${mail}`);

function makeArray() {
    var items = [];

    for (let i = 0; i < 10; i++) {//если меняем на let то все получается 1,3,7 (var в каждой итерации не создается занова)
        var item = function () {
            console.log(i);
        };
        items.push(item);
    }
    return items;
}

var arr = makeArray();

arr[1]();
arr[3]();
arr[7]();
//--------
let fun = () => {//первая особенность то что она ананимна
    console.log(this);
};

//fun();
//-----у стрелочной функции нет своего контекста она его берет у своего радителя
let obj = {
    nomber: 5,                      //свойство
    sayNumber: function () {        //sayNumber-это метод и помещаем фун
        let say = () => {           //создоем еще одну функцию
            console.log(this);      //мы хотим увидить какой контекст фун будит здесь
        };
        say();                     //для того чтобы зароботала нам ее нужно вызвать
    }
};

obj.sayNumber();                 //вызов
//--------при клики на кнопку вызываем контекст вызома (Push me)
let btn = document.querySelector('button');//опредиляем переменную

btn.addEventListener('click', function () { //к этой кнопке подвязываем оброботчик событий
    let show = () => {                     //объявляем новую функцию show
        console.log(this);
    }
    show();                                 //вызвали эту функцию
});