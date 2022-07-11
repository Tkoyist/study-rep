// set 是由ES6 退出的一个新的数据集合
// 它的数据储存类似于数组

// 创建set
let param = new Set()
// 本质是一个类，可以只用new 关键字直接创建
 
// 创建set 时可以传入一个数组作为参数，创建出来的set 会包含数组当中的所有数据
let param1 = new Set([1,2,4,5,7,787,987,897,987,987,89,89789])

// set 可以传入各种类型的数据
let param1_5 = new Set('1',[],{})

// set 与数组有很多相似之处，但是set 是不能包含重复元素的
let param2 = new Set([1,1])
console.log(param2);

// typeof
console.log(typeof param2); // object

// Set 可以使用数组的拓展运算符
console.log(...param1);

// - 常用API
// add() 方法，直接向集合当中添加一个数据
param2.add('1')
console.log(param2);

// delete() 方法，删除集合当中的某个数据
param2.delete('1')

// has() 方法，接受一个数据作为参数，如果集合中包含该数据返回true 否则返回false
console.log(param2.has('1'));

// clear() 直接清空某个set
param1_5.clear()

// size 属性，获取某个集合的长度(类似于 array.length)
console.log(param1.size);

// set 也支持forEach() 方法的遍历
param1.forEach(item=>{
  console.log(item);
})

// 同时也接受 for of 的遍历
for(let item of param1){
  console.log(item);
}