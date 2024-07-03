// compile time error
// console.log(1; -> syntax error


// runtime error
// console.log(x); -> this is a reference error


// handling error
// try{
//     console.log("try block starts here!")
//     console.log(x); //refernce error
//     console.log("try block ends here!");
// }
// catch(e){
//     // yha hmlg define krte h ki error k saath ky krna chahte hai
//     console.log("inside catch block!");
//     console.log("error occured due to",e);
//     throw new Error("bs ho gya");
// }
// finally{
//     //this will run everytime
//     console.log("I will run every time bcoz i am a finally block!")
// }


// lets create a custom error
// try{
//     console.log(x);
// }
// catch(err){
//     throw new Error("bhai declare kr le phle to fir print kriyo");
// }

// let errCode = 100;
// if(errCode == 100){
//     throw new Error("Invalid Json");
// }

let person = {
    fName : 'Harsh',
    lName : 'Raj',
    get fullName(){
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value){
        if(typeof value !== String){
            throw new Error('You have not entered a string');
        }
        let parts = value.split(" ");
        this.fName = parts[0];
        this.lName = parts[1];
    }
}
try{
    person.fullName = "Harsh Raj";
}
catch(e){
    console.log(e);
}