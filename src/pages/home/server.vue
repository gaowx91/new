<template>
    <div class="wrapper">
        <v-Header fixed>
            <div class="mod-header" slot="con">
                <i class="mintui mintui-back" @click="$router.go(-1)"></i>
                <div class="title">
                    聯絡客服
                </div>
            </div>
        </v-Header>
        <iframe src="http://www5.53kf.com/m.php?cid=70688291&arg=9003514" width="100%" height="100%" frameborder="0"></iframe>
    </div>
</template>
<script>
import vBottom from '@/components/bottom'
import vContent from '@/components/content'
import vFooter from '@/components/footer'
import vHeader from '@/components/header'
export default {
    components: {
        vContent,
        vHeader
    }
}
</script>
