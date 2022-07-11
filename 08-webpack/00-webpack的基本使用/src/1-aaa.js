// <!-- 
//     在aaa中定义变量和方法，并尝试导出
//  -->
 var flag = true

 var fun1 = function(){
    if(flag){
        console.log("flag为true");
    }
    else{
        console.log("flag为false");
    }
 }

// 模块化导出数据

// 方法1
export{
    flag,
    fun1
    // 这里并不是对象定义的语法糖，而是代码本就需要这样写
    // flag = flag
    // 上面这种对象属性定义的写法是错误的
}

// 方法2，定义数据的时候使用improt关键字修饰，表明该数据需要导出
export var num1 = 1000
export function fun2() {
    console.log("fun2函数运行");
}

// export defult
// 我们希望导出一个模块，但这个模块不由定义者命名，而让使用者命名，就可以使用这个方法导出，我们在导入模块的时候，自定义一个原模块没有名字即可直接使用
// 同一个模块中只允许存在一个defult
