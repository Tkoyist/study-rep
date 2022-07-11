// createElement 函数接受一个虚拟节点作为参数
// 它会根据传入的虚拟节点创建真实DOM 节点，并使虚拟节点的elm 属性指向创建的真实虚拟节点
// 然后返回该真实节点，我们就可以将该真实节点进行挂载，使用appendChild 挂载还是使用 insertBefore 挂载由外部决定
export default function createElement(vnode){
    // 创建新节点

    // 这是document 对象的createElement() 方法，与我们自己写的createElement() 方法是两个独立的方法
    let domnode = document.createElement(vnode.sel)

    // 简化版本不允许文本与子节点同时出现，所以我们判断vnode 中是存在子节点还是文本
    if(vnode.text != '' && (vnode.children == undefined || vnode.children.length == 0)){//text不为空且不存在子节点
        // 内部是文字的情况
        domnode.innerText = vnode.text

        
        // 接下来我们对vnode的第三个参数是是数组的情况（创建节点时，同时创建了部分子节点）进行处理
    }else if(Array.isArray(vnode.children) && vnode.children.length > 0){
        // 数组内部是子节点，表明我们要创建子节点
        
        // 先循环所有子节点
        for(let i =0 ;i<vnode.children.length;i++){
            let ch = vnode.children[i]
            
            let chDOM = createElement(ch)
            // 获取到当前节点的子节点的真实DOM 之后，直接将其挂载到当前之下
            domnode.appendChild(chDOM)
        }
    }
    
    // 使得虚拟节点的elm 属性指向创建的真实dom
    vnode.elm = domnode

    return vnode.elm
}