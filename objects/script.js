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
let curr = new Date();
console.log(curr); //prints the date along with time

let date = new Date('January 11 2002 7:25');
console.log(date);//2002-01-11T01:55:00.000Z

let newDate = new Date(2002, 0, 11, 7);//year || month || day || time
// for month it is zero based indexing
console.log(newDate);//2002-01-11T01:30:00.000Z 
console.log(newDate.getDay());//5
console.log(newDate.getFullYear());//2002
newDate.setFullYear(2001);
console.log(newDate); //2001-01-11T01:30:00.000Z