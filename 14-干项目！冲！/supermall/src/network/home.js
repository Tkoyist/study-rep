// 这个函数用于对网络请求做封装
// 因为对于home.vue 而言，我们还需要在其内部编写 then() catch ()，将网络请求的一部分功能实现放到了其中
// 这样虽然耦合度不算高，但对于大项目而言，还是无法接受的
// 我们虚妄home.vue 专注于将取到的数据进行展示，只需要告诉其他文件需要什么数据，其他工作都在别的文件中完成

import {request} from"./request";

export function getHomeMultdata(config){
    return request({
        url:'/home/multidata'
    })
}   

export function getHomeGoods(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
        
    })
}
