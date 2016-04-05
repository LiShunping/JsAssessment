/**
 * [iterate 找出对象 obj 不在原型链上的属性(注意这题测试例子的冒号后面也有一个空格~)
 * 1、返回数组，格式为 key: value
 * 2、结果数组不要求顺序 ]
 */
function iterate(obj) {
	var propertyArr = [], i, len, properties = Object.keys(obj);
	for(i = 0, len = properties.length; i < len; i++) {
		propertyArr.push(properties[i] + ': ' + obj[properties[i]]);
	}
	return propertyArr;
}
/*function Girl(name, age) {
	this.name = name;
	this.age = age;
	if(typeof this.sayName !== 'function') {
		Girl.prototype.identify = 'girl';
		Girl.prototype.sayName = function() {
			console.log(this.name);
		};
	}
}
var g = new Girl('Amy', 21);
console.log(iterate(g));*/