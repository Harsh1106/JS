// Object Cloning
// let obj = {
//     age : 22,
//     ht : 190,
//     wt : 69
// };
// console.log(obj);

// obj.color = "white"; //added during runtime
// console.log(obj);


// Spread operator
// let dest = {...obj}; //an example of object cloning yha agr source ki value change bi ho jaye clone hone k bd to bi destination p koi frk ni pdega  


// let dest = src; agr iss tarike se krte to ref copy ho jaata jisse hm agr source ka value change krtte to wo destination m bi change ho jaega

// obj.age = 90;
// console.log(obj);
// console.log(dest);


//through Object.assign method
// let src = {
//     value: 102,
//     name: "Harsh Raj"
// }
// let dest = Object.assign({}, obj, src);
// console.log(dest);

// let src = {
//     val1: 22,
//     val2: 32,
// };
// let dest = Object.assign({}, src);
// console.log(dest);


// through iterating method
// let dest = {};
// for(let key in obj){
//     let newKey = key;
//     let newValue = obj[key];
//     dest[newKey] = newValue;
// }
// console.log(obj);
// console.log(dest);


// using spread operator
let newObject = {
    name:"Harsh",
    age: 22,
};
let loc = {... newObject};
console.log(loc);