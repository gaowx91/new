<template>
    <div class="wrapper">
        <v-Header>
            <div class="mod-header" slot="home" id="mod-header">
                <router-link to="">
                    <span class="is-left text-default">
                    <img src="static/images/common/aim.png" alt="">立即登入
                    </span>
                </router-link>
                <div class="mod-searchbar">
                    <i class="mintui mintui-search"></i> 輸入搜尋關鍵字
                </div>
                <span class="is-right">
                <img src="static/images/common/scan.png" alt="">
                </span>
            </div>
        </v-Header>
        <v-Content>
            <mt-swipe class="mod-swipe">
                <mt-swipe-item v-for="(item, index) in swipe" :key="index">
                    <router-link :to="item.url">
                        <img v-lazy="item.img">
                    </router-link>
                </mt-swipe-item>
            </mt-swipe>
            <nav class="mod-re-entry">
                <router-link v-for="(item,index) in entryNav" :to="item.url" :key="index">
                    <figure>
                        <img v-lazy="item.img" alt="">
                        <figcaption>
                            {{item.tit}}
                        </figcaption>
                    </figure>
                </router-link>
            </nav>
            <v-CellBox>
                <div class="cell-header" slot='header'>
                    <h3 class="tit">線上遊戲</h3>
                    <router-link to="goods" class="more">顯示全部<i class="mint-cell-allow-right"></i></router-link>
                </div>
                <div class="mod-re-pc">
                    <router-link v-for="(item,index) in gamePc" :to="item.url" :key="index">
                        <img v-lazy="item.img" alt="">
                    </router-link>
                </div>
            </v-CellBox>
            <v-CellBox>
                <div class="cell-header" slot='header'>
                    <h3 class="tit">點數卡</h3>
                    <router-link to="goods" class="more">顯示全部<i class="mint-cell-allow-right"></i></router-link>
                </div>
                <div class="mod-re-card">
                    <router-link v-for="(item,index) in gameCard" :to="item.url" :key="index">
                        <figure>
                            <img v-lazy="item.img" alt="">
                            <figcaption>
                                {{item.tit}}
                            </figcaption>
                        </figure>
                    </router-link>
                </div>
            </v-CellBox>
            <v-CellBox>
                <div class="cell-header" slot='header'>
                    <h3 class="tit">手遊專區</h3>
                    <router-link to="goods" class="more">顯示全部<i class="mint-cell-allow-right"></i></router-link>
                </div>
                <div class="mod-re-sy">
                    <router-link v-for="(item,index) in gameSy" :to="item.url" :key="index">
                        <figure>
                            <img v-lazy="item.img" alt="">
                            <figcaption>
                                {{item.tit}}
                            </figcaption>
                        </figure>
                    </router-link>
                </div>
            </v-CellBox>
            <v-CellBox>
                <div class="cell-header" slot='header'>
                    <h3 class="tit">商品推薦</h3>
                </div>
                <div class="mod-card-list">
                    <v-Cell :to="item.url" v-for="(item,index) in gameDetail" :key="index">
                        <div slot='left' class="cell-left">
                            <img v-lazy="item.img" class="my-avatar">
                        </div>
                        <div class="row hd">
                            <span class="badge badge-primary badge-min">{{item.type}}</span>
                            <span class="tit">{{item.tit}}</span>
                        </div>
                        <div class="row md">{{item.txt}}</div>
                        <div class="row bd">
                            <span class="text-default">
                            <span class="text-danger money">{{item.money}}</span>
                            <span>RMB</span>
                            </span>
                            <span class="text-muted">紅利:{{item.bonus}}</span>
                        </div>
                    </v-Cell>
                </div>
            </v-CellBox>
        </v-Content>
        <vFooter>
            <v-Bottom slot="nav"></v-Bottom>
        </vFooter>
    </div>
</template>
<script>
import '../../../static/css/home/index.css'
import vCell from '../../components/cell/cell'
import vBottom from '../../components/bottom/bottom-nav'
import vFooter from '../../components/footer/footer'
import vContent from '../../components/content/content'
import vHeader from '../../components/header/header'
import vCellBox from '../../components/box/cell-box'
export default {
    data() {
        return {
            wrapperHeight: 0,
            swipe: [{
                url: '/orderDetail',
                tit: '每日簽到',
                img: 'static/images/banner/banner-1.png'
            }, {
                url: '/orderDetail',
                tit: '點卡購買',
                img: 'static/images/banner/banner.png'
            }, {
                url: '/orderDetail',
                tit: '手遊專區',
                img: 'static/images/banner/banner-1.png'
            }, {
                url: '/orderDetail',
                tit: '手遊專區',
                img: 'static/images/banner/banner.png'
            }],
            entryNav: [{
                url: '',
                tit: '簽到',
                img: 'static/images/nav/entry_nav_1.png'
            }, {
                url: '',
                tit: '點數卡',
                img: 'static/images/nav/entry_nav_2.png'
            }, {
                url: '',
                tit: '手遊',
                img: 'static/images/nav/entry_nav_3.png'
            }, {
                url: '',
                tit: '紅利',
                img: 'static/images/nav/entry_nav_4.png'
            }, {
                url: '',
                tit: '奪寶',
                img: 'static/images/nav/entry_nav_5.png'
            }, {
                url: '',
                tit: '輕鬆遊',
                img: 'static/images/nav/entry_nav_6.png'
            }, {
                url: '',
                tit: '實物',
                img: 'static/images/nav/entry_nav_7.png'
            }, {
                url: '',
                tit: '便民',
                img: 'static/images/nav/entry_nav_8.png'
            }, {
                url: '',
                tit: '虛寶',
                img: 'static/images/nav/entry_nav_9.png'
            }, {
                url: '',
                tit: '代儲',
                img: 'static/images/nav/entry_nav_10.png'
            }],
            gamePc: [{
                url: '/orderDetail',
                tit: '每日簽到',
                img: 'static/images/pc/pc_5.png'
            }, {
                url: '/orderDetail',
                tit: '點卡購買',
                img: 'static/images/pc/pc_6.png'
            }, {
                url: '/orderDetail',
                tit: '手遊專區',
                img: 'static/images/pc/pc_7.png'
            }, {
                url: '/orderDetail',
                tit: '紅利商城',
                img: 'static/images/pc/pc_8.png'
            }],
            gameCard: [{
                url: '/orderDetail',
                tit: 'MY CARD',
                img: 'static/images/card/card_10.jpg'
            }, {
                url: '/orderDetail',
                tit: 'GASH',
                img: 'static/images/card/card_11.jpg'
            }, {
                url: '/orderDetail',
                tit: '華儀WGS卡',
                img: 'static/images/card/card_10.jpg'
            }, {
                url: '/orderDetail',
                tit: '普雷卡',
                img: 'static/images/card/card_11.jpg'
            }, {
                url: '/orderDetail',
                tit: 'A卡（香港）',
                img: 'static/images/card/card_10.jpg'
            }, {
                url: '/orderDetail',
                tit: 'HEAT Project',
                img: 'static/images/card/card_11.jpg'
            }],
            gameSy: [{
                url: '/orderDetail',
                tit: '龍之谷',
                img: 'static/images/sy/sy_1.png'
            }, {
                url: '/orderDetail',
                tit: '傳說對決',
                img: 'static/images/sy/sy_2.png'
            }, {
                url: '/orderDetail',
                tit: '陰陽師',
                img: 'static/images/sy/sy_3.png'
            }, {
                url: '/orderDetail',
                tit: 'NBA LIVE',
                img: 'static/images/sy/sy_4.png'
            }, {
                url: '/orderDetail',
                tit: '托蘭異世錄',
                img: 'static/images/sy/sy_5.png'
            }, {
                url: '/orderDetail',
                tit: '創世破曉',
                img: 'static/images/sy/sy_6.png'
            }, {
                url: '/orderDetail',
                tit: '白貓tennis',
                img: 'static/images/sy/sy_7.png'
            }, {
                url: '/orderDetail',
                tit: '貓咪大戰爭',
                img: 'static/images/sy/sy_8.png'
            }, {
                url: '/orderDetail',
                tit: 'Fate GO',
                img: 'static/images/sy/sy_9.png'
            }],
            gameDetail: [{
                url: '/orderDetail',
                tit: 'Google play谷歌卡( 500點 ★網Google play谷歌卡( 500點 ★網Google play谷歌卡( 500點 ★網',
                txt: '谷歌卡(香港)／500點',
                img: 'static/images/game/game_1.png',
                money: '452.56',
                bonus: '9000',
                type: '點數卡',
                stock: '100',
                recm: false
            }, {
                url: '/orderDetail',
                tit: 'steam點數卡(港幣) 1000港幣 ★steam點數卡(港幣) 1000港幣 ★',
                txt: 'steam點數卡(香港) ／1000點',
                img: 'static/images/game/game_2.png',
                money: '89299.82',
                bonus: '18000',
                type: '點數卡',
                stock: '50',
                recm: true
            }, {
                url: '/orderDetail',
                tit: 'Google play谷歌卡( 500點 ★網Google play谷歌卡( 500點 ★網Google play谷歌卡( 500點 ★網',
                txt: '谷歌卡(香港)／500點',
                img: 'static/images/game/game_1.png',
                money: '452.56',
                bonus: '9000',
                type: '點數卡',
                stock: '9999',
                recm: false
            }]
        }
    },
    components: {
        vCell,
        vBottom,
        vHeader,
        vContent,
        vFooter,
        vCellBox
    },
    mounted() {
        this.overScroll();
    }
}

</script>
