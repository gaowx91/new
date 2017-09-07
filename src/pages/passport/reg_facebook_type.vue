<template>
    <div class="wrapper">
        <v-Header child>
            <div class="mod-header reg-header" slot="con">
                <i class="mintui mintui-back" @click="$router.go(-1)"></i>
                <div class="title">
                    快速註冊
                </div>
            </div>
        </v-Header>
        <v-Content class="reg-content">
            <v-Cell class="fb-cell" choose v-for="(item,index) in options" v-on:my-Child="keyShowFun(index)" :class="{'selected':active===index}" key="index">
                <div class="is-left" slot="left">
                    <i class="icon icon-user-man"></i>
                    <i class="icon" :class="'icon-'+item.icon"></i>
                </div>
                <div class="fb-cell-title left"><span class="tit">{{item.tit}}</span><span class="txt" v-html="item.txt">{{item.txt}}</span></div>
            </v-Cell>
            <div class="reg-submit">
                <div v-if="links===''" @click="judge">
                    <mt-button type="primary" size="large">下一步</mt-button>
                </div>
                <router-link :to="links" v-else>
                    <mt-button type="primary" size="large">下一步</mt-button>
                </router-link>
            </div>
        </v-Content>
    </div>
</template>
<script>
import vContent from '../../components/content'
import vCell from '../../components/cell'
import vHeader from '../../components/header'
require("#/css/passport/reg_facebook_type.css")
var oDiv = document.createElement('div');
oDiv.innerHTML = '請選擇您的帳戶類型再繼續';
export default {
    data() {
        return {
            links: '',
            options: [{
                tit: '沒有i7391帳號',
                txt: "我是第一次登入i7391 <br>還沒有註冊過i7391會員帳號",
                link: 'regchoosearea',
                icon: 'add'
            }, {
                tit: '我已有i7391帳號',
                txt: "我已經註冊過i7391會員帳號<br>想要綁定FaceBook登入",
                link: 'regaccountcheck',
                icon: 'hook'
            }],
            active: ''
        }
    },
    components: {
        vContent,
        vCell,vHeader
    },
    methods: {
        keyShowFun(index) {
            let _this = this;
            this.active = index;
            _this.links = _this.options[index].link;
            // if(_this.links=="")
        },
        judge(e) {
            e.currentTarget.appendChild(oDiv);
        }
    },
    mounted(){
        this.overScroll();
    }
}

</script>
