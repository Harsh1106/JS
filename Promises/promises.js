const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network call examples of async task
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    }, 1000)  
})
// resolve has a relation with then
// to consume promise
promiseOne.then(function(){
    console.log("Promise is consumed!");
})


// uppar wale example mei hmne ek variable ke andar store karaya aur fir call kra yaha hm variable na bna calling(then) wla kaam ussi k saath kra le rhe hai.
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async2 is resolved!");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "harsh", email:"harshraj.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);    
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "harsh", pass: "12345"});
        }
        else{
            reject('ERROR: Something went wrong!');
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user); //{ username: 'harsh', pass: '12345' }
    return user.username;
}).then((username) => {
    console.log(username); //harsh
}).catch(function(error){
    console.log(error); //error message
}).finally(() => console.log("The promise is either resolved or rejected.")); //always gets executed.

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "js", pass: "123"})
        }
        else{
            reject('ERROR: JS went wrong!')
        }
    }, 1000)
})
// both the syntax can be used either ".then" or the below one
async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response); 
    }
    catch(error){
        console.log(error);
    }   
}
// agar error false rhega to warning ni aaegi aur agr error true rha to error aaega

consumePromiseFive();


// async function getAllUsers() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     // console.log(response);    
//     const data = await response.json();
//     console.log(data);
// }
// getAllUsers();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error);
})