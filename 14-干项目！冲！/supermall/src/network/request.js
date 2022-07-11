import axios from"axios"

export function request(config){    
    const instance = axios.create({
        baseURL:'http://152.136.185.210:7878/api/hy66',
        timeout:5000
    })

    // 返回的对象是一个Promise 对象，所以在外部获取到返回值之后可以为其设置 .then .catch
    return instance(config)

}