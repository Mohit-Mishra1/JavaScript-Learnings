const promiseOne = new Promise(function(resolve, reject){
    const error = 0
    const str = "Hello"
    if (!error){
        console.log("RESOLVED");
        resolve({username : "Mohit", password : "123"})
    }
    else{
        console.log("ERROR");
        reject()
    }
})

// promiseOne
// .then(function(str){
//     console.log(str)
//     return str.username
// })
// .then(function(value){
//     console.log(value)
// })
// .catch(function(){
//     console.log("promise got error")
// })
// .finally(() => console.log("Finally ran"))

// async function callpromise(){
//     await promiseOne(value)
//     await value
//     return value
// }

// callpromise()

