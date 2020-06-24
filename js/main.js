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

