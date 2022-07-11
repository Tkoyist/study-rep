// 基本实现
function deepClone(originValue){
    // 创建拷贝对象
    let newObj = {}
    // 遍历被拷贝对象
    for(let key in originValue){
        // 将被拷贝对象的属性和值一一赋给拷贝对象
        newObj[key] = originValue[key]
    }
    // 返回拷贝对象
    return newObj
}

let obj = {
    name:'lzl',
    age:'18',
    som:{
        name:'kobe'
    }
}

let newo = deepClone(obj)
obj.som.name='lll'
console.log(newo);
// 但是这种拷贝是浅层拷贝，是无法对对象中的对象属性进行拷贝的
// 即虽然拷贝对象也存在相同的对象属性，而且值相等，但这是由于拷贝对象与被拷贝对象的对象属性本质上是地址指向同一个对象，如果我们对其中一个进行修改，那么另外一个也会被修改，是不完全的深拷贝

// 解决方法：我们可以在克隆前加上一个判断，如果被克隆的数据是对象，我们就遍历该对象的属性，如果是一个非对象，则直接返回数据即可
// 然后我们在对对象的属性进行依次克隆的过程中，递归的使用deepClone 函数实现对象的属性的克隆
// 为了满足递归调用，我们需要更新深克隆函数，使其遇到基本数据类型数据时直接返回数据的值
// 所以我们也需要一个函数用于判断一个数据是否是对象


// ----更新版本，更新后可以处理非对象数据已经嵌套对象
function isObject(value){
    // 创建专门的方法用于判断一个变量是不是对象
    // 为什么需要单独作为一个方法，而不直接使用typeof 判断
    // 首先我们知道typeof null 也是'object‘,这是一个bug，所以判断一个数据是不是对象首先要确定该数据不为null，
    // 其次函数作为一个特殊的对象，本质上也是一个对象，所以判断一个数据是不是对象还要判断其是不是为函数，在这种要求之下，只只用typeof 显然是不行的

    // 获取数据的类型，典型的用空间换时间
    let type = typeof value
    // 将上面提到的特殊情况全部做了相应的处理
    return value != null && (type === 'object' || type === 'function' )
}

function deepClone1(originValue){
    // 判断传入的数据是否是对象，如果不是对象，是基本数据类型的数据，则直接返回数据值
    if(!isObject(originValue))return originValue

    // 创建拷贝对象
    let newObj = {}
    // 遍历被拷贝对象
    for(let key in originValue){
        // 将被拷贝对象的属性和值一一赋给拷贝对象
        // 原本值的读取全部使用deepclone 进行，在对数据进行读取的时候，先判断数据的类型，再使用对应的方式将数据拷贝一份返回
        newObj[key] = deepClone1(originValue[key])
    }
    // 返回拷贝对象
    return newObj
}

let newobj2 = deepClone1(obj)
obj.som.name='13213212132132'
console.log(newobj2);
// 测试成功，不再是浅层拷贝