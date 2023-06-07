"use strict";

let num = 50;

while (num<55) {
    ++num;
    console.log(num);
}

do {
    console.log(num);
    num++
} while (num<55);

for (let i=1; i<8; i++) {
    
    if (i===6) {
        break
    }
    console.log(i);
    
}
let i = 0;
do {
  alert( i );
  ++i;
} while (i < 3);