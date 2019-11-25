import {
    GOOD_GET_LIST,
    PAY_ADD_LIST,
    DELETE_PAY_LIST,
    CARTGOODS_NUM_ADD,
    CARTGOODS_NUM_SUB,
    DELETE_ALL_PAY

        
    } from '../actionTypes'

    import fetch from '@/utils/fetch.js'


    // 异步数据(有三个action)=>Vuex Actions
    export function getGoodList(data){
    // 第一次是调接口的时候的dispatch，发出一个异步操作的信号，但不会实施
      return function(dispatch){
        fetch('/db/good.json','GET',data,res=>{
          // 调接口成功，发出第二个dispach==>action(dispatch一个action）,没有成功就不会操作，所以store也不会改变。
          dispatch({
            type: GOOD_GET_LIST,
            payload:res
          })
        })
        // 调接口失败的时候也有个dispatch（第三个）
      }
  }

  export function addPay(id) {
    return {
    type:PAY_ADD_LIST,
    payload:id
  }
}

// 点击商品删除按钮方法
export function goGoodDelete(id){
  return{
    type:DELETE_PAY_LIST,
    payload:id
  }
}

// 导出点击商品数量增加按钮方法
export function goGoodsNumAddAction(ele){
  return {
      type:CARTGOODS_NUM_ADD,
      payload:ele
  }
}

// 导出点击商品数量减少按钮方法
export function goGoodsNumSubAction(ele){
  return {
      type:CARTGOODS_NUM_SUB,
      payload:ele
  }
}

export function deleteAll(ele){
  return {
    type:DELETE_ALL_PAY,
    payload:ele
   
  }
}