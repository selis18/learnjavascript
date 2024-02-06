//Последнее значение цикла
let i = 3;

while (i) {
  alert( i-- );
}
// 3, 2, 1 - последний декремент вычитает после alert и далее условие ложное

//Какие значения выведет цикл while?
i = 0;
while (++i < 5) alert( i ); // 1,2,3,4

i = 0;
while (i++ < 5) alert( i ); // 1,2,3,4,5

//Какие значения выведет цикл for?
for (let i = 0; i < 5; i++) alert( i ); //0,1,2,3,4
for (let i = 0; i < 5; ++i) alert( i ); //0,1,2,3,4

//Выведите чётные числа
for(let i = 2;i <= 10; i++) {
    if(i % 2 != 0) continue;
    alert(i);
}

//Замените for на while
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  }
i = 0;
while(i<3){
    alert( `number ${i++}!` )
}

//Повторять цикл, пока ввод неверен
let number = 0;
do{
    number = +prompt('Введите число больше 100');
    console.log(typeof(number) + number);
}while(number < 100 && number != 0)

//Вывести простые числа
let endNumber = +prompt('Граница простых чисел');
let counter = 0;
let result = '';
for(let i = 1; i<=endNumber; i++){
  for(let j = 1; j<=i; j++){
    if(i % j == 0){
      counter++;
    }
  }
  if(counter <= 2) 
  {
    result += i +', ';
  }
  counter = 0;
}
alert (result);