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
                <v-InputGroup icon='user' placeholder="設定登入帳號"></v-InputGroup>
                <v-InputGroup icon='lock' placeholder="設定登入密碼" type="password"></v-InputGroup>
                <v-InputGroup icon='lock' placeholder="輸入支付密碼" type="password" toggle="true" payset="true"></v-InputGroup>
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
import vCheckbox from '../../components/checkbox/'
import vHeader from '../../components/header'
export default {
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    components: {
        vContent,
        vInputGroup,
        vCheckbox,vHeader
    },
    mounted(){
        this.overScroll();
    }
}

</script>
