

/* quote  

const quoteText = document.querySelector(".quote")
const quoteBtn = document.getElementById("quoteBtn")

function randomQuote() {


    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log(result)
        quoteText.innerText = result.content;
    });

}

quoteBtn.addEventListener("click", randomQuote)
*/


/* BMI Calculator 
function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}

copyBtn.addEventListener("click", copyPassword);
*/





