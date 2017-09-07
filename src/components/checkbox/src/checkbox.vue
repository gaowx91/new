<template>
    <div @click="checks" class="checkbox" :class="selected">
        <!-- <div @change="$emit('change', state)"> -->
        <input type="checkbox" v-model="state" hidden />
        <i :class="'icon icon-'+icon"></i>
        <!-- {{state}} -->
        <input type="text" :id="id" hidden checked>
        <span v-if="text">{{text}}</span>
    </div>
</template>
<script>
require("#/css/components/checkbox.css")
export default {
    name:'checkbox',
    props: {
        text: String,
        id:String
    },
    data() {
        return {
            state: this.value,
            icon: 'check-circle',
            selected:'selected'
        }
    },
    methods: {
        checks() {
            (this.state = !this.state) ? (this.icon = "circle-blank",this.selected=''): (this.icon = "check-circle",this.selected='selected');
        }
    },
}
</script>

