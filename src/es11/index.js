//Dinamic import 
//We can import an element in a dinamic way in order to call code pieces

const button = document.getElementById("btn");

//addEventListener is usefull for unchain an event with the button
//this function means that we only call the function in the import
//when we click the button
button.addEventListener("click", async function() {
    const module = await import("./file.js")
    module.hello();
})

//big Int
//with n we activate the instance to work with bigInt
//First way
const aBigNumber = 900923479273492374n;
//Second way
const anotherBigNumber = BigInt(900923479273492374); //without n

console.log(aBigNumber);
console.log(anotherBigNumber);


//Promise all seattled
//promise all will be rejected in the moment that rejected some promise,
//insted allSettled doesn´t matter the state of the promise, it only will wait until all of them being resolve.
const promise1 = new Promise((resolve, reject) =>reject('Rechazado'));
const promise2 = new Promise((resolve, reject) =>resolve('Resolve'));
const promise3 = new Promise((resolve, reject) =>resolve('Resolve 1'));

Promise.allSettled([promise1,promise2,promise3])
    .then(response => console.log(response));


//GlobalThis
console.log(window);
console.log(globalThis);


//Nulls
const foo = null ?? 'default string' //This is for create the new logic operator

console.log(foo);

//Optional chaining
const user = {};

console.log(user?.profile?.email); //?? read until user,profile. That is, if the element doesn´t exist it transform into an undefined

if (user?.profile?.email) {
    console.log('email')
}else{
    console.log('No encontramos el correo :(')
};