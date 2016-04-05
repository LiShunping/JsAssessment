/**
 * [base10 给定二进制字符串，将其换算成对应的十进制数字]
 */
function base10(str) {
	var i, len, num = 0, base = 1;
	for(len = str.length, i = len - 1; i >= 0; i--) {
		num += Number(str[i] * base);
		base *= 2;
	}
	return num;
}
// console.log(base10('11000000'));