import {
    SONG_ADD,
    SONG_GET_LIST,
    SONG_GET_LIST_QQ
} from '../actionTypes'

let initState={
    list:[
        // {id:1,name:'告白气球',time:'2010年'},
        // {id:2,name:'稻香',time:'2011年'},
        // {id:3,name:'安静',time:'2012年'},
    ],
    jay:{}
}

export default function songReducer(state=initState,action){
    switch (action.type){
        case SONG_ADD:
            let list=[...state.list, action.payload]
            return {...state, ...{list}}
            break
        case SONG_GET_LIST:
            return {...state, ...{list:[...state.list, ...action.payload]}}
            break;
        case SONG_GET_LIST_QQ:
            return {...state, jay:action.payload}
            break;
        default:
        return state
    }
}