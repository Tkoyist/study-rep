// 实现js深拷贝的最简单的方法就是使用JSON类先将其转义为JSON字符串再将其转义为对象
let obj = {
    name:'lzl',
    age:'18',
    son:{
        name:'lll'
    }
}

let info = JSON.parse(JSON.stringify(obj))

console.log(info);

// 缺点，无法处理方法。无法处理symbol
// 不支持循环引用，循环引用，我们创建一个对象的属性，使得该属性指向对象本身（的地址），这样我们就可以使用对象的属性访问到对象本身，但是在转换为JSON时会直接报错