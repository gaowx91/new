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
            <form class="reg-form">
                <v-InputGroup icon='user' placeholder="設定登入帳號" @change="validationUsername" :message="msgUsername" state="true" :required="requiredUsername" :maxlength="16" v-model="username" v-if="!isFb"></v-InputGroup>
                <v-InputGroup icon='lock' placeholder="設定登入密碼" type="password" :maxlength="16" @change="validationPwd" :message="msgPwd" :required="requiredPwd" v-model="pwd" v-if="!isFb"></v-InputGroup>

                <v-InputGroup icon='lock' placeholder="輸入支付密碼" type="password" :maxlength="16" :toggle="!isFb"  @change="validationPaypwd" :message="msgPaypwd" :required="requiredPaypwd" v-model="paypwd"></v-InputGroup>

                <v-InputGroup icon='user' placeholder="輸入真實姓名" @change="validationRealname" :message="msgRealname" :required="requiredRealname" v-model="realname"></v-InputGroup>

                <v-InputGroup icon='id-card' placeholder="輸入身份證字號" type="tel"  @change="validationIdcard" :message="msgIdcard" state="true" :required="requiredIdcard" v-model="idcard"></v-InputGroup>

                <v-InputGroup icon='star' placeholder="輸入推薦人帳號（可不填）" message="數字編號，可不填寫" v-model="agentid"></v-InputGroup>
                <div class="reg-submit">
                    <mt-button type="primary" size="large" @click.prevent="gotoReg">完成註冊</mt-button>
                    <div class="reg-agree">
                        點擊視為同意
                        <router-link to="" class="text-info">《服務條款》</router-link>
                        <router-link to="" class="text-info">《免責聲明》</router-link>
                        <router-link to="" class="text-info">《隱私權聲明》</router-link>
                    </div>
                </div>
            </form>
        </v-Content>
    </div>
</template>
<script>
import vInputGroup from '@/components/inputgroup/'
import vContent from '@/components/content'
import vHeader from '@/components/header'
require("#/css/passport/reg_secret.css")
export default {
    data() {
        return {
            username:'',
            msgUsername: '帳號以英文字母開頭，由字母數字組成，長度為6-16個字元',
            requiredUsername: false,
            pwd:'',
            msgPwd: '密码由字母、数字、符号（除空格）至少两种以上组成，长度为6-16位',
            requiredPwd: false,
            paypwd:'',
            msgPaypwd: '輸入支付密碼',
            requiredPaypwd: false,
            idcard:'',
            msgIdcard: '作為驗證個資依據，請填寫真實資料',
            requiredIdcard: false,
            realname:'',
            msgRealname: '輸入真實姓名',
            requiredRealname: false,
            agentid:'',
            // routeParams:{},
            isFb:false,
            openid:'',
            token:'',
        }
    },
    components: {
        vContent,
        vInputGroup,vHeader
    },
    created(){
        // this.routeParams = this.$route.query;

        this.isFb = Boolean(this.FUNCTION.getCookie('isFb'));
        if(this.isFb){
            this.openid = this.FUNCTION.getCookie('fb_openid');
            this.token = this.FUNCTION.getCookie('fb_token');
        }
    },
    computed:{
       routeParams(){
         return this.$route.query;
       }
    },
    methods: {
        gotoReg(){
            // if(this.username ==''||this.pwd ==''||this.pwd ==''||this.pwd ==''){
            // }
            let paramsData={
                // username:this.username,
                // pwd:this.pwd,
                // paypwd:this.paypwd ? this.paypwd : this.pwd,
                realname:this.realname,
                paypwd:this.paypwd ? this.paypwd : this.pwd,
                idcard:this.idcard,
                agentid:this.agentid,
            }
            Object.assign(paramsData,this.routeParams);
            let apiUrl = '';

            if(this.isFb){
                paramsData.openid = this.openid;
                paramsData.token = this.token;
                apiUrl=this.CONFIG.FB_REG;
            }else{
                paramsData.pwd = this.pwd;
                paramsData.username = this.username;
                apiUrl=this.CONFIG.REG;
            }
            
            this.$http({
                method: 'post',
                url: apiUrl, //註冊用戶
                data: this.$qs.stringify(paramsData),
            }).then(res => {
                this.disabledSend = false;
                console.log(res.data);
                if (res.data.status == true) {
                    // console.log(res.data.info);
                    // this.$router.push('/userlogin');
                    this.$router.push('/member');
                } else {
                   this.Toast(res.data.info);
                }
            }).catch(error => {
                this.Toast('catch错误');
            });
        },
        validationUsername(value) {
            // if(value == ''){
            //     this.msgUsername = '請輸入會員帳號';
            //     this.requiredUsername =true;
            //     return false;
            // }
            // 账号，以英文字母开头，由英文、数字组成，长度在6-16位之间（可单独使用字母）
            let reg = /^[a-zA-Z][a-zA-Z0-9]{5,15}$/;
            if(reg.test(value)){
                // this.msgUsername = '帳號以英文字母開頭，由字母數字組成，長度為6-16個字元';
                this.requiredUsername =false;
            }else{
                // this.msgUsername = '帳號格式不符合要求';
                this.requiredUsername =true;
            }
        },
        validationPwd(value) {
            // if(value == ''){
            //     this.msgPwd = '請輸入密碼';
            //     this.requiredPwd =true;
            //     return false;
            // }
            // 密码由字母、数字、符号（除空格）至少两种以上组成，长度为6-16位
            let reg = this.FUNCTION.pwd;
            if(reg.test(value)){
                // this.msgPwd = '密码由字母、数字、符号（除空格）至少两种以上组成，长度为6-16位';
                this.requiredPwd =false;
            }else{
                // this.msgPwd = '密碼設置不符合要求';
                this.requiredPwd =true;
            }
            
        },
        validationPaypwd(value) {
            console.log(value == ''&& !this.isFb);
            if(value == ''&& !this.isFb){
                this.paypwd = this.pwd;
                this.requiredPaypwd =false;
                return false;
            }
            let reg = this.FUNCTION.pwd;
            if(reg.test(value)){
                this.msgPaypwd = '輸入支付密碼';
                this.requiredPaypwd =false;
            }else{
                this.msgPaypwd = '密码由字母、数字、符号（除空格）至少两种以上组成，长度为6-16位';
                this.requiredPaypwd =true;
            }
        },
        validationRealname(value) {
            if(value == ''){
                // this.msgRealname = '請輸入真實姓名';
                this.requiredRealname =true;
            }else{
                this.requiredRealname =false;
            }
           
        },
        validationIdcard(value) {
             if(value == ''){
                this.msgIdcard = '請輸入身份證字號';
                this.requiredIdcard =true;
            }else{
                this.requiredIdcard =false;
            }
            // 长度为4位，由数字、英文组成
            // let reg = /^[\da-zA-Z]{4}$/;
            // if(reg.test(value)){
            //     this.msgIdcard = '作為驗證個資依據，請填寫真實資料';
            //     this.requiredIdcard =false;
            // }else{
            //     this.msgIdcard = '格式錯誤，請重填寫您身份證字號';
            //     this.requiredIdcard =true;
            // }
        },
    },
    mounted(){
        this.overScroll();
    }
}

</script>
