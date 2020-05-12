/***************** Popup ********************/
let user_icon = document.querySelector('.header-btn__icon-login');
let user_menu = document.querySelector('.login-form');
user_icon.addEventListener("click", function (e) {
	user_menu.classList.toggle('active');
});

document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.login-btn')) {
		user_menu.classList.remove('active');
	}
});