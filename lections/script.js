
"use strict";
let number = 4.6; //infinity (число/0),  
console.log(-4/0);
console.log('string' * 9); //NaN - not a number 

const persone = "Alex"; // Можно ставить и одинарные, и двойные кавычки

const bool = true; //false

let und;
console.log(und);

/*объект - коллекция данных. Можно хранить любые данные. Нужно пользоваться
 структурой фигурных скобок. Внутри скобок содержатся данные - свойства
  объекта
 и дейсвтия - методы объекта*/

 const obj = {
 name: "John", //ключ: значение 
 f: 25,
 isMarried: false
};

console.log(obj[f]);
console.log(obj.name);
//Массив - частный случай объектов
             
let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, [] ];
 /*особенность - элементы лежат строго по порядку. Являются 
комплексными типами данных, могут содержать различные данные*/

console.log(arr[1]); //Нумерация с нуля!!!

//Массив - частный случай объекта, а не отдельный тип данных

/*В массиве есть только значение, ключа как бы не
 существует. Но если поставитьт сверху цифры, то можно понять, что 
 в роли ключа выступает порядковый номер элемента в массиве*/




