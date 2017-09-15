import Vue from 'vue';
import Router from 'vue-router'
import Home from '@/pages/home/index'
import Search from '@/pages/home/search'
import Servers from '@/pages/home/server'

/*member*/
import Member from '@/pages/member/'
/*member*/

/*goods*/
import GoodsList from '@/pages/goods/goods_list'
import GoodsDetail from '@/pages/goods/goods_detail'
import GoodsDetailIofo from '@/pages/goods/goods_detail_info'
import GoodsDetailRate from '@/pages/goods/goods_detail_rate'
import GoodsDetailQaList from '@/pages/goods/goods_detail_qa_list'
import GoodsDetailQaDetail from '@/pages/goods/goods_detail_qa_detail'
import GoodsDetailQaMyask from '@/pages/goods/goods_detail_qa_myask'
import GoodsToBuy from '@/pages/goods/goods_tobuy'
/*goods*/

/*trade*/
import OrderList from '@/pages/trade/order_list'
import OrderDetail from '@/pages/trade/order_detail'
import OrderMessageList from '@/pages/trade/order_message_list'
import OrderRecevice from '@/pages/trade/order_recevice'

/*trade*/
/*passport*/
import UserLogin from '@/pages/passport/user_login'
import RegChooseArea from '@/pages/passport/reg_choose_area'
import RegPhone from '@/pages/passport/reg_phone'
import RegSecret from '@/pages/passport/reg_secret'
import RegCompanyInfo from '@/pages/passport/reg_company_info'
import RegCompanySecret from '@/pages/passport/reg_company_secret'
import RegFacebookType from '@/pages/passport/reg_facebook_type'
import RegAccountCheck from '@/pages/passport/reg_account_check'
import RegPhoneCheck from '@/pages/passport/reg_phone_check'
import RegPhoneExtis from '@/pages/passport/reg_phone_extis'
/*passport*/

/*billing*/
import PayMent from '@/pages/billing/payment'
import PayBalance from '@/pages/billing/pay_balance'
import PayBalanceIp from '@/pages/billing/pay_balance_ip'
import PayBalanceSecretCard from '@/pages/billing/pay_balance_secretcard'
import PayBalanceSms from '@/pages/billing/pay_balance_sms'
import PayOctopus from '@/pages/billing/pay_octopus'
import PayTwv711ibon from '@/pages/billing/pay_twv_711ibon'
/*billing*/
/*game*/
import GamesList from '@/pages/game/games_list'
import GamesType from '@/pages/game/games_type'
import GamesServer from '@/pages/game/games_server'
import CardsList from '@/pages/game/cards_list'
import CardsPiont from '@/pages/game/cards_point'
/*game*/




Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
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
        },
        /*member*/
        {
            path: '/member',
            name: 'Member',
            component: Member
        },
        /*member*/
        /*goods*/
        {
            path: '/goodsdetailrate',
            name: 'GoodsDetailRate',
            component: GoodsDetailRate
        }, {
            path: '/goodsdetailqalist',
            name: 'GoodsDetailQaList',
            component: GoodsDetailQaList
        }, {
            path: '/goodsdetailqadetail',
            name: 'GoodsDetailQaDetail',
            component: GoodsDetailQaDetail
        }, {
            path: '/goodsdetailqamyask',
            name: 'GoodsDetailQaMyask',
            component: GoodsDetailQaMyask
        }, {
            path: '/goodstobuy',
            name: 'GoodsToBuy',
            component: GoodsToBuy
        }, {
            path: '/goodslist',
            name: 'GoodsList',
            component: GoodsList
        }, {
            path: '/goodsdetail',
            name: 'GoodsDetail',
            component: GoodsDetail
        }, {
            path: '/goodsdetailinfo',
            name: 'GoodsDetailIofo',
            component: GoodsDetailIofo
        },
        /*goods*/
        /*game*/
        {
            path: '/gameslist',
            name: 'GamesList',
            component: GamesList
        }, {
            path: '/gamestype',
            name: 'GamesType',
            component: GamesType
        }, {
            path: '/gamesserver',
            name: 'GamesServer',
            component: GamesServer
        }, {
            path: '/cardslist',
            name: 'CardsList',
            component: CardsList
        }, {
            path: '/cardspoint',
            name: 'CardsPiont',
            component: CardsPiont
        },
        /*game*/
        /*trade*/
        {
            path: '/orderlist',
            name: 'OrderList',
            component: OrderList
        }, {
            path: '/orderdetal',
            name: 'OrderDetail',
            component: OrderDetail
        }, {
            path: '/ordermessagelist',
            name: 'OrderMessageList',
            component: OrderMessageList
        }, {
            path: '/orderrecevice',
            name: 'OrderRecevice',
            component: OrderRecevice
        },
        /*trade*/
        /*billing*/
        {
            path: '/payment',
            name: 'PayMent',
            component: PayMent
        }, {
            path: '/paybalance',
            name: 'PayBalance',
            component: PayBalance
        }, {
            path: '/paybalanceip',
            name: 'PayBalanceIp',
            component: PayBalanceIp
        }, {
            path: '/paybalancesecretcard',
            name: 'PayBalanceSecretCard',
            component: PayBalanceSecretCard
        }, {
            path: '/paybalancesms',
            name: 'PayBalanceSms',
            component: PayBalanceSms
        }, {
            path: '/payoctopus',
            name: 'PayOctopus',
            component: PayOctopus
        }, {
            path: '/paymenttwv711ibon',
            name: 'PayTwv711ibon',
            component: PayTwv711ibon
        },
        /*billing*/
        /*passport*/
        {
            path: '/userlogin',
            name: 'UserLogin',
            component: UserLogin
        }, {
            path: '/regchoosearea',
            name: 'RegChooseArea',
            component: RegChooseArea
        }, {
            path: '/regphone',
            name: 'RegPhone',
            component: RegPhone
        }, {
            path: '/regsecret',
            name: 'RegSecret',
            component: RegSecret
        }, {
            path: '/regcompanyinfo',
            name: 'RegCompanyInfo',
            component: RegCompanyInfo
        }, {
            path: '/regcompanysecret',
            name: 'RegCompanySecret',
            component: RegCompanySecret
        }, {
            path: '/regfacebooktype',
            name: 'RegFacebookType',
            component: RegFacebookType
        }, {
            path: '/regaccountcheck',
            name: 'RegAccountCheck',
            component: RegAccountCheck
        }, {
            path: '/regphonecheck',
            name: 'RegPhoneCheck',
            component: RegPhoneCheck
        }, {
            path: '/regphoneextis',
            name: 'RegPhoneExtis',
            component: RegPhoneExtis
        }

        /*passport*/
    ]
});