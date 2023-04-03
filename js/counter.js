"use strict"

window.addEventListener("load", windowLoad);

function windowLoad() {
	// Функція ініціалізації
	function digitsCountersInit(digitsCountersItems) {
		let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
		if (digitsCounters.length) {
			digitsCounters.forEach(digitsCounter => {
				digitsCountersAnimate(digitsCounter);
			});
		}
	}
	// Функція анімації
	function digitsCountersAnimate(digitsCounter) {
		let startTimestamp = null;
		const duration = parseInt(digitsCounter.dataset.digitsCounter) ? parseInt(digitsCounter.dataset.digitsCounter) : 1000;
		const startValue = parseInt(digitsCounter.innerHTML);
		const startPosition = 0;
		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	}
	// Пуск при завантаженні сторінки
	// digitsCountersInit();


	// Пуск при скроллі (появі блока з лічільниками)
	let options = {
		threshold: 0.5
	}
	let observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const targetElement = entry.target;
				const digitsCountersItems = targetElement.querySelectorAll("[data-digits-counter]");
				if (digitsCountersItems.length) {
					digitsCountersInit(digitsCountersItems);
				}
				// Вимкнути відслідковування після спрацювання
				observer.unobserve(targetElement);
			}
		});
	}, options);

	let sections = document.querySelectorAll('.about');
	if (sections.length) {
		sections.forEach(section => {
			observer.observe(section);
		});
	}
}






