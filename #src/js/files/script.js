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