function sum(arr) {
	var i = 0, len = arr.length, sum = 0;
	for(; i < len; i++) {
		sum += arr[i];
	}
	return sum;
}