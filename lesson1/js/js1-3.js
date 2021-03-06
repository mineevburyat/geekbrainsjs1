"use strict";
/*действия выполняются по порядку: 10 + 10 два операнда типа Number, результат 20, 
далее 20 + "10", один из операндов строка, значит число 20 неявно приводится к типу строка
в результате строки конкатенируются: "20"+"10" - результат "2010". Результат выводим в консоль.*/
console.log(10 + 10 + "10");
/* 10 + "10" один из операндов строка, значит второй операнд так же переводится в строку и происходит операции конкатенации с результатом "1010".
Следующее действие "1010"+10, второй операнд таке неявно переводится в строку и строки кокатенируются, результат "101010". Выводим в консоль.*/
console.log(10 + "10" + 10);
/* 10 + 10 все операнды типа Number, значит обычное математическое сложение с результатом 20.
Следующее действие 20+ +"10", второй операнд выражение +"10" с унарной операцией +, которое неявно преобразует строку в тип Number - 10, в итоге выражение 20+10. Результат 30. Выводим в консоль.*/
console.log(10 + 10 + +"10");
/* Первым действием унарный минус- выражение -"", результат -0. Второе действие 10/-0. Результат -Infinity. Выводим в консоль.*/
console.log(10 / -"");
/* Первым действием унарный плюс - выражение +"2,5", результат NaN, т.к. дробная часть должна отделяеться точкой. Второе действие 10/NaN. Результат NaN (not a number). Выводим в консоль.*/
console.log(10 / +"2,5");
console.log(10 / +"2.5");