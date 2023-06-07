"use strict";
//объекты - ассоциативные массивы

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg:'red'
  },
  makeTest: function () {
    console.log('Test');
  }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);

console.log(Object.keys(options).length);


console.log(options.name);

delete options.name;//удаление свойства

console.log(options);

let counter = 0;
for ( let key in options) {
  if (typeof(options[key])==='object') {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
    counter++;
  }
  } else {
   console.log(`Свойство ${key} имеет значение ${options[key]}`);
  counter++;
  };
 
}

console.log(counter);

let counter1 = 0;
for (let key in options) {
 // if (typeof(options[key])==='object') {
   // for (let i in options[key]) {
     // console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
    //counter1++;
  //}
  //} else {
   //console.log(`Свойство ${key} имеет значение ${options[key]}`);
  counter1++;
};
//базовый случай пересчета позиций объекта
 
let user = {
  name: "John",
  age: 30
};

let key = "a";

// доступ к свойству через переменную
console.log( user[key] ); // John (если ввели "name")




    


