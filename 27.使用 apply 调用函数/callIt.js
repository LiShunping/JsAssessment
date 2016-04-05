/**
 * [callIt 实现函数 callIt，调用之后满足如下条件
 * 1、返回的结果为调用 fn 之后的结果
 * 2、fn 的调用参数为 callIt 的第一个参数之后的全部参数 ]
 */
function callIt(fn) {
	var i, len, args = [];
	for(i = 1, len = arguments.length; i < len; i++) {
		args.push(arguments[i]);
	}
	return fn.apply(this, args);
}
/*var arrTest = [1,2,3,4,5];
var fnTest = function(n) {
	console.log(n);
	return 2 * n;
};
console.log(concatArr([[1,3],[3],[4,5]]));*/
