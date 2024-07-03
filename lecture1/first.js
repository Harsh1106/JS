// JS is a dynamically typed language
// console.log("Welcomes"); //it generally print values in next line.
// fullName = "Harsh Raj";
// console.log(fullName);
// age = 24;
// console.log(age);
// price = 150.50;
// console.log(price); //it will ignore the 0 after decimal
// x = null;
// console.log(x);
// y = undefined;
// console.log(y);
// isFollow = false;
// console.log(isFollow);
// fullName = 25;
// console.log(fullName);

// Ways of defining variable we have three types:
// 1. var: variable can be re-declared & updated. A global scope variable. A function scoped variable.
// 2. let: variable cannot be re-declared but can be updated. A block scope variable
// 3. const: variable cannot be re-declared or updated. A block scope variable.

// var age = 24;
// var age = 25;
// var age = 26;
// console.log(age); ---> 26

// function example(){
//     var age = 10;
//     console.log(age);
// }
// example(); //  10
// console.log(x); //throws ReferrenceError: x is not defined  
// We don't use var bcoz of its redeclaration property. Like we have defined here age = 10 but after certain line of codes we can declare age = "Harsh".


// Due to these issues let and const were introduced in ES6(ECMAScript 2015).
// It's generally recommended to use let and const instead of var in modern JavaScript code, unless there's a specific reason to use var.
// let age = 24;
// age = 25;
// age = 26;
// console.log(age); ---> 26

// {
//     let a = 10;
//     console.log(a);
// }
// console.log(a); //will throw an error due to block scope nature of let type variables.
// reassigning is possible here but redeclaration isn't.

// const age = 24;
// age = 25;
// console.log(age); ---> will generate an error

// let a;
// console.log(a); ---> undefined

// const a = 10;
// console.log(a); ---> 10 (in case of const we have to define the data type we can't just declare the data type)

// {
//     let a = 5;
//     console.log(a);
// }
// {
//     let a = 10;
//     console.log(a);
// }

// Data Types

// age = 24;
// console.log(typeof age); //---> number

// price = 10.5;
// console.log(typeof price); //---> number

// fullName = "Harsh";
// console.log(typeof fullName); //---> string

// isFollow = false;
// console.log(typeof isFollow);//---> boolean

// let a;
// console.log(typeof a); //---> undefined

// let b = null;
// console.log(typeof b); //---> object

// let c = BigInt("123");
// console.log(typeof c); //---> bigint and in the output there will be a n which represents bigint.

// let d = Symbol("hello");
// console.log(d); //Symbol("hello")
// console.log(typeof d); //---> symbol

// working with non-booleans
console.log(false || 'Harsh'); //Harsh
console.log(false && "Harsh"); //false
console.log(true || "hello"); //true
console.log(false || 7 || 11 || 18); //7 due to the short circuiting


// Logical operartors
console.log(2 & 5); //0 because of and operator
console.log(2 | 5); //7 because of or operator
console.log(~(0)); //-1 because as we know binary of 0 is set of zeros and if we perform negation it will convert all the zeros to 1 but it is too long so it will consider only the MSB if it is 1 then it is considered as -1 and if it is 0 it is considered as +ve.
// nd we can say that "~" do flipping on bit basis.
console.log(2 ^ 2); //0 bcoz of XOR operator
console.log(5 << 1); //10 due to left shift operator. It will just shift the bits to 1.
console.log(5 >> 1);//2
// basically we can say that num is getting divided by 2 to the power of shift.

// Object Creation
// const student = {
//     // inside this braces the variables r called as keys
//     fullName : "Harsh Raj",
//     age : 22,
//     loc : "Patna",
//     isPass : true,
// };

// console.log(student);
// console.log(typeof student); //---> object

// // 2 ways to access keys
// console.log(student["fullName"]); //---> Harsh Raj
// console.log(student.fullName); //---> Harsh Raj

// // way to update the value of keys
// student["age"] = student["age"] + 1;
// console.log(student["age"]); //---> 23



// const product = {
//     title : "Pen",
//     rating : 4,
//     offer : 5,
//     price : 270,
// };

// console.log(product);

// const profile ={
//     userName : "@its_hraj01",
//     posts : "26posts",
//     isFollow : true,
//     followers : 232,
//     following : 236,
//     name : "Harsh Raj",
//     bio : "Learner"
// };
// console.log(profile);
// console.log(typeof profile["userName"]); //---> string