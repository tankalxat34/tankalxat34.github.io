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
	for (i = 0; i < 5; i++) {
		console.log(i++);
	}

	var a = 0; console.log(++a)
	
}