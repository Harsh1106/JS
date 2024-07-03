// Default parameter concept- In js if u forget to pass the value of function then by default it assign the null value.
// function sayName(fullName){
    //     console.log("My name is:",fullName);
// }

// and we can also set the default argument of variable using 
// function sayName(fullName = "shobhit"){ //agr hm kuch pass ni krenge isme to ye default argument jo bi yha rhega usse print kr dega otherwise jo value transfer hui h usko krega
//     console.log("My name is:",fullName); //My name is: shobhit -> when argument is not passed
//     // My name is: harsh ->when arg is passed
// }
// sayName("harsh");

// multiple default parameter concept
// function sayName(fName="raj", lName="singh"){
//     console.log("My name is:",fName,lName);
// }
// sayName("harsh","raj");

// depended paramter
// function sayName(fName="raj", lName=fName.toUpperCase()){
//     console.log("My name is:",fName,lName);
// }
// sayName("harsh"); -> My name is: harsh HARSH
// // sayName("harsh", "raj"); -> My name is: harsh raj
// sayName(); //My name is: raj RAJ


// case of default parameter is an object
// function solve(val = {age:22,wt:69,ht:196}){
//     console.log("Hello jii", val); //Hello jii { age: 22, wt: 69, ht: 196 }
// }
// solve();

// // arrays can also pass as an argument
// function solve1(value=["Harsh","Raj","Sinha"]){
//     console.log("Value inside my array is:",value); //Value inside my array is: [ 'Harsh', 'Raj', 'Sinha' ]
// }
// solve1();

// function printName(value =  "raj"){
//     console.log("Name is:",value);
// }
// // printName(null); -> Name is: null
// printName(undefined);// -> Name is: raj
// printName(); // -> Name is: raj
// in case of null the null will assigned as a value but in case of undefined it will assign the default value.


// passing function as an argument 
// function getAge(){
//     return 190;
// }

// function utility(name="harsh", age=getAge()){
//     console.log(name," ",age);
// }
// utility();


// class Human{
//     //properties
//     age = 13; //default way mei ye public mark ho jaate hai
//     #wt = 80; //private variable
//     ht = 180;
    

//     // constructor
//     constructor(newAge, newWeight, newHeight){
//         this.age = newAge;
//         this.ht = newHeight;
//         this.#wt = newWeight;
//     }
//     // behaiour
//     #walking(){ //private method- cannot be accessed further directly
//         console.log("I am Walking", this.#wt); //this is the way to print the private variable
//     }

//     running(){
//         console.log("I am Running",this.age);
//     }

//     // getters and setters-> used to access the private data members
//     set modifyWeight(val){
//         this.#wt = val;
//     }

//     get fetchWeight(){
//         return this.#wt;
//     }
// }

// let obj = new Human(10,20,30);
// console.log(obj.age);
// console.log(obj.ht);
// console.log(obj.fetchWeight); //we donot need to put parenthesis in front of getter 
// // console.log(obj.#wt); throws an error bcoz we r accesing the private variable outside the class.
// // obj.walking();
// // obj.running();


// function Rectangle(len, bre){
//     this.length = len;
//     this.breadth = bre;
//     this.draw = function(){
//         console.log('drawing');
//     }
// }
// let obj = new Rectangle(4,6);

// obj.color = 'yellow';
// console.log(obj);

// delete obj.color;
// console.log(obj.consturctor);
// functions are also objects

let a = {
    value: 10
};
let b = a;
a.value++;
console.log(a.value);
console.log(b.value);