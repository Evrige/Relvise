const menuTitle = document.querySelectorAll('.menu__title');
console.log("hello");
menuTitle.forEach((item) =>
	item.addEventListener('click', function () {
		item.classList.toggle('_active');
	}));

