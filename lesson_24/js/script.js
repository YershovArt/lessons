"use strict"
// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active,
// при повторному кліку прибрати клас 

function addActive(e) {
	const targetE = e.target;
	if (targetE.closest('.item')) targetE.classList.toggle('active');
}

document.querySelector('.box').addEventListener('click', addActive);


// Задача №2
// Дано в css/scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.

const bodyItem = document.body;

window.addEventListener('load', function () {
	setTimeout(function () {
		bodyItem.classList.add('see');
	}, 1000);
})

// Задача №3
// Дано в html: header main footer
// Пи наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.

const foot = document.querySelector('.foot');
const head = document.querySelector('.head');

function changeColor(e) {
	if (e.target.closest('.head') && foot && e.type === 'mouseenter') {
		foot.classList.add('white');
	} else if (e.type === 'mouseleave') {
		foot.classList.remove('white');
	}
}

head.addEventListener('mouseenter', changeColor);
head.addEventListener('mouseleave', changeColor);

// Задача №4
// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.

function changeElementContent() {
	let elementToChange = document.querySelector('.tusk-4-text');
	let duration = +elementToChange.dataset.delay;
	let limit = +elementToChange.dataset.num
	let iteration = 0;
	const options = {
		root: null,
		rootMargin: "0px 0px 0px 0px",
		// Відсоток від розміру об'єкту.
		// При появі якого спрацьовує подія
		// Де 0 це будь яка поява
		// 100 це повна поява об'кта в в'юпорті
		threshold: 1,
	}
	const callback = (entries, observer) => {
		entries.forEach(entry => {
			const currentElement = entry.target
			if (entry.isIntersecting && iteration < limit) {
				let timer = setInterval(() => {
					elementToChange.textContent = iteration;
					iteration === limit ? clearInterval(timer) : null;
					++iteration;
				}, duration);
			}
		})
	}
	const observer = new IntersectionObserver(callback, options)
	observer.observe(elementToChange);
}

changeElementContent();



