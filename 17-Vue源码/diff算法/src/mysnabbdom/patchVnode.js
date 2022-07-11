import createElement from './createElement'
import updateChildren from'./updateChildren'

// patchVnode 函数，在判断两个节点确是同一个节点之后，对新旧节点进行比对和更新
export default function(newvnode,oldvnode){
    // 新旧虚拟节点是否是同一个对象（内存相等）
    if(oldvnode == newvnode){
        // 那么无需任何改变
        return
    }
    // 新节点有文本但是无子节点
    if(newvnode.text != undefined && (newvnode.children == undefined || newvnode.children.length == 0)){
        // 新节点有text属性
        if(oldvnode.text != newvnode.text){
            // 如果新旧节点text 不同，则将dom 的text 修改为新节点的text，如果旧节点没有文本（有子节点）的情况，使用innerText 用新节点的text直接覆盖掉老节点的子节点
            // 使用innerText和innerHtml修改元素内容都会直接覆盖标签内部所有的原本内容，区别在于innerHtml 可以识别传入数据中的标签，并且将其转换为标签填入原元素内部，而innerText 只会将其当做普通的文本填入
            oldvnode.elm.innerText = newvnode.text
        }
    }else{
        // 新节点没有text属性，即新节点存在子节点
        
        // 现在判断旧节点是否有子节点
        if(oldvnode.children != undefined && oldvnode.children.length>0){
            // 新节点存在子节点，旧节点也存在子节点
            // 进行精细化对比

            // 在精细化对比中，由于新旧节点都存在子节点，我们要保证这些子节点的相同，就需要对这些子节点做相同的节点比较，即将我们这里做的节点对比重新进行，只不过新旧节点改变为了新旧节点的对应子节点
            // 所以我们最好将这段比较代码单独提出来，在做新旧节点的子节点对比时再使用这段代码继续使用这段代码对比
            
            updateChildren(oldvnode.elm,oldvnode.children,newvnode.children)


        }else{
            // 即新节点存在子节点，而旧节点只有text
            // 这种情况下,删除掉旧节点的文本,再添加上新节点中的子节点

            //清除旧节点上的文本 
            oldvnode.elm.innerText = ''
            // 将新节点上的子节点逐一创建并添加到旧节点的dom 上
            for(let i =0;i<newvnode.children.length;i++){
                let ch = createElement(newvnode.children[i])
                oldvnode.elm.appendChild(ch)
            }

        }
    }

}