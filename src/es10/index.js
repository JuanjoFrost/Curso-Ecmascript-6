//flat brings us the deep level
let array = [1,2,3,4,5, [1,2,3,4, [1,2,3]]];

console.log(array.flat(3));

//flat map map each element, then we gie it a function and finally flatten the array

let array2 = [1,2,3,4];

console.log(array2.flatMap(value => [value, value*2]));

//trimStart(),trimEnd() eliminate the empty spaces 
let hello = '           hello world';

console.log(hello);
console.log(hello.trimStart())

let hello2 = 'hello World        ';

console.log(hello2);
console.log(hello2.trimEnd());

//Optional catch binding
//we can give it optionally the error parameter to our try catch

try{

} catch {
    error
}


//From entries
//transform value key in an object

let entries = [["name", "Oscar"], ["Age", 32]];

console.log(object.fromEntries(entries));


//Object symbol type
//get the description of an symbol type object
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);