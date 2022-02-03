//Replace all
//with the first replace we can replace only the first element that our function find,
//with replaceAll we can replace all the strings with te same lenght of strings
const string = "Javascript es maravilloso, con Javascript puedo hace cosas cheveres";

const replaceString = string.replace("Javascript", "Python");

console.log(replaceString);

const replacedString2 = string.replaceAll("Javascript", "Python");


console.log(replacedString2);

//Private methods
//after with none private functions
class Message {
    show(val){
        console.log(val);
    }
}

const message = new Message();

message.show('Hola!');

//now ec12
//with # we say to the function that will be private
//with getter we can get to the function from outside
class Message2 {
    #show2(val){
        console.log(val);
    }
    get #add(val){

    }
}

const message = new Message();

message.show();


//Array of promises ANY
//any find the first element that will be resolve and ignore others.
const promise1 = new Promise((resolve,reject) => reject("1"));
const promise2 = new Promise((resolve,reject) => resolve("2"));
const promise3 = new Promise((resolve,reject) => resolve("3"));

Promise.any([promise1,promise2,promise3])
.then(response => console.log(response));

//with ref
//this is usefull so that the garbage collector doesn´t pick it of our memory
class AnyClass {
    constructor(element){
    this.ref = new WeakRef(element)
    }
}

//assignments
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);
