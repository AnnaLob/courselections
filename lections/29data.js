"use strict";

let a = 5, 
  b = a;
b = b+5;
const obj = {
 a:5,
 b:1
};

const copy = obj;//передает ссылку
copy.a = 10;

function copy1 (mainObj) {
 let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a:2,
  b:5,
  c: {
    x:7,
    y:4
  }
};

const newNumbers = copy1(numbers);

newNumbers.a = 10;

newNumbers.c.x = 10;
 /*
 бывают глубокие и поверхностные копии.
 Мы создали поверхностную копию. Но вложенные структуры имеют ССЫЛОЧНЫЙ 
 тип данных
 */
console.log(newNumbers);
console.log(numbers);


const numbers1 = {
  a:2,
  b:5,
  c: {
    x:7,
    y:4
  }
};


const add = {
  d:17,
  e:20
}
console.log(Object.assign(numbers1, add));
/*
Создали поверхностную копию
*/
const clone = Object.assign({}, add);
clone.d = 20;
console.log(add);
console.log(clone);


const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'asdsd';
console.log(newArray);
console.log(oldArray);

const video  = ['youtube', 'vimeo', 'rutube'],
  blogs = ['wordpress', 'livejournal', 'blogger'],
  internet = [...video, ...blogs, 'vk', 'facebook'];
  console.log(internet);

  function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
  }

  const num = [2, 5, 7];

  log(...num);

  const array = ['a', 'b'];
  const newAarray = [...array];//using spread-operator


const q = {
  one:1,
  two:2,
  three:3
}

const newObj = {...q};