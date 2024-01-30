//Постфиксная и префиксная формы
let a = 1, b = 1;

let c = ++a; // 2 -  сначала +, потом =
let d = b++; // 1 - сначала =, потом +

console.log("Постфиксная и префиксная формы: c =" + c + " d =" + d);

//Преобразование типов
console.log(typeof("" + 1 + 0) + " - " + ("" + 1 + 0)); // string - 10
console.log(typeof("" - 1 + 0) + " - " + ("" - 1 + 0) ); // number - -1
console.log(typeof(true + false) + " - " + (true + false) ); // number - 1
console.log(typeof(6 / "3") + " - " + (6 / "3") ); // number - 2
console.log(typeof("2" * "3") + " - " + ("2" * "3") ); // number - 6
console.log(typeof(4 + 5 + "px") + " - " + (4 + 5 + "px") ); // string - 9px
console.log(typeof("$" + 4 + 5) + " - " + ("$" + 4 + 5) ); // string - $45
console.log(typeof("4" - 2) + " - " + ("4" - 2) ); // number - 2
console.log(typeof("4px" - 2) + " - " + ("4px" - 2) ); // number - NaN
console.log(typeof("  -9  " + 5) + " - " + ("  -9  " + 5) ); // string -   -9  5
console.log(typeof("  -9  " - 5) + " - " + ("  -9  " - 5) ); // number - -14
console.log(typeof(null + 1) + " - " + (null + 1) ); // number - 1
console.log(typeof(undefined + 1) + " - " + (undefined + 1) ); // number - NaN
console.log(typeof(" \t \n" - 2) + " - " + (" \t \n" - 2) ); // number - -2

//Исправьте сложение (результат 3)
a = prompt("Первое число?", 1);
b = prompt("Второе число?", 2);

alert(+a + +b); 