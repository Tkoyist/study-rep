import {
    init,
    classModule,//类模块
    propsModule,//参数模块
    styleModule,//样式模块
    eventListenersModule,//事件监听模块
    h,
  } from "snabbdom";

// 2 使用h函数创建的虚拟节点无法上树，我们可以通过patch函数上树
// 创建patch函数（看起来是一个thunk函数,通过我们传入的特定模块创建特定的patch函数）
const patch = init([classModule,propsModule,styleModule,eventListenersModule])

  
// 使用h函数创建虚拟节点（注意由于创建的是虚拟节点。所以其并不存在于真实dom中，所以也就不会在页面中显示）(现在是以js对象的状态存在,而不是真正的dom节点)
var guigu = h('a',{props:{href:'http://www.atguigu.com',target:'_blank'}},'点击')
// 打印虚拟节点会打印出一个对象如下

// children: undefined  表示没有子节点
// data: {props: {…}}   表示节点的属性
// elm: undefined       undefined表示该虚拟节点还上dom树
// key: undefined       没有key
// sel: "a"             节点类型
// text: "点击"         节点文本

console.log(guigu);

// 4 h函数可以嵌套使用创建虚拟dom树,h函数的第三个参数并不是节点的文本内容，而是元素节点内部的所有内容，包括子元素
var mytree = h('ul',
    [   
        'eeee',
        h('li','香蕉'),
        h('li','banana'),
        h('li','orange')
    ]
    )

// 3 让虚拟节点上树
// 获取到html文件中的container 标签
const container = document.getElementById('container')
const container1 = document.getElementById('container1')
// 使用patch函数将html中的dom标签替换为我们创建的虚拟节点，container可以是任何dom节点
patch(container,guigu)
patch(container1,mytree)