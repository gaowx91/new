<template>
    <div class="ask-check" v-if="!exclusive" @click="selects"   >
        <span class="radio-label">{{tit}}</span>
    </div>
    <div class="ask-check" v-else @click="selects" >
        <span class="radio-label">{{tit}}</span>
        <div class="radio-other">
            <input type="text" placeholder="在此輸入金額">元
        </div>
    </div>
</template>
<script>
import '../../../static/css/components/ask.css';
export default {
    props: {
        tit: '',
        exclusive: {
            type: Boolean,
            default: false
        },
        selected:''
    },
    data() {
        return {
            index: '',
        }
    },
    methods: {
        selects(index) {
            this.$emit('selects', index=this.selected)
        }
    }
}

</script>

