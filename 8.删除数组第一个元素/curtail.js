/**
 * [curtail 删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组]
 */
function curtail(arr) {
	var i, len, arr1 = [];
	for(i = 0, len = arr.length; i < len; i++) {
		arr1.push(arr[i]);
	}
	arr1.shift();
	return arr1;
}