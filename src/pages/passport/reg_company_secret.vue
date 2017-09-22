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
                <v-InputGroup icon='user' placeholder="設定登入帳號" v-model="username"></v-InputGroup>
                <v-InputGroup icon='lock' placeholder="設定登入密碼" type="password" v-model="pwd"></v-InputGroup>
                <v-InputGroup icon='lock' placeholder="輸入支付密碼" type="password" toggle="true" payset="true" v-model="paypwd"></v-InputGroup>
                <div class="reg-submit">
                    <mt-button type="primary" size="large" @click.prevent="regTwCrop">完成註冊</mt-button>
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
import vCheckbox from '@/components/checkbox/'
import vHeader from '@/components/header'
export default {
    data() {
        return {
            username: '',
            pwd: '',
            paypwd: '',
            baseData:this.$route.query,
        }
    },
    components: {
        vContent,
        vInputGroup,
        vCheckbox,vHeader
    },
    created(){
        // console.log(this.$route.query);
        console.log(this.baseData);
    },
    methods:{
        regTwCrop(){
            let paramsData={
                username:this.username,
                pwd:this.pwd,
                paypwd:this.paypwd ? this.paypwd : this.pwd,
                realname:this.baseData.realname,
                idcard:this.baseData.idcard,
                mobile:this.baseData.mobile,
                code:this.baseData.code,
                cropname:this.baseData.cropname,
                cropno:this.baseData.cropno,
            }
            this.$http({
                method: 'post',
                url: this.CONFIG.REG_TW_CROP, //註冊台灣公司用戶
                data: this.$qs.stringify(paramsData),
            }).then(res => {
                if (res.data.status == true) {
                    console.log(res.data.info);
                    // this.$router.push('/user_login');
                } else {
                   this.Toast(res.data.info);
                }
            }).catch(error => {
                this.Toast('catch错误');
            });
        },
    },
    mounted(){
        this.overScroll();
    },
    watch:{
        '$route.query'(value){
            if(value){
                Object.assign(this.baseData,value);
            }
        }
    }
}

</script>
