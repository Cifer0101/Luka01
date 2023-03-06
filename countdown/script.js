// function countTo(){
//     let from = -1;
//     let to = 10;
//     let step = to > from ? 1 : -1;
//     let interval = 200;
    
//     if(from == to){
//         document.querySelector("#output")
//         textContent = from;
//         return;
//     }
    
//     let counter = setInterval(function(){
//         from +=step;
//         document.querySelector("#output").textContent=from;
//         if(from == to){
//             clearInterval(counter);
//         }
//     }, interval);
// }
// countTo();


const textEl = document.getElementById("text");
const buttonEl = document.getElementById("btn");

const text = "012345678910";

let index = 1;
let countUp = true;



function writeText() {
    if (countUp) {
      textEl.innerHTML = text.slice(0, index);
      index++;
      if (index > 11) {
        countUp = false;
        index = 12;
      }
    } else {
      textEl.innerHTML = text.slice(0, index);
      index--;
      if (index < 0) {
        countUp = true;
        index = 1;
      }
    }
    setTimeout(writeText, 250);
  }