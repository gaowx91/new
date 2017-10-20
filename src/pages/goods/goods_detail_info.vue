<template>
    <div class="wrapper">
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
                    <div class="cell-header" slot='header' @click="popup">
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
    </div>
</template>
<script>
import '#/css/goods/goods_detail_info.css'
import vBottom from '@/components/bottom'
import vContent from '@/components/content'
import vHeader from '@/components/header'
import vFooter from '@/components/footer'
import vCellBox from '@/components/box'


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
            accountP: [{
                name: '陰陽師',
                level: '60級',
                sex: '男性',
                authenticity: '真實',
                isedit: '可以更改',
                security: '無綁定',
                scores: '不能提供'
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
    beforeRouteEnter(to,from,next){
        next(vm=>{
            console.log(vm);
        })
        console.log(3333);
    },
    created(){
        console.log('goods_info');
    },
    methods: {
        more() {
            (this.auto = !this.auto) ? (this.auto = 'auto') : (this.auto = '');
        },
        eImgClick: function(e, swipe) {
            this.$emit('imgSlideChange', e, swipe = this.swipe)
        },
        changeBz(index) {
            this.active = index
        },
        popup(accountP) {
            this.$emit('accountProperties', accountP = this.accountP)
        }
    },
    components: {
        vContent,
        vHeader,
        vFooter,
        vBottom,
        vCellBox,

    },
    mounted() {
        this.overScroll();
        console.log(666);
    }
}

</script>
