<template>
    <div class="wrapper">
        <v-Header child>
            <div class="mod-header">
                <i class="mintui mintui-back" @click="$router.go(-1)"></i>
                <div class="title">
                    我要提問
                </div>
            </div>
        </v-Header>
        <v-Content padded>
            <v-Ask :types="1"></v-Ask>
        </v-Content>
    </div>
</template>
<script>
import vContent from '../../components/content/content'
import vHeader from '../../components/header/header'
import vAsk from './ask'
export default {
    data() {
        return {
        }
    },
    components: {
        vContent,
        vHeader,
        vAsk
    },
    mounted() {
        this.overScroll();
    }
}

</script>
