$(function(){


   /***************** Header__lang-btn ********************/
   // $(".header__lang-btn").click(function(event){
	// 	$(".header__lang-btn").toggleClass("header__lang-btn--active");
	// 	$("body").toggleClass("night");
	// 	$(".header__logo-link--light").toggleClass("active");
	// 	$(".header__logo-link--night").toggleClass("active");
	// 	$(".screen-1, .screen-3, .screen-5, .screen-7, .screen-8").toggleClass("active");
	// });

	/***************** Slider ********************/


	 $('.screen-2__slider').slick({
		dots: true,
		arrows: false,
		fade: true,
		adaptiveHeight: true
	 });

	 $('.screen-4__slider').slick({
		infinite: true,
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/icons/arrow.png" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/icons/arrow.png" alt="">',
		asNavFor: '.screen-4__dotshead',
	 });

	 $('.screen-4__dotshead').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.screen-4__slider',
	 });

	 $('.screen-5__slider').slick({
		dots: true,
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 1600,
			  settings: {
				slidesToShow: 3
				}
			},
			{
				breakpoint: 700,
				settings: {
				  slidesToShow: 2
				}
			 },
			{
			  breakpoint: 510,
			  settings: {
				 slidesToShow: 1
			  }
			}
		 ]	
	 });

	 $('.screen-6__slider').slick({
		dots: true,
		arrows: false,
		fade: true,
	 });
	
 
});
$(".header__lang-btn--day").click(function() {
	like_btn(this);
 });

 $(".header__lang-btn--night").click(function() {
	dislike_btn(this);
 });
// $(".header__lang-btn").click(function(event){
// 	$(".header__lang-btn").toggleClass("header__lang-btn--active");
// 	$("body").toggleClass("night");
// 	$(".header__logo-link--light").toggleClass("active");
// 	$(".header__logo-link--night").toggleClass("active");
// 	$(".screen-1, .screen-3, .screen-5, .screen-7, .screen-8").toggleClass("active");
// });

// let body = document.querySelector("body");

// document.querySelectorAll('.header__lang-btn').forEach((btns) =>
// 	btns.addEventListener('click', function(e) {
// 		e.preventDefault();
// 		let btn = btns;

// 		if (btn.classList.contains('header__lang-btn--active')) {
// 			btn.classList.remove('content__item--active');
// 			body.classList.remove('night');
// 		} else {
// 			document
// 				.querySelectorAll('.header__lang-btn')
// 				.forEach((child) => child.classList.remove('header__lang-btn--active'))
// 				btn.classList.add('header__lang-btn--active');
// 				body.classList.add('night');
// 		}

// 	})
// );


let body = document.querySelector("body");
function like_btn(btn) {
	btn.classList.add("header__lang-btn--active");
	body.classList.remove("night");
	let nextSibling = btn.nextElementSibling;
	 nextSibling.classList.remove("header__lang-btn--active");
 }
 
function dislike_btn(btn) {
btn.classList.add("header__lang-btn--active");
body.classList.add("night");
let previousSibling = btn.previousElementSibling;
	previousSibling.classList.remove("header__lang-btn--active");
}

let wrapper = document.querySelector(".wrapper");

let pageSlider = new Swiper(".page", {
	wrapperClass: "page__wrapper",
	slideClass: "page__screen",
	direction: "vertical",
	slidesPerView: "auto",
	watchOverflow: true,
	speed: 900,

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
		toggleWidth();
		// setScrollType();
		wrapper.classList.add("loaded");
		var offer = document.querySelector('.counter');
		offer.innerHTML = (sw.activeIndex +  1) + ' / ' + sw.slides.length;
		},
		slideChange: function(sw) {
		menuSliderRemove();
		menuLinks[pageSlider.realIndex].classList.add("menu__link--active");
		var offer = document.querySelector('.counter');
		offer.innerHTML = (sw.activeIndex +  1) + ' / ' + sw.slides.length;
		},
		resize: function() {
			toggleWidth();
		 },
	//  resize: function() {
	// 	 setScrollType();
	//  },
	},

	//  breakpoints: {
	// 	320: {
	// 	  freeMode: true,
	// 	  parallax: false,
	// 	},
	// 	990: {
	// 	  freeMde: false,
	// 	  parallax: true,
	// 	}
	// } 
});

let menuLinks = document.querySelectorAll(".menu__link");

function menuSlider() {
	menuLinks[pageSlider.realIndex].classList.add("menu__link--active");
	if (menuLinks.lenght > 0) {
		for (let index = 0; index < menuLinks.length; index++) {
			const menuLink = menuLinks[index];
			menuLink.addEventListener("click", function(e) {
				menuSliderRemove();
				pageSlider.slideTo(index, 900);
				menuLink.classList.add("menu__link--active");
				e.preventDefault();
			});
		}
	}
}

function menuSliderRemove() {
	let menuLinkActive = document.querySelector(".menu__link.menu__link--active");
	if (menuLinkActive) {
		menuLinkActive.classList.remove("menu__link--active");
	}
}
function toggleWidth(e) {
	const fieldValueWidth = document.querySelector(".container");
	fieldValueWidth.innerText = window.innerWidth + " px";
 }
// function setScrollType() {
// 	if (wrapper.classList.contains("free")) {
// 		wrapper.classList.remove("free");
// 		pageSlider.params.freeMode = false;
// 	}

// 	for (let index = 0; index < pageSlider.slides.length; index++) {
// 		const pageSlide = pageSlider.slides[index];
// 		const pageSlideContent = pageSlide.querySelector(".page__screen-content");
// 		if (pageSlideContent) {
// 			const pageSlideContentHeight = pageSlideContent.offsetHeight;
// 			if (pageSlideContentHeight > window.innerHeight) {
// 				wrapper.classList.add("free");
// 				pageSlider.params.freeMode = true;
// 				break;
// 			}
// 		}
// 	}
// }


pageSlider.init();


let menuBurger = document.querySelector('.menu__burger');
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
	}
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
