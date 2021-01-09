let arr [1, 'b'];
let flag = false;
let z = 'c';
for (let i=0; i<arr.length; i++){
    if (arr[i] === z) {
        flag = true;
        // index = i
    }
}
if(flag == true){
    console.log('yes');
} else {
    console.log('no')
}
// fun

function hasElem(arr, elem) {
    for (let i=0; i<arr.length; i++){
        if (arr[i]===elem) {
            return true;
        }
    }
    return false;
}
console.log (arr, 'c');
------------------
let num = 31;
flag = false;
for(let i=2; i<num; i++){
    if(num % i===0) {

    }
}
if(flag == true){
    console.log('yes');
} else {
    console.log('no')
}
console.log( '${hasElem}')