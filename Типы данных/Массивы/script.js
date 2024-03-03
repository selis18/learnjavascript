// //Скопирован ли массив?
// let fruits = ["Яблоки", "Груша", "Апельсин"];

// // добавляем новое значение в "копию"
// let shoppingCart = fruits;
// shoppingCart.push("Банан");

// // что в fruits?
// alert( fruits.length ); // 4, так как копия = ссылка

// //Операции с массивами
// let styles = ['Джаз','Блюз'];        

// styles.push('Рок-н-ролл');
// styles[Math.round((styles.length-1)/2)] = "Классика";
// alert(styles.shift());

// styles.unshift('Рэп');
// styles.unshift('Регги ');

// alert(styles);

// //Вызов в контексте массива
// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// });

// arr[2](); // (a,b,function(){alert(this)})

// //Сумма введённых чисел
// function sumInput(){
//     let sumArray = [];
//     let num = -1;
//     let sum = 0;

//     while(num !=0){
//         num = +prompt("Введите число:");
//         sumArray.push(num);
//     }

//     for(let el of sumArray){
//         sum += el;
//     }

//     return sum;
// }

// alert(sumInput());

//Подмассив наибольшей суммы
function getMaxSubSum(arr) {
    let maxSum = 0;
    let subSum = 0;
  
    for (let el of arr) { 
      subSum += el;
      maxSum = Math.max(maxSum, subSum); 
      if (subSum < 0) subSum = 0; 
    }
  
    return maxSum;
  }

alert(getMaxSubSum([-1, 2, 3, -9]));