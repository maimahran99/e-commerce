let formsHolder = document.querySelectorAll('.form-holder');
let inputsFiled = document.querySelectorAll('input');

/**=============  ADD ACTIVE CLASS TO INPUTS ==================== */
inputsFiled.forEach((input) => {
	input.addEventListener('click', (event) => {
		formsHolder.forEach((holder) => {
			holder.classList.remove('active');
		});
		event.currentTarget.parentElement.classList.add('active');
	});
});

/**=============  REGISTER FORM ==================== */

let email = document.querySelector('[type = email]');
let password = document.querySelector('[type = password]');
let loginBtn = document.querySelector('[data-login]');
let errorMessage = document.querySelector('.email-not-found');

let getEmail = localStorage.getItem('email');
let getPassword = localStorage.getItem('password');

let loaderImg = document.createElement('img');
loaderImg.src = 'assets/images/register/Spinner-1s-200px.svg';

/**============= CLOSE ERROR MESSAGE ==================== */
let closeBtn = document.querySelector('[data-close]');
closeBtn.addEventListener('click', () => {
	errorMessage.classList.remove('active');
});

loginBtn.addEventListener('click', (event) => {
	event.preventDefault();

	if (email.value === '' || password.value === '') {
		alert('Please Fill Data');
	} else {
		if (email.value === getEmail && password.value === getPassword) {
			errorMessage.classList.remove('active');
			loginBtn.append(loaderImg);
			loginBtn.setAttribute('disabled', '');
			setTimeout(() => {
				window.location = 'index.html';
			}, 1500);
		} else {
			errorMessage.classList.add('active');
		}
	}
});
