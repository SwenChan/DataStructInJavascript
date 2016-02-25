/**
 * Created by Swen on 2/25/16.
 */

function Queue() {
  this.items = [];
};

Queue.prototype.description = 'this is queue parent';

/**
 * 将元素推入队列尾部
 * @param {*} element
 */
Queue.prototype.enqueue = function(element) {
  this.items.push(element);
};
/**
 * 将第一个元素推出队列
 * @returns {T} 返回被弹出的元素
 */
Queue.prototype.dequeue = function() {
  return this.items.shift();
};
/**
 * 查看队列中的第一个元素
 * @returns {*} 返回队列中第一个元素
 */
Queue.prototype.front = function() {
  return this.items[0];
};
/**
 * 确定队列是否为空
 * @returns {boolean}
 */
Queue.prototype.isEmpty = function() {
  return this.items.length === 0;
};
/**
 * 清空队列所有内容
 */
Queue.prototype.clear = function() {
  this.items = [];
};
/**
 * 返回队列的长度
 * @returns {Number}
 */
Queue.prototype.size = function() {
  return this.items.length;
};
/**
 * 打印出队列的内容
 */
Queue.prototype.print = function() {
  console.log(this.items.toString());
};