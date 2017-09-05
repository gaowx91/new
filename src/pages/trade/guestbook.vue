<template>
    <div class="wrapper">
        <v-Header child>
            <div class="mod-header" slot="con">
                <i class="mintui mintui-back" @click="$router.go(-1)"></i>
                <div class="title">
                    留言內容
                </div>
            </div>
        </v-Header>
        <v-Content padded class="bg-white">
            <div class="o-card">
                <div class="oc-title oc-col">
                    <div class="oc-user">
                        <span class="badge badge-primary is-plain">我的</span>
                    </div>
                    <div class="oc-question">
                        我的回答相當的專業，所以看起來很長，這點希望你不要在意，我只不過是想要湊到三行，來測試最大長度的觀賞性<span class="text-primary">（已讀）</span>
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
                        我的回答相當的專業，所以看起來很長，這點希望你不要在意，我只不過是想要湊到三行，來測試最大長度的觀賞性<span class="text-danger">（未讀）</span>
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
                <div class="oc-title oc-col">
                    <div class="oc-user">
                        <span class="badge badge-primary is-plain">我的</span>
                    </div>
                    <div class="oc-question">
                        我的回答相當的專業，所以看起來很長，這點希望你不要在意，我只不過是想要湊到三行，來測試最大長度的觀賞性<span class="text-primary">（已讀）</span>
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
                        我的回答相當的專業，所以看起來很長，這點希望你不要在意，我只不過是想要湊到三行，來測試最大長度的觀賞性<span class="text-danger">（未讀）</span>
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
        <v-Footer>
            <div class="action-bar" slot="detail">
                <router-link to="/message" class="message cell"><img src="static/images/common/comment-alert.png" alt="">我要留言</router-link>
            </div>
        </v-Footer>
    </div>
</template>
<script>
import vContent from '../../components/content/content'
import vFooter from '../../components/footer/footer'
import vHeader from '../../components/header/header'
export default {
    components: {
        vContent,
        vHeader,
        vFooter

    },
    mounted() {
        this.overScroll();
    }
}
</script>
