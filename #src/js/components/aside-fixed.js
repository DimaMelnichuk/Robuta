$(function(){

	
	/***************** Sticky aside-nav ********************/
	const wrapper = $('#wrapper');
	const contentAsideInner = $("#content__right-inner");
	const contentAsideInnerOffset = contentAsideInner.offset().top;
	const asideFixedTopClassname = 'aside-fixed--top';
	const asideFixedBottomClassname = 'aside-fixed--bottom';

	$(window).scroll(function() {
		const scrolled = $(this).scrollTop();

		if (scrolled > contentAsideInnerOffset)
		{
			wrapper.addClass('aside-fixed--top');
		} else if (scrolled < contentAsideInnerOffset) {
			wrapper.removeClass('aside-fixed--top');
		}
	
		
		const bottomFixPoint = $(document).height() - (contentAsideInner.height() + $('#footer').height())
			if (scrolled > bottomFixPoint) {
				wrapper.removeClass(asideFixedTopClassname);
				wrapper.addClass(asideFixedBottomClassname);
				contentAsideInner.css({
					top: bottomFixPoint - $("#content__right").offset().top
				});
			} else if (
				wrapper.hasClass(asideFixedBottomClassname) &&
				scrolled < bottomFixPoint
				) {
				wrapper.removeClass(asideFixedBottomClassname);
				wrapper.addClass(asideFixedTopClassname);
				contentAsideInner.css({
					top: "auto"
				});
			}

		});
});