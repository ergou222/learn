import React from 'react'

// 高阶组件，容器组件connect
import {connect} from 'react-redux'
import {addSong,getSongList,getSongListFromQQ} from '@/store/actions/songAction'

class Song extends React.Component{
    constructor(props){
        super(props)
        this.state={
            page:1,
            size:10
        }
    }

    componentDidMount(){
        console.log('22222222222222222222222')
        // 调接口时的入参
        const data={
            page:this.state.page,
            size:this.state.size
        }
        this.props.getSongList()
        this.props.getSongListFromQQ()
    }

    addSong(){
        console.log('添加')
        // this.props.dispatch({
        //     type:'ADD_SONG',
        //     payload:{id:5,name:'听妈妈的话',time:'2015'}
        // })
        this.props.addSong({id:Date.now(),name:'听妈妈的话',time:'2015'})
    }
    render(){
        console.log('song props',this.props)
        return(
            <div>
                <h1>音乐列表</h1>
                <button onClick={this.addSong.bind(this)}>添加一条音乐</button>
                {
                    this.props.list.map((ele,idx)=>{
                        return(
                            <div key={ele.id}>
                                <span>{ele.id}</span>
                                <span>{ele.name}</span>
                                <span>{ele.time}</span>
                            </div>
                        )
                    })
                }
                <hr/>
                {
                   this.props.jay.song&& this.props.jay.song.list.map((ele,idx)=>{
                        return(
                            <div key={ele.id}>{ele.name}</div>
                        )
                    })
                }
            </div>
        )
    }
}


//????不懂

function mapStateToProps(state){
    return{
        list:state.songReducer.list,
        jay:state.songReducer.jay
    }
}

function mapActionToProps (dispatch) {
    return {
        // addSong:function(payload){
        //     dispatch(addSong(payload))
        // }
        addSong: (payload)=>dispatch(addSong(payload)),
        getSongList: ()=>dispatch(getSongList()),
        getSongListFromQQ: ()=>dispatch(getSongListFromQQ())
    }
}

export default connect(mapStateToProps,mapActionToProps)(Song)