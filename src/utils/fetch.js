import axios from 'axios'

// 和后端联系的方法：
export default function fetch(api,method,data,callback){
    axios({
        url:'http://localhost:8000'+api,
        method:method,
        data:data
    }).then(res=>{
        console.log('成功',res)
        let data=null
        if (res.data.code===0){
            data=res.data.data
        }
        callback && callback(data)
    }).catch(err=>{
        console.log('错误',err)
    }).then(()=>{
        console.log('总会执行')
    })
}

//用于获取用户列表，达成接口复用的功能，直接调用getUserList然后使用就可以了（业务逻辑方法）
export function getUserList(callback){
    fetch('/db/user.json','GET',{},res=>{
        callback&&callback(res)
    })
}

// 获取商品列表
// export function getGoodsList(callback){
//     fetch('/db/good.json','GET',{},res=>{
//         callback&&callback(res)
//     })
// }