import Home from './home/Home'
import Pay from './pay/Pay'
import Cart from './cart/Cart'
import Amazing from './amazing/Amazing'
import Login from './login/Login'

const routes=[
    {
        id:1,
        path:'/home',
        component:Home,
       
    },
    {
        id:2,
        path:'/cart',
        component:Cart
    },
    {
        id:3,
        path:'/amazing',
        component:Amazing
    },
    {
        id:4,
        path:'/pay',
        component:Pay
    },
    {
        id:5,
        path:'/login',
        component:Login
    }

]

export default routes