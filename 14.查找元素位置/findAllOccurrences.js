/**
 * [findAllOccurrences 在数组 arr 中，查找值与 target 相等的元素出现的所有位置 ]
 */
function findAllOccurrences(arr, target) {
	var i, len, arr1 = [];
	for(i = 0, len = arr.length; i < len; i++) {
		if(arr[i] === target) {
			arr1.push(i);
		}
	}
	return arr1;
}