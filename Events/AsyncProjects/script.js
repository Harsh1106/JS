const sayHarsh = function(){
    console.log("Harsh");
}


const changeText = function(){
    document.querySelector('h1').innerHTML = 'A learner';
};

const changeMe = setTimeout(changeText,2000);
document.querySelector('#stop').addEventListener('click', function(){
    clearTimeout(changeMe);
    console.log("STOPPED");
})