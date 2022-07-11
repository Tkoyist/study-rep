// vnode 函数只实现一个功能，就是将传入的数据组装成为一个对象返回
export default function(sel,data,children,text,elm){
    const key = data.key
    // 注意这里是es6的语法糖
    return{sel,data,children,text,elm,key}
}