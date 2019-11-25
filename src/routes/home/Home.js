import React from 'react'
import './style.scss'

import { connect } from 'react-redux'
import { getGoodList,addPay } from '@/store/actions/goodAction'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        if (this.props.list.length === 0) {
            console.log('首页的商品接口调取成功')
            this.props.getGoodList()
        } 
        
    }

    // 添加购物车的方法
    addCart(ele){
        console.log('确定要添加吗？')
        this.props.addPay(ele)
                 
    }

    render() {
        return (
            <div>
                <h1>商品列表</h1>
                {
                    this.props.list.map((ele, idx) => {
                        return (
                            <div key={ele.id} className='home_box' onClick={this.addCart.bind(this,ele)}>
                                <img src={ele.src} alt=""  />
                                <div className='about'>
                                <span className='current_price'>￥{ele.current_price}</span>
                                <span className='desc'>{ele.desc}</span>
                                </div>                                
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        list: state.goodReducer.list
    }
}

function mapActionToProps(dispatch) {
    return {
        getGoodList: () => dispatch(getGoodList()),
        addPay:(ele)=>dispatch(addPay(ele))
    }
}

export default connect(mapStateToProps, mapActionToProps)(Home)
