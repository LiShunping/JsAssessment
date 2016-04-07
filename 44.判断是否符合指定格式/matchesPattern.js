// 加星题目，由于要检查格式，所以要加上^和$
/**
 * [matchesPattern 给定字符串 str，检查其是否符合如下格式
1、XXX-XXX-XXXX
2、其中 X 为 Number 类型 ]
 */
function matchesPattern(str) {
	return (/^(\d{3}\-\d{3}\-\d{4})$/).test(str);
}
console.log(matchesPattern('111-111-1234'), matchesPattern('  111-111-1234  '), matchesPattern(''), matchesPattern(undefined));