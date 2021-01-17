// 
const arr = [14, 234, 65, 23, 8, 2, 645, 3];
// 
const index = find(arr,8);
// 
function find (arr, value) {
    for (let i=0; i<arr.length; i++) {
        if (value === arr[i]) {
            return i;
        }
    }
    return -1;
}
// LIFO
class Stack{
    // 
    constructor(maxSize = 10000){
        this._size=0;
        this._maxSize = maxSize;
    }
    // 
    get size(){
        return this._size;
    }

    // 
    get isEmpty() {
        return this.size === 0;
    }

    // dobavlaet element
    push(value)
        // 
        {
        if(this._size>this._maxSize){
            throw new RangeError('Stack is overflow');
        }
        // 
        this[this._size++]=value;
        return this._size;
    }
    // ydalil i vernyl element
    pop()
        // 
        {
        if(this.isEmpty){
            return;
        }          
    // 
        const value = this[--this._size];
        delete this[this._size];
        return;
    }
    // vozvrash element posledniy
    pick() {
        if(this.isEmpty){
        return;
        }
        return this.[this._size - 1];
    }
}

// 
const stack1 = new Stack(10);
// 
stack1.push(5);
stack1.push(-89);
stack1.push({name: 'test'});
stack1.push(1);
stack1.push(12);

// Task
// Est posledovat skobok - (), {}, []
// Korrekt posledovat skobok ???
function lightCheck (str, options = { // 
    brackets:{
        '(': ')',
        '{' :'}',
        '[' :']',
    }
}) {
    const bracketsStack = []; // 
    const brackets = options.brackets; // 
// 
    for (const s of str){
        if(brackets[s]) {
            bracketsStack.push(s);
            continue;
        } // 
        if (Object.values(brackets).includes(s)) {
            if (brackets[bracketsStack[bracketsStack.length - 1]] == s) {
                bracketsStack.pop();
            } else{ // 
                return false;
            }
        }
    }
    return bracketsStack.length == 0; // 
}

const vocabulary = new Map(); // 
vocabulary.set('cat', 'kot');
vocabulary.set('dog');
vocabulary.set('');
vocabulary.set('');
vocabulary.set('');
vocabulary.set('');
// 
const translate = str => 
str.split(' ').map(w=>vocabulary.get(w)).join(' '); // 
// 
const str = ''; // 
console.log(translate(str)); // 
// stack + iterator
class StackIterator {
    constructor(stack){
        this._stack=stack1; // 
        this._stack=0; // 
    }
    next(){
        if(this._start >= this._stack.size){ // 
            return{ // 
                value: undefined,
                done: true,
            }
        }
        return { // 
            value: this._stack['_${this._start}'], // 
            done: this._start++ === this._stack.size, // 
        };
    }
}


// 
class ListItem{
    constructor(value, next=null, prev=null){
        this.value=value;
        this.next=next;
        this.size=0;
    }
}

// 
class List{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    // 
    addBegin(value){ // 
        const newHead = new ListItem(value,this.head, null); // 
        if(this.head) { // 
            this.head.prev = newHead; // 
        }
        this.head = newHead; // 
        if(!this.tail){ // 
            this.tail = newHead; // 
        }
        this.size++; // 
    }
    // 
    addEnd(value){ // 
        const newTail = new ListItem(value, null, this.tail); // 
    }
    // 
    [Symbol.iterator](){ // 
        let current = this.head;
        return{
            next(){ // 
                if(current){
                    const value = current.value;
                    current = current.next;
                    return{
                        value: value;
                        done: false;
                    }
                } else{ // 
                    return{
                        done: true;
                    };
                }
            },
        };
    }
}