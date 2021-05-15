/* $(function(){


	 $('.info__icon').click(function(event){
		$('.info__list').toggleClass('active');
	 });
		 
		 $(document).mouseup(function (e){ // событие клика по странице
			if (!$(".info__icon").is(e.target) && // если клик сделан не по элементу
				 $(".info__icon").has(e.target).length === 0) { // если клик сделан не по вложенным элементам
				 $(".info__list").removeClass('active'); // скрываем блок
			}
	  });

	}); */


	let info_icon = document.querySelector('.info__icon');
	let info_list = document.querySelector('.info__list');
	info_icon.addEventListener("click", function (e) {
		info_list.classList.toggle('active');
	});
	
	document.documentElement.addEventListener("click", function (e) {
		if (!e.target.closest('.info')) {
			info_list.classList.remove('active');
		}
	});
