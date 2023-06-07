"use strict";

let num=20;//создание локальной переменной

function showFirstMessage (text) { //внутри круглых скобках передаются аргументы 
 console.log(text);
 let num=10;//создание локальной переменной
 //Если писать без let, то num перезаписывается
 console.log(num);
 //замыкание функции - это функция со всеми внешними переменными, которые ей доступны
}

showFirstMessage("Hello World!");//текст внутри закладывается в text
console.log(num);

function Calc(a, b) {
    return (a+b); //позволяяет вернуть значение во внешний мир
    console.log('dfv');
}

console.log(calc(4, 3));

function ret() {
    let num = 50;


    return (num);
}

const anotherNum=ret();
console.log(anotherNum);

const logger = function () {

    console.log('Hello!');
};

const calc =(a, b) => { return a+b };


//SECOND PART
"use strict";

const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert (amount, curr) {
   return curr*amount;
}

function promotion (result) {
    console.log(result*discount);
}

promotion (convert(500, usdCurr));
convert(500, usdCurr);
convert (5000, eurCurr);

const res = convert (500, usdCurr);
promotion (res);

function test() {
    for (let i=0; i<5; i++) {
        console.log(i);
        if (i==3) return 
    }    
    console.log ('Done');

}

function doNothing () {
console.log(doNothing()===undefined);
}
