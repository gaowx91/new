<template>
    <div class="wrapper">
        <v-Header>
            <div class="mod-header mod-header-detail" slot="detail-header" id="mod-header">
                <i class="mintui mintui-back" @click="$router.go(-1)"></i>
                <mt-navbar class="tab-navbar title" v-model="selected">
                    <mt-tab-item id="1">商品</mt-tab-item>
                    <mt-tab-item id="2">評價</mt-tab-item>
                    <mt-tab-item id="3">問與答</mt-tab-item>
                </mt-navbar>
                <span class="is-right">
                <img src="static/images/common/menu.png" alt="">
                </span>
            </div>
            <mt-navbar class="subtab-navbar" v-model="selectRate" v-if="selected==2">
                <mt-tab-item id="1">
                    <span class="txt">所有評價</span>
                </mt-tab-item>
                <mt-tab-item id="2">
                    <span class="txt"><img src="static/images/common/hp.png" alt="">正評</span>
                </mt-tab-item>
                <mt-tab-item id="3">
                    <span class="txt"><img src="static/images/common/zp.png" alt="">中評</span>
                </mt-tab-item>
                <mt-tab-item id="4">
                    <span class="txt"><img src="static/images/common/cp.png" alt="">差評</span>
                </mt-tab-item>
            </mt-navbar>
            <mt-navbar class="subtab-navbar" v-model="selectQa" v-if="selected==3">
                <mt-tab-item id="1"><span class="txt">大家的問答</span></mt-tab-item>
                <mt-tab-item id="2"><span class="txt">我的問答</span></mt-tab-item>
            </mt-navbar>
        </v-Header>
        <v-Content>
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <v-DetailGoodsInfo @accountProperties="accountProperties" @imgSlideChange="imgSlideChange"></v-DetailGoodsInfo>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <v-Rate :selectRate="selectRate"></v-Rate>
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    <v-Qa :selectQa="selectQa"></v-Qa>
                </mt-tab-container-item>
            </mt-tab-container>
        </v-Content>
        <v-Footer>
            <div class="action-bar" slot="detail" v-if="selected==1||selected==2">
                <router-link to="/goodslist" class="toshop cell">
                    <img src="static/images/common/shop-bag.png" alt="">
                    <span class="txt">賣家商品</span>
                </router-link>
                <router-link to="goodstobuy" class="buy cell">立即購買</router-link>
            </div>
            <div class="action-bar" slot="detail" v-if="selectQa==1">
                <router-link to="goodsdetailqamyask" class="question cell"><img src="static/images/common/comment-question-alert.png" alt="">我要提問</router-link>
            </div>
            <div class="action-bar" slot="detail" v-if="selectQa==2">
                <router-link to="buy" class="toshop cell">
                    <img src="static/images/common/cart.png" alt="">
                    <span class="txt">立即購買</span>
                </router-link>
                <router-link to="goodsdetailqamyask" class="question cell"><img src="static/images/common/comment-question-alert.png" alt="">我要提問</router-link>
            </div>
        </v-Footer>
        <mt-popup v-model="popupVisible4" position="bottom" class="popup-acount">
            <div class="hd">
                <img src="static/images/common/submenu.png" alt="">帳號屬性
            </div>
            <ul class="list-acount-props">
                <li class="item"><span>角色職業</span><span>{{accountP.name}}</span></li>
                <li class="item"><span>角色等級</span><span>{{accountP.level}}</span></li>
                <li class="item"><span>角色性別</span><span>{{accountP.sex}}</span></li>
                <li class="item"><span>註冊資料是否真實</span><span>{{accountP.authenticity}}</span></li>
                <li class="item"><span>官網密碼是否可更改</span><span>{{accountP.isedit}}</span></li>
                <li class="item"><span>保鏢卡/安全卡/防盜卡</span><span>{{accountP.security}}</span></li>
                <li class="item"><span>能否提供帳號切結書</span><span>{{accountP.scores}}</span></li>
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
import vBottom from '@/components/bottom'
import vContent from '@/components/content'
import vHeader from '@/components/header'
import vDetailGoodsInfo from './goods_detail_info'
import vRate from './goods_detail_rate'
import vQa from './goods_detail_qa_list'
import vFooter from '@/components/footer'
export default {
    data() {
        return {
            selected: '1',
            selectQa: '1',
            selectRate: '1',
            popupVisible4: false,
            mask: false,
            isImgViewsShow: 0,
            isIndex: 1,
            swipe: [],
            accountP: []
        }
    },
    created(){
        console.log(this.$router.params);
    },
    methods: {
        accountProperties(accountP) {
            this.popupVisible4 = true;
            this.accountP = accountP
        },
        imgSlideChange(e, swipe) {
            console.log(e,swipe);
            this.isImgViewsShow = 1;
            this.mask = true;
            this.isIndex = parseInt(e.currentTarget.getAttribute("is-active"))
            this.swipe = swipe
        },
        eImgViewClick: function() {
            this.isImgViewsShow = 0;
            this.mask = false
        },
    },
    components: {
        vContent,
        vHeader,
        vDetailGoodsInfo,
        vFooter,
        vBottom,
        vRate,
        vQa
    }
}

</script>
