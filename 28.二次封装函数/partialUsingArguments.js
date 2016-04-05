/**
 * [partialUsingArguments 实现函数 partialUsingArguments，调用之后满足如下条件：
 * 1、返回一个函数 result
 * 2、调用 result 之后，返回的结果与调用函数 fn 的结果一致
 * 3、fn 的调用参数为 partialUsingArguments 的第一个参数之后的全部参数以及 result 的调用参数 ]
 */
function partialUsingArguments(fn) {
	var i, lenOut, argsOut = [];
	for(i = 1, lenOut = arguments.length; i < lenOut; i++) {
		argsOut.push(arguments[i]);
	}
	return function() {
		var j, lenIn, argsIn = [];
		for(j = 0, lenIn = arguments.length; j < lenIn; j++) {
			argsIn.push(arguments[j]);
		}
		return fn.apply(this, argsOut.concat(argsIn));
	};
}