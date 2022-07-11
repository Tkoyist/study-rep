import observe from './observe.js';
import Watcher from './Watcher.js'
var obj ={
    a:{
        m:{
            n:1
        }
    },
    b:[11,22,33,44]
}
// var c = [1,2,3,4]
// 创建一个嵌套的对象
// defineReactive(obj.a.m,'n',111)
// 现在是无法侦测的，该方法现在无效



// 创建一个数组，现在我们需要想办法侦测数组中的所有值，并且还要侦测到数组的增删
// push pop shift unshift splice sort reverse 这七个方法被改写用于数组的侦测


// 通过observe 对对象中所有的嵌套的数据进行defineReactive 操作
// console.log(obj.a);
// obj.b++
// console.log("---------------");
// console.log(obj.a.m.n++);
// console.log(obj.a.m.n++);


// console.log(obj.b[1]);
// obj.b.push(5)
// obj.b.shift()
// console.log(obj.b);

// observe(c)
// console.log(c[1]);
// console.log(c.pop());
// 我们直接访问和直接修改数据都是无法被侦测到的，只有使用七个方法对数组进行的操作才能被侦测到
// 在vue 中本身也是直接访问或修改数组数据也是非响应式的
// 总之,跳过七个数组方法对数组直接进行的访问和修改都是无法被劫持的

// observe(obj)
// obj.a = 10
// obj.b.push(41)

// Watcher 的使用方法，前两个参数用于确定被监听的数据，后一个参数用于确定数据被更改时需要做的事
new Watcher(obj,'a.m.n',(val)=>{
    console.log('********',val);
})