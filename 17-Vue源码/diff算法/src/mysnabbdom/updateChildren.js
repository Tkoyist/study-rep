// 导入patchVnode 函数，用于对子节点进行递归比对
import patchVnode from'./patchVnode'
// 导入createElement函数，用于将虚拟节点创建为dom
import createElement from'./createElement'

// 判断是否是同一节点（注意只是判断了是不是同一个节点，对两个节点的内容是没有做任何比较的）
function checkSameVnode(a,b){
    return a.sel == b.sel && a.key == b.key
}
// 传入新旧节点的父节点（前面已经判断过新旧节点是同一个节点，所以父节点也相同），以及旧节点的子节点，新节点的子节点三个参数
// 函数会对传入的新旧节点的子节点进行比对，然后更新
export default function updateChildren(parentElm,oldch,newch){
    
    // 创建keymap 映射
    let keymap = null

    // 旧前指针
    let oldStartIdx = 0
    // 新前指针
    let newStartIdx = 0
    // 旧后指针 指向的是最后一个还未处理的节点，即ch数组中的最后一个节点所以是length-1
    let oldEndIdx = oldch.length - 1 
    // 新后指针
    let newEndIdx = newch.length - 1  
    // 旧前节点
    let oldStartVnode = oldch[oldStartIdx]
    // 旧后节点
    let oldEndVnode = oldch[oldEndIdx]
    // 新前节点
    let newStartVnode = newch[newStartIdx]
    // 新后节点
    let newEndVnode = newch[newEndIdx]

    // 四种命中的循环判断
    while(oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx){

        // 在四种命中都未命中的情况之后，使用遍历的方法获取到对应的旧节点之后，我们会将对应的旧子节点在虚拟节点中的值修改为undefined
        // 所以我们需要在循环开始前对当前的旧前节点做一个判断，如果该节点是undefined，就直接更改旧前指针和旧前节点
        // 对其他三个节点也需要做相同处理
        if(oldStartVnode == undefined){
            oldStartVnode = oldch[++oldStartIdx]
        }else if(oldEndVnode == undefined){
            oldEndVnode == oldch[--oldEndIdx]
        }else if(newStartVnode == undefined){
            newStartVnode == newch[++newStartIdx]
        }else if(newEndVnode == undefined){
            newEndVnode == newch[--newEndIdx]
        }


        // 第一种命中 旧前与新前
        // 判断两个节点是否是同一个节点，如果是同一个节点表示命中，对旧节点的内容进行更新，否则表示没有命中
        else if(checkSameVnode(newStartVnode,oldStartVnode)){
            console.log("1 命中");
            console.log(newStartVnode);
            console.log(oldStartVnode);
            // 成功命中
            // 成功命中之后,将对应的命中的节点进行更新
            patchVnode(newStartVnode,oldStartVnode)

            // 更改对应指针和节点，使用++ 同时完成了这两项工作
            // 第一种命中，新旧前节点++
            newStartVnode = newch[++newStartIdx]
            oldStartVnode = oldch[++oldStartIdx]
            
        }else if(checkSameVnode(oldEndVnode,newEndVnode)){// 进行第二种命中 
            patchVnode(newEndVnode,oldEndVnode)
            console.log(oldEndVnode);
            oldEndVnode = oldch[--oldEndIdx]
            newEndVnode = newch[--newEndIdx]
            console.log("2 命中");
            console.log(oldEndVnode);

        }else if(checkSameVnode(newEndVnode,oldStartVnode)){// 进行第三种命中，新后与旧前命中
            // 发生新后与旧前命中之后，先将命中的旧节点的内容修改为和新节点一致，再将旧前节点移动到旧后节点之后的位置，旧前指针++。新后指针--

            // 两个节点命中只表示两个节点是同一节点（dom中的位置对应），并不代表两个节点的内容就一定相同，但是我们要保证其相同，所以使用patchVnode函数更改旧节点的内容
            patchVnode(newEndVnode,oldStartVnode)

            // 修改内容之后，将旧节点移动到正确的位置（oldEndVnode后一位），即oldEndVnode 的后面一个兄弟节点的前面
            // insertBefore() 函数中用于插入的节点如果已经存在，则会由添加节点更改为移动节点，所以这里只用一个insertBefore() 就直接完成了移动，无需单独删除原本节点
            parentElm.insertBefore(oldStartVnode.elm,oldEndVnode.elm.nextSibling)

            // 更改指针位置
            newEndVnode = newch[--newEndIdx]
            oldStartVnode = oldch[++oldStartIdx]
        }else if(checkSameVnode(newStartVnode,oldEndVnode)){// 第四种情况，新前与旧后，先判断是否命中

            // 命中成功，修改旧节点内容与新节点一致
            patchVnode(newStartVnode,oldEndVnode)

            // 将命中的旧节点、移动到正确的位置
            parentElm.insertBefore(oldEndVnode.elm,oldStartVnode.elm)

            // 更改指针
            oldEndVnode = oldch[--oldEndIdx]
            newStartVnode = newch[++newStartIdx]

        }else{
            // 四种命中均未命中
            // 就遍历旧节点中未处理的节点，与新前节点（或新后节点）进行一一比对，如果找到相同的节点，则进行patchVnode()更新节点数据，再插入对应的位置
            
            // 寻找key 的map
            if(!keymap){
                keymap = {}
                // 如果keymap 不存在，就创建keymap，keymap 用于缓存
                for(let i=oldStartIdx ; i<=oldEndIdx ; i++){
                    if(oldch[i].key != undefined){
                        // 如果某个子节点的key 值为undefined，说明该节点已经被处理过了，所以我们不再将其放入keymap(未处理的旧节点的映射集合)中，不需要再对其进行比对了
                        keymap[oldch[i].key] = i
                    }
                }
                // 获取到与新前节点匹配的旧节点在oldch 中的索引值
                // 如果遍历完成之后idxInOld 的值为undefined,那么则说明没有与新前节点匹配的旧节点，则说明新前节点是全新的节点
                const idxInOld = keymap[newStartVnode.key]
                if(idxInOld == undefined){
                    // idxInOld 为undefined，说明新前节点是全新的节点，且位置应当在旧前节点前一位的位置
                    // 那么我们就直接将该节点添加到真实dom 中，添加的位置为旧前节点前一位

                    parentElm.insertBefore(createElement(newStartVnode),oldStartVnode.elm)


                }else{
                    // 否则说明不是全新的项，则我们需要将匹配到的项移动到旧前节点前一位

                    // 获取到需要移动的项，即匹配到的旧节点
                    const elmToMove = oldch[idxInOld]

                    // 对该节点进行更新
                    patchVnode(newStartVnode,elmToMove)

                    // 更新旧节点中未处理的节点区间，现在的处理不同于以往，之前对旧区间的操作都是在区间的首尾，即旧前节点与旧后节点，之前只是将这些节点删除以缩小区间
                    // 但现在的情况是，我们未处理旧元素区间中的每一个位置的节点处理完成了，所以我们需要将其移出待处理区间，我们使用的方式就是在虚拟节点中将children 数组中对应的子节点的值更改为undefined
                    oldch[idxInOld] == undefined

                    // 上面是对虚拟节点的处理，现在我们来对真实节点进行处理，我们需要在真实dom 中将对应节点移动到旧前节点之前
                    parentElm.insertBefore(createElement(elmToMove),oldStartVnode.elm)
                    // **** 一定要随时注意当前操作的节点是虚拟节点还是真实节点，一定要记住insertBefore() 是dom 的方法，调用它的对象必须是dom 对象，他的两个参数也必须是真实dom


                    // ------   对旧虚拟节点和旧真实节点的处理就完成了，我们不对旧虚拟节点做位移操作，因为旧虚拟节点的子节点的处理是在数组基础上的，如果贸然移动数组中的元素，会导致数组的指针混乱，很麻烦
                    //          所以我们直接将旧虚拟节点的已处理节点更改为undefined ，表示已经被处理过了，就无需再进行其他操作了
                    //          而对真实dom 的操作更加简单，我们从来没有使用指针对dom 节点进行过指向，所以我们可以直接进行位移，不会影响我们的操作
                    //          我们对真实dom 的指向从来都是通过使用虚拟节点的elm 来实现的，真实dom 中根本不存在待处理区间这一说法，直接更改虚拟节点待处理区间即可

                }
                // 处理完毕之后，在新虚拟节点中，新前节点已经被处理了，所以要新前节点移出待处理区域，缩小新节点待处理区间
                // 将新前指针下移，新前节点对应作出改变
                newStartVnode == newch[++newStartIdx]
            }



        }

    }

    // 命中完成之后进行后续处理（删除或添加节点）
    if(newStartIdx <= newEndIdx){
        // 如果新前节点小于等于新后节点，注意等于是很重要的，因为前后指针之间（包含前后节点指向的节点）的节点均是未处理节点
        // 而在前后节点相等的情况下，他们共同指向的节点也是未处理节点，即前后节点指向同一个节点说明还剩一个节点未处理

        // 新节点未处理完成，旧节点需要添加节点，需要向新后节点对应的旧节点所在的位置的后一位之前添加
        // 但是新后节点可能是最后一个节点，这种情况下就需要在最后添加,insertBrefore() 方法会自动识别null 如果位置节点是null，就会自动插入到队尾
        // let before = newch[newEndIdx+1] == undefined?null:newch[newEndIdx+1].elm;

        // 遍历新前到新后之间的的新子节点，注意要小于等于newEndIdx，因为我们需要将newEndIdx 指向的节点也添加进来
        for(let i = newStartIdx ; i<=newEndIdx ; i++){
            console.log('iiiii');
            parentElm.insertBefore(createElement(newch[i]),oldch[oldStartIdx].elm)
        }
    }else if(oldStartIdx <= oldEndIdx){
        // 命中循环结束，旧节点还存在未处理节点，将未处理节点删除

        for(let i = oldStartIdx;i<=oldEndIdx;i++){
            if(oldch[i]){
                parentElm.removeChild(oldch[i].elm)
            }
        }
    }
}