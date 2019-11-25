import React from 'react'

import {connect} from 'react-redux'

import {addCount,subCount} from '@/store/actions/countAction'

import {addTodo} from '@/store/actions/todoAction'

class Test extends React.Component{
    componentDidMount(){
        console.log('test props',this.props)
    }

    // 加的操作
    add(){
        console.log('add')
        // this.props.dispatch({
        //     type:'ADD',
        //     payload:5
        // })
        // this.props.dispatch(addCount(5))
        this.props.addCount(10)
    }

    // 减的操作
    sub(){
        console.log('sub')
        // this.props.dispatch({
        //     type:'SUB',
        //     payload:2
        // })
        this.props.subCount(5)
    }

    addTodoHandle(){
        this.props.addTodo(Date.now())
    }

    render(){
        return(
            <div>
                <h1>测试redux</h1>
                <hr/>
                <button onClick={this.add.bind(this)}>加</button>
                <button onClick={this.sub.bind(this)}>减</button>
                <hr/>
                <h1>{this.props.count}</h1>
                <hr/>
                <button onClick={this.addTodoHandle.bind(this)}>添加一条todo</button>
                {
                    this.props.todolist.map((ele,idx)=>{
                        return <div key={ele}>{ele}</div>
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        count:state.countReducer.count,
        todolist:state.todoReducer.todoList,
        
    }
}

function mapActionToProps(dispatch){
    return {
        addCount :(payload)=>dispatch(addCount(payload)),
        subCount :(payload)=>dispatch(subCount(payload)),
        addTodo: (payload)=>dispatch(addTodo(payload))
    }
}



export default connect(mapStateToProps,mapActionToProps)(Test)