// non parameterized function
// function definition
// function myF(){
//     console.log("My function");
// }
// function calling
// myF();


// function printCount(){
//     for(let i = 1 ; i <= 20 ; i++){
//         console.log(i);
//     }
// }
// printCount();


// parameterized function
// function sum(a, b){
//     let sum = a + b;
//     return sum;
// }
// let add = sum(4,5);
// // sum("harsh", "raj");
// console.log(typeof add);

// function multiply(a, b){
//     let sum = a * b;
//     return sum;
// }
// let prod = multiply(2,3);
// console.log("Multiplication: ",prod);

// function getName(firstName, lastName){
//     let combined = firstName.concat(lastName);
//     return combined;
// }
// let combined = getName("Harsh", " Raj");
// console.log("Full name:",combined);


// another way to create functions

// const getMultiply = function(a, b){ //here we can use let, var also but const is considered in best practice due to debugging issues
//     return a*b;
// }
// let ans = getMultiply(2, 3);
// console.log(ans);

// const squareNum = function(num){
//     return num**2;
// }
// let square = squareNum(2);
// console.log("Square of a num:",square);


// Arrow function
// const sum = (a, b) => {
//     return a + b;
// }
// let val = sum(3,4);
// console.log(`The sum of variables are ${val} `)

// Create a funct using the function keyword that takes String as an argument & returns the number of vowels in the string
// function countVowels(str){
//     let count = 0;
//     str = str.toLowerCase();
//     for(let i = 0 ; i < str.length ; i++){
//         if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
//             count++;
//         }
//     }
//     return count;
// }

// let count = countVowels("ApnaCollege");
// console.log(`The number of vowels in string is ${count}`);

// Create an arrow function to perform the same task.
// const countVowel = (str) =>{
//     let count =  0;
//     for(const char of str)
//     {
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++;
//         }
//     }
//     return count;
// }
// let number = countVowel("apnacollege");
// console.log(number);

// normal function
// let sum = function() => {
//     console.log("This is example of function as an variable name")
// }

// arrow function
// let sum = () => {
//     console.log("Inside the arrow function");
// }
// sum();

// value = (a,b) => a*b;
// console.log(value(2,4));

// const exp = (a,b) => {
//     return a**b;
// }
// console.log(exp(2,5));

// const greet = (firstName) =>{
//     return `Hi, ${firstName}!`;
// }
// console.log(greet('Harsh Raj'));

// named function assignment
// let stand = function walk(){
//     console.log('walking');
// };
// stand();

// let walk = stand();

// // anonymous function assignment
// let stand1 = function(){
//     console.log("stand1");
// };
// stand1();

// function sum(a, b){
    // console.log(arguments);
//     let total = 0;
//     for(let value of arguments)
//         total += value;
//     return total;
// };
// console.log(sum(1,2)); -> 3
// console.log(sum(1)); -> NaN
// console.log(sum());-> NaN
// console.log(sum(1,2,3,4,5)); //-> 3
// let ans = sum(1,2,3,4,5); //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }-> it is not an array it is a object with mapping and get stored in a manner of key values
// console.log(ans);
// if we just call the function without the args then it will print '0' only and if we pass extra arg then it will perform addition on all the passed values

// now using 'Rest Operator'
// function sum(a, ...args){
//     console.log(args);
// }
// sum(1,2,3,4,5,6); // on using Rest operator in return we get an array
// sum(1, 2,3,4,5,6); //here except 1 rest all the values will be considered as array
// after declaration of Rest operator we can't declare any new variable


// default parameter
// in this case if we forget to pass the value as arg in method and we initialize the value in declaration then the the declared value will be used
// function interest(p, r=6, y=10){
    // and if one var is considered as default then the rest of the variable after it will be considered as default
//     return p*r*y/100;
// }
// console.log(interest(1000,4,3));//if there is value passed during the calling then the passed value will be used



// getters and setters
let person = {
    fName : 'Harsh',
    lName : 'Raj',
    get fullName(){
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value){
        let part = value.split(" ");
        this.fName = part[0];
        this.lName = part[1];
    }
};
person.fullName = "Shobhit Raj";
console.log(person.fullName);