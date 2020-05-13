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
	 });

	 $('.screen-2__slider').slick({
		dots: true,
		arrows: false,
		fade: true,
	 });

	 $('.screen-4__slider').slick({
		infinity: true,
		fade: true,
		asNavFor: '.screen-4__dotshead',
	 });

	 $('.screen-4__dotshead').slick({
		infinity: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		asNavFor: '.screen-4__slider',
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

/***************** ibg adaptive inline bg ********************/
function ibg(){
	let ibg=document.querySelectorAll("._ibg");
	for (var i = 0; i < ibg.length; i++) {
	if(ibg[i].querySelector('img')){
	ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
	}
	}
	}
ibg();