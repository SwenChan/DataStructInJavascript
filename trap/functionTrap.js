/*!
  数组传递是按照引用传递而不是值传递
 */

function changeArray (num, str, arr, obj) {
  num += 1;
  str += 'a';
  arr.push('o');
  obj.new = 'new';
}

let num = 1;
let str = 'o';
let arr = ['y'];
let obj = {p: 'a'};

console.log(num, str, arr, obj);

console.log('\nafter\n');

changeArray(num, str, arr, obj);

console.log(num, str, arr, obj);

console.log('事实证明,obj和arr对象是引用传递');
