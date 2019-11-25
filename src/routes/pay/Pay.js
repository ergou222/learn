import React from 'react'
import './style.scss'
import 'antd/dist/antd.css';
import { Button } from 'antd';

import { goGoodDelete ,goGoodsNumAddAction, goGoodsNumSubAction,deleteAll} from '@/store/actions/goodAction'
import { connect } from 'react-redux'

class Pay extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }

    componentDidMount() {
        
        console.log('购物车的列表得到了')
        // this.props.addPay()
       
       
        
    }
    // 商品删除按钮
    deletePay(id){
        console.log(this.props)
        this.props.goGoodDelete(id)
        this.setState({
            payArr:this.props.payArr
        })
    }

      // 点击商品数量增加按钮,执行此函数
      cartGoodsNumAdd(ele) {
        this.props.goGoodsNumAddAction(ele)
        this.setState({
            goods: this.props.goods
        })
    }

    // 点击商品数量减少按钮,执行此函数
    cartGoodsNumSub(ele) {
        if (ele.num > 1) {
            this.props.goGoodsNumSubAction(ele)
            this.setState({
                goods: this.props.goods
            })
        }else{
            this.cartGoodsDelete(ele)
        }
    }
    // 计算总价
    total(){
        let t=0
        this.props.payArr.map((ele,idx)=>{
            t+=ele.current_price*ele.num
        })
        console.log('tttttttttt')
       return t
    }

    // 计算总数
    allNum(){
        let x=0
        this.props.payArr.map((ele,idx)=>{
            x+=ele.num
        })
        return x
    }

    // 提交
    submit(){
        this.props.deleteAll()
    }

render(){
    
  return(  
    <div className="cart">
          <div>
           <h1>购物车商品</h1>
             {
                 this.props.payArr.map((ele,idx)=>{
                     return(
                         <div className='pay_goods' key={ele.id}>
                             <span> <img src={ele.src} alt="" className='image'/></span>
                             <div className='add_sub'>
                             <button onClick={this.cartGoodsNumSub.bind(this, ele)}> - </button>
                                <span>{ele.num}</span>
                            <button onClick={this.cartGoodsNumAdd.bind(this, ele)}> + </button>
                             </div>
                            <span className='price'>￥{ele.current_price*ele.num}</span> 
                           <Button 
                                className='delete' 
                                type='danger' 
                                onClick={this.deletePay.bind(this,ele.id)}
                                >删除
                            </Button>                           
                         </div>


                        


                     )
                 })
             }

          </div>
        

<div className="cart_submit">
      <div>
        <span>共计：</span>
        <span 
        className="cart_submit_red" 
        >{this.allNum()}</span>
      </div>
      <div>
        <span>总价：</span>
        <span className="cart_submit_red" 
        >{this.total()}</span>
      </div>
      <div 
    onClick={this.submit.bind(this)}
      >提交</div>
</div>

            </div>
            
        )
    }
}

function mapStateToProps(state) {
    return {
        payArr: state.goodReducer.payArr
    }
}

function mapActionToProps(dispatch) {
    return {
        
        goGoodDelete:(id)=>dispatch(goGoodDelete(id)),
        goGoodsNumAddAction: (ele) => dispatch(goGoodsNumAddAction(ele)),
        goGoodsNumSubAction: (ele) => dispatch(goGoodsNumSubAction(ele)),
        deleteAll:()=>dispatch(deleteAll())
    }
}

export default connect(mapStateToProps, mapActionToProps)(Pay)