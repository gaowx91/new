let API_SITE;
let domain = window.location.host;

switch (domain) {
    case 'cms.manage.i7391.com':
        API_SITE = 'http://api.tools.i7391.com/'; //线上
        
        break;
    case 'cms.manage.test.7391test.com':
        API_SITE = 'http://api.tools.test.7391test.com/'; //测试环境
        break;
    default:
        API_SITE = 'http://wap.api.7391test.com/api/'; //开发
        break;
}

export default{
    'GET_GOODS': API_SITE + 'goods/', //获取商品详情信息
	'GOOD_SEARCH': API_SITE + 'search/GoodSearch/', //搜索商品
}