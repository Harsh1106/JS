const form = document.querySelector('form');
// if we use this then it will give us empty value
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results'); //we do not need to parseINT our value bcoz it is just a elements

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else{
        const bmi = (weight / ((height * height)/10000)).toFixed(2)
        let weightCondition = '';

        // result
        results.innerHTML = `<span>${bmi}</span>`;
        if(bmi < 18.6){
            weightCondition = 'Under Weight';
        } else if(18.6 < bmi && bmi < 24.9){
            weightCondition = 'Normal Range Weight';
        }else{
            weightCondition = 'Overweight';
        }
        results.innerHTML = `<span>BMI: ${bmi}</span><br><span>Weight Condition: ${weightCondition}`;
    }

});