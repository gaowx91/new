<template>
    <article>
        <mt-swipe class="mod-swipe" :show-indicators="false" :auto="0">
            <mt-swipe-item v-for="(item, index) in swipe" :key="index">
                <router-link to="">
                    <img v-lazy="item.img" @click="eImgClick($event)" :is-active="index">
                </router-link>
            </mt-swipe-item>
        </mt-swipe>
        <v-BigImg v-if="isImgViewsShow" @clickit="eImgViewClick" :defaultIndex="isIndex" :imageData="swipe"></v-BigImg>
        <v-CellBox padded class="fillet-top">
            <h1 class="s-title">
    <span class="badge badge-primary badge-min">帳號</span>4SSR新角輝夜姬~滿爆鳥爆傷199%~雙天狗一隻滿爆~~勾玉破萬~一速235，此帳號已在本站交易0次
    </h1>
            <div class="s-price">
                <span>
            <span class="text-muted">價格：</span><span class="text-danger fz48">66666.00</span><span class="ml5">元</span>
                </span>
                <span class="text-muted">銷量：0</span>
            </div>
            <div class="s-currency">
                <span class="badge is-plain selected">台幣 TWD</span>
                <span class="badge is-plain">港幣 HKD</span>
                <span class="badge is-plain">人民幣 CNY</span>
            </div>
            <div class="s-server">
                <span class="text-muted">伺服器：</span>陰陽師Onmyoji / 臺版iOS
            </div>
        </v-CellBox>
        <v-CellBox padded>
            <div class="s-prop">
                <div class="hd" @click="popupVisible4 = true">
                    <span class="tit">帳號屬性</span>
                    <i class="mint-cell-allow-right"></i>
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
                <div class="hd">
                    <span class="tit">
                <img src="static/images/common/redbonus.png" alt="">購買可獲得紅利<span class="text-danger fz30 mh5">6666</span>點</span>
                    <i class="mint-cell-allow-right">我的紅利</i>
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
                <div class="hd">
                    <span class="tit">
                    <img src="static/images/common/star.png" alt="">商品詳情
                    </span>
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
                <p class="hd">
                    <span>
                    <img src="static/images/common/avatar.png" class="avatar" alt="">賣家編號：NO.181818 <span class="badge badge-success">在線</span>
                    </span>
                    <span>地區：台灣</span>
                </p>
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
    </article>
</template>
<script>
import '../../../static/css/trade/detailgoods.css'
import vCellBox from '../../components/box/cell-box'
import vFooter from '../../components/footer/footer'
import vBigImg from '../../components/pic/bigimg'
export default {
    data() {
        return {
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
            popupVisible4: false,
            auto: '',
            isImgViewsShow: 0,
        }
    },
    methods: {
        more() {
            (this.auto = !this.auto) ? (this.auto = 'auto') : (this.auto = '');
        },
        eImgClick: function(e) {
            this.isImgViewsShow = 1;
            this.isIndex = e.currentTarget.getAttribute("is-active")
        },
        eImgViewClick: function() {
            this.isImgViewsShow = 0;
        }
    },
    components: {
        vCellBox,
        vFooter,
        vBigImg
    },
    mounted() {
        this.overScroll();
    }
}

</script>

