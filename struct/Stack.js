/**
 * Created by Swen on 2/25/16.
 */
function Stack() {
  this.items = [];
  this.length = 0;
};

Stack.prototype.description = 'this is stack parent';

/**
 * 将元素放入栈　置于数组最后一位
 * @param {*} element
 */
Stack.prototype.push = function(element) { //array implement is different from node implement
  //console.log(this);
  this.length++;
  this.items.push(element);
};
/**
 * 弹出栈顶元素
 * @return {*} 返回被弹出的值
 */
Stack.prototype.pop = function() {
  this.length--;
  return this.items.pop();
};
/**
 * 查看栈顶元素
 * @returns {*} 返回栈顶元素
 */
Stack.prototype.peek = function() {
  //return this.items[this.items.length - 1];
  return this.items[this.length - 1];
};
/**
 * 确定栈是否为空
 * @returns {boolean}
 */
Stack.prototype.isEmpty = function() {
  //return this.items.length === 0;
  return this.length === 0;
};
/**
 * 清空栈内所有内容
 */
Stack.prototype.clear = function() {
  this.items = [];
  this.length = 0
};
/**
 * 返回栈的大小
 * @returns {Number}
 */
Stack.prototype.size = function() {
  //return this.items.length;
  return this.length;
};
/**
 * 打印出栈的内容
 */
Stack.prototype.print = function() {
  console.log(this.items.toString());
};
var s = new Stack();
var d = new Stack();
s.push('a');
d.push('b');
s.push(1);
s.print();
d.print();
s.clear();
s.print();
console.log(d.size());
d.push()
d.push()
console.log(d.size())
d.print()