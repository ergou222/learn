import {
    COUNT_ADD,
    COUNT_SUB
} from '../actionTypes'

//这个state只针对本模块
let initState={
    count:0
}


// action是用户提供的，他是一个对象，里面有两个字段,传递给reducer，改变store
// const action={
//     type:"SUB",
//     payload:2,
    
// }

export default function countReducer(state=initState, action){
    switch(action.type){
        case "ADD":
        let count =state.count +action.payload
        // state的快照
        let newState={...state, ...{count}} //ES6对象合并
        return newState
        // return Objec.assign({},state,{count})  //ES5对象合并
        break;

        case 'SUB':
        return {...state, ...{count:state.count - action.payload}}
        
        default:
        return state
    }
    
}

