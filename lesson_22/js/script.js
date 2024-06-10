"use strict"
let someVar = 0;
++someVar;

if (someVar) {
	console.log(someVar);
}


// Задача №2
// За допомогою циклу FOR виведіть в консоль 10 рядків:
// Пункт №1
// Пункт №2
// і т.д.

for (let i = 1; i <= 10; i++) {
	console.log(`Пункт №${i}`);
}

console.log(10 <= "10");

// Задача №3
// Що потрапить в консоль ?
if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
	console.log('000');
}

// Задача №4
// Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
// Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
// Функція не має повертати NaN, Infinite або помилку

function getDivisionResult(a = 0, b = 0) {
	if (!Number.isFinite(a) && !Number.isFinite(b)) {
		return "Please correct data for division numbers only allowed";
	} else if (b === 0 && a === 0) {
		return "Please input some data for division";
	} else if (b === 0 && a !== 0) {
		return "You cant divide on zero";
	}

	return `Результат ділення: ${a / b}`
}

console.log(getDivisionResult(1, 0));


// Задача №5
// Створіть масив даних - 5 елементів, один з яких число 10
// Обробіть масив за допомогою методу перебору
// Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль

function returnTen(arr, decimal) {

	if (Array.isArray(arr) && Number.isFinite(decimal) && arr.length > 0) {
		arr.includes(decimal) ? console.log(`You have ${decimal} in position №${arr.indexOf(decimal)} in array.`)
		 : console.log(`It is no ${decimal} in array!`);
	}
}
let arr = [1, NaN, false, 'privet', 10];

returnTen(arr, 10)

