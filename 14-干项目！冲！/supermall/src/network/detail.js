import {request} from"./request";

export function getDetailData(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}
// 本质上返回了request 函数的返回值，我们这个函数只是为instance 方法传入参数，使其能访问到确定的服务器

// 创建一个类，该类用于创建保存详情页所需的各种数据的对象，我们需要传入一些对象，这些对象中保存了我们所需的数据
// 但是倘若我们每次需要使用数据的时候都现场查找，代码耦合度高，且不利于查看修改，所以我们将其封装起来，将类导出，外面接受到类之后直接传入需要的数据对象，就能创建出包含所需数据的对象
// 我们需要数据的时候，直接在数据对象中访问即可

// 本质上是进行数据整合
export class Goods{
    constructor(itemInfo,columns,services){
        this.title = itemInfo.title
        this.desc = itemInfo.price
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
    }
}

export class Shop{
    constructor(shopInfo){
        this.logo = shopInfo.shopLogo
        this.name = shopInfo.name
        this.fans = shopInfo.cFans
        this.sells = shopInfo.cSells
        this.score = shopInfo.score
        this.goodsCount = shopInfo.cGoods
    }
}

// 获取推荐数据
export function getRecommend(){
    return request({
        url:'/recommend'
    })
}