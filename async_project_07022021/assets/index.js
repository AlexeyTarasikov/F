/* // 'use strict'
const square = document.getElementById('item');
let deg = 0;
/*
setInterval(function () {
    square.style.function = 'rotate(${++deg})';
} 1000 / 60);
setInterval(rotateFun, 1000 / 60);
function rotateFun() {
    square.style.transform = `rotate(${++deg}deg)`;
}
const button = document.getElementsByTagName('button') [0];
button.onclick = function () {
    alert('hello');
}; */

const store = {
    users: null,
    isFetching: false,
    error: null
};
// 
const request = new XMLHttpRequest();
// 
const button = document.getElementById("loadButton")
button.onauxclick = function() {
// 3 parametr = false-sync true-async
request.open("GET", "../data/users.json", true);
// 
request.send();
}
// 
request.onloadstart = function(){
    store.isFetching = true;
    // console.log(this);
}
request.onload = function(){ // 
    store.isFetching = false;
    if(this.status >= 200 && this.status<300){ // 
        store.users = JSON.parse(this.responseText);
    } else{ // 
        store.error = new Error(`${this.status} : ${this.statusText}`);
    }
};