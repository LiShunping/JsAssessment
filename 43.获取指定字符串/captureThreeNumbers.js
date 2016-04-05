/**
 * [captureThreeNumbers 给定字符串 str，检查其是否包含 3 个连续的数字
 * 1、如果包含，返回最新出现的 3 个数字的字符串
 * 2、如果不包含，返回 false ]
 */
function captureThreeNumbers(str) {
	var arr = str.match(/\d{3}/g);
	return !!arr ? arr[0] : false;
}
// console.log(captureThreeNumbers('abc1234'), captureThreeNumbers('4'), captureThreeNumbers(''));