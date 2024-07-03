
// let myDate = new Date();
// // console.log(myDate); //2024-07-01T11:48:34.092Z
// console.log(myDate.toString()); //Mon Jul 01 2024 17:20:15 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); //Mon Jul 01 2024
// console.log(myDate.toISOString()); //2024-07-01T11:51:45.617Z
// console.log(myDate.toJSON()); //2024-07-01T11:53:01.314Z
// console.log(myDate.toLocaleDateString()); //1/7/2024
// console.log(myDate.toLocaleString()); //1/7/2024, 5:24:01 pm
// console.log(typeof myDate); //object


// let myCreatedDate = new Date(2024, 0, 23, 5, 3);
// // console.log(myCreatedDate.toDateString()); //Tue Jan 23 2024
// console.log(myCreatedDate.toLocaleString()); //23/1/2024, 5:03:00 am
let myCreatedDate = new Date("2023-01-14");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp); //1719835316755 in ms

// console.log(myCreatedDate.getTime()); //1673654400000
// console.log(Math.floor(Date.now()/1000)); //1719835409


let newDate = new Date();
console.log(newDate.getMonth()); //returns integer
// console.log(newDate.getDate());

console.log(newDate.toLocaleString('default', {
    weekday:"long"
})); //returns the day 
