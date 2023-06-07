"use strict";

function first () {
  setTimeout(function() {
      console.log(1);
  }, 500);
}

function second () {
  console.log(2);
}

first();
second();

//Эти функции вызываются не одна за другой

//Запись через анонимную функцию
function learnJS (lang, callback) {
  console.log(`Я учу: ${lang}`);
  callback();
}


learnJS('JavaScript', function () {
  console.log('Я прошел этот урок');
});


//Запись с объявлением функции
function learnJS1 (lang, callback) {
  console.log(`Я учу: ${lang}`);
  callback();
}


function done() {
  console.log('Я прошел этот урок');
}
learnJS1('JavaScript', done);

//Callback нужна для того, чтобы сначала выполнилась одна функция, а только потом другая

function IMadeIt (f, callback) {
  console.log(`${f}`);
  callback();
}
function done() {
  done = console.log(4);
 } 
IMadeIt(7, done);

const f = 5;

function Js (f, callback) {
  console.log(f-1);
  console.log(f);
  callback();
}

function g () {
  console.log(f+1);
}
Js (f, g);

a = "use";
function PrintOut (a, f) {
  console.log(a.toUpperCase());
  f()
}
PrintOut(a, function() {
  console.log(a);
})