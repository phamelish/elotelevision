document.addEventListener("DOMContentLoaded", async function() {
	// Set variables
	let content = document.querySelector('#content');
	let modal = document.getElementById('modal');
	
	// Sleep for a little bit
	await new Promise(r => setTimeout(r, 1500));

	// Deny click events in the main block
	content.style.pointerEvents = "none";

	// Display the modal
	modal.style.display = "flex";

	let email = document.querySelector('#email');
	let password = document.querySelector('#password');	
	
	email.addEventListener('keypress', function(e) {
		if (e.key === "Enter") {
			createAccount();		
		}
	});

	password.addEventListener('keypress', function(e) {
		if (e.key === "Enter") {
			createAccount();		
		}
	});

});

function createAccount() {
	let email = document.querySelector('#email').value.trim();
	let password = document.querySelector('#password').value.trim();

	if ((email === "") || (password ==="")) {
		alert("You must fill in both email and password");		
	} else {
		alert('You have successfully created an account! Please check for an email from elotetv@gmail.com to complete your account creation process!');
		let content = document.querySelector('#content');
		modal.style.display = "none"		
		content.style.pointerEvents = "auto";
	}
}
