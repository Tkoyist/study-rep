import vnode from'./vnode'

// 低配版本h 函数，只能接受三个参数
export default function(sel,data,c){
    // 检查参数个数，不是三个参数即报错
    if(arguments.length != 3)
        // 抛出错误
        throw new Error('对不起，低配版本h函数只接受三个参数')

    if(typeof c == 'string' || typeof c == 'number'){

        // 第三个参数是一个字符串或者数字，则直接根据数据返回一个虚拟节点（返回使用vnode函数创建的虚拟节点，即返回传入特定参数的vnode函数）
        return vnode(sel,data,undefined,c,undefined)

    }else if(Array.isArray(c)){
        // typeof无法区分对象和数组，因为数组本质上也是对象，所以我们使用Array.isArray() 方法用于判断，如果是数组会返回true 否则会返回false
        // 虽然我们使用h函数时传入的是一个函数作为参数，但是我们在这里使用的并不是传入的函数，而是传入的函数的返回值，参数是函数的情况，我们传入的是一个参数的别名，或者直接传入函数的声明，但是当前情况，是在参数界面调用了函数（并且传入的参数）
        // 感受区别， 一个传入函数（函数本体），一个是传入调用之后的函数（函数返回值）
        // 所以这里的c[i] 只代表内部函数的返回值，而与函数的本体无关

        // 创建数组用于存储子虚拟节点
        let children = [] 

        // 数组中的数据必须都是虚拟节点，所以我们对传入的数组进行遍历，如果出现某个数组元素不是虚拟节点则报错
        for(let i=0,l=c.length;i<l;i++){
            if(typeof c[i] != 'object' || !c[i].hasOwnProperty('sel')){
                throw new Error('传入函数的数组项出错')
            }
            // 经过判断发现数组中的某项确实就是vnode的情况下，直接将vnode放入当前虚拟节点的children 属性中
            children.push(c[i])
        }
        // 循环结束，代表children 创建完成，将当前的children作为参数创建虚拟节点,并返回
        return vnode(sel,data,children,c,undefined)
    
    }else if(typeof c =='object' && c.hasOwnProperty('sel')){
        // 如果传入的参数是h 函数（本质上是h函数的返回值，是一个虚拟节点，判断是不是虚拟节点，就判断其是否存在sel 属性，存在则说明是一个虚拟节点，否则说明不是虚拟节点）

        // 传入的参数是虚拟节点，直接将该虚拟节点作为子节点放入children 属性中
        // let children = [c] 
        return vnode(sel,data,[c],c,undefined)

    }else{// 如果都不满足，说明传参错误
        throw new Error('第三个参数错误')
    }
}