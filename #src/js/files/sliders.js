let pageSlider = new Swiper('.page', {
	// Свои классы
	wrapperClass: "page__wrapper",
	slideClass: "page__screen",

	// Вертикальный слайдер
	direction: 'vertical',

	// Количество слайдов для показа
	slidesPerView: 'auto',

	// Включаем параллакс
	parallax: true,


	// Управление клавиатурой
	keyboard: {
		// Включить\выключить
		enabled: true,
		// Включить\выключить
		// только когда слайдер
		// в пределах вьюпорта
		onlyInViewport: true,
		// Включить\выключить
		// управление клавишами
		// pageUp, pageDown
		pageUpDown: true,
	},

	// Управление колесом мыши
	mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 1,
		// Класс объекта на котором
		// будет срабатывать прокрутка мышью.
		//eventsTarget: ".image-slider"
	},

	// Отключение функционала
	// если слайдов меньше чем нужно
	watchOverflow: true,

	// Скорость
	speed: 700,

	// Обновить свайпер
	// при изменении элементов слайдера
	observer: true,

	// Обновить свайпер
	// при изменении родительских
	// элементов слайдера
	observeParents: true,

	// Обновить свайпер
	// при изменении дочерних
	// элементов слайда
	observeSlideChildren: true,

	// Навигация 
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.page__pagination',
		type: 'bullets',
		clickable: true,
		bulletClass: "page__bullet",
		bulletActiveClass: "page__bullet--active",
	},

	// Отключаем автоинициализацию
	init: false,

	// События
	on: {
		// Событие инициализации
		init: function (sw) {
			menuSlider();
			setScrollType();
			wrapper.classList.add('_loaded');
			var offer = document.querySelector('.counter');
			offer.innerHTML = "<div class='counter__current'>" + "0" + (sw.activeIndex +  1) + "</div>" + "<div class='counter__total'>" + ' /' + "0" + sw.slides.length + "</div>";
		},
		// Событие смены слайда
		slideChange: function (sw) {
			menuSliderRemove();
			menuLinks[pageSlider.realIndex].classList.add('_active');
			var offer = document.querySelector('.counter');
			offer.innerHTML = "<div class='counter__current'>" + "0" + (sw.activeIndex +  1) + "</div>" + "<div class='counter__total'>" + ' /' + "0" + sw.slides.length + "</div>";
		},
		resize: function () {
			setScrollType();
		}
	},

});

let wrapper = document.querySelector(".wrapper");
let menuLinks = document.querySelectorAll('.menu__link');

function menuSlider() {
	if (menuLinks.length > 0) {
		menuLinks[pageSlider.realIndex].classList.add('_active');
		for (let index = 0; index < menuLinks.length; index++) {
			const menuLink = menuLinks[index];
			menuLink.addEventListener("click", function (e) {
				menuSliderRemove();
				pageSlider.slideTo(index, 800);
				menuLink.classList.add('_active');
				e.preventDefault();
			});
		}
	}
}

function menuSliderRemove() {
	let menuLinkActive = document.querySelector('.menu__link._active');
	if (menuLinkActive) {
		menuLinkActive.classList.remove('_active');
	}
}

function setScrollType() {
	if (wrapper.classList.contains('free')) {
		wrapper.classList.remove('free');
		pageSlider.params.freeMode = false;
	}
	for (let index = 0; index < pageSlider.slides.length; index++) {
		const pageSlide = pageSlider.slides[index];
		const pageSlideContent = pageSlide.querySelector('.screen__content');
		if (pageSlideContent) {
			const pageSlideContentHeight = pageSlideContent.offsetHeight;
			if (pageSlideContentHeight > window.innerHeight) {
				wrapper.classList.add('free');
				pageSlider.params.freeMode = true;
				
				break;
			}
		}
	}
}


if (window.innerWidth >= 850) {
	pageSlider.init();
} else {
	wrapper.classList.add("_loaded");
}

let pageSlider2 = new Swiper('.screen-2__slider', {
	autoHeight: true,
	loop: true,
	pagination: {
		el: '.screen-2__slider-pagination',
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
	autoHeight: true,

	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	
	breakpoints: {
		// when window width is >= 320px
		320: {
		  slidesPerView: 1,
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
	autoHeight: true,

	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	 },
});