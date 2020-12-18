// 1. Напишите функцию, которая подсчитавает сумму четных элентов массива
let a = [1,2,3,4,5,6,7,8,9];
function arraySum(arr, elm) {
    arr = arr.slice(0);   
    for(let sum = 0, a; a = arr.pop();) sum += !elm || elm=="even" && !(a & 1) || elm== "odd" && a & 1 ? a : 0;
    return sum
   }
alert(arraySum(a)); //сумма всех
alert(arraySum(a, 'even')); //сумма четных
alert(arraySum(a, 'odd')); //сумма нечетных
console.log (a);
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators


// При помощи цикла for выведите чётные числа от 2 до 30.
// Для проверки на чётность мы здесь используем оператор получения остатка от деления %.
for (let i = 2; i <= 30; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
    console.log (i);
  }

// ------------------
// 2.* Напишите функцию, которая возвращает общий массив из двух заданных
// 2** + верните массив общий без повторов
var a = [1, 2, 3], b = [101, 2, 1, 10];
var c = a.concat(b); // Сначала соединяем два массива
var d = c.filter(function (item, pos) {return c.indexOf(item) == pos}); // фильтр только уникальные элементы

// 3*. Напишите функцию перевода строки в верблюжий регистр
// исп split, чтобы разбить строку на массив символов, потом переделать всё как нужно и методом join соедините обратно.
let string = 'my-long-word';
function camelize(string) {
    return string
      .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
      .map(
        // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
        // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
      console.log (string);
  }
  
// 4. Напишите функцию, которая дополняет нулями целое число до оказанной длины.
//  Поработайте вариант с отрицательными числами. Например, fun(-4,6) вернет -000004
var numObj = 123;
  numObj.toFixed(6);
  console.log(numObj);


// 5. Создайте и опишите объект worker.  Выведите его в консоль. 
// 5* + добавьте в него функцию(встроенные методы) : вывести ФИО, начислять доплату 5% если выслуга лет больше 5 лет и 10% если выслуга лет больше 8 лет












































