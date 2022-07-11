function isObject(value){
    let type = typeof value
    return value != null && (type === 'object' || type === 'function' )
}

function deepClone1(originValue){
    if(!isObject(originValue))return originValue
    let newObj = {}
    for(let key in originValue){
        newObj[key] = deepClone1(originValue[key])
    }
    return newObj
}
// 这是当前的版本，已经可以处理嵌套的对象，但是仍然存在很多问题，首先就是针对数组的处理，由于typeof arr 的值也是'object'
// 所以我们使用深拷贝函数对数组进行拷贝时（如对象的某个属性是一个数组的情况）数组内的数据会被拷贝到一个对象中，原本的数组也被作为了对象
// 这是由于我们判断一个数据是对象（数组也是对象）之后，就直接将克隆数据赋值为一个对象了（ let newObj = {} ），而后面的读取和赋值操作正常进行，数组就被克隆成为了一个对象

// 解决方法，在为克隆对象赋初值的时候，对被克隆对象做一个判断，判断其是否是数组，如果是，就拷贝对象的初值也赋为数组，否则还是赋为对象

// ****更新
function deepClone2(originValue){
    if(!isObject(originValue))return originValue
    // 判断被拷贝对象是否为数组，如果是则将拷贝数据也初始化为数组
    let newObj = Array.isArray(originValue)?[]:{}
    for(let key in originValue){
        newObj[key] = deepClone2(originValue[key])
    }
    return newObj
}


// 现在我们已经可以处理数组类型的数据，下一步我们尝试处理函数类型的数据

// 函数类型的处理:
//  首先我们是不需要对函数做一个深克隆的，没有必要拷贝出来两个一模一样的函数，函数的存在本来就是为了复用，我们使克隆对象的同名属性指向被拷贝对象的函数的堆内存地址即可
//  第二 函数的改变，函数作为数据的处理封装，很少有改变，有改变也不会是巨大的改变，函数不论怎么改变都要适用于被拷贝对象的数据结构，而拷贝对象与被拷贝对象的数据结构又基本一致，所以绝大多数情况下我们不考虑
//  如果真的需要做一个深拷贝函数，那么可以使用正则表达式获取原本函数的代码，再复制（很麻烦，性价比极低）

// 总之函数是无需做深层拷贝的，只需要使得两个对象的属性指向同一个堆内存即可
// - 函数处理，克隆对象为一个函数时，直接返回该函数

// ****更新
function deepClone3(originValue){
    // 先判断被克隆数据是否是一个函数，若是一个函数，则直接返回
    if(typeof originValue === 'function')
        return originValue
    if(!isObject(originValue))
        return originValue
    // 判断被拷贝对象是否为数组，如果是则将拷贝数据也初始化为数组
    let newObj = Array.isArray(originValue)?[]:{}
    for(let key in originValue){
        newObj[key] = deepClone3(originValue[key])
    }
    return newObj
}

// isObject() 方法则可以无需再做函数判断
function isObject(value){
    let type = typeof value
    return value != null && type === 'object'
}



// 我们现在已经可以处理嵌套对象，数组，函数，但是还无法对symbol 进行处理
// 对象中的symbol：
//  对象中的symbol 是分为两类的,一类是symbol 作为key ,一类是symbol 作为value
//      symbol 作为value 的情况:symbol 作为value 的情况,我们原本的函数是能处理这种情况的,判断其不为对象会直接将其返回但是它克隆出来的symbol值是完全相等的,但是我们既然用到symbol 作为值,考虑到symbol的特殊性,必然是希望其具有唯一性的,所以我们针对symbol,要创建出不同的symbol
//          但新值创建的description(说明)需要和原来的值相等

// ****更新
function deepClone4(originValue){
    // 判断数据是否为symbol 是则根据其description创建一个新值
    if(typeof originValue === 'symbol')
        return Symbol(originValue.description)

    // 先判断被克隆数据是否是一个函数，若是一个函数，则直接返回
    if(typeof originValue === 'function')
        return originValue

    if(!isObject(originValue))
        return originValue

    // 判断被拷贝对象是否为数组，如果是则将拷贝数据也初始化为数组
    let newObj = Array.isArray(originValue)?[]:{}
    console.log(Array.isArray(originValue));
    for(let key in originValue){
        newObj[key] = deepClone4(originValue[key])
    }

    return newObj
}



// 我们已经对symbol 作为value的情况做了处理
// 但是symbol 作为key 还未处理,我们发现symbol 作为key 的情况下,我们的深拷贝函数完全无法作出任何反应,这是因为for in 是无法读取symbol 的
// 这也就要求我们要在常规处理完毕之后,单独对symbol 作为key 的情况进行处理
//  我们可以使用Object.getOwnPropertySymbols 获取到当前对象中所有key 为symbol 的属性的key
//  再对获取到的symbol key 进行遍历，在拷贝对象中添加上遍历的symbol key 为属性名的属性，并访问到被拷贝对象的该属性的值赋值给拷贝对象的symbol 属性

// ****更新
function deepClone5(originValue){
    // 判断数据是否为symbol 是则根据其description创建一个新值
    if(typeof originValue === 'symbol')
        return Symbol(originValue.description)

    // 先判断被克隆数据是否是一个函数，若是一个函数，则直接返回
    if(typeof originValue === 'function')
        return originValue

    if(!isObject(originValue))
        return originValue

    // 判断被拷贝对象是否为数组，如果是则将拷贝数据也初始化为数组
    let newObj = Array.isArray(originValue)?[]:{}
    console.log(Array.isArray(originValue));
    for(let key in originValue){
        newObj[key] = deepClone5(originValue[key])
    }
  
    // 使用Object.getOwnPropertySymbols 方法获取到对象中所有类型为symbol 的key 的集合
    let symbolKeys = Object.getOwnPropertySymbols(originValue)
    // 遍历获取到的symbol 类型的key，将它们和对它们对应的value值全部使用deepclone() 方法拷贝一份，使用deepclone 而不直接赋值是为了应对value值不为基本数据类型的情况
    for(let sym of symbolKeys){
        // 使用deepclone 将对应的value值拷贝到对应的key上放入拷贝对象中
        newObj[sym] = deepClone5(originValue[sym])
    }

    return newObj
}

let s1 = Symbol('zzzz')
let s2 = Symbol('aaaaa')
let obj = {
    name:'lzl',
    age:'18',
    arr:[1,2,3,4,5,64,74,45],
    sym:s1,
    [s2]:'adad',
    som:{
        name:'kobe',
        fun:function(){
            return 111
        }
    }
}
let newobj = deepClone5(obj)
console.log(newobj);
console.log(newobj.sym === obj.sym);