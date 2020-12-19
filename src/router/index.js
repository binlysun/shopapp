import Vue from 'vue'
import VueRouter from 'vue-router'

import Dash from './../views/dash/Dash.vue'
//懒加载
const Home = () =>
    import ('./../views/home/Home.vue');
const Category = () =>
    import ('./../views/category/Category.vue');
const Cart = () =>
    import ('./../views/cart/Cart.vue');
const Mine = () =>
    import ('./../views/mine/Mine.vue');

import Order from './../views/order/Order.vue'
import Addresslist from './../views/order/Addresslist.vue'
import Editaddress from './../views/order/Editaddress.vue'
import Addaddress from './../views/order/Addaddress.vue'


import Login from './../views/login/Login.vue'
const MineCenter = () =>
    import ('./../views/mine/Minecenter.vue')

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/Dash' },
    {
        path: '/Dash',
        name: 'dash',
        component: Dash,
        children: [
            { path: '/Dash', redirect: '/home' },
            { path: '/home', name: 'home', component: Home, meta: { keepAlive: true } },
            { path: '/category', name: 'category', component: Category, meta: { keepAlive: true } },
            { path: '/cart', name: 'cart', component: Cart },
            {
                path: '/mine',
                name: 'mine',
                component: Mine,
                children: [
                    { path: '/minecenter', name: 'minecenter', component: MineCenter, }
                ]
            },
        ]
    },
    {
        path: '/order',
        name: 'order',
        component: Order,
        children: [{
            path: '/order/addresslist',
            name: 'addresslist',
            component: Addresslist,
            children: [
                { path: '/order/addresslist/editaddress', name: 'editaddress', component: Editaddress },
                { path: '/order/addresslist/addaddress', name: 'addaddress', component: Addaddress }
            ]
        }]
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    }

]

const router = new VueRouter({
    routes
})

export default router