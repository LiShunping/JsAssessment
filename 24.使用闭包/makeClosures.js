/**
 * [makeClosures 实现函数 makeClosures，调用之后满足如下条件：
 * 1、返回一个函数数组 result，长度与 arr 相同
 * 2、运行 result 中第 i 个函数，即 result[i]()，结果与 fn(arr[i]) 相同 ]
 */
function makeClosures(arr, fn) {
	var result = [], i, len = arr.length, item;
	for(i = 0; i < len; i++) {
		item = function(num) {
			return function() {
				return fn.call(this, arr[num]);
			};
		};
		result.push(item(i));
	}
	return result;
}
/*var arrTest = [1,2,3,4,5];
var fnTest = function(n) {
	return 2 * n;
};
var resultTest = makeClosures(arrTest, fnTest);
console.log(resultTest[0](), resultTest[1](), resultTest[2](), resultTest[3](), resultTest[4]());*/