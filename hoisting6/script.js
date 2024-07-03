// Hoisting-> Hoisting is the default behavior in JavaScript where declarations of variables and functions are moved to the top of their respective scopes during the compilation phase. This ensures that regardless of where variables and functions are declared within a scope, they are accessible throughout that scope.

// console.log(age);
// const age = 25; --> we can't perform hoisting incase of let and const type of variable.

// console.log(age); //undefined bcoz in the case of variables declaration shift to their top place not the value
// var age = 24;
// sayName("Harsh"); //yha hmlg call issliye kra pa rhe h bcoz function declaration k saath pura block uth kr uppr ja rha to printing ussi k andar h to wo bi execute ho ja rha
// function sayName(finalName){
//     console.log(finalName);
// }

// in case of function expression function hoisting is not possible
// sayHello();
// let sayHello = function(){ -> will generate a ReferenceError
//     console.log("Hi");
// }


// class level hoisting is also not possible
// const obj1 = new Human();
// class Human{

// }

// First-class Function

// 1. Assigning a function to the variable
// let greet = function(){
//     console.log("Greeting for the day");
// }
// greet();


// 2. Ability to pass function as an argument
// function greetMe(greet, fullName){
//     console.log("hello", fullName);
//     greet();
// }

// function greet(){
//     console.log("Greeting for the day");
// }

// greetMe(greet, "Harsh");

// 3.ability to return a function from another function
// function solve(number){
//     return function(number){
//         return number*number;
//     }
// }
// // let ans = solve(5);
// // let finalAns = ans(10);
// // console.log(finalAns);

// console.log(solve()(10));


// 4.Ability to add function in array
// const arr = [
//     function(a,b){
//         return a + b;
//     },
//     function(a,b){
//         return a-b;
//     },
//     function(a,b){
//         return a*b;
//     }
// ];
// let first = arr[2];
// let ans = first(5,10);
// console.log(ans);


// 5. can be used inside object
// let obj = {
//     age: 20,
//     wt: 68,
//     greet: () => {
//         console.log("Namaste duniya");
//     }
// }
// console.log(obj.age);
// obj.greet();

console.log(greet); //undefined
var greet = function(){
    console.log("Namaste duniya");
}