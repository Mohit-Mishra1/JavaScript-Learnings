// Object Literals are made if not created using constructors


const sym = Symbol("sym data")

const obj1 = {
    name : "Mohit",
    age : 21,
    gender : "male",
    [sym]: 10




}

// console.log(obj1.name);
// console.log(typeof sym);


// console.log(typeof obj1.sym);

// console.log(obj1);


//```````````````````````````````````````````````````````````````````````````````````````````````````````````````//


// Singleton method if we create objects using constructors like Object.create

const obj2 = new Object();

obj2.name = "Mohit"

// console.log(obj2.name);

// console.log(Object.keys(obj1))
// console.log(Object.keys(obj2))
// console.log(Object.values(obj1))
// console.log(Object.values(obj2))
// console.log(Object.values(obj1)[1])


//``````````````````````````````````````````````````````````````````````````````````````````````````````````````//


const object1 = {
    name: "Mohit",
    age : 21,
    course : "js in hindi"
}

const {name : myname} = object1;

console.log(myname);