// регулярные выражения js
// 1. выделить все символы z
z*z

// 2. выделить все сочетания zz /zz/


// 3.
/x[aeioyu]y

// 4.
/\s/

// 5.
/\./

// 6.
/b.+\.com/b
^.+?\.com

// 7.
/b.+\@gmail.com/b

// 8.
https?

// 9.
/url:\s*(www\.)?example\.com

// 10.
AAA
/A{3}/

// 11.
#[0-9A-Z]{6}

// 12.
/a{2,}/

// 13.
/".*"/

// 14.
<.+?>

// 15.
#[0-9A-Z]{6}/i
#[0-9A-Z]{6}

// 16.
^P

// 17.
P$

// 18.
/^https://www./

// создание регулярного выражения
// 1 - literal
const re1 = /ab+c/;

// 2- construktor RegExp
const re2 = new RegExp('ab+c');

// с флагом чувствительности к регистру (i)
const re3 = /ab+c/i;
const re4 = new RegExp('ab+c','i');

// i - 
// g - 
// m - 

let str1 = 'asdsdfgwegfbtrhjykjlyulyyf';

// proverim
console.log('re.test:');
console.log(re1.test(str1));
console.log('re.exec:');
console.log(re1.test(str1));

/*
task1 - 
*/
const str11 = '';
// string method "replase"
function deleteSymbols(str){
    let correct_str = str.replace(/[^a-zA-Z0-9\s]+/g, ' ');
}

/*
task2 - 
*/

let re5 = /100% ...|...|...|xxx/i;
//let re5 = new RegExp();
//console.log(spamCheck(re5, UserStr));
function spamCheck(str) {
    return re5.test(str);}
console.log(spamCheck(re5, 'qwrfhaqeirhfpqf4onqoiwehfgqoh'));

// sample test na pravilnost kavichek
(['"])(?:(?!\1).)*\1