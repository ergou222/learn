import React from 'react'
import './style.scss'
import { NavLink } from 'react-router-dom'
// import routes from '@/routes'  // 路由配置

export default class Silde extends React.Component {

    render(){
        return(     
     <div className='bottom'>
         {/* 首页导航块 */}
         <NavLink exact to='/home'>
         <img className="nav-img" src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/67550/26/12426/5094/5d9c4b13Eea435a3f/81328b0609c60a3c.png" alt=''/>
         </NavLink>
            
         {/* 分类导航块 */}
         <NavLink exact to='/cart'>
         <img className="nav-img" src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56507/6/12787/3168/5d9c4b12Ef363dd8d/4af32f42575509d8.png" alt=''/>
         </NavLink>

          {/* 京喜导航块 */}
          <NavLink exact to='/amazing'>
         <img className="nav-img" src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/70651/38/12417/3194/5d9d3eafE12cde68b/2467c20113c50451.png" alt=''/>
         </NavLink>

         {/* 购物车导航块 */}
         <NavLink exact to='/pay'>
         <img className="nav-img" src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/64954/4/12406/3529/5d9c4b12Ee7a82735/f2fe0a88bf344736.png" alt=''/>
         </NavLink>

         {/* 登录导航块 */}
         <NavLink exact to='/login'>
         <img className="nav-img" src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/68400/36/12368/3153/5d9c4b13E0e0d80a8/876c40f17d91ce44.png" alt=''/>
         </NavLink>

     </div>
           
        )
    }
}