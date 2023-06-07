"use strict";

const arr = [1, 2, 3, 6, 8];
arr[arr.length] = 0;
console.log(arr.length);
console.log(arr);


arr.forEach(function(item, i, arr) {// 1)значение 2)индекс  3)массив
  console.log(`${i}: ${item} внутри массива ${arr}`);
//нельзя исп break и cont
});

arr.pop();//удаляет последний элемент массива
console.log(arr);
arr.push(10);//пушит в конец элемент в скобках

for (let i=0; i<arr.length; i++) {
  console.log(arr[i]);
}


for (let value of arr) { //for of не исп с объектами! Здесь можно исп break и continue
  console.log(value);
}

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products);
console.log(products.join(';'));

const val = [2, 13, 26, 8, 10];
val.sort(compareNum);
console.log(val);

function compareNum(a, b) {
  return a - b;
}



