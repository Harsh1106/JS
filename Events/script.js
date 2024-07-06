// bcoz not a modern approach
// document.getElementById('owl').onclick = function(){
//     alert('owl clicked');
// }

// document.getElementById('owl').addEventListener('click', function(){
//     alert('owl clicked again');
// })
// another way of eventListener: attachEvent(), jQuery - on


// document.getElementById('images').addEventListener('click', function(e){
//     console.log("clicked inside the owl");
// }, false); //false is by deafault


// document.getElementById('owl').addEventListener('click', function(e){
//     console.log("owl clicked");
//     e.stopPropagation(); //this will stop bubbling
// }, false); 


//important topics in events 
//type, timestamp, preventDefault, target, toElement, srcElement, currentTarget,clientX, clientY, screenX, screenY, tiltX, tiltY
// altkey, ctrlkey, shiftkey, keyCode



// document.getElementById('google').addEventListener('click', function(e){
//     e.preventDefault();
//     e.stopPropagation();
//     console.log('google clicked');
// }, false);

document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        let removeIT = e.target.parentNode;
        removeIT.remove();
    }


    // removeIT.parentNode.removeChild(removeIT);
}, false);

