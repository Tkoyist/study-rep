import vnode from'./vnode'
import createElement from'./createElement'
import patchVnode from'./patchVnode'

export default function(oldvnode,newvnode){
    // 判断oldvnode 是虚拟节点还是dom节点
    if(oldvnode.sel == '' || oldvnode.sel == undefined){
        // 当传入的参数没有sel属性，说明传入的是dom节点
        // 这种情况下,我们就要根据都没节点生成虚拟节点,再用生成的虚拟节点与newvnode 进行比对
        // 使用我们创建的vnode 函数创建虚拟节点
        oldvnode = vnode(oldvnode.tagName.toLowerCase(),{},[],undefined,oldvnode)
    }

    // 判断转换完成之后，现在的oldvnode 是如假包换的虚拟节点，现在要对其进行虚拟节点的操作了
    // 首先判断oldvnode 与newvnode 是否是同一个节点（同一个节点：key 属性值与元素选择器(sel)相同）
    // 但是我们在简化本的 vnode 函数中并没有创建key 属性（key 属性的创建是在vnode函数的prop 参数中），所以我们这里使用不同的sel 进行比对
    if(oldvnode.key == newvnode.key && oldvnode.sel == newvnode.sel){
        // 是同一个节点        
        // 将新旧节点是同一个节点的情况封装到一个函数patchVnode中单独进行处理
        patchVnode(newvnode,oldvnode)


    }else{
        // 不是同一个节点,直接插入新节点,删除旧节点

        // 获取到根据虚拟节点创建出来的真实dom
        let newVnodeLem = createElement(newvnode)

        // 将获取到的真实dom 上树,将其插入到旧节点之前，insertBefore()方法接受两个参数，均为dom节点，第一个dom节点为需要插入的节点，第二个dom节点为定位节点
        // 方法会在调用该方法的dom节点的子节点中找到定位节点，并将需要插入的节点插入到定位节点前面
        if(newVnodeLem){
            oldvnode.elm.parentNode.insertBefore(newVnodeLem,oldvnode.elm)
        }
        // 插入新节点之后，将旧节点删除
        oldvnode.elm.parentNode.removeChild(oldvnode.elm)
    }
}