$(function(){

   /***************** Menu-btn ********************/
   $(".menu__burger").click(function(event){
		$(".menu__burger,.menu").toggleClass("active");
		$("body").toggleClass("lock");
	});

   /***************** Header__lang-btn ********************/
   $(".header__lang-btn").click(function(event){
		$(".header__lang-btn").toggleClass("header__lang-btn--active");
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
			  breakpoint: 770,
			  settings: 'unslick'
			}
		 ]
	 });

	 $('.screen-2__slider').slick({
		dots: true,
		arrows: false,
		fade: true,
	 });

	 $('.screen-4__slider').slick({
		arrows: false,
		fade: true,
		asNavFor: '.screen-4__dotshead',
	 });

	 $('.screen-4__dotshead').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
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
				slidesToShow: 3,
				slidesToScroll: 1
				}
			},
			{
			  breakpoint: 480,
			  settings: {
				 slidesToShow: 1,
				 slidesToScroll: 1
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

/***************** loaded ********************/
if (document.querySelector('.wrapper')) {
	document.querySelector('.wrapper').classList.add('loaded');
}
