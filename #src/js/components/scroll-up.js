/* $(function(){


	if($('.scroll-up').length){
		$(".scroll-up").on('click', function() {
			var target = $(this).attr('data-target');
			// animate
			$('html, body').animate({
				scrollTop: $(target).offset().top
				}, 1000);
	
		});
	}

	$(window).on('scroll', function() {
		if($('.header').length){
			var windowpos = $(window).scrollTop();
			var scrollLink = $('.scroll-up');
			if (windowpos >= 110) {
				scrollLink.addClass('scroll-up--active');
			} else {
				scrollLink.removeClass('scroll-up--active');
			}
		}
	});


}); */

const scrollUp = document.querySelector('.scroll-up');
const offset = 100;
const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

// onScroll
window.addEventListener('scroll', () => {
	if (getTop() > offset) {
		scrollUp.classList.add('scroll-up--active');
	} else {
		scrollUp.classList.remove('scroll-up--active');
	}
});

//click
scrollUp.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
});