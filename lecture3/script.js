// for(let i = 0 ; i < 5 ; i++){
//     console.log("hii");
// }

// far-of loop
// let str = "Harsh";
// let size = 0;
// for(let i of str){
//     console.log(i);
//     size++;
// }
// console.log("The size of string is: ", size);

// Objects: Collection of key-value pairs
// let obj = {
//     "name": "Harsh", //can be declared like this but we use this only in case of having space in variables name
//     // "full name": "Harsh Raj" //output be like this: { name: 'Harsh', 'full name': 'Harsh Raj' }
//     age: 22,
//     weight: 79,
//     height: "6ft 2in",
//     greet: function(){
//         console.log("Inside the object");
//     }
// };
// obj.greet();
// console.log(typeof(obj)); //object

// let obj2 = obj; //shallow copy-> When a reference variable is copied into a new reference variable using the assignment operator, a shallow copy of the referenced object is created. In simple words, a reference variable mainly stores the address of the object it refers to. When a new reference variable is assigned the value of the old reference variable, the address stored in the old reference variable is copied into the new one. This means both the old and new reference variables point to the same object in memory. As a result, if the state of the object changes through any of the reference variables it is reflected for both. Let us take an example to understand it better.
// console.log(obj);
// console.log(obj2);

// console.log("-----------------After Modification-----------");
// obj2.name = "Raj";
// obj2.weight = 68;
// console.log("Object=>",obj);
// console.log("New object=>",obj2);



// Deep copy-> Unlike the shallow copy, deep copy makes a copy of all the members of the old object, allocates a separate memory location for the new object, and then assigns the copied members to the new object. In this way, both the objects are independent of each other and in case of any modification to either one, the other is not affected. Also, if one of the objects is deleted the other still remains in the memory. Now to create a deep copy of an object in JavaScript we use JSON.parse() and JSON.stringify() methods. Let us take an example to understand it better.
// let emp = {
//     id: "E102",
//     ename: "Harsh",
//     eaddress: "Patna",
//     age: 22
// };
// console.log("---------Deep Copy---------------");
// let newEmp =JSON.parse(JSON.stringify(emp));
// console.log("Employee=>", emp);
// console.log("New employee=>", newEmp);
// console.log("=======After Modification==========");
// newEmp.ename = "Raj";
// newEmp.eaddress = "Phagwara";
// console.log("Employee=>",emp);
// console.log("New employee=>",newEmp);

// for-in loop  
// let student = {
//     lastName : "Harsh",
//     age : 20,
//     cgpa : 7.2,
//     loc : "Punjab"
// };
// for(let i in student){ //will print only the key values
//     console.log(i," value = ",student[i]);
// }

// print all even numbers from 0 to 100.
// for(let i = 0 ; i <= 100 ; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

// STRING- A string created using single quotes, double quotes, or backticks is generated as a primitive value, similar to numbers and boolean values. Primitive data are immutable, which means they cannot be changed. Also, they do not have any methods or properties.
// let str = "Harsh Raj";
// console.log("My name is",str);
// let object = {
//     item: "pen", 
//     price: 10,
// };
// console.log("The price of", object.item,"is",object.price); //Normal way to print.
// console.log(`The price of ${object.item} is ${object.price}`); //using this string literal method we can see that in our output the number will be treated as String.

// let specialString = `This is a template literal ${1+2+3}`; //phle value add hogi and then add hogi string mein
// console.log(specialString);

// String Methods
// let str = "Harsh\tRaj";
// let str = "Harsh Raj";
// console.log(str.length); //9 bcoz escape sequence consider as single character.
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim());
// console.log(str.slice(1,4)); //will return from 1 to 3 value "ars"
// console.log(str.slice(1)); //arsh Raj
// let str2 = "Hello";
// console.log(str.concat(" ",str2)); //Harsh Raj Hello
// console.log(str.replace("a","y")); //jo pehla letter aaega search m usko change kr dega ye
// console.log(str.replaceAll("a","y")); //this will replace the whole occurence of 'a'
// str = str.replace("H", "k");
// console.log(str); 

// single slash is used to represent anything imp and to remove that importance can use double slash
// let str = "Hello ji \"kaise\" ho saare?";
// console.log(str); //Hello ji "kaise" ho saare?
// let res = str.split(" ");
// console.log(res); //[ 'Hello', 'ji', 'kaise', 'ho', 'saare?' ]
// console.log(res.join(',')); //Hello,ji,"kaise",ho,saare?
// console.log(res.join('-')); //Hello-ji-"kaise"-ho-saare?


// there is another way to create strings in JavaScript, which is via the String() constructor. The String() constructor generates a string as an object (when called with new). If called as a function (str2 in the example below), the value is coerced to a primitive string.

// let str1 = new String('Hey there!');
// let str2 = String('Hey there!');
// let str3 = "Hey there!";
// console.log(typeof(str1)); //object
// console.log(typeof(str2)); //string
// console.log(typeof(str3)); //string
// console.log(str1 == str2); //if we do not perform tight checking(===) then it will result true and if we use loose checking then false
// console.log(str1 == str3); //true
// console.log(str1 === str2); //false
// console.log(str1 === str3); //false
// console.log(str2 == str3); //true


// let firstName = new String("Harsh");
// let lastName = `Raj`; //
// // console.log(firstName); //[String: 'Harsh Raj']
// let finalAns = `${firstName} ${lastName}`;
// console.log(finalAns); //Harsh Raj

// // Practice Question
// // let fullName = prompt("Enter you name:");
// // console.log(fullName);
// // let userName = "@" + fullName + fullName.length;
// // console.log(userName);


let rectangle = {
    length: 42,
    breadth: 4
};

// for-in loop
// for(let key in rectangle){
// // keys are reflected through key variable
// // values are reflected thorugh rectangle[key]
//     console.log(key); //returns the key
//     console.log(key, rectangle[key]);
// }

// for-of loop
// for(let key of Object.entries(rectangle)){ //through this we can use the for-of loop on the objects
//     // Object.keys returns the keys of it
//     // Object.entries returns the value as well as keys
//     console.log(key);
// }

if('length' in rectangle){
    console.log('Present');
}
else{
    console.log('Absent');
}