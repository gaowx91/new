<template>
    <div class="wrapper">
        <v-Header>
            <div class="mod-header mod-header-detail" slot="detail-header" id="mod-header">
                <i class="mintui mintui-back" @click="$router.go(-1)"></i>
                <mt-navbar class="tab-navbar title" v-model="selected">
                    <router-link to="orderDetail" class="is-selected">商品</router-link>
                    <router-link to="orderdetailrate">評價</router-link>
                    <router-link to="orderdetailqa">問與答</router-link>
                </mt-navbar>
                <span class="is-right">
                <img src="static/images/common/menu.png" alt="">
                </span>
            </div>
        </v-Header>
        <v-Content>
            <mt-swipe class="mod-swipe" :show-indicators="false" :auto="0">
                <mt-swipe-item v-for="(item, index) in swipe" :key="index">
                    <router-link to="">
                        <img v-lazy="item.img" @click="eImgClick($event)" :is-active="index">
                    </router-link>
                </mt-swipe-item>
            </mt-swipe>
            <v-CellBox padded class="fillet-top">
                <h1 class="s-title">
                <span class="badge badge-primary badge-min">帳號</span>
                4SSR新角輝夜姬~滿爆鳥爆傷199%~雙天狗一隻滿爆~~勾玉破萬~一速235，此帳號已在本站交易0次
                </h1>
                <div class="s-price">
                    <span>
                        <span class="text-muted">價格：</span>
                    <span class="text-danger fz48">66666.00</span>
                    <span class="ml5">元</span>
                    </span>
                    <span class="text-muted">銷量：0</span>
                </div>
                <div class="s-currency">
                    <span class="badge is-plain" :class="{'selected':active===index}" v-for="(item,index) in currency" :key="index" @click="changeBz(index)">{{item.tit}}</span>
                </div>
                <div class="s-server">
                    <span class="text-muted">伺服器：</span>陰陽師Onmyoji / 臺版iOS
                </div>
            </v-CellBox>
            <v-CellBox padded>
                <div class="s-prop">
                    <div class="cell-header" slot='header' @click="popupVisible4 = true">
                        <h3 class="tit">帳號屬性</h3>
                        <span class="more"><i class="mint-cell-allow-right"></i></span>
                    </div>
                    <div class="ft">
                        <span class="col"><span class="text-muted">職業：</span>陰陽師</span>
                        <span class="col"><span class="text-muted">等級：</span>60</span>
                        <span class="col"><span class="text-muted">性別：</span>男</span>
                    </div>
                </div>
            </v-CellBox>
            <v-CellBox padded>
                <div class="s-bonus">
                    <div class="cell-header" slot='header'>
                        <h3 class="tit"><img src="static/images/common/redbonus.png" alt="">購買可獲得紅利<span class="text-danger fz30 mh5">6666</span>點</span></h3>
                        <span class="more">我的紅利<i class="mint-cell-allow-right"></i></span>
                    </div>
                    <div class="ft">
                        活動剩餘時間：<span class="fz24 mh5">01</span>
                        <span class="text-default">天</span>
                        <span class="fz24 mh5">23</span>
                        <span class="text-default">時</span>
                        <span class="fz24 mh5">59</span>
                        <span class="text-default">分</span>
                        <span class="fz24 mh5">59.6</span>
                        <span class="text-default">秒</span>
                    </div>
                </div>
            </v-CellBox>
            <v-CellBox padded>
                <div class="s-description">
                    <div class="cell-header" slot='header'>
                        <h3 class="tit">
                        <img src="static/images/common/star.png" alt="">商品詳情
                        </h3>
                    </div>
                    <div class="md" :class="{'auto':auto}">
                        角色資料如圖!!勾玉還一萬3~還有一堆5~6星禦魂~
                        <br>太多懶得打有問題再發問~
                        <br>買再送另一個58等小號.有荒川之主.閻魔.跟新角色荒~
                        <br>有興趣或問題的問與答留言出價
                        <br>勾玉及金幣交易時可能有些許異動~~因為還是正常在玩
                    </div>
                    <div class="ft" @click="more">顯示更多</div>
                </div>
            </v-CellBox>
            <v-CellBox padded>
                <div class="s-intro">
                    <div class="cell-header" slot='header'>
                        <h3 class="tit">
                        <img src="static/images/common/avatar.png" class="avatar" alt="">賣家編號：NO.181818 <span class="badge badge-success">在線</span>
                        </h3>
                        <span>地區：台灣</span>
                    </div>
                    <ul class="list-intro">
                        <li class="item">
                            <div class="text-muted tit">賣家信用</div>
                            <i class="s_crown_5"></i>
                        </li>
                        <li class="item">
                            <div class="text-muted tit">好評率</div>
                            <span class="text-primary fz26">99.70%</span>
                        </li>
                        <li class="item">
                            <div class="text-muted tit">賣家認證</div>
                            <div>
                                <i class="sprite sprite-iphone"></i>
                                <i class="sprite sprite-tphone"></i>
                                <i class="sprite sprite-idcard"></i>
                                <i class="sprite sprite-bao"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </v-CellBox>
        </v-Content>
        <v-Footer>
            <div class="action-bar" slot="detail">
                <router-link to="/goods" class="toshop cell">
                    <img src="static/images/common/shop-bag.png" alt="">
                    <span class="txt">賣家商品</span>
                </router-link>
                <router-link to="buy" class="buy cell">立即購買</router-link>
            </div>
        </v-Footer>
        <mt-popup v-model="popupVisible4" position="bottom" class="popup-acount">
            <div class="hd">
                <img src="static/images/common/submenu.png" alt="">帳號屬性
            </div>
            <ul class="list-acount-props">
                <li class="item"><span>角色職業</span><span>陰陽師</span></li>
                <li class="item"><span>角色等級</span><span>60級</span></li>
                <li class="item"><span>角色性別</span><span>男性</span></li>
                <li class="item"><span>註冊資料是否真實</span><span>真實</span></li>
                <li class="item"><span>官網密碼是否可更改</span><span>可以更改</span></li>
                <li class="item"><span>保鏢卡/安全卡/防盜卡</span><span>無綁定</span></li>
                <li class="item"><span>能否提供帳號切結書</span><span>不能提供</span></li>
            </ul>
            <div class="ft" @click="popupVisible4 = false">
                完成
            </div>
        </mt-popup>
        <div class="m-img-view" @click="eImgViewClick" v-if="mask">
            <div class="u-mask"></div>
            <mt-swipe class="mod-swipe" :auto="0" :defaultIndex="isIndex">
                <mt-swipe-item v-for="(item, index) in swipe" :key="index">
                    <router-link to="">
                        <img v-lazy="item.img">
                    </router-link>
                </mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>
<script>
import '../../../static/css/trade/orderdetail.css'
import vBottom from '../../components/bottom/bottom-nav'
import vContent from '../../components/content/content'
import vHeader from '../../components/header/header'
import vFooter from '../../components/footer/footer'
import vCellBox from '../../components/box/cell-box'

export default {
    name: 'orderDetail',
    data() {
        return {
            selected: '1',
            swipe: [{
                url: '',
                tit: '每日簽到',
                img: 'static/images/banner/banner-1.png'
            }, {
                url: '',
                tit: '點卡購買',
                img: 'static/images/banner/banner.png'
            }, {
                url: '',
                tit: '手遊專區',
                img: 'static/images/banner/banner-1.png'
            }, {
                url: '',
                tit: '點卡購買',
                img: 'static/images/banner/banner.png'
            }],
            currency: [{
                tit: '台幣 TWD'
            }, {
                tit: '港幣 HKD'
            }, {
                tit: '人民幣 CNY'
            }],
            popupVisible4: false,
            auto: '',
            isImgViewsShow: 0,
            mask: false,
            isIndex: 1,
            active: 0
        }
    },
    methods: {
        more() {
            (this.auto = !this.auto) ? (this.auto = 'auto') : (this.auto = '');
        },
        eImgClick: function(e) {
            this.isImgViewsShow = 1;
            this.mask = true;
            this.isIndex = parseInt(e.currentTarget.getAttribute("is-active"))
        },
        eImgViewClick: function() {
            this.isImgViewsShow = 0;
            this.mask = false
        },
        changeBz(index) {
            this.active = index
        }
    },
    watch: {},
    components: {
        vContent,
        vHeader,
        vFooter,
        vBottom,
        vCellBox,
    },
    mounted() {
        this.overScroll();
    }
}

</script>
