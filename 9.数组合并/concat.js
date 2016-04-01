/**
 * [concat 合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组 ]
 */
function concat(arr1, arr2) {
	var i, j, len1, len2, arr = [];
	for(i = 0, len1 = arr1.length; i < len1; i++) {
		arr.push(arr1[i]);
	}
	for(j = 0, len2 = arr2.length; j < len1; j++) {
		arr.push(arr2[j]);
	}
	return arr;
}