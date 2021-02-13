// const pr1 = Promise ((resolve, reject) => {
//    setTimeout(() => resolve('result'), 2000);
// })

// pr1
//    .then((result) => alert(result));
//    .catch(err=>console.log(error, error);
//    .finally(() => alert('Promise'));
-----
// for(let i=1; i <= 20; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }


-----
let from = 1;
const to = 20;
const intId setInterval(() => {
    from <= to ? console.log(from++) : clearInterval(intId);
}, 100);
-----
let i = 1;
let intervalId = setInterval(() => {
    console.log(i++);
    if (i==21) clearInterval(intervalId);
}, 1000);
-----
let i = 1;
setTimeout(function run () {
    console.log(i++);
    if (i < 21) {
        setTimeout (run, 100);
    }
}, 1000);
-----
const numPromise = Promise.resolve(5)