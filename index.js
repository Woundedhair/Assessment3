console.log("Hello World");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted successfully');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function hoverOver() {
	alert("You're doing well!");
}
let hover = document.querySelector('#pic');
hover.addEventListener('mouseover', hoverOver);
