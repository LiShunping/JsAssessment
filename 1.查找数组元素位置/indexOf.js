function indexOf(arr, item) {
	var len = arr.length,
		startIndex = 0,
		endIndex = len - 1,
		k = Math.floor((endIndex - startIndex) / 2);
	while(endIndex - startIndex > 1) {
		if(item < arr[k]) {
			endIndex = k - 1 >= 0 ? k - 1 : 0;
			k -= Math.floor((endIndex - startIndex) / 2);
		} else if(item > arr[k]) {
			startIndex = k + 1 < len ? k + 1 : len - 1;
			k += Math.floor((endIndex - startIndex) / 2);
		} else {
			return k;
		}
	}
	if(item === arr[startIndex]) {
		return startIndex;
	} else if(item === arr[endIndex]) {
		return endIndex;
	} else {
		return -1;
	}
}
/*function search(x, arr) {
	var index;
	x = x;
	arr = arr;
	var searchHalfArray = function(i0, i1) {
		var d = i1 - i0,
			i = parseInt((i0 + i1) / 2);
		if(x === arr[i]) {
			index = i;
			return;
		} else if(x > arr[i]) {
			if(d <= 2) {
				index = i + 1;
				return;
			} else {
				searchHalfArray(i + 1, i1);
			}
		} else {
			if(d <= 2) {
				index = i - 1;
				return;
			} else {
				searchHalfArray(i0, i - 1);
			}
		}
	};
	searchHalfArray(0, arr.length - 1);
	return index;
}
var testArr = [
	[[0],0],
	[[-1,0,1],0],
	[[-3,-2,-0.5,0,1,2,3,4],0],
	[[-3,-2,-0.5,0,1,2,3,4],5],
	[[-3,-2,-0.5,0,1,2,3,4],4],
	[[-3,-2,-0.5,0,1,2,3,4],-3],
	[[-3,-2,-0.5,0,1,2,3,4],-4]
];
var t0 = Date.now();
for(var k = 0, caseLen = testArr.length; k < caseLen; k++) {
	console.log(indexOf(testArr[k][0], testArr[k][1]));
}
var t1 = Date.now();
for(var k = 0, caseLen = testArr.length; k < caseLen; k++) {
	console.log(search(testArr[k][1], testArr[k][0]));
}*/
