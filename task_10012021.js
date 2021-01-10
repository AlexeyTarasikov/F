// konstr = metod ???, ||-???
 // 1
user = "Petr Petrovich";
//2
let newArr = ['Petr Petrovich', 'Petr Petrovich', 'Petr Petrovich'];
// 3
const user = {
    name:"Petr",
    surname:"Ivanov",
}

// const user = user ['Ivanov', 'Petr', 'Petrovich'];
// class user {
//     constructor (options){
//         this.name=options.name || "Petr";
//         this.surname=options.surname || "Ivanov";
//         this.age=options.age || "20"
//     }

}
// 4
const user = {
    name:"Petr",
    surname:"Ivanov",
    fullname: function(){return '{this.name} {this.surname}'}
}
// 5
function User(name, surname){
    this.name = name;
    this.surname = surname;
}
const user1 = new User();
// 6
class User{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    getFullName = 
}