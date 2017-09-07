<template>
    <div class="wrapper">
        <v-Header>
            <div class="mod-header mod-header-detail" slot="detail-header" id="mod-header">
                <i class="mintui mintui-back" @click="$router.go(-1)"></i>
                <mt-navbar class="tab-navbar title" v-model="selected">
                    <router-link to="goodsdetail">商品</router-link>
                    <router-link to="goodsdetailrate">評價</router-link>
                    <router-link to="goodsdetailqalist" class="is-selected">問與答</router-link>
                </mt-navbar>
                <!--         <router-link to="">商品</router-link>
                <router-link to="">評價</router-link>
                <router-link to="">問與答</router-link> -->
                <span class="is-right">
                <img src="static/images/common/menu.png" alt="">
                </span>
            </div>
            <mt-navbar class="subtab-navbar" v-model="selected">
                <mt-tab-item id="1"><span class="txt">大家的問答</span></mt-tab-item>
                <mt-tab-item id="2"><span class="txt">我的問答</span></mt-tab-item>
            </mt-navbar>
        </v-Header>
        <v-Content v-if="state">
            <div class="alert mb30">
                <img src="static/images/common/w-info.png" class="icon" alt="">溫馨提示：此處只顯示賣家允許公開且未違規的問答內容
            </div>
            <v-Cell to="goodsdetailqadetail" padded>
                <div class="o-card">
                    <div class="oc-avbox">
                        <span>
                    <img src="static/images/common/avatar.png" class="oc-avator" alt="">N0.2****3的提問
                </span>
                        <span>查看全部<i class="mint-cell-allow-right"></i></span>
                    </div>
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
            </v-Cell>
            <v-Cell to="goodsdetailqadetail" padded>
                <div class="o-card">
                    <div class="oc-avbox">
                        <span>
                    <img src="static/images/common/avatar.png" class="oc-avator" alt="">N0.2****3的提問
                </span>
                        <span>查看全部<i class="mint-cell-allow-right"></i></span>
                    </div>
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
            </v-Cell>
        </v-Content>
        <v-Content v-else class="subtab-wrapper">
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <v-Cell to="goodsdetailqadetail" padded>
                        <div class="o-card">
                            <div class="oc-avbox">
                                <span>
                                <img src="static/images/common/avatar.png" class="oc-avator" alt="">N0.2****3的提問
                                </span>
                                <span>查看全部<i class="mint-cell-allow-right"></i></span>
                            </div>
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
                    </v-Cell>
                    <v-Cell to="goodsdetailqadetail" padded>
                        <div class="o-card">
                            <div class="oc-avbox">
                                <span>
                                <img src="static/images/common/avatar.png" class="oc-avator" alt="">N0.2****3的提問
                                </span>
                                <span>查看全部<i class="mint-cell-allow-right"></i></span>
                            </div>
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
                    </v-Cell>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <div class="wrapper wrapper-qa">
                        <div class="o-card">
                            <div class="oc-title oc-col">
                                <div class="oc-user">
                                    <span class="badge badge-primary is-plain">買家</span>
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
                                    <span class="badge badge-primary is-plain">買家</span>
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
                    </div>
                </mt-tab-container-item>
            </mt-tab-container>
        </v-Content>
        <v-Footer>
            <div class="action-bar" slot="detail">
                <router-link to="buy" class="toshop cell" v-model="selected" v-if="selected==='2'">
                    <img src="static/images/common/cart.png" alt="">
                    <span class="txt">立即購買</span>
                </router-link>
                <router-link to="goodsdetailqamyask" class="question cell"><img src="static/images/common/comment-question-alert.png" alt="">我要提問</router-link>
            </div>
        </v-Footer>
    </div>
</template>
<script>
import '#/css/goods/goods_detail_qa_list.css'
import vBottom from '../../components/bottom'
import vContent from '../../components/content'
import vCell from '../../components/cell'
import vCellBox from '../../components/box'
import vFooter from '../../components/footer'
import vHeader from '../../components/header'
export default {
    data() {
        return {
            selected: '1',
            state: false
        }
    },
    watch: {},
    components: {
        vContent,
        vHeader,
        vFooter,
        vCell,
        vCellBox,
        vBottom
    },
    mounted() {
        this.overScroll();
    }
}

</script>
