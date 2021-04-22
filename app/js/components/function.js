$(function(){

   /***************** Header__lang-btn ********************/
   $(".header__lang-btn").click(function(event){
		$(".header__lang-btn").toggleClass("header__lang-btn--active");
		$("body").toggleClass("night");
		$(".header__logo-link--light").toggleClass("active");
		$(".header__logo-link--night").toggleClass("active");
		$(".screen-1, .screen-3, .screen-5, .screen-7, .screen-8").toggleClass("active");
	});

});

// let menuBurger = document.querySelector('.menu__burger');
// document.documentElement.addEventListener("click", function (e) {
// 	if (!e.target.closest('.header__menu-inner')) {
// 		menuBurger.classList.remove('active');
// 	}
// });
// let menu = document.querySelector('.menu');
// document.documentElement.addEventListener("click", function (e) {
// 	if (!e.target.closest('.header__menu-inner')) {
// 		menu.classList.remove('active');
// 	}
// });
let menuBurger = document.querySelector('.menu__burger');
let body = document.querySelector('body');
let menu = document.querySelector('.menu');
document.documentElement.addEventListener("click", function (e) {
	menuBurger.classList.toggle('active');
	menu.classList.toggle('active');
	body.classList.toggle('lock');
});
document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.header__menu-inner')) {
		menuBurger.classList.remove('active');
		menu.classList.remove('active');
		body.classList.remove('lock');
	}
});

// slider swiper
let wrapper = document.querySelector(".wrapper");
let pageSlider = new Swiper('.page', {
	wrapperClass: "page__wrapper",
	slideClass: "page__screen",
	direction: "vertical",
	slidesPerView: "auto",
	parallax: true,
	watchOverflow: true, // if only have 1 slider turn off swiper
	speed: 700,
	runCallbacksOnInit: true,
	init: false,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,

	mousewheel: {
		sensitivity: 1,
	},

	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},

	pagination: {
		el: '.page__pagination',
		type: "bullets",
		clickable: true,
		bulletClass: "page__bullet",
		bulletActiveClass: "page__bullet--active",
	},

	on: {
		init: function (sw) {
			menuSlider();
			wrapper.classList.add("loaded");
			var offer = document.querySelector('.counter');
			offer.innerHTML = (sw.activeIndex +  1) + ' / ' + sw.slides.length;
		},
		slideChange: function(sw) {
			menuSliderRemove();
			menuLinks[pageSlider.realIndex].classList.add("active");
			var offer = document.querySelector('.counter');
			offer.innerHTML = (sw.activeIndex +  1) + ' / ' + sw.slides.length;
		},
	},
 
});

let menuLinks = document.querySelectorAll(".menu__link");

function menuSlider() {
	menuLinks[pageSlider.realIndex].classList.add("active");
	if (menuLinks.lenght > 0) {
		for (let index = 0; index < menuLinks.length; index++) {
			const menuLink = menuLinks[index];
			menuLink.addEventListener("click", function(e) {
				menuSliderRemove();
				pageSlider.slideTo(index, 700);
				menuLink.classList.add("active");
				e.preventDefault();
			});
		}
	}
}

function menuSliderRemove() {
	let menuLinkActive = document.querySelector(".menu__link.active");
	if (menuLinkActive) {
		menuLinkActive.classList.remove("active");
	}
}



if (window.innerWidth >= 850) {
	pageSlider.init();
} else {
	wrapper.classList.add("loaded");
}

let pageSlider2 = new Swiper('.screen-2__slider', {
	autoHeight: true,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	 },
});

let pageSlider4 = new Swiper('.screen-4__slider', {
	speed: 500,

	thumbs: {
		swiper: {
			el: '.screen-4__dotshead',
			slidesPerView: 4,
		}
	 },
});

let pageSlider5 = new Swiper('.screen-5__slider', {
	speed: 500,
	spaceBetween: 40,

	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	
	breakpoints: {
		// when window width is >= 320px
		320: {
		  slidesPerView: 1,
		  autoHeight: true,
		  
		},
		// when window width is >= 480px
		480: {
		  slidesPerView: 2,
		},
		// when window width is >= 640px
		640: {
		  slidesPerView: 3,
		},
		1050: {
			slidesPerView: 4,
		}
	 }
	
});

let pageSlider6 = new Swiper('.screen-6__slider', {
	speed: 500,
	loop: true,

	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	 },
});
/***************** WebP ********************/
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}
});
