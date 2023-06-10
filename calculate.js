'use strict';

/* Calculate BMI */

const btnSubmit = document.getElementById('btnSubmit')
const btnClear = document.getElementById('btnClear')

function calculateBMI() {
    const weight = document.getElementById('weight').value
    const height = document.getElementById('height').value;

    let bmi = (weight / (height * height) * 2).toFixed(2)


    document.getElementById('heading').innerHTML = 'Your BMI is: '
    document.getElementById('bmi-output').innerHTML = bmi
}


btnSubmit.addEventListener('click', calculateBMI);





btnClear.addEventListener('click', function reload() {
    window.location.reload()

});