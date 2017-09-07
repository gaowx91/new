<template>
    <div class="wrapper" ref="wrapper" >
        <div class="login-main" :style="{right:right}">
        <!-- <div class="login-main" :style="{ height: wrapperHeight + 'px'}"> -->
            <mt-header class="login-header">
                <router-link to="regchoosearea" slot="right">
                    <mt-button type="primary" class="btn-round">快速註冊</mt-button>
                </router-link>
            </mt-header>
            <v-Content>
                <img src="static/images/passport/logo.png" class="login-logo" alt="">
                <div class="login-wrap">
                    <div class="login-form">
                        <v-InputGroup icon="user" state placeholder="請輸入會員帳號"></v-InputGroup>
                        <v-InputGroup icon='lock' state placeholder="請輸入密碼" type="password" no='ture'></v-InputGroup>
                        <v-InputGroup icon='check-shield-sign' other="true" state placeholder="輸入驗證碼"><img src="static/images/passport/code.png"></v-InputGroup>
                        <div class="login-help">
                            輸入身份證後四碼<span class="text-primary">對應字母</span>，字母請直接輸入
                        </div>
                        <div class="login-entries">
                            <v-Checkbox text="記住帳號"></v-Checkbox>
                            <mt-button icon="icon icon-book" plain class="btn-round" type="primary" v-model="state" @click="ok">驗證碼教學</mt-button>
                        </div>
                    </div>
                    <div class="login-submit">
                        <mt-button type="primary" size="large">立即登入</mt-button>
                        <router-link to="">忘記帳密？</router-link>
                        <router-link to="regfacebooktype">
                            <mt-button icon="icon mintui-facebook-square" class="btn-round">使用facebook帳號登入</mt-button>
                        </router-link>
                    </div>
                </div>
            </v-Content>
            <div class="mask" @click="Mask" v-if="state"></div>
        </div>
        <transition name="slide-left">
        <section class="login-course" @click="cancel">
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
import vInputGroup from '../../components/inputgroup/'
import vContent from '../../components/content'
import vCheckbox from '../../components/checkbox/'
require("#/css/passport/user_login.css")
export default {
    data() {
        return {
            state: false,
            right:'0'
        }
    },
    components: {
        vInputGroup,
        vContent,
        vCheckbox
    },
    methods: {
        cancel() {
            this.right='0';
            this.state = false;
        },
        ok() {
            this.state = true;
            this.right='80%';
            document.getElementsByClassName('login-main')[0].classList.add('leftshift');
        },
        Mask() {
            this.right='0';
            this.state = false;
        }
    },
    mounted(){
        this.overScroll();
    }
}
</script>

