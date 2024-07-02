document.addEventListener("click", function (e) {
	const targetElement = e.target;
	// .icon-menu це клас кнопки при кліку на яку буде спрацьовувати код додаватись до тегу html клас menu-open 
	if (targetElement.closest('.top-header__button')) {
		document.documentElement.classList.remove('yes-burger');
		document.documentElement.classList.toggle('yes-form');
		e.preventDefault();
		console.log(document);
	}
})
document.addEventListener("click", function (e) {
	const targetElement = e.target;
	// .icon-menu це клас кнопки при кліку на яку буде спрацьовувати код додаватись до тегу html клас menu-open 
	if (targetElement.closest('.image-burger')) {
		document.documentElement.classList.remove('yes-form');
		document.documentElement.classList.toggle('yes-burger');
		e.preventDefault();
		console.log(document);
	}
})

// document.addEventListener("click", function (e) {
// 	const targetElement = e.target;
// 	// .icon-menu це клас кнопки при кліку на яку буде спрацьовувати код додаватись до тегу html клас menu-open
// 	if (targetElement.closest('.buy-icons__link-icon--none') || targetElement.closest('.buy-icons__link-icon--cross')) {
// 		document.documentElement.classList.remove('burger-open');
// 		document.documentElement.classList.remove('catalog-open');
// 		document.documentElement.classList.toggle('search-open');
// 		e.preventDefault();
// 		console.log(document);
// 	}
// })

// document.addEventListener("click", function (e) {
// 	const targetElement = e.target;
// 	// .icon-menu це клас кнопки при кліку на яку буде спрацьовувати код додаватись до тегу html клас menu-open
// 	if (targetElement.closest('.button--catalog') ) {
// 		document.documentElement.classList.remove('burger-open');
// 		document.documentElement.classList.remove('search-open');
// 		document.documentElement.classList.toggle('catalog-open');
// 		e.preventDefault();
// 		console.log(document);
// 	}
// })
