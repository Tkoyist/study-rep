import h from'./mysnabbdom/h'
import patch from'./mysnabbdom/patch'

const vnode1 = h('h1',{},[
    h('li',{key:'A'},'香蕉45645645656445656'),
    h('li',{key:'B'},'banana'),
    h('li',{key:'C'},'orange'),
    h('li',{key:'D'},'DDDDDDDDDDDD')
])
const vnode2 = h('h1',{},[
    h('li',{key:'N'},'NNNNNNNNNNNNNNNNNNNNNNNNN'),
    h('li',{key:'A'},'香蕉'),
    h('li',{key:'B'},'banana'),
    h('li',{key:'C'},'orange'),
    h('li',{key:'D'},'DDDDDDDDDDDD')
])
// const vnode2 = h('h1',{},[
//     h('li',{key:'M'},'他妈的别香蕉了'),
   
// ])

// const vnode2 = h('h1',{},[
//     // h('li',{key:'N'},'NNNNNNNNNNNNNNNNNNNNNNNNN'),
//     h('li',{key:'D'},'DDDDDDDDDDDD'),
//     h('li',{key:'C'},'C'),
//     h('li',{key:'B'},'B'),
//     h('li',{key:'A'},'A'),
//     h('li',{key:'N'},'NNNNNNNNNNNNNNNNNNNNNNNNN')
// ])



const container = document.getElementById('container')

patch(container,vnode1)

btn.onclick = function(){

    patch(vnode1,vnode2)
}