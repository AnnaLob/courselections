"use strict";

'efcds'.toUpperCase();


let str = "some";
let strObj = new String(str);

console.log(typeof (str));
console.log(typeof (strObj));

console.dir([1, 2, 3]);

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log("Hello");
  }
};

const Jeck = Object.create(soldier);
Jeck.g = 5;
console.log(Jeck.armor);
console.log(Jeck.g);
Jeck.sayHello();

const John = {
  health: 100,

};

John.__proto__ = soldier;
Object.setPrototypeOf(John, soldier);/*
Data, which pr is being setted and Setting prototype
*/

John.sayHello();
