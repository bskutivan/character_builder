const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

async function loginFormHandler(event) {
	event.preventDefault();

	const username = document.querySelector('#username-login').value.trim();
	const password = document.querySelector('#password-login').value.trim();

	if(username && password) {
		const response = await fetch('/api/users/login', {
			method: 'post',
			body: JSON.stringify({
				username,
				password
			}),
			headers: { 'Content-Type': 'application/json' }
		});

		if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert(response.statusText);
		}
	}
}

async function signUpFormHandler() {

	const username = document.querySelector('#username-signup').value.trim();
	const password = document.querySelector('#password-signup').value.trim();

	if(username && password) {
		const response = await fetch('/api/users', {
			method: 'post',
			body: JSON.stringify({
				username,
				password
			}),
			headers: { 'Content-Type': 'application/json' }
		});

		if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert(response.statusText);
		}
	}
}


signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");

});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");

});

document.querySelector('.form-container').addEventListener('submit', loginFormHandler);