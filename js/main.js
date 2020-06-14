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
