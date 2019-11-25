
// 给这个变量一个最开始的值（初始化变量）
let initState={
    todoList:[1,2,3,4]
}

export default function todoReducer(state=initState,action){
    switch(action.type){
        case 'ADD_TODO':
           let newArr=[...state.todoList, action.payload]
           return {...state, ...{todoList:newArr}}

           break;
           default:
           return state
    }
}