/**
 * Created by Swen on 2/25/16.
 */
function Stack() {
  this.items = [];
};

Stack.prototype.description = 'this is stack parent';

/**
 * 将元素放入栈　置于数组最后一位
 * @param {*} element
 */
Stack.prototype.push = function(element) {
  //console.log(this);
  this.items.push(element);
};
/**
 * 弹出栈顶元素
 * @return {*} 返回被弹出的值
 */
Stack.prototype.pop = function() {
  return this.items.pop();
};
/**
 * 查看栈顶元素
 * @returns {*} 返回栈顶元素
 */
Stack.prototype.peek = function() {
  return this.items[this.items.length - 1];
};
/**
 * 确定栈是否为空
 * @returns {boolean}
 */
Stack.prototype.isEmpty = function() {
  return this.items.length === 0;
};
/**
 * 清空栈内所有内容
 */
Stack.prototype.clear = function() {
  this.items = [];
};
/**
 * 返回栈的大小
 * @returns {Number}
 */
Stack.prototype.size = function() {
  return this.items.length;
};

Stack.prototype.print = function() {
  console.log(this.items.toString());
};
var s = new Stack();

s.push('a');
s.push('b');
s.print();
s.pop();
s.print();