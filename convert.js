'use strict';

const rates = { };

const elementUSD = document.querySelector('[data-value="USD"]');
const elementEUR = document.querySelector('[data-value="EUR"]');
const elementAMD = document.querySelector('[data-value="AMD"]');


const input = document.querySelector('#input');
const result = document.querySelector('#result');
const select = document.querySelector('#select');

getCurrencies ();

//setInterval(getCurrencies, 10000);

async function getCurrencies () {

    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');

    const data = await response.json();

    const result = await data;

    console.log(result)

    console.log(result.Valute.USD)


    rates.USD = result.Valute.USD;
    rates.EUR = result.Valute.EUR;
    rates.AMD = result.Valute.AMD;

    console.log(rates);

    elementUSD.textContent = rates.USD.Value.toFixed(2);
    elementEUR.textContent = rates.EUR.Value.toFixed(2);
    elementAMD.textContent = rates.AMD.Value.toFixed(2);

    if(rates.USD.Value > rates.USD.Previous){
        elementUSD.classList.add('up')
    } else {
        elementUSD.classList.add('down')
    }


    if(rates.EUR.Value > rates.EUR.Previous){
        elementEUR.classList.add('up')
    } else {
        elementEUR.classList.add('down')
    }

    if(rates.AMD.Value > rates.AMD.Previous){
        elementAMD.classList.add('up')
    } else {
        elementAMD.classList.add('down')
    }
}


input.oninput = convertRates;

select.oninput = convertRates;

function convertRates(){
    result.value = (parseFloat(input.value) / rates[select.value].Value).toFixed(2)
}


