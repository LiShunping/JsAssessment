/**
 * [duplicates 找出数组 arr 中重复出现过的元素 ]
 */
function duplicates(arr) {
	var i, m, arr1 = [], n = 0;
	arr.sort();
	for(i = 0, m = arr.length; i < m - 1; i++) {
		if(arr[i] === arr[i + 1] && arr[i] !== arr1[n - 1]) {
			n++;
			arr1.push(arr[i]);
		}
	}
	return arr1;
}
/*var testArr = [
	[[1,2,3,4,1,2,3,4,4],0],
	[[0],0],
	[[-1,0,1],0],
	[[-3,-2,-0.5,0,1,2,3,4,3],0],
	[[-3,-2,-0.5,0,1,2,3,4,5,0],5],
	[[-3,-2,-0.5,0,1,2,3,4,1],4],
	[[-3,-2,-0.5,0,1,2,3,4,-0.5,-3],-3],
	[[-3,-2,-0.5,0,1,2,3,4,2],-4]
];
for(var k = 0, caseLen = testArr.length; k < caseLen; k++) {
	console.log(duplicates(testArr[k][0]));
}*/