var seconds = 0;
var counter = document.getElementById("counter");

function addCounter () {
    seconds += 1;
counter.innerText = seconds;
}
document.addEventListener('DOMContentLoaded', (e) => {
    setInterval(addCounter ,1000);   
    })

var minus = document.getElementById("minus");
function minusCounter() {
    seconds -= 1
    counter.innerText = seconds;
}
minus.addEventListener('click', (e) => {
    minusCounter();
   
})
var plus = document.getElementById("plus");
plus.addEventListener('click', (e) => {
    addCounter();
})

var heart = document.getElementById("heart");
function numberLiker () {
    while (counter) {
        heart.innerHTML = `<p1> ${counter} has been liked </p1>`         
    }
}
heart.addEventListener('click', (e) => {
    numberLiker();
})