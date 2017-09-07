<template>
    <div class="wrapper">
        <!-- <mt-header class="reg-header" title="帳戶綁定">
            <router-link to="" slot="left">
                <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
            </router-link>
            <router-link to="" slot='right'>忘記帳密</router-link>
        </mt-header> -->
        <v-Header child >
            <div class="mod-header reg-header" slot="con">
                <i class="mintui mintui-back" @click="$router.go(-1)"></i>
                <!-- <router-link to="" slot='right'>忘記帳密</router-link> -->
                <div class="title">
                    帳戶綁定
                </div>
            </div>
        </v-Header>
        <v-Content class="reg-content">
            <form class="reg-form">
                <v-InputGroup icon='user' placeholder="設定登入會員帳號"></v-InputGroup>
                <v-InputGroup icon='lock' placeholder="設定登入密碼" type="password"></v-InputGroup>
                <v-InputGroup icon='check-shield-sign' other="true" placeholder="輸入驗證碼"><img src="../../../static/images/passport/code.png"></v-InputGroup>
                <div class="login-help">
                    輸入身份證後四碼<span class="text-primary">對應字母</span>，字母請直接輸入
                </div>
                <div class="reg-submit">
                    <router-link to="regphonecheck">
                        <mt-button type="primary" size="large">下一步</mt-button>
                    </router-link>
                </div>
            </form>
        </v-Content>
    </div>
</template>
<script>
import vInputGroup from '../../components/inputgroup/'
import vContent from '../../components/content'
import vHeader from '../../components/header'
export default {
    data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            vContent,
            vInputGroup,vHeader
        }
}
</script>
