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
                <div class="reg-area" :style="{backgroundImage: 'url(/static/images/passport/choose/choose_'+areaData.id+'.png)'}">
                    <span class="tit">註冊地區：{{areaData.name}}</span>
                </div>
            </section>
            <div class="reg-form">
                <div class="reg-choose-usertype">
                    <vRadio v-for="(item,index) in options" v-on:my-Radio='keyShowFun' :class="item.selected" :key="index" name="rad" :state="index" >
                        <i class="icon icon-circle-blank" :class="item.icon"></i>
                        <span>{{item.txt}}</span>
                    </vRadio>
                </div>
                <v-InputGroup icon='iphone' autofocus @change="validateMobile" placeholder="請輸入手機號碼" type="tel" id="tel" v-model="mobile" :message="messageMobile" :required="requiredMobile"></v-InputGroup>

                <v-InputGroup icon='check-shield-sign' other="true" placeholder="輸入驗證碼" v-model="code">
                    <!-- <router-link :to="changelinks"> -->
                        <mt-button type="primary" :disabled='disabledSend'  @click="sendCode">{{sendBtnTxt}}</mt-button>
                    <!-- </router-link> -->
                </v-InputGroup>

                <vPanel>
                    <div class="panel-body" slot="content">
                        <v-Message :tel='areaData.myTel' :code="randomCode"></v-Message>
                        <mt-button plain size="large" type="primary" @click="gotoCheck2">簡訊已發送，點擊確認</mt-button>
                    </div>
                </vPanel>

                <div class="reg-submit">
                    <!-- <router-link :to="links"> -->
                        <mt-button type="primary" size="large" :disabled=disabledNext @click="gotoCheck1">下一步</mt-button>
                    <!-- </router-link> -->
                </div>
            </div>
        </v-Content>
        <v-Dialog :modal="imgCodeVis" @cancel="imgCodeVis = false" @ok="confirmModal">
            <span class="modal-title" slot="header">請輸入驗證碼</span>
            <slot>
                <v-InputGroup icon='check-shield-sign' other="true" id="aa" placeholder="輸入驗證碼" v-model="img_code">
                    <img :src="imgUrl" @click="changeCode">
                </v-InputGroup>
                <!-- <div class="text-danger" :style="{visibility:visb}">{{msg}}</div> -->
                <div class="text-danger" v-if="msg.length">{{msg}}</div>
            </slot>
            <mt-button type="primary" size="large" slot="bottom" @click="confirmModal">確認</mt-button>
        </v-Dialog>
    </div>
</template>
<script>
import vInputGroup from '@/components/inputgroup/'
import vContent from '@/components/content'
import vPanel from '@/components/panel/'
import vDialog from '@/components/popup'
import vMessage from '@/components/message/'
import vRadio from '@/components/radio/'
import vHeader from '@/components/header'

require("#/css/passport/reg_phone.css")
const areaConfig ={
    'tw':{
        id:1,
        name:'台灣地區',
        countrycode:886,
        myTel:'852-9286-9133'
    },
    'hk':{
        id:2,
        name:'香港地區',
        countrycode:852,
        myTel:'852-9286-9133'
    },
    'mo':{
        id:3,
        name:'澳門地區',
        countrycode:853,
        myTel:'852-9286-9133'
    },
    'cn':{
        id:4,
        name:'大陸地區',
        countrycode:86,
        myTel:'852-9286-9133'
    },
    'ml':{
        id:5,
        name:'馬來地區',
        countrycode:60,
        myTel:'852-9286-9133'
    },
}
export default {
    data() {
        return {
            // changelinks: '',
            links: '/regsecret',
            options: [{
                selected: 'selected',
                txt: '個人用戶註冊',
                link: '/regsecret',
                icon: 'icon-check-circle'
            }, {
                selected: '',
                txt: '企業用戶註冊',
                link: '/regcompanyinfo',
                icon: ''
            }],
            imgCodeVis: false,
            wrapperHeight: 0,
            // msg: '驗證碼填寫錯誤，請點擊圖片刷新後重試',
            msg: '',
            visb: 'hidden',
            title: '請輸入驗證碼',
            sendBtnTxt:'發送驗證碼簡訊',
            okClass: 'danger',
            okContent: '2',
            // areaName:'台灣地區',
            // areaId:'1',
            // areaCountrycode:'886',
            // area:this.$route.params.area,
            areaData:{
                name:'',
                id:'',
                countrycode:'',
                myTel:''
            },
            mobile:'12345674',
            messageMobile:'',
            requiredMobile:false,
            disabledSend:true,
            imgUrl:'',
            img_code:'',
            img_codekey:'',
            type:1,
            code:'',
            randomCode:Math.random().toString().substring(3,7),
            // disabledNext:true,
        }
    },
    computed:{
        disabledNext:function(){
            return (this.mobile.length ==0 || this.code.length==0);
        },
    },
    components: {
        vContent,
        vInputGroup,
        vRadio,
        vPanel,
        vDialog,
        vMessage,
        vHeader
    },
    created(){
        let temp = areaConfig[this.$route.params.area];
        if(temp){
            this.areaData = temp;
        }else{
            this.Toast('瀏覽器參數錯誤');
            this.$router.go(-1);
        }
        // console.log(this.imgCodeVis =true);
    },
    methods: {
        keyShowFun: function(index) {
            this.options.forEach((item) => {
                item.selected = '';
                item.icon = '';
            });
            this.options[index].selected = 'selected';
            this.options[index].icon = 'icon-check-circle';
            this.links = this.options[index].link;

        },
        gotoCheck1(){
            this.type =1;//发送
            this.checkRegCode(this.code,()=>{
                // this.disabledNext = false;
            });
        },
        gotoCheck2(){
            this.type =2;//接收
            this.checkRegCode(this.randomCode,()=>{
                // this.disabledNext = false;
            });
        },
        checkRegCode(code,callback){//校驗註冊驗證碼
            let paramsData={
                type:this.type,
                countrycode:this.areaData.countrycode,
                mobile:this.mobile,
                code:code,
            }
            this.$http({
                method: 'post',
                url: this.CONFIG.CHECK_REG_CODE, //1.4校驗註冊驗證碼
                data: this.$qs.stringify(paramsData),
            }).then(res => {
                // this.disabledSend = false;
                //console.log(res.data);
                if (res.data.status == true) {
                    paramsData.area = this.$route.params.area;
                    this.$router.push({path:this.links,query:paramsData});
                    // this.$router.push({name:'RegSecret',params:paramsData});
                } else {
                   this.Toast(res.data.info);
                }
                if(typeof callback == 'function'){
                 callback();
                }
            }).catch(error => {
                this.Toast('catch错误');
                if(typeof callback == 'function'){
                  callback();
                }
            });
        },
        sendCode() {//点击发送验证码简讯
            this.disabledSend = true;
            this.requestRegCode(() =>{//简讯接口请求
                this.disabledSend = false;
            })
        },
        confirmModal() {
            // console.log(this.img_code);
            if(this.img_code == ''){
                this.msg="輸入驗證碼";
                return false;
            }else{
                this.msg="";
            }
            this.requestRegCode();
        },
        requestRegCode(callback){//简讯接口请求
            let paramsData={
                countrycode:this.areaData.countrycode,
                mobile:this.mobile,
                img_code:this.img_code,
                img_codekey:this.img_codekey,
            }
            this.$http({
                method: 'post',
                url: this.CONFIG.REQUEST_REG_CODE, //發送註冊驗證碼
                data: this.$qs.stringify(paramsData),
            }).then(res => {
                // this.disabledSend = false;
                //console.log(res.data);
                if (res.data.status == true) {
                    this.Toast(res.data.info);
                    this.imgCodeVis = false;
                    this.countDown(180);
                } else {
                    if(res.data.errCode == -210200303){//"手機號碼已經註冊"
                        this.$router.push('/regphoneextis');
                    }else if(res.data.errCode == -1000101 ||res.data.errCode == -1000102 || res.data.errCode == -1 ){//需要进行图片验证
                        // this.changelinks = '';
                        this.getImgVerifyCode();
                        this.disabledSend = false;
                    }
                }
                if(typeof callback == 'function'){
                 callback();
                }
            }).catch(error => {
                this.Toast('catch错误');
                if(typeof callback == 'function'){
                  callback();
                }
            });
        },
        changeCode(){
            this.getImgVerifyCode();
        },
        getImgVerifyCode(){//获取图形检验 图片，和key
            this.$http({
                method: 'get',
                url: this.CONFIG.GET_REG_IMG_VERIFY_CODEKEY, //获取注册短信验证码KEY
            }).then(res => {
                //console.log(res.data);
                if (res.data.status == true) {
                    let returnData = res.data.data;
                    this.imgUrl = returnData.ImgUrl;
                    this.img_codekey = returnData.RegImgVerifyCodeKey;
                    this.img_code = '';//清空
                    this.imgCodeVis = true;
                } else {
                    this.Toast(res.data.info);
                }
                // this.disabledSend = false;
            }).catch(error => {
                this.Toast('catch错误');
                // this.disabledSend = false;
            });

        },
        validateMobile(value) {
            if(value == ''){
                this.messageMobile = '請輸入手機號碼';
                this.requiredMobile = true;
                this.disabledSend =true;
                return false;
            }
           // let countrycode= this.areaData.countrycode;
           let area= this.$route.params.area;
           let mobileReg;
           switch(area){
            case 'tw':
                mobileReg = /^09\d{8}$/;
                break;
            case 'hk':
                mobileReg = /^\d{8}$/;
                break;
            case 'mo':
                mobileReg = /^6\d{7}$/;
                break;
            case 'cn':
                mobileReg = /^1\d{10}$/;
                break;
            case 'ml':
                mobileReg = /^1\d{8}$/;
                break;
            default:
                mobileReg = /^09\d{8}$/;
                break;
           }
           if(!mobileReg.test(value)){
             this.messageMobile = '手機號碼輸入錯誤，請填寫正確格式';
             this.requiredMobile = true;
             this.disabledSend =true;
           }else{
             this.messageMobile = '';
             this.requiredMobile = false;
             this.disabledSend =false;
           } 
        },
        countDown(time){
            if(time == 0){
                this.disabledSend = false;
                this.sendBtnTxt = '發送驗證碼簡訊';
            }else{
                this.disabledSend = true;
                this.sendBtnTxt = '重新發送（'+time+'S）';
                time = time -1;
                setTimeout(() => {
                  this.countDown(time);
                }, 1000)
            }
        },
    },
    mounted() {
        this.overScroll();
    },
    watch:{
           '$route.params.area':function(value){
            if(value){
                this.areaData = areaConfig[value];
            }
        },     
    }
}

</script>
