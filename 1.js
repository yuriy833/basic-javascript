"use strict";

for (let i = 0; i < 11; i++) {
    if (i === 0) {
        console.log(i + "-это ноль");
    } else if (i % 2 == 1) {
        console.log(i + "-нечетное число");
    } else {
        console.log(i + "-четное число");
    }
}