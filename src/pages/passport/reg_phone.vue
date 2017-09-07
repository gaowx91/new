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
            <section>
                <div class="reg-area" :style="{backgroundImage: 'url(static/images/passport/choose/choose_1.png)'}">
                    <span class="tit">註冊地區：台灣地區</span>
                </div>
            </section>
            <div class="reg-form">
                <div class="reg-choose-usertype">
                    <vRadio v-for="(item,index) in options" v-on:my-Child='keyShowFun' :class="item.selected" :key="index" name="rad" :state="index">
                        <!-- <input type="radio" hidden="hidden"> -->
                        <i class="icon icon-circle-blank" :class="item.icon"></i>
                        <span>{{item.txt}}</span>
                    </vRadio>
                </div>
                <v-InputGroup icon='iphone' @change="telPhone" placeholder="請輸入手機號碼" type="tel" id="tel"></v-InputGroup>
                <v-InputGroup icon='check-shield-sign' other="true" placeholder="輸入驗證碼">
                    <router-link :to="changelinks">
                        <mt-button type="primary" @click="send">發送驗證碼簡訊</mt-button>
                    </router-link>
                </v-InputGroup>
                <vPanel>
                    <div class="panel-body" slot="content">
                        <v-Message></v-Message>
                        <mt-button plain size="large" type="primary">簡訊已發送，點擊確認</mt-button>
                    </div>
                </vPanel>
                <div class="reg-submit">
                    <router-link :to="links">
                        <mt-button type="primary" size="large">下一步</mt-button>
                    </router-link>
                </div>
            </div>
        </v-Content>
        <v-Dialog :modal="currentValue" @cancel="currentValue = false" @ok="confirmModal">
            <span class="modal-title" slot="header">請輸入驗證碼</span>
            <slot>
                <v-InputGroup icon='check-shield-sign' other="true" id="aa" placeholder="輸入驗證碼">
                    <img src="static/images/passport/code.png" @click="dd">
                </v-InputGroup>
                <div class="text-danger" :style="{visibility:visb}">{{msg}}</div>
            </slot>
              <mt-button type="primary" size="large" slot="bottom" @click="confirmModal">確認</mt-button>
        </v-Dialog>
    </div>
</template>
<script>
import vInputGroup from '../../components/inputgroup/'
import vContent from '../../components/content'
import vPanel from '../../components/panel/'
import vDialog from '../../components/popup'
import vMessage from '../../components/message/'
import vRadio from '../../components/radio/'
import vHeader from '../../components/header'

require("#/css/passport/reg_phone.css")
export default {
    data() {
        return {
            changelinks: '',
            links: 'regsecret',
            options: [{
                selected: 'selected',
                txt: '個人用戶註冊',
                link: 'regsecret',
                icon: 'icon-check-circle'
            }, {
                selected: '',
                txt: '企業用戶註冊',
                link: 'regcompanyinfo',
                icon: ''
            }],
            currentValue: false,
            wrapperHeight: 0,
            msg: '驗證碼填寫錯誤，請點擊圖片刷新後重試',
            visb: 'hidden',
            // dialogObjs: {
            title: '請輸入驗證碼',
            okClass: 'danger',
            okContent:'2',
        }
    },
    components: {
        vContent,
        vInputGroup,
        vRadio,
        vPanel,vDialog,
        vMessage,vHeader
    },
    methods: {
        keyShowFun: function(index) {
            let _this = this;
            _this.options.forEach(function(item) {
                item.selected = '';
                item.icon = '';
            });
            _this.options[index].selected = 'selected';
            _this.options[index].icon = 'icon-check-circle';
            _this.links = _this.options[index].link;

        },
        send() {
            let _this = this;

            if (document.getElementById("tel").value === "13800000000") {
                _this.changelinks = 'regphoneextis'
            } else {
                _this.changelinks = ''
                _this.currentValue = true
            }

        },
        telPhone(value) {
            let _this = this;
        },

        dd(){
            alert(1)
        },
        confirmModal() {
            if (document.getElementById('aa').value === '1') {
                this.currentValue = false
                this.visb = 'hidden'
            } else {
                this.currentValue = true;

                this.visb = 'visible'
                document.getElementById('aa').value = ""
            }

        }
    },
    mounted(){
        this.overScroll();
    }
}

</script>
