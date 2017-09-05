import Vue from 'vue';
import Router from 'vue-router'
import Home from '@/pages/home/index'
import Search from '@/pages/search'
import Member from '@/pages/member/'
import OrderDetail from '@/pages/trade/order_detail'
import OrderDetailRate from '@/pages/trade/order_detailrate'
import OrderDetailQa from '@/pages/trade/order_detailqa'
import OrderList from '@/pages/trade/order_list'
import AllQa from '@/pages/trade/order_allqa'
import Question from '@/pages/trade/question'
import Servers from '@/pages/server'
import Goods from '@/pages/trade/goods'
import GoodsDetail from '@/pages/trade/goods_detail'
import GuestBook from '@/pages/trade/guestbook'
import Message from '@/pages/trade/message'
import MyQuestion from '@/pages/trade/my_question'
import MyQuestionDetail from '@/pages/trade/my_questiondetail'
import Buy from '@/pages/trade/buy'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
    {
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        name: 'Home',
        component: Home
    }, {
        path: '/search',
        name: 'Search',
        component: Search
    }, {
        path: '/Servers',
        name: 'Servers',
        component: Servers
    }, {
        path: '/member',
        name: 'Member',
        component: Member
    }, {
        path: '/orderDetail',
        name: 'OrderDetail',
        component: OrderDetail
    }, {
        path: '/orderdetailrate',
        name: 'OrderDetailRate',
        component: OrderDetailRate
    }, {
        path: '/orderdetailqa',
        name: 'OrderDetailQa',
        component: OrderDetailQa
    }, {
        path: '/allqa',
        name: 'AllQa',
        component: AllQa
    }, {
        path: '/question',
        name: 'Question',
        component: Question
    }, {
        path: '/orderlist',
        name: 'OrderList',
        component: OrderList
    }, {
        path: '/goods',
        name: 'Goods',
        component: Goods
    }, {
        path: '/goodsdetail',
        name: 'GoodsDetail',
        component: GoodsDetail
    }, {
        path: '/guestbook',
        name: 'GuestBook',
        component: GuestBook
    }, {
        path: '/message',
        name: 'Message',
        component: Message
    }, {
        path: '/myquestion',
        name: 'MyQuestion',
        component: MyQuestion
    }, {
        path: '/myquestiondetail',
        name: 'MyQuestionDetail',
        component: MyQuestionDetail
    }, {
        path: '/buy',
        name: 'Buy',
        component: Buy
    }]
})