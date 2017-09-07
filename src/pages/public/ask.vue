<template>
    <div class="page-ask">
        <div class="ask-main" v-if="types=='1'">
            <div class="ask-input">
                <textarea placeholder="請輸入您想要提問的內容，最多輸入200字符"></textarea>
            </div>
        </div>
        <div v-else class="ask-main">
            <div class="hd text-default">
                請選擇您想要提問的問題，並提交：
            </div>
            <div class="ask-check" v-for="(item,index) in qeustion" :key="index" @click="checks(index)" :class="{'is-selected':selected === index}">
                <span class="radio-label">{{item.tit}}<span class="mint-checkbox-core"></span></span>
                <div class="radio-other" v-if="item.exclusive">
                    <input type="text" placeholder="在此輸入金額">元
                </div>
            </div>
        </div>
        <div class="ft">
            <router-link to="">
                <span class="btn btn-primary btn-block btn-round">提交問題</span>
            </router-link>
        </div>
    </div>
</template>
<script>
import '#/css/public/ask.css';
export default {
    props:{
        types:{
            type:Number,
            default:1
        }
    },
    data() {
        return {
            selected: '',
            qeustion: [
                { tit: '安~是1天只能買5000以內的點數卡嗎？超過都沒辦法購買了嗎？怎麼辦？', exclusive: false },
                { tit: '安~這卡還有其他面額嗎？', exclusive: false },
                { tit: '安~買錯卡了，請幫忙取消~', exclusive: false },
                { tit: '安~付款了，要在哪裡找到卡密？', exclusive: false },
                { tit: '安~7-11付款，請幫我開專屬（）元', exclusive: true },
            ]
        }
    },
    methods: {
        checks(index) {
            this.selected = index;
        }
    },
}

</script>
