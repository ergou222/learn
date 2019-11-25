import{
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux'

import ReduxThunk from 'redux-thunk'

import countReducer from './reducers/countReducer.js'
import todoReducer from './reducers/todoReducer'
import songReducer from './reducers/songReducer'
import goodReducer from './reducers/goodReducer'

// 合并所有的纯函数reducer,reducer用于改变store
const rootReducer=combineReducers({
    countReducer,
    todoReducer,
    songReducer,
    goodReducer,
    
})

let initState= {
    msg:1
}

// 创建store   applyMiddleware()使用中间键解决异步数据问题
const store =createStore(rootReducer,applyMiddleware(ReduxThunk))

export default store