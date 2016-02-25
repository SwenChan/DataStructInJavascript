/**
 * Created by Swen on 2/25/16.
 */

function _Set() {
  this.items = {};
  this.ObjProto = Object.prototype;
  this.nativeKeys = Object.keys;
}
_Set.prototype.description = 'this is list parent';

/**
 * 返回集合所有元素
 * @returns {Array|*} 集合数组
 */
_Set.prototype.values = function() {
  return this.nativeKeys(this.items);
};
/**
 * 检测集合内是否有该元素
 * @param {*} element
 * @returns {*} 有就返回true 否则返回false
 */
_Set.prototype.has = function(element) {
  return element && this.ObjProto.hasOwnProperty.call(this.items, element);
};
/**
 * 添加元素
 * @param {*} element 要被添加的元素
 * @returns {boolean|*} 添加成功则返回true 集合已有此元素则返回false
 */
_Set.prototype.add = function(element) { //todo if this function's param is an Object or other type that can not be a key
  return (!this.has(element)) && (this.items[element] = element);
};
/**
 * 删除集合中的某个元素
 * @param {*} element
 * @returns {*|boolean} 删除成功返回true 没有该元素则返回false
 */
_Set.prototype.remove = function(element) {
  return this.has(element) && (delete this.items[element]);
};
/**
 * 清空集合元素
 */
_Set.prototype.clear = function() {
  this.items = {};
};
/**
 * 返回集合元素长度
 * @returns {Number} 集合长度
 */
_Set.prototype.size = function() {
  return this.nativeKeys(this.items).length;
};
_Set.prototype.isEmpty = function() {
  return this.size() === 0;
}

var t  = new _Set();
t.add('a');
console.log(t.has('a'));
console.log(t.add('a'));
console.log(t.remove('a'));
console.log(t.remove('a'));
console.log(t.remove('a'));

console.log(t.values());