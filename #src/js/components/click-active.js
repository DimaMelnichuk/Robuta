/***************** Overlay on click  ********************/
document.querySelectorAll('.content__item').forEach((item) =>
	item.addEventListener('click', () => {
		const contentItem = item;

		if (contentItem.classList.contains('content__item--active')) {
			contentItem.classList.remove('content__item--active');
		} else {
			document
				.querySelectorAll('.content__item')
				.forEach((child) => child.classList.remove('content__item--active'))

				contentItem.classList.add('content__item--active');
		}

	})
)