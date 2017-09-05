<template>
    <div class="wrapper">
        <v-Header>
            <div class="mod-header " id="mod-header">
                <i class="mintui mintui-back" @click="$router.go(-1)"></i>
                <div class="title">
                    我的提問
                </div>
                <span class="is-right">
                <img src="static/images/common/menu.png" alt="">
                </span>
            </div>
            <mt-navbar class="subtab-navbar" v-model="selected">
                <mt-tab-item id="1"><span class="txt">賣家已問答</span></mt-tab-item>
                <mt-tab-item id="2"><span class="txt">賣家未問答</span></mt-tab-item>
            </mt-navbar>
        </v-Header>
        <v-Content>
            <mt-tab-container class="subtab-wrapper" v-model="selected">
                <mt-tab-container-item id="1">
                    <v-Cell to="myquestiondetail" padded>
                        <div class="o-card">
                            <div class="oc-title oc-col">
                                <div class="oc-question">
                                    <span class="badge badge-primary badge-min">帳號</span>4SSvR新角輝夜姬~滿爆鳥爆傷199%~雙天狗一隻滿爆~~勾玉破萬~一速235，此帳號已在本站交易0次
                                    <div class="oc-info">
                                        <time class="oc-time">2017-07-18 22:45:11</time>
                                    </div>
                                </div>
                            </div>
                            <div class="oc-anbox">
                                <span class="text-muted">
                                賣家 NO.213453
                                </span>
                                <span class="text-default">查看回答<i class="mint-cell-allow-right"></i></span>
                            </div>
                        </div>
                    </v-Cell>
                    <v-Cell to="myquestiondetail" padded>
                        <div class="o-card">
                            <div class="oc-title oc-col">
                                <div class="oc-question">
                                    <span class="badge badge-primary badge-min">點數卡</span>2000遊戲幣=100元 【1元:20遊戲幣】2000D=100T
                                    <div class="oc-info">
                                        <time class="oc-time">2017-07-18 22:45:11</time>
                                    </div>
                                </div>
                            </div>
                            <div class="oc-anbox">
                                <span class="text-muted">
                                賣家 NO.213453
                                </span>
                                <span class="text-default">查看回答<i class="mint-cell-allow-right"></i></span>
                            </div>
                        </div>
                    </v-Cell>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                </mt-tab-container-item>
            </mt-tab-container>
        </v-Content>
    </div>
</template>
<script>
import '../../../static/css/trade/qa.css'
import vBottom from '../../components/bottom/bottom-nav'
import vContent from '../../components/content/content'
import vCell from '../../components/cell/cell'
import vCellBox from '../../components/box/cell-box'
import vFooter from '../../components/footer/footer'
import vHeader from '../../components/header/header'
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
