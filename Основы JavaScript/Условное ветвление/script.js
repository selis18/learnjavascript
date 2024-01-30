//if (строка с нулём)
if ("0") {
    alert( 'Привет' ); // Привет - строка всегда true
  }

//Название JavaScript
let answer = prompt('Какое «официальное» название JavaScript?');

if (answer == 'ECMAScript'){
    alert("Верно!");
}
else {
    alert('Не знаете? ECMAScript!');
}

//Покажите знак числа
let currentNumber = prompt("Введите число");

if(+currentNumber>0){
    alert(1);
}else if (+currentNumber<0){
    alert(-1);
}else{
    alert(0);
}

//Перепишите 'if' в '?'
let result;
let a, b = 2;
// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

(a + b < 4) ? result = 'Мало' : result = 'Много';
alert(result);

//Перепишите 'if..else' в '?'
let message;
let login = 'Директор';
// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

(login == 'Сотрудник') ? message = 'Привет':
(login == 'Директор') ? message = 'Здравствуйте' :
(login == '') ? message = 'Нет логина': message = '';
alert(message);
    