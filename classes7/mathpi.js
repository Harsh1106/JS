// console.log(Math.PI); //3.14

// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);
// descriptor.value = 4;
// console.log(descriptor);

const chai = {
    name: 'adrak chai',
    price: 450,
    isAvailable: true,
    orderChai : function(){
        console.log("chai");        
    } 
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false
// });
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);        
    }
}
