<template>
    <div class="panel">
        <div class="panel-heading" @click="collapse">
            <i class="icon icon-angle-down" :class="selected"></i>{{tit}} <span>{{txt}}</span>
        </div>
        <slot v-if="state">
         <!-- <div class="line"></div> -->

            <slot name="content" >

                <!-- 如若等待時間過長，您也可以編輯簡訊：
                <span class="text-primary">5643</span>
                <br> 發送至：
                <span class="text-primary">XXX-XXX-XXX</span>
                <br> 發送簡訊後點擊下方按鈕驗證
                <br>

                    <mt-button plain size="large" type="primary">簡訊已發送，點擊確認</mt-button> -->

            </slot>

        </slot>
    </div>
</template>
<script>
require("#/css/components/panel.css")
export default {
    name:'panel',
    props: {
        tit: {
            type: String,
            default: '長時間未收到簡訊？'
        },
        txt: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            selected: '',
            state: false,
        }
    },
    methods: {
        collapse() {
            // this.$emit('shrink');
            (this.state = !this.state) ? (this.selected = 'selected') : (this.selected = '');
        }
    }
}
</script>
