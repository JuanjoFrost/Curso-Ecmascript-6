//default parameters

//after we have ec6 this was the way of make this type of functions
function newFunction(name,age,country){
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country || 'Mx';
    console.log(name,age,country);
};

//e6
function newFunction2(name = 'Oscar', age =32, country = 'Mx'){
    console.log(name, age, country);
}

//Template literals
//after
let hello ="Hola";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
//ec6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//Multilínea
//after
let lorem = "Quiero escribir una frase épica que podamos separar \n"
    +"la concatenación va a quí :o";

//ec6
let lorem2 = `Otra frase épica que necesitamos
aquí va la concatenación sin necesidad de slash n :o`;

    console.log(lorem);
    console.log(lorem2);

//Destructuración de elementos
let person ={
    'name': 'Oscar',
    'age': 32,
    'country': 'Mx'
};
//after
console.log(person.name,person.age);
//ec6
let {name,age} = person;
console.log(name, age);

//Operador de propagación
//after
let team1 = ['Oscar', 'Julián', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

// ... allows put together two differents arrays
let education = ['David', ...team1, ...team2]
console.log(education);

//let
//after
//var was available in the entire scope of our code
var hola = 'Hola';

{
    var globalVar = "Global Var";
}
//ec6
//with let the variable only is available in the local scope
{
    let globalLet = 'Global Let';
    console.log(globalLet) // here we can show the variable, out of it we can´t
}

console.log(globalVar);
console.log(globalLet);

//Const
//After
// var allowed us to change the variable value 
var a ='b';
a = 'a';
console.log(a);

//ec6
//with const we can´t. Is the correct way to code a constant
const a ='b';
a = 'a';
console.log(a);

//Objects
let name = 'Oscar';
let age = 32;
//es5
obj = {name: name, age: age};

//es6
obj2 = {name, age}
console.log(obj2);

//Arrow Functions
//after
const names = [
    {name: 'Juanjo', age: 32},
    {name: 'Yesica', age: 27}
];

let listOfNames = names.map(function(item){
    console.log(item.name);
});

//ec6
let listOfNames2 = names.map(item =>console.log(item.name));

const listOfNames3 = (name, age, country) => {
    //código
};

const listOfNames4 = name => {
    //código
};

const square = num => num * num;


//Promesas ec6
const helloPromise = () => {
    return new Promise((resolve, reject)=>{
        if (true) {
            resolve('Hola Todo bien !')
        }else{
            reject('Ups!!')
        }
    });
};

helloPromise().then(response =>console.log(response))
    .then(() => console.log('hola'))
    .catch(error =>console.log(error));


//Clases 
//es6
class Calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new Calculator();
console.log(calc.sum(2,2));


//Modules es6
import {hello} from './module.js';
hello();


//Generadores ec6
function* helloWorld(){
    if (true) {
        yield 'Hello, '; //yield save this statement in a intern way
    }

    if (true) {
        yield 'World';
    }
};

//next.value going to return the next element of our function depending of the business rules.
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

