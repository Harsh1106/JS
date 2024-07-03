function getCheese(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const cheese = '🧀';
            console.log('here is the cheese', cheese);
            resolve(cheese); //we can pass only one arg in resolve, to pass multiple we have to create object or array
        }, 2000)
    })   
}
async function order(){
    const cheese = await getCheese(); //will wait for this method to successfully execute   
}
console.log(getCheese())