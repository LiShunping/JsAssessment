/**
 * [count 统计数组 arr 中值等于 item 的元素出现的次数 ]
 */
function count(arr, item) {
	var i, len, num = 0;
	for(i = 0, len = arr.length; i < len; i++) {
		if(arr[i] === item) {
			num++;
		}
	}
	return num;
}
/*function count(arr, item) {
	var str, arr1;
	str = arr.join('');
	arr1 = str.split(item);
	return arr.length - arr1.length;
}*/