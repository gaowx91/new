<template>
    <div class="wrapper">
        <v-Header child >
            <div class="mod-header reg-header" slot="con">
                <i class="mintui mintui-back" @click="$router.go(-1)"></i>
                <div class="title">
                    帳戶綁定
                </div>
            </div>
        </v-Header>
        <v-Content class="reg-content">
            <form class="reg-form">
                <v-InputGroup v-for="(item,index) in inputParams" :key="index" :icon='item.icon' :placeholder="item.placeholder" :message="item.message" :required="item.required" @change="validation(item)" :maxlength="item.maxlength" v-model="postData[item.name]" :type="item.type" :other="item.other"><img :src="codeImg"></v-InputGroup>
                


                <!-- <v-InputGroup icon='user' placeholder="設定登入會員帳號" v-model="username"></v-InputGroup>
                <v-InputGroup icon='lock' placeholder="設定登入密碼" type="password"></v-InputGroup>
                <v-InputGroup icon='check-shield-sign' other placeholder="輸入驗證碼"><img :src="codeImg"></v-InputGroup> -->

                <!-- <v-InputGroup icon="user" placeholder="請輸入會員帳號" v-model="loginUserName" @change="validateName" :message="messageName" :required="requiredName"></v-InputGroup>

                <v-InputGroup icon='lock' placeholder="請輸入密碼" type="password" v-model="loginPassword" @change="validatePwd" :message="messagePwd" :required="requiredPwd"></v-InputGroup>

                <v-InputGroup icon='check-shield-sign' other placeholder="輸入驗證碼" v-model="loginCode" @change="validateCode" :message="messageCode" :required="requiredCode"><img :src="codeImg"></v-InputGroup> -->

                <div class="login-help">
                    輸入身份證後四碼<span class="text-primary">對應字母</span>，字母請直接輸入
                </div>
                <div class="reg-submit">
                    <!-- <router-link to="regphonecheck"> -->
                        <mt-button type="primary" size="large" :disabled="nextDisabled" @click.prevent="login">下一步</mt-button>
                    <!-- </router-link> -->
                </div>
            </form>
        </v-Content>
    </div>
</template>
<script>
import vInputGroup from '@/components/inputgroup/'
import vContent from '@/components/content'
import vHeader from '@/components/header'
export default {
    data() {
            return {
                codeImg: this.CONFIG.CODE,
                postData:{
                    name:'',
                    pwd:'',
                    code:'',
                },
                inputParams:[
                    {
                      name:'name',
                      icon:'user',  
                      placeholder:'請輸入會員帳號',  
                      message:'',  
                      required:false, 
                      maxlength:32,
                    },
                    {
                      name:'pwd',
                      icon:'lock',  
                      placeholder:'請輸入密碼',  
                      message:'',  
                      required:false, 
                      type:'password',
                      maxlength:16,
                    },
                    {
                      name:'code',
                      icon:'lock',  
                      placeholder:'輸入驗證碼',  
                      message:'',  
                      required:false, 
                      other:true,
                      maxlength:4,
                    },
                ],

            }
        },
        components: {
            vContent,
            vInputGroup,vHeader
        },
        methods:{
            login(){
                this.$http({
                    method: 'get',
                    url: this.CONFIG.LOGIN, //用户登录
                    params: this.postData,
                }).then(res => {
                    //console.log(res.data);
                    if (res.data.status == true) {
                        let userData=res.data.data;
                        // this.$router.replace('/member');
                        this.$router.push('/regphonecheck');
                    } else {
                        this.Toast(res.data.info);
                        this.codeImg = this.CONFIG.CODE+Math.random();
                    }
                }).catch(error => {
                    this.codeImg = this.CONFIG.CODE+Math.random();
                });
            },
            validation(item){
                let obj = {
                    'name':() =>{
                        if(this.postData.name ==''){
                            item.message = '請輸入會員帳號';
                            item.required =true;
                        }else{
                            item.message = '';
                            item.required =false;
                        }
                    },
                    'pwd':() =>{
                        if(this.postData.pwd ==''){
                            item.message = '請輸入密碼';
                            item.required =true;
                        }else{
                            item.message = '';
                            item.required =false;
                        }
                    },
                    'code':() =>{
                        if(/^[a-zA-Z]{4}$/.test(this.postData.code)){
                            item.message = '';
                            item.required =false;
                        }else{
                            item.message = '驗證碼輸入有誤，請重新輸入';
                            item.required =true;//错误
                        }
                    },
                };
                (obj[item.name])();
            },
        },
        computed:{
            nextDisabled:function(){
                for(let key in this.postData){
                    if(this.postData[key]==''){
                        return true;
                    }
                }
                for(let key in this.inputParams){//
                    if(this.inputParams[key].required){
                        return true;
                    }
                }
                return false;
            },
        },
}
</script>
