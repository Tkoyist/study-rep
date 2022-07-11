// 将 move方法封装起来，方便随时调用


function move(obj,attr,speed,target,callback){
    // 需要使用定时器完成移动效果
    // 每次函数运行前，将之前的定时器都清除掉
    clearInterval(obj.timer)
    obj.timer = setInterval(//将定时器作为 DOM 对象的属性储存
        function(){
            //  获取元素的旧位置。第一次调用的时候，left没有被赋值，此时默认值 auto ,无法操作，所以我们要为其设置一个初值,我们获取到的值是一个字符串，字符串中包含了单位px，需要取出里面的数字进行操作
            var oldValue = parseInt(getComputedStyle(obj)[attr]);
            // alert(oldValue)
            //  计算出元素的新位置
            var newValue = oldValue + speed;
            // alert(newValue)

            
            
            // 现在做一些错误情况处理
            // 错误情况：
            //      元素方向向右但目标在左边
            //      元素方向向左但目标在右边
            //      出现错误情况时，元素回到原位
            
            if((speed>0 && target<newValue) || (speed<0 && target>newValue)){
                newValue = target;
            }
            
            // 修改元素位置，实现移动
            
            obj.style[attr] = newValue + 'px'
            
            // 判断是否移动到了目的地
            if(newValue == target){
                clearInterval(obj.timer)
                callback && callback()
             // 解析：对于解析器而言，这句话的意思就是执行 callback 或 执行 callback() 
             //       即执行两者中的任一即可，均执行也可
             //       callback为空的情况下，callback() 没有意义，但是对浏览器而言，去执行 callback 也满足执行 callback&&callback() ，该语句便不会报错
             //       而对于浏览器，执行一个空变量，不会存在语法问题，只是没有结果，所以出现无结果但不报错
             //       这种情况下，callback 为空也不会有任何影响，满足我们的需求
            }
        }
    ,10)
 }
 function addClass(obj,cn){
    // 第一个参数是添加的对象，第二个参数是添加的类的名称
    if(!hasClass(obj,cn)){
    // 添加前先判断是否已经存在
        
    obj.className += " "+cn
    }
}
// 多次调用该函数，会不断的向元素的class中进行添加，虽然不影响样式，但是这种冗余应当避免
// 所以我们写一个函数判断某元素中是否存在某 class 值
// 我们需要检查的是 class 属性中是否存在某一个属性值，本质是在一个自字符串中寻找是否存在某个字符段，所以最好使用正则表达式
// 因为我们需要检查的字符段不是不变的，所以我们每次调用函数都要产生新的正则表达式，
function hasClass(obj,cn){
    // 检查的元素对象，检查的类名

    // 将传入的类名组合成正则表达式形式方便传入
    var reg1 = /\bbox2\b/
    var reg = new RegExp("\\b"+ cn +"\\b");
    //  \ 在字符串中是转义字符（key），所以需要用转义字符 \ 进行转义
    return reg.test(obj.className)
}
function removeClass(obj,cn){
    // 将对线中指定的字符段换成空串
    var reg = new RegExp("\\b"+ cn +"\\b");
    obj.className = obj.className.repalce(reg,"")

}
function toggleClass(obj,cn){
    // 
    if(hasClass(obj,cn)){
        removeClass(obj,cn)
    }
    else{
        addClass(obj,cn)
    }
}