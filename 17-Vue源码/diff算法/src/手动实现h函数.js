import h from'../src/mysnabbdom/h'

// 传入字符串（或数字）
var myvnode1 = h('div',{},'hi')

console.log(myvnode1);

// 传入数组
var myvnode2 = h('div',{},[
    h('div',{},'1'),
    h('div',{},'12'),
    h('div',{},[
        h('div',{},'222'),
        h('div',{},'223')
    ])
])

console.log(myvnode2);

// 传入虚拟节点
var myvnode3 = h('div',{},h('div',{},'123'))

console.log(myvnode3);