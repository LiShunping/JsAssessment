/**
 * [square 为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组]
 */
function square(arr) {
	var i, len, arr1 = [];
	for(i = 0, len = arr.length; i < len; i++) {
		arr1.push(arr[i] * arr[i]);
	}
	return arr1;
}