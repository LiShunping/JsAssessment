// 加星题目
/**containsRrepeatingLetter
 * [containsRepeatingLetter 给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false ]
 */
function containsRepeatingLetter(str) {
	return (/([a-zA-Z])\1/).test(str);
}
console.log(containsRepeatingLetter('abc'), containsRepeatingLetter('abbc'));