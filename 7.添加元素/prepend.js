/**
 * [prepend 在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组 ]
 */
function prepend(arr, item) {
	var i, len, arr1 = [];
	for(i = 0, len = arr.length; i < len; i++) {
		arr1.push(arr[i]);
	}
	arr1.unshift(item);
	return arr1;
}