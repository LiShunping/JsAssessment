/**
 * [fizzBuzz 实现 fizzBuzz 函数，参数 num 与返回值的关系如下：
 * 1、如果 num 能同时被 3 和 5 整除，返回字符串 fizzbuzz
 * 2、如果 num 能被 3 整除，返回字符串 fizz
 * 3、如果 num 能被 5 整除，返回字符串 buzz
 * 4、如果参数为空或者不是 Number 类型，返回 false
 * 5、其余情况，返回参数 num ]
 */
function fizzBuzz(num) {
	var str = '';
	if(typeof num !== 'number') {
		return false;
	}
	if(num % 3 === 0) {
		str += 'fizz';
	}
	if(num % 5 === 0) {
		str += 'buzz';
	}
	return str || num;
}
/*var testArr = [
	0,
	1,
	2,
	3,
	5,
	8,
	9,
	15,
	'',
	null,
	[],
	{},
	true,
	'123'
];
for(var k = 0, caseLen = testArr.length; k < caseLen; k++) {
	console.log(fizzBuzz(testArr[k]));
}*/