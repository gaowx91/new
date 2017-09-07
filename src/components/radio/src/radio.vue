<template>
    <div @click="checks" class="radio">
        <input type="radio" v-model="state" hidden :name="name" />
        <slot>{{text}}</slot>
    </div>
</template>
<script>
require("#/css/components/radio.css")
export default {
    name:'radio',
    props: {
        text: String,
        name: String,
        state: ''
    },
    data() {
        return {
            index: '',
            icon: ''
        }
    },
    methods: {
        checks(index) {
            this.$emit('my-Child', index = this.state);
        }
    },
}
</script>
