$(function(){

   /***************** Menu-btn ********************/
   $(".menu__burger").click(function(event){
		$(".menu__burger,.menu,.menu__wrapper").toggleClass("active");
		$("body").toggleClass("lock");
	});

   /***************** Header__lang-btn ********************/
   $(".header__lang-btn").click(function(event){
		$(".header__lang-btn").toggleClass("header__lang-btn--active");
		$("body").toggleClass("night");
		$(".header__logo-link--light").toggleClass("active");
		$(".header__logo-link--night").toggleClass("active");
		$(".screen-1, .screen-3, .screen-5, .screen-7, .screen-8").toggleClass("active");
	});

	/***************** Slider ********************/
	$('.page-slider').on(`init reInit`, function(event, slick) {
		$('.counter').text(1 + ' / ' + slick.slideCount);
	 })
	 $('.page-slider').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
		$('.counter').text(currentSlide + 1 + ' / ' + slick.slideCount);
	 })
	 $('.page-slider').slick({
		dots: true,
		arrows: false,
		vertical: true,
		verticalSwiping: true,
		responsive: [
			{
			  breakpoint: 851,
			  settings: 'unslick'
			}
		 ]
	 });

	 $('.page-slider').mousewheel(function(e) {
		e.preventDefault();
	 
		if (e.deltaY < 0) {
		  $(this).slick('slickNext');
		} else {
		  $(this).slick('slickPrev');
		}
	 });

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
