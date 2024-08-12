function setUserName(userName){
    // suppose there are complex DB calls
    this.userName = userName
    console.log('called')
}

function createUser(username, email, password){
    setUserName.call(this, username); //it will hold the refrence of the function
    // on passing 'this' ye execution context ko hold kr lega and memory m km ho jaane k bd bi function ka details save rkhega
    this.email = email;
    this.password = password;
}
const chai = new createUser("chai", "chai@gmail.com", "abc123");
console.log(chai); //only email and password is getting set