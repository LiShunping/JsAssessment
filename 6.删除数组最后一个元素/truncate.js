/**
 * [truncate 删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组 ]
 * @param  {[]} arr [原数组]
 * @return {[]}     [新数组]
 */
function truncate(arr) {
	var i, len, arr1 = [];
	for(i = 0, len = arr.length; i < len; i++) {
		arr1.push(arr[i]);
	}
	arr1.pop();
	return arr1;
}