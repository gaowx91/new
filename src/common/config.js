let API_SITE,API_PASS;
let domain = window.location.host;

switch (domain) {
    case 'cms.manage.i7391.com':
        API_SITE = 'http://api.tools.i7391.com/'; //线上
        API_PASS ='//passport.i7391.com/';
        break;
    case 'cms.manage.test.7391test.com':
        API_SITE = 'http://api.tools.test.7391test.com/'; //测试环境
        API_PASS ='//passport.7391test.com/';
        break;
    default:
        API_SITE = 'http://wap.api.7391test.com/'; //开发
        API_PASS ='//passport.7391test.com/';
        break;
}

export default{
    'LOGIN': API_SITE + 'api/Login', //用户登录
    'CODE': API_PASS +'UserLogin/VerifyCode2.axd?', //验证码
    'REQUEST_REG_CODE': API_PASS +'api/requestregcode', //1.3發送註冊驗證碼
    'GET_REG_IMG_VERIFY_CODEKEY': API_PASS +'api/getregimgverifycodekey', //1.2获取注册短信验证码KEY
    'CHECK_REG_CODE': API_PASS +'api/checkregcode', //1.4校驗註冊驗證碼
    'REG_HK': API_PASS +'api/reghk', //註冊香港用戶
    'REG_OS': API_PASS +'api/regos', //註冊大陸用戶
    'REG_TW': API_PASS +'api/regtw', //註冊台灣用戶
    'REG_TW_CROP': API_PASS +'api/regtwcrop', //註冊台灣公司用戶

    'GET_GOODS': API_SITE + 'api/goods/', //获取商品详情信息
    'GOOD_SEARCH': API_SITE + 'api/search/GoodSearch/', //搜索商品

    // 'HOME_BANNER_HOTGAME': API_SITE + 'api/bannerandhotgame', //首页banner和热门游戏
    //     'CODE': '/UserLogin/VerifyCode2.axd', //验证码
    //     'PAY2GO_ATM_SUC': DOMAIN_SITE + '/trade/pay2go_atm_suc.html', //ATM 获取缴款码
    //     'PAY2GO_SUPERMARKET_SUC': DOMAIN_SITE + '/trade/pay2go_supermarket_suc.html', //超商 获取缴款码
    //     'PAY2GO_FAIL': DOMAIN_SITE + '/trade/pay2go_fail.html', //智付宝 获取付款码 失败返回页面
    //     'OCTOPUS_PAY_CALLBACK': DOMAIN_SITE + '/trade/octopus_pay_callback.html', //支付宝 储值回调页面
    //     'LOGIN': API_SITE + 'api/Login', //用户登录
    //     'GAME_INFO': API_SITE + 'api/game', //获得游戏信息
    //     'GAMESERVER': API_SITE + 'api/gameserver/', //获得游戏服务器信息
    //     'MEMBER_INFO': API_SITE + 'api/usercenter', //获得用户信息
    //     'TRADE_COUNT': API_SITE + 'api/usercenter/count', //获取买家各交易数量
    //     'ASSIGN_LIST': API_SITE + 'api/usercenter/assignlist/', //获取专属列表
    //     'ORDER_LIST': API_SITE + 'api/usercenter/orderlist/', //获取订单列表
    //     'GET_CARD_CATEGORYS': API_SITE + 'api/goods/getcardcategorys/', //获取点数卡名称、ID
    //     'GET_CARD_POINT': API_SITE + 'api/goods/getcardpoint/', //获取面额名称、id
    //     'GOOD_SEARCH': API_SITE + 'api/search/GoodSearch/', //搜索商品
    //     'GOODS': API_SITE + 'api/goods/', //获取商品詳情信息
    //     'GOODS_EASY': API_SITE + 'api/goods/easy/', //获取商品詳情信息
    //     'TRANSACTION': API_SITE + 'api/order/orderlistbygoodsno/', //获取商品成交数量列表
    //     'TOP_SEARCH': API_SITE + 'api/search/topsearch/', //游戏类型搜索
    //     'RATE_SITE': API_SITE + 'api/charge/rate',
    //     'SUB_ORDER': API_SITE + 'api/order/suborder', //提交订单install
    //     'CARD_NUM': API_SITE + 'api/charge/CardNum', //付款 密保卡
    //     'CHARGE': API_SITE + 'api/charge', //付款
    //     'ORDER_DETAIL': API_SITE + 'api/order/', //获取订单詳情
    //     'COMFIRM_ACCEPT_ORDER': API_SITE + 'api/order/ComfirmAcceptOrder', //买家确认评价领收
    //     'EVALUATE_COMPLETE_ORDER': API_SITE + 'api/order/evaluatecompleteorder.aspx', //买家评价点卡销售商的订单并完成发票信息
    //     'GET_CARD_PWD': API_SITE + 'api/order/getcardpwd/', //获取点数卡订单卡号卡密
    //     'ORDER_MSG': API_SITE + 'api/order/msg/', //获取交易留言列表
    //     'SEND_TRANS_MESSAGES': API_SITE + 'api/order/sendtransmessages', //提交交易留言
    //     'IS_SECURE_IP': API_SITE + 'api/CheckSecureIp',
    //     'GET_HK_CODE': API_SITE + 'api/charge/GetHKcode',
    //     'CHECK_HK_CODE': API_SITE + 'api/charge/CheckHKverifyCode/',
    //     'CHECK_TW_CODE': API_SITE + 'api/charge/checktwtel',
    //     'LOGOUT': API_SITE + 'api/logout', //退出
    //     'DETAIL_PRICE': API_SITE + 'api/goods/detailprice/', //获取商品价格
    //     'GET_CHARGE_CODE': API_SITE + 'api/charge/onlinecharge/getchargecodepara.aspx', //获得组成繳款碼表单的参数
    //     'PAY2GO_CODE_LIST': API_SITE + 'api/charge/onlinecharge/pay2gocodenolist', //繳款碼查詢
    //     'GET_CHARGE_TO_HK_LIST': API_SITE + 'api/charge/onlinecharge/getchargetohklist', //獲得香港用戶近期入數狀態
    //     'GET_RECHARGE_WAY_HK_INFO': API_SITE + 'api/charge/onlinecharge/getallrechargewayhkinfo', //獲得香港缴款方式
    //     'RECHARGE_HK': API_SITE + 'api/charge/onlinecharge/rechargehk.aspx', //香港用戶過數
    //     'PAY2GO_CUSTOM': API_SITE + 'api/charge/onlinecharge/pay2gocustom', //智付寶繳款碼回調接口
    //     'GAME_SERVER': API_SITE + 'api/gameserver/', //伺服器列表接口
    //     'AGREE_CHANGE_PRICE': API_SITE + 'api/order/changeprice/buyeragreechangeprice.aspx', //買家同意改價接口
    //     'REFUSE_CHANGE_PRICE': API_SITE + 'api/order/changeprice/buyerrefusechangeprice.aspx', //買家拒绝改價接口
    //     'PRICE_DETAIL': API_SITE + 'api/order/changeprice/pricedetail.aspx', //買家獲取價格
    //     'REG_TW': API_SITE + 'api/reg/regtw', //台灣用戶註冊
    //     'REG_SEND_TW_CODE': API_SITE + 'api/reg/sendtwcode', //發送台灣短信
    //     'REG_CHECK_TW_CODE': API_SITE + 'api/reg/checktwcode', //驗證台灣短信
    //     'REG_OS': API_SITE + 'api/reg/regos', //大陆用戶註冊
    //     'REG_SEND_OS_CODE': API_SITE + 'api/reg/sendoscode', //發送大陸短信
    //     'REG_CHECK_OS_CODE': API_SITE + 'api/reg/checkoscode', //驗證大陸短信
    //     'REG_HK': API_SITE + 'api/reg/reghk', //香港用戶註冊
    //     'REG_CHECK_HK_CODE': API_SITE + 'api/reg/checkhkcode', //驗證香港短信

    //     'SEND_CHARGE_CODE': API_SITE + 'api/charge/sendchargecode/', //付款  港澳用户发送验证码
    //     'CHECK_HK_RECEIVE_CODE': API_SITE + 'api/charge/CheckHKreceiveCode/', //验证  验证码

    //     'GET_CHARGE_CODE_PARA': API_SITE + 'api/usercenter/getvirtualaccount', //台灣用戶付款  獲取虛擬賬戶
    //     'BONUS_DETAIL': API_SITE + 'api/usercenter/bonusdetail/', //红利明细列表
    //     'GET_BONUS_BY_GOODS_NO': API_SITE + 'api/goods/getbonusbygoodsno/', //根据发布单获取积分
    //     'GET_USER_SIGNIN_STATUS': API_SITE + 'api/usercenter/getusersigninstatus', //获取签到状态
    //     'SUER_SIGNIN': API_SITE + 'api/usercenter/usersignin', //签到
    //     'OPEN_PAY_CHARGE_OPER': API_SITE + 'api/charge/onlinecharge/openpaychargeoper', //台湾里获取付款码  
    //     'OPEN_PAY_CODE_NO_LIST': API_SITE + 'api/charge/onlinecharge/openpaycodenolist', //台湾里付款码列表 
    //     'MPAY_CHARGE_OPER': API_SITE + 'api/charge/onlinecharge/mpaychargeoper', //八达通支付 

}