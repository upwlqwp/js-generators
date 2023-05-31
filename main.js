'use strict';

const number = document.querySelector('.number'),
    parameters = document.querySelector('.parameters'),
    rangeInpit = document.querySelector('.range-input'),
    minNumber = document.querySelector('.min-number'),
    maxNumber = document.querySelector('.max-number'),
    listInput = document.querySelector('.list-input'),
    listNumbers = document.querySelector('.list-numbers'),
    btn = document.querySelector('.btn');

parameters.addEventListener('change', () => {
    if (listInput.checked) {
        listNumbers.style.opacity = '1';
    } else {
        listNumbers.style.opacity = '0';
    }
});

listNumbers.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^\s\d]/g, '');
});

btn.addEventListener('click', () => {
    if (rangeInpit.checked) {

        number.innerHTML = Math.floor(Number(minNumber.value) + Math.random() *
            (Number(maxNumber.value)))
    }
    if (listInput.checked) {
        let arrListNumber = listNumbers.value.trim().split(/\s+/);
        console.log('arrListNumber: ', arrListNumber);

        number.innerHTML = arrListNumber[Math.floor(Math.random() * arrListNumber.length)];
    }
});

/// generate qr

const imgBox = document.getElementById('imgBox');
const qrImg = document.getElementById('qrImg');
const qrInput = document.getElementById('qrInput');
const qrBtn = document.getElementById('qrBtn')



qrBtn.addEventListener("click", function generateQR() {
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrInput.value;
})



/*  Generate a Random Password */

const passwordBox = document.getElementById('password');
const passwordBtn = document.getElementById('passwordBtn')

const length = 12;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbol = '@#$%^&*()_+}{[]<>-~/|';

const allChars = upperCase + lowerCase + numbers + symbol;



passwordBtn.addEventListener('click',
    function creatPassword() {
        let password = "";
        password += upperCase[Math.floor(Math.random() * upperCase.length)]
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
        password += numbers[Math.floor(Math.random() * numbers.length)]
        password += symbol[Math.floor(Math.random() * symbol.length)];

        while (length > password.length) {
            password += allChars[Math.floor(Math.random() * allChars.length)];
        }


        passwordBox.value = password;

    }

)




 const copyBtn = document.getElementById('copyBtn')


 function copyPassword() {

     passwordBox.select();
     document.execCommand("copy");
 }

 copyBtn.addEventListener("click", copyPassword);