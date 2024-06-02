const randomuser = fetch('https://jsonplaceholder.typicode.com/users')

randomuser.then((response) => {
    const responseJSON = response.json()
    return responseJSON
})
.then((data) => {
    console.log(data);
})
.catch((error) => (console.log(error)))
.finally(() => ("finished"))