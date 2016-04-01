/**
 * 修改 js 代码中 parseInt 的调用方式，使之通过全部测试用例
 * parse2Int('12'); parse2Int('12px'); parse2Int('0x12')
 */
function parse2Int(num) {
	return parseInt(num, 10);
}
// console.log(parse2Int('12px'));