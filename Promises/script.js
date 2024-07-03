const ticket = new Promise(function(resolve, reject){
    const isBoard = false;
    if(!isBoard){
        resolve('Your are not in flight!');
    }
    else{
        reject('Your flight has been cancelled!')
    }
}); 

ticket.then((data) => {
    console.log('wohoo', data);
}).catch((data) => {
    console.log("oh shit", data)
}).finally((data) => {
    console.log("in finally lol", data) //data will assigned with undefined
});