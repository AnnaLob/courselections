"use strict";

const category = 'toys';

console.log('http://someurl.com/' + category + '/'+'4');
console.log(`http://someurl.com/${category}/4`);

const user = "Ivan";

alert (`Привет, ${user}`);

let incr = 10,
decr = 10;

incr++; //постфиксный инкремент
decr--; //постфиксный декремент

console.log(incr);
console.log(decr);

++incr; //префиксный инкремент
--decr; //префиксный декремент

console.log(incr);
console.log(decr);

let incr1 = 10,
decr1 = 10;

console.log(incr1++);
console.log(decr1--);
console.log(incr1++);
console.log(decr1--);
console.log(incr1);
console.log(decr1);
console.log(++incr1);