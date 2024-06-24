"use strict"
// Задача №1
// Отримати в константу елемент <body>

const bodyItem = document.body;

console.log('task_1', bodyItem);

// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)

function createList(num = 1) {
	if (Number.isFinite(+num) && typeof num !== 'boolean' && num) {
		const listWrap = document.createElement('ul');
		for (let i = 0; i < num; i++) {
			let listItem = document.createElement('li');
			listItem.textContent = `list item ${i + 1}`;
			listWrap.insertAdjacentElement('beforeend', listItem);

		}
		bodyItem.insertAdjacentElement('afterbegin', listWrap)
	} else {
		const warning = document.createElement('h1');
		warning.textContent = 'numbers only please';
		bodyItem.insertAdjacentElement('afterbegin', warning)
		console.log('Numbers only please');
	}
}

createList(15);


// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тексту зедлений.

bodyItem.classList.add('loaded');
bodyItem.classList.contains('loaded') ? bodyItem.style.color = 'green' : false;

// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active, 
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

const itemSelect = document.querySelectorAll('.item');
let i = 0;
for (const iterator of itemSelect) {
	iterator.classList.add('active');
	iterator.textContent = `Елемент № ${++i}`;
}


// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки
const button = document.querySelector('.button')
function scrollBlock(element) {
	const block = element.dataset.scroll;
	element.scrollIntoView({
		block: block,
		inline: 'nearest',
		behavior: 'smooth',
	});
}

scrollBlock(button);


// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний


const linkData = document.querySelector('.link');
linkData.dataset.num < 200 ? linkData.style.color = 'red' : false;

