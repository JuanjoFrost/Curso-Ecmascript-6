//Es8 Object.entries
//this generate an array throughout an object
const data = {
    frontend: 'Juanjo',
    backend: 'Isabel',
    design: 'Ana',
};
//entries is gonna be our new array
const entries = Object.entries(data);

console.log(entries);

//object.values
//this generate an array only with the values of our propieties
const data2 = {
    frontend: 'Juanjo',
    backend: 'Oscar',
    design: 'Ana',  //This is trailing comas, is a good practice to don´t make mistakes
};

const values = Object.values(data2);
console.log(values);
console.log(values.length);

//padding 
//padStart allows us to add an string in the beginning of our empty string with two
//parameters, the first one is the max lenght, and the second is the text.
//padEnd is the same but is putted at the end of our string
const string = 'hello';
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12,'------'))

//Async await 

//Promise
//Promises are clases we can get into a function to do something that will happen in the future.
const delayedHelloWorld = () => {
    return new Promise((resolve, reject) =>{
        (true) 
            ? setTimeout(()=>resolve('Hello World'), 3000)
            : reject(new Error('Prueba Error'))
    })
};

//Async and await only works with promises in this case we are going to call delayedHelloWorld();
//async is for denotate an asynchronous function
//Aawait ALWAYS we use it with async
const helloAsync = async () => {
    const hello = await delayedHelloWorld();
    console.log(hello)
}

helloAsync();

//Other example of async and await with try catch
const anotherFunction = async () => {
    try{
        const hello = await delayedHelloWorld();
        console.log(hello);
    } catch (error){
        console.log(error)
    }
}