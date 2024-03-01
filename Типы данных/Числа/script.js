//Сумма пользовательских чисел
let a = +prompt("Первое число");
let b = +prompt("Второе число");

alert(a + b);

//Ввод числового значения
function readNumber(n){
    return parseInt(n);
}

let num = prompt("Введите число:");

while(isNaN(readNumber(num)) == true){
    num = prompt("Введите число:")
}
alert ("Число:" + num);

//Бесконечный цикл по ошибке
let i = 0;
while (i != 10) {
  i += 0.2;
}
//пропустит из-за неточности

//Случайное число от min до max
function random( min, max ){
    return min + Math.random() * (max - min);
}

alert( random(1,6));

//Случайное целое число от min до max
function random( min, max ){
    return  Math.floor(min + Math.random() * (max - min));
}