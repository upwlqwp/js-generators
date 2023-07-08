

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





// dropdown



// container.onmouseover = container.onmouseout = dropdown;

// function dropdown(event) {

//     if (!el) return 'null'
//     return el.className || el.tagName;
// }

// log.value += event.type + ': ' +
//     'target=' + str(event.target) +
//     ', reltaedTarget=' + str(event.relatedTarget) + '\n';
// log.scrollTop = log.scrollHeight;

// if (event.type == 'mouseover') {
//     event.target.style.opacity = '1'
// }
// if (event.type == 'mouseout') {
//     event.target.style.opacity = '10'
// }


// const dropdown = document.getElementById('dropdown')
// const dropdownItems = document.querySelectorAll('dropdown__item');


// for(let i = 0; i<dropdown.length; i++){
//   dropdown[i].addEventListener('onmouseover', show)
//   dropdown[i].addEventListener('onmouseout', hidden)
// }

// function show() {
//   console.log(8)
//   if(this.children.length > 1){
//     this.children[1].style.opacity = "1"
//   }
//   else{
//     return false
//   }
// }

// show()




// dropdown.onmouseover = dropdown.onmouseout = show;

// function show(event) {


//   if (event.type == 'mouseover') {
//     event.target.style.opacity = '1';
//   }
//   if (event.type == 'mouseout') {
//     event.target.style.opacity = '0';
//   }
// }





