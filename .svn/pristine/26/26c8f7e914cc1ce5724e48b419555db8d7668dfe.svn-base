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
                <v-InputGroup icon='building' placeholder="輸入營登上的公司名稱"></v-InputGroup>
                <v-InputGroup icon='pound-sign' placeholder="輸入公司統編"></v-InputGroup>
                <v-InputGroup icon='user' placeholder="輸入公司聯絡人姓名"></v-InputGroup>
                <v-InputGroup icon='id-card' placeholder="輸入聯絡人身份證字號"></v-InputGroup>
                <div class="reg-submit">
                    <router-link to="regcompanysecret">
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
import vCheckbox from '../../components/checkbox/'
import vHeader from '../../components/header'
require("#/css/passport/reg_company_info.css")
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
