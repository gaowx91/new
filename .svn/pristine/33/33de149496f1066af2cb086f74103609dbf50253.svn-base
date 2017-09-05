<template>
    <div class="wrapper">
        <v-Header></v-Header>
        <v-Content>
            <br>
            <br>
            <router-link to="orderlist">訂單列表</router-link><br><br><br>
            <router-link to="myquestion">我的提問</router-link><br><br><br>
        </v-Content>
        <vFooter>
            <v-Bottom slot="nav"></v-Bottom>
        </vFooter>
    </div>
</template>
<script>
import vBottom from '../../components/bottom/bottom-nav'
import vContent from '../../components/content/content'
import vFooter from '../../components/footer/footer'
import vHeader from '../../components/header/header'
export default {
    components: {
        vContent,
        vHeader,
        vFooter,
        vBottom
    },
    mounted(){
        this.overScroll();
    }
}

</script>
