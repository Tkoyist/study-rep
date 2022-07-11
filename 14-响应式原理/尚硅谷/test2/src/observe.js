import Observer from'./Observer'

export default function(value){
    // 该方法的使用，我们在使用defineReactive 函数的时候，需要传入一个

    if (typeof value != 'object')
    // 如果传入的参数不是一个对象，那么什么都不需要做
        return;

    var ob


    if( typeof value.__ob__ !== 'undefined'){
        // 传入的数据一定是一个对象，判断该对象是否存在__ob__ 属性，存在该属性则返回该属性，该属性指向一个Observer 对象，该对象会参与对当前对象的数据的遍历，将当前对象中所有非对象的属性遍历保存
        ob = value.__ob__
       
    }
    else{
        ob = new Observer(value)
        // 如果当对象不存在__ob__ 属性，则为其创建该属性，该属性的创建也是在Observer 中完成，（注意我们这里是将没有__ob__ 属性的当前对象传给了Observer 用于创建实例，当然是能对obj 做一定的修改的）
        // 我们还会Observer 对对象属性进行遍历，并对属性逐个进行defineReactive 操作，然后回到当前位置
    }
    return ob
    // 返回该属性的值
}
