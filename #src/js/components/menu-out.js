let menuBurger = document.querySelector('.menu__burger');
document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.header__menu-inner')) {
		menuBurger.classList.remove('active');
	}
});
let menu = document.querySelector('.menu');
document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.header__menu-inner')) {
		menu.classList.remove('active');
	}
});