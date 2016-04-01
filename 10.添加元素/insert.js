/**
 * [insert 在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组 ]
 */
function insert(arr, item, index) {
	var i = 0, len = arr.length, arr1 = [];
	for(i = 0, len = arr.length; i < len;) {
		if(i === index) {
			arr1.push(item);
			index = -1;
		} else {
			arr1.push(arr[i]);
			i++;
		}
	}
	return arr1;
}
/*var testArr = [
	[[0],1,0],
	[[-1,0,1],0,2],
	[[-3,-2,-0.5,0,1,2,3,4],0,3],
	[[-3,-2,-0.5,0,1,2,3,4],5,3],
	[[-3,-2,-0.5,0,1,2,3,4],4,4],
	[[-3,-2,-0.5,0,1,2,3,4],-3,8],
	[[-3,-2,-0.5,0,1,2,3,4],-4,6]
];
for(var k = 0, caseLen = testArr.length; k < caseLen; k++) {
	console.log(insert(testArr[k][0], testArr[k][1], testArr[k][2]));
}*/