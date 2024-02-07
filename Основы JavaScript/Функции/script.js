//Обязателен ли "else"?
//Так как return сразу выходит из функции, else не обязателен
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm('Родители разрешили?');
//   }
// }

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm('Родители разрешили?');
// }

//Перепишите функцию, используя оператор '?' или '||'
function checkAge(age) {
  // if (age > 18) {
  //   return true;
  // } else {
  //   return confirm('Родители разрешили?');
  // }
  //return age > 18 ? true : confirm('Родители разрешили?');
  return age > 18 || confirm('Родители разрешили?');
}

//Функция min(a, b)
function min(a, b){
  return a < b ? a : b;
}

//Функция pow(x,n)
function pow(x, n){
  return n > 0 ? x ** n : 0;
}