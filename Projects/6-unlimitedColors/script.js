const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0 ; i < 6 ; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

const startChangingColor = function(){
        
}
const start = document.getElementById('start');
const stop = document.getElementById('stop');