<template>
    <div class="wrapper">
        <v-Header child>
            <div class="mod-header" slot="con">
                <i class="mintui mintui-back" @click="$router.go(-1)"></i>
                <div class="title">
                    大家的回答
                </div>
            </div>
        </v-Header>
        <v-Content padded class="bg-white">
            <div class="o-card mb30">
                <div class="oc-avbox">
                    <span>
                    <img src="static/images/common/avatar.png" class="oc-avator" alt="">N0.2****3的提問
                    </span>
                </div>
            </div>
            <div class="o-card">
                <div class="oc-title oc-col">
                    <div class="oc-user">
                        <span class="badge badge-primary is-plain">買家</span>
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
                        <span class="badge badge-primary is-plain">買家</span>
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
        </v-Content>
    </div>
</template>
<script>
import '../../../static/css/trade/qa.css'
import vContent from '../../components/content/content'

import vHeader from '../../components/header/header'
export default {
    components: {
        vContent,
        vHeader
    },
    mounted() {
        this.overScroll();
    }
}

</script>

