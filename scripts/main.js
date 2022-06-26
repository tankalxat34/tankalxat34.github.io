function show18plus () {
	/* Вызывает предупреждение 18+ о переходе на страницу со стримом */
	var result = confirm("На стриме может присутствовать контент 18+. Вы действительно хотите перейти к просмотру?");
	if (result) {
		window.open("./live.html");
	}
}

function refreshPage(argument) {
	/* Обновляет страницу */
	location.reload()
}

function main() {
	/* Функция для тестов и отладки скриптов */

	let c = prompt("Введите число");

	let i = 2;
	for (i; i < c; i++) {
		if (i * i > c) {
			i--;
			break;
		} else if (i * i == c) {
			break;
        }
	}

	// double shot = (c + i * i) / 2*i;

	alert(i + shot)
	
}