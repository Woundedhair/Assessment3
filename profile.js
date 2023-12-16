const button = document.querySelector("#color");
const aButton = document.querySelector("#place");
const bButton = document.querySelector("#ritual");

function color( ) {
    alert("Blue.");
};

function place() {
    alert("My Bathroom.");
};

function ritual() {
    alert("Morning Devotion.");
};

button.addEventListener("click", color);
aButton.addEventListener("click", place);
bButton.addEventListener("click", ritual);