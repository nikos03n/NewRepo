//"use strict";
//const heading = document.getElementById("hello");
//
//setTimeout(() => {           
//    console.log(heading);
//    console.dir(heading);
//    console.dir(heading.id);
//
//    heading.textContent = "Nev js";
//    console.dir(heading.textContent);
//
//    heading.textContent = "h1програмно изменили наш хединг текст h1";
//    console.dir(heading.textContent);
//
//    heading.style.color = "#666"; 
//    console.dir(heading.style.color);
//
//    heading.style.textAlign = "center";
//
//    heading.style.backgroundColor = "#0000002e";
//    heading.style.padding = "2rem";       
//}, 500);


//const heading1 = document.getElementById("hello1");
//
//setTimeout(() => {
//    addStylesTo(heading1);
//}, 500);
//
//
//function addStylesTo(node, text) {
//    node.textContent = "heading1 програмно изменили наш хединг текст ";
//    node.style.color = "#666";
//    node.style.textAlign = "center";
//    node.style.backgroundColor = "#0000002e";
//    node.style.padding = "2rem";       
//    }

//....................Selection 

//const heading2 = document.querySelector("h2");
////console.log("heading2");
//heading2.style.color = "#d00f33f2";
//heading2.style.backgroundColor = "#0028bc94";
//heading2.style.marginLeft = "20px";
//heading2.style.padding = "5rem";       

//const heading3 = heading2.nextElementSibling;

//const pList = document.querySelectorAll("p");
//console.log(pList);
//const heading4 = pList[pList.length - 1];
//console.log(heading4);
//console.dir(heading1);
//
//setTimeout(() => {
//    addStylesTo(heading2);
//}, 500);
//--------------------------------
//console.dir(heading2);

//const heading3 = heading2.nextElementSibling; //способ 1 получение


//const heading = document.getElementById("hello"); //получаем множестко один

//const heading = document.getElementsByTagName("h2") [0]; //получаем множестко элементов (подкласс)
//console.log(heading);

const heading2 = document.querySelector("h2"); //("h2")(".h2")("#h2")обращаемся к документу
//const heading3 = heading2.nextElementSibling; //способ 1 получение

//console.dir(heading2);



const h2list = document.querySelectorAll("h2"); //способ 2 получение 
console.log(h2list);
const heading3 = h2list[h2list.length - 1];
//const heading4 = h2list[h2list.length - 1];

//console.log(heading3);
//const heading4 = h2list[h2list.length - 1];


//setTimeout(() => {
//addStylesTo(heading, "JavaScript");
//}, 500);
setTimeout(() => {
addStylesTo(heading2, "h2JavaScript");
}, 1500);

const link = heading3.querySelector("a") //событие event добавил
link.addEventListener("click", (event) => { 
    event.preventDefault()
    console.log("Click or link", event.target.getAttribute("href"))
    const url = event.target.getAttribute('href')

    window.location = url
})

setTimeout(() => {
    addStylesTo(link, "h23JavaScript");
}, 1500);

//setTimeout(() => { ///сылка работаес children[0]
//    addStylesTo(heading3.children[0], "h23JavaScript");
//}, 1500);

setTimeout(() => {
addStylesTo(heading4, "h23JavaScript");
}, 1500);


//function addStylesTo(node, text) {
//    node.textContent = text;
//    node.style.color = "#666";
//    //node.style.textAlign = "center";
//    node.style.backgroundColor = "#0000002e";
//    node.style.padding = "1rem";    
//    //
////const heading10 = document.querySelector("p");
////
//////const heading3 = document.querySelector("p");
////
//////console.dir(heading);
//////console.dir(heading2);
////
////
////const pList = document.querySelectorAll("p");
//////console.log(h2List);
////const heading4 = pList[pList.length -1];
//////console.log(heading4);
////
////setTimeout(() => {
////addStylesTo(heading4, "JavaScript");
////}, 500);
////
////
////
////function addStylesTo(node, text) {
////    node.textContent = "heading1 програмно изменили наш хединг текст ";
////    node.style.color = "#666";
////    node.style.textAlign = "center";
////    node.style.backgroundColor = "#0000002e";
////    node.style.padding = "1rem";       
////}
//}


//-------------pp----------------------------p
const heading33 = document.getElementById("hello33");
const qqqq = document.getElementById("hello44");
const heading55 = document.getElementById("hello55");



const heading333 = document.querySelector("p");


//console.dir(heading333);

const plist = document.querySelectorAll("p"); //способ 2 получение 
console.log(plist);
const heading444 = plist[plist.length - 1];
console.log(heading444);

setTimeout(() => {
addStylesTo(heading33, "pJavaScript");
}, 500);

setTimeout(() => {
addStylesTo(qqqq, "pJavaScript");
}, 500);

setTimeout(() => {
addStylesTo(heading333, "pJavaScript");
}, 1500);

setTimeout(() => {
addStylesTo(heading55, "pJavaScript", "yellow");
}, 1500);

setTimeout(() => {
addStylesTo(heading55, "pJavaScript", "blue", "5rem");
}, 1500);

//setTimeout(() => {
//addStylesTo(heading444, "p1JavaScript");
//}, 1500);
function addStylesTo(node, text, color = "red", fontSize) {
    node.textContent = text;
    node.style.color = color;
    //node.style.textAlign = "center";
    node.style.backgroundColor = "#0000002e";
    node.style.padding = "1rem";  
    // falsy: ", undefined, null, 0, false
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}

/* heading55.onclick = () => {
    console.log("click");
} */
heading55.onclick = () => {
    if (heading55.style.color === "red") {
        heading55.style.backgroundColor = "#fff"
    }   else {
        heading55.style.color = "red"
        heading55.style.backgroundColor = "#000"
    }
}

heading44.addEventListener("dblclick", () => {
    if (heading44.style.color === "yellow") {
        heading44.style.color = "#000"
        heading44.style.backgroundColor = "#fff"
    }   else {
        heading44.style.color = "red"
        heading44.style.backgroundColor = "#000"
    }
})
