import React from 'react'
import './style.scss'
import Slide from './Slide'   // 底部导航容器
import Content from './content'  // 内容区域

export default class JdLayout extends React.Component {
  render() {
    return (
      <div className='jd_layout'>
        <div className='aside'>
          <Slide></Slide>
        </div>

        <div className='content'>
            <Content></Content>    
            
        </div>
      </div>
    )
  }
}
