document.addEventListener("click", function (e) {
	const targetElement = e.target;
	// .icon-menu це клас кнопки при кліку на яку буде спрацьовувати код додаватись до тегу html клас menu-open 
	if (targetElement.closest('.button-burger')) {
		document.documentElement.classList.remove('search-open');
		document.documentElement.classList.toggle('burger-open');
		e.preventDefault();
		console.log(document);
	}
})

document.addEventListener("click", function (e) {
	const targetElement = e.target;
	// .icon-menu це клас кнопки при кліку на яку буде спрацьовувати код додаватись до тегу html клас menu-open 
	if (targetElement.closest('.buy-icons__link-icon--none') || targetElement.closest('.buy-icons__link-icon--cross')) {
		document.documentElement.classList.remove('burger-open');
		document.documentElement.classList.toggle('search-open');
		e.preventDefault();
		console.log(document);
	}
})
