const menuTitle = document.querySelectorAll('.menu__title'),
	navLinks = document.querySelectorAll(".navbar__link[data-goto]");


menuTitle.forEach((item) =>
	item.addEventListener('click', function () {
		item.classList.toggle('_active');
	}));

if (navLinks.length > 0) {
	navLinks.forEach(navLink => {
		navLink.addEventListener("click", (e) => {
			const navLink = e.target;
			if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
				const gotoBlock = document.querySelector(navLink.dataset.goto),
					gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
				window.scrollTo({
					top: gotoBlockValue,
					behavior: "smooth"
				});
				e.preventDefault;
			}
		})
	})
}
