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
let userName = document.querySelector('[type = text]');
let email = document.querySelector('[type = email]');
let password = document.querySelector('[type = password]');
let registerBtn = document.querySelector('.sign-up');
let loaderImg = document.createElement('img');
loaderImg.src = 'assets/images/register/Spinner-1s-200px.svg';

registerBtn.addEventListener('click', (event) => {
	event.preventDefault();

	if (userName.value === '' || email.value === '' || password.value === '') {
		alert('Please Fill Data');
	} else if (userName.value === localStorage.getItem('userName') || email.value === localStorage.getItem('email') || password.value === localStorage.getItem('password')) {
		alert('Please Fill Data');
	} else {
		localStorage.setItem('userName', userName.value);
		localStorage.setItem('email', email.value);
		localStorage.setItem('password', password.value);

		registerBtn.append(loaderImg);
		registerBtn.setAttribute('disabled', '');
		setTimeout(() => {
			window.location = 'login.html';
		}, 1000);
	}
});
