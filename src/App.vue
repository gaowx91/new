<template>
    <div class="app" id="app">
        <loading v-show="loading" :loading='loading'></loading>
        <!-- <router-view></router-view> -->
        <keep-alive :exclude="excludeComponents">
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
<script>
import 'mint-ui/lib/style.css'
import '#/css/app.css';
import loading from '@/components/loading/loading'
export default {
    name: 'app',
    data() {
        return {
            loading: false,
            includeComponents:'',
            // excludeComponents:'userlogin,orderDetail,orderdetailrate,orderdetailqa', 
            excludeComponents:'regPhone,userlogin,orderDetail,orderdetailrate,orderdetailqa',
        }
    },
    components: {
        loading
    },
    watch: {
    },
    methods: {
        toggleLoading(show = true) {
            this.loading = show
        },
        fakeAjax() {
            this.toggleLoading(true)
            setTimeout(() => {
                this.toggleLoading(false)
            }, 1000)
        }
    },
    mounted() {
        this.fakeAjax()
    }
}

</script>
