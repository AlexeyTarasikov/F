// 1
let test = 100;
let copyTest = test;
console.log(test, copyTest);

// 2
let test = prompt ("Number:");
if (typeof(test2 == 'number')){
    console.log ("True");
}
else {
    console.log ("False");
}
// 3 - y=5x-3
function(limitL, limitH, step)
let y = [];
let x;
for (x=limitL; x limitH; x+= step){
    y.push(-2.4*x**2+5*x - 3);}
// 1
// вывести на экран треугольник из звездочек
for(let i=0; i<7; i++){
    for(let j=0; j<i; j++){
    document.write('*');
 }
    document.write('<br/>');}
// 2
limmit = 10;
str='';
while(limmit >=0){
    for (i=10; i<limmit; i++){
        str+= '*';}
    console.log(str);
    limmit--;}
//
let value1 = Math.round(Math.random() * 100);
let value2 = Math.round(Math.random() * 100);
qSum(value1, value2);
function qSum(a, b){
    let res = a+b;
    let userAnswer = Number(prompt('${a} + ${b} = ?'));
    if(res == userAnswer){
        return true;
    } else {
        return false;
    }
}
// найти индекс первого нулевого элемента 
let a = [2, 9, 9, 5, 7, 0, 1, 2, 3, 5,];
    a.indexOf(0);

// Array.prototype.concat() ??? (array) ???
let a = [2, 9, 9,];
let b = [5, 7, 0, 1, 2, 3];
let v = a.concat(b);
    console.log(v);

// проверить содержит ли массив одни нули - every
let a = [2, 9, 9, 5, 7, 0, 1, 2, 3, 5,];
    // 1 metod - strelochnaya function
a.every(x=> x == 0);
    // 2 metod
function isZeros(currentValue, index, array){
    return currentValue == 0;
}
console.log(a.every(isZeros));

// создать массив из 10 звездочек
let a = [2, 9, 9, 5, 7, 0, 1, 2, 3, 5,];
console.log(a.fill('*', 0, 10));

// вернуть только строки из массива
let a = [2, 9, 9, 5, 7, 'fl', 1, 2, 3, 5,];
a.filter(element => typeof(element) == 'string');
    // 1 metod
let a = [2, 9, 9, 5, 7, 'fl', 1, 2, 3, 5,];
a.filter(element => typeof(element) == 'string');

    // 2 metod
let a = [2, 9, 9, 5, 7, 'fl', 1, 2, 3, 5,];
let a = a.filter(
    function(elem) {
        return (typeof elem === 'string');
    }
);
