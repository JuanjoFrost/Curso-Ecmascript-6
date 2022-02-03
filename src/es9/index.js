//operador de reposo
//It can extract the propierties of an object
const obj = {
    name: 'Juanjo',
    age: 32,
    country: 'Mx',
};

let {name, ...all} = obj;

console.log(name, all);

//we can put together 1,2,3 anything we want

const  obj1 = {
    ...obj,
    country: 'Mx',
};

console.log(obj1);

//promise . finally
//This new feature includes finally to show something when te process ends
const helloWorld = () => {
    return new Promise((resolve, reject)=>{
        (true)
            ? setTimeout(()=>resolve('Hello world'), 3000) 
            :reject(new Error('Test Error'))
    })
};

helloWorld()
    .then(response =>console.log(response))
    .catch(error=>console.log(error))
    .finally(()=>console.log('finalizó'))

//manejo de regexData
const regexData =  /([0-9]{4})-([0-9]{2})-([0-9]{2})/

const match = regexData.exec('2018-04-20');

const year = match[1];

const month = match[2];

const day = match[3];

console.log(year,month, day)