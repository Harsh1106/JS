// let arr = [1,2,3,4,5];
// console.log(arr);
// console.log(arr.length);
// for(let arrays of arr){
//     console.log(arrays);
// }

// creation of array using array constructor
// let brr = new Array('harsh', 1, true);
// console.log(brr); //[ 'harsh', 1, true ]
// brr.shift();
// brr.unshift("raj");
// console.log(brr) //[ 'raj', 1, true ]
// console.log(typeof(arr)); //object
// console.log(typeof(brr)); //object
// brr.push(20);
// brr.push(40);
// brr.push(70);
// console.log(brr.slice(1,2));
// brr.splice(1, 2, 'panchi')
// console.log(brr); //[ 'raj', 'panchi', 20, 40, 70 ]

// let arr = [10, 20, 30];
// let ansArray = arr.map((number) => {
//     return number*number;
// });
// console.log(ansArray);

// arr.map((number, index) => {
//     console.log(number," ", index);
// })
// arr.map((number) => {
//     console.log(number+1);
// });

// let res = arr.map((number) => {
//     return number * 5;
// });
// console.log(res);


// let arr = [10,20,30,11,21,44,51];
// let evenArray = arr.filter((number) => {
//     // if(number % 2 === 0){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }
//     return number % 2 === 0;
// });
// console.log(evenArray); //[ 10, 20, 30, 44 ]

// let arr = [1,2,'harsh','raj', null];
// let ans = arr.filter((value) => {
//     if(typeof(value) === 'string'){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(ans); //[ 'harsh', 'raj' ]

// acc = accumulator, curr = currentValue
// let arr = [10,20,30,40];
// let ans = arr.reduce((acc, curr) => {
//     return acc + curr;
// },0);
// console.log(ans); //100

// let arr = [9,1,7,4,2,8];
// arr.sort();
// console.log("Ascending order:",arr);
// arr.reverse();
// console.log("Descending order:",arr);

// let arr = [-10, -0.20, 0.30, -40, -50];
// let found = arr.find((value) => {
//     return value > 0;
// });
// console.log(found); //0.3


// let cities  = ["Delhi", "Pune", "Punjab", "Patna"];
// for(let city of cities){
//     console.log(city.toUpperCase());
// }

// let marks = [85,97,44,37,76,60];
// let sum = 0;
// let count = 0;
// for(let i = 0 ; i < marks.length ; i++){
//     sum += marks[i];
//     count++;
// }

// for of loop
// for(let val of marks){
//     sum += val;
//     count++;
// }

// for-in loop
// for(let val in marks){
//     sum += val;
//     count++;
// }
// let avg = sum / count;
// // console.log("Average marks of student: ", avg);
// console.log(`Average marks of the students are: ${avg}`)


// let price = [250, 645, 300, 900, 50];
// let discount = 0.3;
// let offer = 0;
// let i = 0;
// for(let val of price){
//     offer = val / 10;
//     price[i] = price[i] - offer;
//     console.log(price[i]);
//     i++;
// }

// for(let i = 0 ; i < price.length ; i++){
//     offer = price[i] * 0.3;
//     price[i] -= offer;
// }
// console.log(price);

// Arrays Methods
// price.push(570, 320, 890, 167); //multiple values can be added to the array using push function and add element in last.
// console.log(price);
// let deleted = price.pop();
// console.log(price);
// console.log("Deleted Items: ",deleted);
// console.log(price.toString());
// console.log(typeof price); //will remain as object
// price.unshift(30); //add in begining
// console.log(price);
// let val = price.shift();
// console.log(price);
// console.log("deleted item: ", val);
// let arr2 = [7,8,9,10];
// let newArr = price.concat(arr, arr2); //can pass multiple arrays for concatenation
// // console.log(newArr);
// console.log(price.slice());
// console.log(price.slice(2,7)); //startingIndex to endIndex - 1
// price.splice(2,2,101,102)
// console.log(price);

// we can also add value to the array using splice method by putting 0 in the section of delCount
// price.splice(2,0,103,104);
// console.log(price);

// price.splice(3, 1, 700);
// console.log(price);

// let arr = [10,20,30];
// for-in loop -> used in enumerable properties of object
// let obj = {
//     name: "harsh",
//     age:  22,
//     heihgt: "6ft 2in"
// };
// for(let key in obj){
//     console.log(key," ",obj[key]);
// }


// for-of loop-> used to traverse on arrays nd strings
// let arr1 = [10,20,30,40];
// for(let value of arr1){
//     console.log(value);
// }

// let fullName = "harsh";
// for(let value of fullName){
//     console.log(value);
// }


// for each loop
// arr.forEach((value, index) => {
//     console.log("Number: ",value,"Index: ",index);
// })


// function with passing parameter
// let arr = [10,20,30,40,50];
// function getSum(arr){
//     let sum = 0;
//     // for(let i = 0 ; i < arr.length ; i++){
//     //     sum += arr[i];
//     // }
//     // return sum;
//     arr.forEach((value) => {
//         sum += value;
//     })
//     return sum;
// }
// console.log(getSum(arr));


// let firstName = 'Harsh'; //type-> string
// let lastName = new String('Raj'); //type-> object

// let date = new Date();
// console.log(date);

// let arr = [1,4,5,7];
// // arr.push(9);
// // arr.unshift(0);
// // arr.splice(2, 0, 2, 3);
// console.log(arr);
// console.log(arr.includes(7)); //true
// console.log(arr.indexOf(4, 2)); //-1

// let courses = [
//     {no: 1, naam: 'Harsh'},
//     {no: 2, naam: 'Raj'}
// ];
// // console.log(courses);

// // callback functions
// // let course = courses.find(function(course){
// //     return course.naam == 'Raj';
// // })

// let course = courses.find(course => course.naam === 'Sinha');
// // if not present then it will print undefined
// console.log(course)

// let arr = [1,2,3,4];
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift(0,3,4,5,6);
// console.log(arr);
// arr.splice(2,2);
// console.log(arr);
// arr.length = 0;
// console.log(arr); //best way to empty an array
// arr.splice(0, arr.length); -> another way to empty an array


// // combining through spread operator
// let first = [1,2,3];
// let second = [4,5,6];
// let combined = [...first, ...second];
// console.log(combined);
// for(let ele of combined){
//     console.log(ele);
// }
// combined.forEach(number => console.log(number));
// call back functions
// combined.forEach(function(number){
//     console.log(number);
// })
// let joined = first.join(',');
// console.log(joined);
// let numbers = [7,8,9,10];
// let items = numbers.map(function(value){
//     return 'student_no' + value;
// });
// let items = numbers.map(value => 'student_no' + value);
// console.log(items);

let num = [1,2,-6,-9];
let filtered = num.filter(values => values >= 0);
console.log(filtered);

let items = filtered.map(num => {value : num});
console.log(items);