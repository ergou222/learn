import React from 'react'
import './style.scss'
import { Route, Switch } from 'react-router-dom'
import routes from '@/routes'

export default class Content extends React.Component {

    // 生成Route容器
    createRoute(arr){
        console.log(arr)
        let routeArr=[]
        arr.map((ele,idx)=>{
            routeArr.push(
                <Route key={ele.id} path={ele.path} exact component={ele.component}></Route>
            )
        })
        return routeArr
    }


    render() {
      return (
        <div className='content'>
        <Switch>      
        {
          this.createRoute(routes)
        }
        </Switch>
         
        </div>
      )
    }
  }