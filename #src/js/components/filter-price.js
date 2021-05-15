
const filterPrice = document.querySelector('.filter-price__slider');

noUiSlider.create(filterPrice, {
	 start: [1000, 10000],
	 connect: true,
	 tooltips: [wNumb({decimals: 0}), wNumb({decimals: 0})],
    range: {
        'min': [0],
        'max': [15000]
    }
});

const priceStart = document.getElementById("filter-price__start");
const priceEnd = document.getElementById("filter-price__end");
priceStart.addEventListener('change', setPriceValues);
priceEnd.addEventListener('change', setPriceValues);

function setPriceValues() {
	let priceStartValue;
	let priceEndValue;
	if (priceStart.value !='') {
		priceStartValue = priceStart.value;
	}
	if (priceEnd.value !='') {
		priceEndValue = priceEnd.value;
	}
	filterPrice.noUiSlider.set([priceStartValue, priceEndValue]);
}


