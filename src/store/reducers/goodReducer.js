import {
GOOD_GET_LIST,
PAY_ADD_LIST,
DELETE_PAY_LIST,
CARTGOODS_NUM_ADD,
CARTGOODS_NUM_SUB,
DELETE_ALL_PAY
    
} from '../actionTypes'

let initState={
    list:[
        // {id:1,name:'告白气球',time:'2010年'},
        // {id:2,name:'稻香',time:'2011年'},
        // {id:3,name:'安静',time:'2012年'},

    ],
    payArr:[]
 
}

export default function goodReducer(state=initState,action){
    switch (action.type){
       
        case GOOD_GET_LIST:
            return {...state, ...{list:[...state.list, ...action.payload]}}
            break;
        
        case PAY_ADD_LIST:
        console.log("22222",action.payload)
        let flag=true
        let addArr=state.payArr
             addArr.map((ele,idx)=>{
                // console.log("22222",action.payload)
                if(ele.id===action.payload.id){
                    addArr[idx].num++
                    flag=false
                                  
                    console.log('添加购物车',addArr)
                }
                
            })
            if(flag){
                addArr.push(action.payload)   
            }
            return{...state,...{payArr:addArr}}
            // return {...state, ...{payArr:[...state.payArr, ...[action.payload]]}}
            break;
        
        case DELETE_PAY_LIST:
        console.log("1111",action.payload)
        let deleteArr=state.payArr
        state.payArr.map((ele,idx)=>{
            if(ele.id===action.payload) {
                deleteArr.splice(idx,1)
            }
        })
            return {...state, ...{payArr:deleteArr}}
            break;

         // 点击数量增加按钮：商品数量增加1
         case CARTGOODS_NUM_ADD:
         let NumAdd = state.payArr
         state.payArr.map((ele, idx) => {
             if (ele.id === action.payload.id) {
                 NumAdd[idx].num++
             }
         })
         return { ...state, ...{ payArr: NumAdd } }
         
        // 点击数量减少按钮：商品数量减少1
        case CARTGOODS_NUM_SUB:
            let NumSub = state.payArr
            state.payArr.map((ele, idx) => {
                if (ele.id === action.payload.id) {
                    NumSub[idx].num--
                }
            })
            return { ...state, ...{ payArr: NumSub } }
        
        case DELETE_ALL_PAY:
             state.payArr=[]
            return {...state,...{payArr:[]}}
        default:
        return state
    }
}