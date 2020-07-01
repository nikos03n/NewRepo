// let options = {
//     width: 1366,
//     height: 768,
//     background: 'red',
//     font: {
//         size: '16px',
//         color: '#fff'
//     }
// }

// console.log(JSON.stringify(options))на сервер
//-----
// let options = {
//     width: 1366,
//     height: 768,
//     background: 'red',
//     font: {
//         size: '16px',
//         color: '#fff'
//     }
// }

// console.log(JSON.parse(JSON.stringify(options)))

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {//зачем мы идем в магазин  навешуим оброботчик событий
    let request = new XMLHttpRequest();//метод запроса аяксы

    //request.open(method, url, async, login, pass);//можем исполь это для примера
    request.open('GET', 'js/current.json');         //GETзапрос-можем получ данн из сервера
    request.setRequestHeader('content-type', 'application/json; charset=utf-8');
    request.send();
    //status
    //statusText
    //ResponseText / Response
    //readyState

    request.addEventListener('readystatechange', function () {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputUsd.valut = inputRub.valut / data.usd;
        } else {
            inputUsd.valut = "чтото пошло не так";
        }
    });
});