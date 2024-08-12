// let myName = "harsh    ";

// console.log(myName.trueLength());


let myHeros = ["thanos", "spiderman"];
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);        
    }
} 

// yaha basically hmne top hierarchy mei ek function inject kr dia hai named "harsh" jo ki arrays strings and functions k dwara accesible hai

Object.prototype.harsh = function(){
    console.log(`harsh is present in all objects`);    
}

Array.prototype.heyHarsh = function(){
    console.log("It is a array prototype!")
}
// heroPower.harsh()
myHeros.harsh();

myHeros.heyHarsh()
// heroPower.heyHarsh() couldn't be access from the object type


// Prototypal Inheritance(old syntax)
const User = {
    name: 'Chai',
    email: 'chai@google.com'
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUserName = "ChaiAurCode";

String.prototype.trueLength = function(){
    console.log(`${this}`); 
    console.log(`True length is: ${this.trim().length}`)
}

anotherUserName.trueLength();

"harsh".trueLength();
"iceTea".trueLength();

/*
 *  prototypes are fundamental for implementing inheritance and sharing properties and methods among objects. Every object in JavaScript has an internal link to another object called its prototype. This prototype object serves as a blueprint from which the object inherits properties and methods. When accessing a property or method on an object, JavaScript first checks the object itself. If the property is not found, it looks up the prototype chain, which is a series of linked prototypes, until it reaches the end, represented by null. This chain enables objects to inherit features from their prototypes. You can define prototypes in two primary ways: by using constructor functions, where properties and methods are added to the constructor's prototype object, allowing all instances created by that constructor to share those features, and by using Object.create(), which creates a new object with a specified prototype. This system promotes code reuse and efficient memory usage by sharing methods and properties across instances.
 */