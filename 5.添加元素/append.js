function append(arr, item) {
	var i, len, arr1 = [];
	for(i = 0, len = arr.length; i < len; i++) {
		arr1.push(arr[i]);
	}
	arr1.push(item);
	return arr1;
}