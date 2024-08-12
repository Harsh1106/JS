//Math Object

// console.log(Math.PI);//3.141592653589793

// console.log(Math.max(60,70,80,1,-7,95,120,6,52,3)); //123
// console.log(Math.min(60,70,80,1,-7,95,120,6,52,3)); //-7

// console.log(Math.round(1.6)); //2 gives the number after doing round off

// console.log(Math.floor(1.7));//1 prints the just smallest number
// console.log(Math.ceil(1.3)); //2 prints the just largest number

// console.log(Math.abs(-5)); //5 prints the +ve value

// console.log(Math.random()); //generate any random values

// console.log(Math.sqrt(5)); //2.23606797749979

// console.log(Math.pow(2)); //NaN
// console.log(Math.pow(2,3)); //8



// Date Objet

// ways to create date 
// let curr = new Date();
// console.log(curr); //prints the date along with time

// let date = new Date('January 11 2002 7:25');
// console.log(date);//2002-01-11T01:55:00.000Z

// let newDate = new Date(2002, 0, 11, 7);//year || month || day || time
// // for month it is zero based indexing
// console.log(newDate);//2002-01-11T01:30:00.000Z 
// console.log(newDate.getDay());//5
// console.log(newDate.getFullYear());//2002
// newDate.setFullYear(2001);
// console.log(newDate); //2001-01-11T01:30:00.000Z

function multipleBy5(num){
    return num * 5;
}

multipleBy5.power = 2;

// function is function but if we want then we make it to behave like an object

console.log(multipleBy5(5)); //25
console.log(multipleBy5.power); //2
console.log(multipleBy5.prototype); //{}


function createUser(username, score){
    this.username = username;
    this.score = score;
}

// on using prototype we can inject the methods also
createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`Price of ${this.username} is ${this.score}`);    
}

const chai = new createUser("Chai", 25);
const tea = new createUser("Tea", 250);

chai.printMe();
tea.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/