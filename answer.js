"use strict";

let tempCel = +prompt("Введите температурe в градусах по Цельсию"); // хотя и без плюса тоже работает корректно
let tempFar = (9 / 5) * tempCel + 32;
alert(" Введенная Вами температура в градусах по Фаренгейту, составляет  " + tempFar);

let name = "Василий";
let admin = name;
console.log(admin);

/* 
1. 10 прибавляем 10 получаем 20 
2. 20 прибавляем строку 10 получаем строку 2010
3. строку 2010 присваиваем в переменную result1
4. с помощью console.log выводим result1 в консоль
*/
let result1 = 10 + 10 + "10";
console.log(result1);

/* 
1. 10 прибавляем строку 10 получаем строку 1010
2. строка 1010 прибавляем 10 получаем строку 101010
3. строку 101010 присваиваем в переменную result2
4. с помощью console.log выводим result2 в консоль
*/
let result2 = 10 + "10" + 10;
console.log(result2);

/* 
1. 10 прибавляем 10 получаем 20 
2. +"10"  унарный плюс приводит из строчного в тип числовой
3. 20 прибавляем 10 получаем 30
4. 30 присваиваем в переменную result3
5. с помощью console.log выводим result3 в консоль
*/
let result3 = 10 + 10 + +"10";
console.log(result3);

/* 
1. "" null тип строка принимает 0
2. унарный минус из строки приводит в число
2. 10 делим на -0 получаем -Infinity отрицательную бесконечность
3. -Infinity присваиваем в переменную result4
4. с помощью console.log выводим result4 в консоль
*/
let result4 = 10 / -"";
console.log(result4);

/* 
1. "2,5" тип строка  
2. унарный плюс должен был привести тип из строки на число, но из за запятой не смог этого сделать, т.к. в js используется точка
3. 10 делим на строку получаем NaN not a number
NaN присваиваем в переменную result5
4. с помощью console.log выводим result5 в консоль
*/
let result5 = 10 / +"2,5";
console.log(result5);