function remove(arr, item) {
	var i, len, arr1 = [];
	for(i = 0, len = arr.length; i < len; i++) {
		if(arr[i] !== item) {
			arr1.push(arr[i]);
		}
	}
	return arr1;
}
/*var testArr = [
	[[0],0],
	[[-1,0,1],0],
	[[-3,-2,-0.5,0,1,2,3,4],0],
	[[-3,-2,-0.5,0,1,2,3,4],5],
	[[-3,-2,-0.5,0,1,2,3,4],4],
	[[-3,-2,-0.5,0,1,2,3,4],-3],
	[[-3,-2,-0.5,0,1,2,3,4],-4]
];
for(var k = 0, caseLen = testArr.length; k < caseLen; k++) {
	console.log(remove(testArr[k][0], testArr[k][1]));
}*/