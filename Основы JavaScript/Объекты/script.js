//Привет, object
let user = {};

user.name = "John";
user.surname = "Smith";

user.name = "Pete";

delete user.name;

//Проверка на пустоту
function isEmpty(obj){
  for(let hey in obj){

    return false;
  }

  return true;
}

//Объекты-константы?
const user = {
  name: "John"
};
alert(user.name);
// это будет работать? Да, так как изменять значения свойств можно в объектах
user.name = "Pete";

//Сумма свойств объекта
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
alert(sumSalaries(salaries));

function sumSalaries(obj){
  let sum = 0;

  for(let key in obj){
    sum += obj[key];
  }

  return sum;
}

//Умножаем все числовые свойства на 2
// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

function multiplyNumeric(obj){
  for( let key in obj){
    if(typeof(obj[key]) == "number"){
      obj[key] = obj[key]* 2;
    }
  }
}
console.log(menu);

