<template>
    <div class="wrapper" ref="wrapper">
        <div class="login-main" :class="{'leftshift':state}">
            <mt-header class="login-header">
                <router-link to="regchoosearea" slot="right">
                    <mt-button type="primary" class="btn-round">快速註冊</mt-button>
                </router-link>
            </mt-header>
            <v-Content>
                <img src="static/images/passport/logo.png" class="login-logo" alt="">
                <div class="login-wrap">
                    <div class="login-form">
                        <v-InputGroup icon="user" placeholder="請輸入會員帳號" v-model="loginUserName" @change="validateName" :message="messageName" :required="requiredName"></v-InputGroup>

                        <v-InputGroup icon='lock' placeholder="請輸入密碼" type="password" v-model="loginPassword" @change="validatePwd" :message="messagePwd" :required="requiredPwd"></v-InputGroup>

                        <v-InputGroup icon='check-shield-sign' other="true" placeholder="輸入驗證碼" v-model="loginCode" @change="validateCode" :message="messageCode" :required="requiredCode"><img :src="codeImg"></v-InputGroup>

                        <div class="login-help">
                            輸入身份證後四碼<span class="text-primary">對應字母</span>，字母請直接輸入
                        </div>
                        <div class="login-entries">
                            <v-Checkbox text="記住帳號"></v-Checkbox>
                            <mt-button icon="icon icon-book" plain class="btn-round" type="primary" v-model="state" @click="state = true">驗證碼教學</mt-button>
                        </div>
                    </div>
                    <div class="login-submit">
                        <mt-button type="primary" size="large" @click="login">立即登入</mt-button>
                        <router-link to="">忘記帳密？</router-link>
                        <router-link to="regfacebooktype">
                            <mt-button icon="icon mintui-facebook-square" class="btn-round">使用facebook帳號登入</mt-button>
                        </router-link>
                    </div>
                </div>
            </v-Content>
            <div class="mask" @click="state = false" v-if="state"></div>
        </div>
        <transition name="slide-left">
            <section class="login-course" @click="state = false">
                <div class="code-desc">
                    <div class="code-desc-idc"></div>
                    <div class="code-desc-txt code-desc-caret">取身份證後四碼<span class="text-primary">“6954”</span></div>
                    <div class="code-desc-code"></div>
                    <div class="code-desc-txt">在驗證碼欄輸入對應字母
                        <br><span class="text-primary">若含有字母直接輸入</span></div>
                    <div class="code-desc-img"></div>
                </div>
            </section>
        </transition>
    </div>
</template>
<script>
import vInputGroup from '@/components/inputgroup/'
import vContent from '@/components/content'
import vCheckbox from '@/components/checkbox/'
require("#/css/passport/user_login.css")
export default {
    name:'userlogin',
    data() {
        return {
            state: false,
            right: '0',
            loginUserName:'tw1001',
            loginPassword:'111111',
            loginCode:'',
            codeImg: this.CONFIG.CODE,
            messageName:'',
            requiredName:false,
            messagePwd:'',
            requiredPwd:false,
            messageCode:'',
            requiredCode:false,
            // paramsData:{
            //     name:'',
            //     pwd:'',
            //     code:'',
            // }
        }
    },
    components: {
        vInputGroup,
        vContent,
        vCheckbox
    },
    methods: {
        login(){
            let paramsData={
                name:this.loginUserName,
                pwd:this.loginPassword,
                code:this.loginCode,
            }
            this.$http({
                method: 'get',
                url: this.CONFIG.LOGIN, //用户登录
                params: paramsData,
            }).then(res => {
                //console.log(res.data);
                if (res.data.status == true) {
                    let userData=res.data.data;
                    // this.$router.replace('/member');
                    this.$router.push('/member');
                } else {
                    this.Toast(res.data.info);
                    this.codeImg = this.CONFIG.CODE+Math.random();
                }
            }).catch(error => {
                // this.Toast(res.data.info);
                this.codeImg = this.CONFIG.CODE+Math.random();
            });
        },
        validateName(value){
            let temp=this.FUNCTION.validate(value,'會員帳號','');
            this.messageName = temp.message;
            this.requiredName = temp.required;
            console.log(this.messageName);
        },
        validatePwd(value){
            let temp=this.FUNCTION.validate(value,'會員密碼','');
            this.messagePwd = temp.message;
            this.requiredPwd = temp.required;
        },
        validateCode(value){
            // let temp=this.FUNCTION.validate(value,'驗證碼','');
            if(value==''){
                this.messageCode ='請輸入驗證碼';
                this.requiredCode = true;
            }else if(/^[a-zA-Z]{4}$/.test(value) == false){
                this.messageCode ='驗證碼輸入有誤，請重新輸入';
                this.requiredCode = true;
            }else{
                this.messageCode = '';
                this.requiredCode = false;
            }
        },
        // cancel() {
        //     this.state = false;
        // },
        // ok() {
        //     this.state = true;
        // },
        // Mask() {
        //     this.state = false;
        // }
    },
    mounted() {
        this.overScroll();
         // console.log(this.CONFIG.CODE);
    },
    watch:{
        'userName'(){
            console.log(this.CONFIG.CODE);
        }
    },
}

</script>
