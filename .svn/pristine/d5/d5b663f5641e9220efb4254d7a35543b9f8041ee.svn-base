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
                <v-InputGroup icon='user' placeholder="設定登入帳號" @change="Validation" :message="message" state="true" prompt="true" :required="required"></v-InputGroup>
                <v-InputGroup icon='lock' placeholder="設定登入密碼" type="password"></v-InputGroup>
                <v-InputGroup icon='lock' placeholder="輸入支付密碼" type="password" toggle="true" message="w"></v-InputGroup>
                <v-InputGroup icon='user' placeholder="輸入真實姓名"></v-InputGroup>
                <v-InputGroup icon='id-card' placeholder="輸入身份證字號" type="tel"></v-InputGroup>
                <v-InputGroup icon='star' placeholder="輸入推薦人帳號（可不填）" message="d"></v-InputGroup>
                <div class="reg-submit">
                    <router-link to="">
                        <mt-button type="primary" size="large">完成註冊</mt-button>
                    </router-link>
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
import vInputGroup from '../../components/inputgroup/'
import vContent from '../../components/content'
import vHeader from '../../components/header'
require("#/css/passport/reg_secret.css")
export default {
    data() {
        return {
            message: '請輸入手機號碼',
            required: false
        }
    },
    components: {
        vContent,
        vInputGroup,vHeader
    },
    methods: {
        Validation(currentValue) {
            if (currentValue !== '1' || currentValue == '') {
                this.message = '手機號輸入錯誤，請重新輸入';
                return this.required = true;
            } else {
                this.message = '請輸入手機號碼'
                return this.required = false;
            }
        }
    },
    mounted(){
        this.overScroll();
    }
}

</script>
