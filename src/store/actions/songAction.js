import {
  SONG_ADD,
  SONG_GET_LIST,
  SONG_GET_LIST_QQ
} from '../actionTypes'

import fetch from '@/utils/fetch.js'
import { createStore, combineReducers, applyMiddleware } from 'C:/Users/THINK/AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
import { connect } from 'net';
 
// 同步数据（类似于vuex里面的Mutats）只需要一个Action
export function addSong(payload) {
    return {
    type:'SONG_ADD',
    payload:payload
  }
}

// 异步数据(有三个action)=>Vuex Actions
export function getSongList(data){
  // 第一次是调接口的时候的dispatch，发出一个异步操作的信号，但不会实施
    return function(dispatch){
      fetch('/db/song.json','GET',data,res=>{
        // 调接口成功，发出第二个dispach==>action(dispatch一个action）,没有成功就不会操作，所以store也不会改变。
        dispatch({
          type: SONG_GET_LIST,
          payload:res
        })
      })
      // 调接口失败的时候也有个dispatch（第三个）
    }
}

export function getSongListFromQQ(){
  const api='/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=71050875244274571&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E5%91%A8%E6%9D%B0%E4%BC%A6&g_tk=1028666543&loginUin=2668796884&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'
    return function(dispatch){
      fetch(api,'GET',{},res=>{
        console.log('xxxx',res)
        dispatch({
          type: SONG_GET_LIST_QQ,
          payload:res
        })
        // dispatch({
        //   type: SONG_GET_LIST,
        //   payload:res
        // })
      })
    }
}

// createStore,用于创建唯一的store
// combineReducers, 用于合并多个的Reducer纯函数
// applyMiddleware  使用中间键，比如使用reduc-thunk来解决异步数据请求

// react-redux
//     <Provider store={store}>
//     connect(mapStateToProps,mapActionToProps)(UiComponent)

// react-thunk来解决异步数据请求