class user{
    constructor(name, password, email)
        this.name = name;
        this.password = password;
        this.email = email;
}
// function NameAddEmail(){
//     return ('$(this.name)':'$(this.email)');
getUserInfo(){
    return this.name + '' + this.email;
}
}
    }
console.log(NameAddEmail);
// 
class Stud extends user
    let Arr = [1, 2, 3, 4, 5, 6, 7];
    {
    constructor (name, password, email, Arr){
    super (name, password, email, Arr);
    this.Arr = Arr;
    }
    outArr (){
        console.log(this.Arr);
    }
    avArr (){
        let sum=0;
        for (let i=0; i<this.Arr.length; i++){
            sum += this.Arr[i];
        }
        // return (this.Arr.red)
    }
}
console.log(newArr);
// 
class Teacher extends User{
    constructor (name, password, email, hours, salary){
        super (name, password, email);
        this.hours = hours || 880;
        this.salary = salary;
    }
    funAddMoney(prize){
        if(this.hours>=880) {
            this.salary += prize;
        }
    }
}
getSalaruTeacher(){
    console.log(this.salary);
}

const Ivanov = new Stud();
Ivanov.getFullName();
Ivanov.avArr();

const KarlsonTeacher = new Teacher(
    'Karlson';
    'Teacher';
    '10000';
    '5000';
);

console.log(KarlsonTeacher.getUserInfo);

KarlsonTeacher.getFullName();

KarlsonTeacher.getSalaruTeacher();

KarlsonTeacher.funAddMoney(5000);

KarlsonTeacher.getSalaruTeacher();