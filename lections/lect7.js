'use strict';

alert ("Hello!"); //Предупредить о чем-то пользователя
const result = confirm('Are you here?');
console.log(result);

//const answer = prompt('Вам есть 18?', "");//
//console.log(typeof(answer));
/* Оператор typeof 
возвращает строку, указывающую тип операнда.*/
/*Ответы, приходящие от пользователя -
 всегда строка*/

 const answer1 = prompt('Вам есть 18?', "18");
 console.log(typeof(answer1)); /*Этот овтет будет числом, это динамическая 
 типизация*/

console.log(answer1+5);//В данном случае он склеит строку и число

const answer2 = +prompt('Вам есть 18?', "18");
 console.log(typeof(answer1)); /*Этот овтет будет числом, это динамическая 
 типизация*/

console.log(answer2+5);//Здесь же он прибавит к числу число 

const answers = [];
answers[0] = prompt('What is your name?', '');
answers[1] = prompt('How are you?', '');
answers[2] = prompt('Where are you from?', '');

document.write(answers);// Выводит на весь экран

console.log(typeof(answers)); //Выведет объект - это массив
console.log(typeof(null)); //Выведет объект - официальная ошибка

//Как работает prompt
//Внутри vsкода не будут запускаться confirm, alelt, prompt
//document.write(разметка(Строка, содержащая текст для записи в документ.));







