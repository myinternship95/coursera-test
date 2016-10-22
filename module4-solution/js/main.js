var arr_name =  ['binh', 'thanh', 'chung', 'jane', 'kitty', 'jason', 'stone', 'Jackson'];
for (var i in arr_name) {
	if (arr_name[i][0] == 'j' || arr_name[i][0] == 'J') {
		console.log('Goodbye ' + arr_name[i]);
	} else {
		console.log('Hello ' + arr_name[i]);
	}
}
