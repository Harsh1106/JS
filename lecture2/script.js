let a = 5;
let b = 2;
// Arithmetic Operators
// console.log("a = ",a," & b = ",b);
// console.log("a + b = ",a+b);
// console.log("a - b = ",a-b);
// console.log("a * b = ", a*b);
// console.log("a / b = ", a/b); //will return 2.5
// console.log("a % b = ", a%b); //will return 1
// console.log("a ^ b = ", a**b); //will return 25
// console.log("a ^ a = ", a**a); //number of time it will multiply itself nd the o/p: 3125 bcoz 5 will get multiplied 5 times
// console.log("a ^ a = ", b**b); //2 bcoz of number will get multiplied 2 times

// Assignment Operators
// a += 4;
// a -= 4;
// a *= 4;
// a /= 10;
// a **= 2;
// console.log("a : ",a); //25

// Comparison Operators
// let c = "5"; // in js the string is firstly converted in number then go for comparison
// console.log("a = ",a," & b = ",b);
// // console.log("5 == 2: ", a==b);
// // console.log("5 != 2: ", a!=b);
// console.log("a == c: ", a==c); //true
// console.log("a === c: ", a===c); //false(it will do strictly checking nd mainly checks the data type)
// console.log("a !== c: ",a!==c); //true
// // console.log("5 == 5: ", a==b);
// console.log("5 === 2: ", a===b);

//Conditional Statements
// let color;
// console.log(color); //undefinedq
// let mode = "dark";
// if(mode === "dark"){
//     color ="black";
//     console.log(color);
// }else{
//     color = "white";
//     console.log(color);
// }
// let age = 53;
// if(age >= 18){
//     console.log("Can vote");
// }
// else{
//     console.log("Can't vote");
// }
// switch case statements
let num = 3;
switch(num)
{
    case 1 : console.log('A');
    break;
    case 2 : console.log('B');
    break;
    case 3 : console.log('C');
    break;
    case 4 : console.log('D');
    break;
    default : console.log('F');
}

// Ternary Operators
// let age = 18;
// (age >= 18) ? console.log("adult") : console.log("not an adult");


// Get user to input a number using prompt("Enter a number:"). Check if the number is a multiple of 5 or not.
// let num = prompt("Enter a number:");
// if(num % 5 == 0){
//     console.log(num,"is a multiple of 5.");
// }else{
//     console.log(num,"is not a multiple of 5.");
// }

// Write a code which can give grades to student accordint to their scores.
// let range = prompt("Enter the range of marks:");
// if(range >= 80){
//     console.log("A");
// }else if(range >= 70 && range <= 89){
//     console.log("B");
// }else if(range >= 60 && range <= 69){
//     console.log("C");
// }else if(range >= 50 && range <= 59){
//     console.log("D");
// }else{
//     console.log("F");
// }