$(function(){

   /***************** Menu-btn ********************/
   $(".menu__burger").click(function(event){
		$(".menu__burger,.menu").toggleClass("active");
		$("body").toggleClass("lock");
	});

	/***************** Add active for  setting__lang-link ********************/
	$('.setting__lang-link').click(function() {
		$('.setting__lang-link').removeClass('active');
		$(this).addClass('active')
	});

 
});