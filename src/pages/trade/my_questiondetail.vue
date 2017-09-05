<template>
    <div class="wrapper">
        <v-Header>
            <div class="mod-header" slot="con">
                <i class="mintui mintui-back" @click="$router.go(-1)"></i>
                <div class="title">
                    我的提問
                </div>
                <span class="is-right">
                <img src="static/images/common/menu.png" alt="">
                </span>
            </div>
        </v-Header>
        <v-Content>
            <v-Cell to='' class="oc-myfirst-box">
                <div slot='left' class="cell-left">
                    <img src="static/images/game/game_1.png" class="my-avatar">
                </div>
                <span class="badge badge-primary badge-min">點數卡</span>
                <span class="tit">Google play谷歌卡( 500點 ★網Google play谷歌卡( 500點 ★網Google play谷歌卡( 500點 ★網</span>
                <i class="mint-cell-allow-right"></i>
            </v-Cell>
            <div class="block-padded bg-white">
                <div class="o-card mb30">
                    <div class="oc-avbox">
                        <span>
                    <img src="static/images/common/avatar.png" class="oc-avator" alt="">賣家N0.266663的回答
                    </span>
                    </div>
                </div>
                <div class="o-card">
                    <div class="oc-title oc-col">
                        <div class="oc-user">
                            <span class="badge badge-primary is-plain">我的</span>
                        </div>
                        <div class="oc-question">
                            我的回答相當的專業，所以看起來很長，這點希望你不要在意，我只不過是想要湊到三行，來測試最大長度的觀賞性
                            <div class="oc-info">
                                <time class="oc-time">2017-07-18 22:45:11</time>
                            </div>
                        </div>
                    </div>
                    <div class="oc-content oc-col">
                        <div class="oc-user">
                            <span class="badge badge-info is-plain">賣家</span>
                        </div>
                        <div class="oc-text">
                            我的回答相當的專業，所以看起來很長，這點希望你不要在意，我只不過是想要湊到三行，來測試最大長度的觀賞性
                            <div class="oc-info">
                                <time class="oc-time">2017-07-18 22:45:11</time>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="o-card">
                    <div class="oc-date">
                        <span>2017-07-21</span>
                    </div>
                </div>
                <div class="o-card">
                    <div class="oc-title oc-col">
                        <div class="oc-user">
                            <span class="badge badge-primary is-plain">我的</span>
                        </div>
                        <div class="oc-question">
                            我的回答相當的專業，所以看起來很長，這點希望你不要在意，我只不過是想要湊到三行，來測試最大長度的觀賞性
                            <div class="oc-info">
                                <time class="oc-time">2017-07-18 22:45:11</time>
                            </div>
                        </div>
                    </div>
                    <div class="oc-content oc-col">
                        <div class="oc-user">
                            <span class="badge badge-info is-plain">賣家</span>
                        </div>
                        <div class="oc-text">
                            我的回答相當的專業，所以看起來很長，這點希望你不要在意，我只不過是想要湊到三行，來測試最大長度的觀賞性
                            <div class="oc-info">
                                <time class="oc-time">2017-07-18 22:45:11</time>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </v-Content>
        <v-Footer>
            <div class="action-bar" slot="detail">
                <router-link to="/message" class="message cell"><img src="static/images/common/comment-alert.png" alt="">我要提問</router-link>
            </div>
        </v-Footer>
    </div>
</template>
<script>
import '../../../static/css/trade/qa.css'
import vContent from '../../components/content/content'
import vFooter from '../../components/footer/footer'
import vHeader from '../../components/header/header'
import vCell from '../../components/cell/cell'
export default {
    components: {
        vContent,
        vHeader,
        vFooter,
        vCell
    },
    mounted() {
        this.overScroll();
    }
}

</script>