<template>
    <div class="wrapper">
        <v-Content>s</v-Content>
        <vFooter>
            <v-Bottom slot="nav"></v-Bottom>
        </vFooter>
    </div>
</template>
<script>
import vCell from '../../components/cell'
import vBottom from '../../components/bottom'
import vFooter from '../../components/footer'
import vContent from '../../components/content'
export default {
    data() {
        return {
            wrapperHeight: 0,
            swipe: [{
                url: '',
                tit: '每日簽到',
                img: 'static/images/banner/banner.png'
            }, {
                url: '',
                tit: '點卡購買',
                img: 'static/images/banner/banner.png'
            }, {
                url: '',
                tit: '手遊專區',
                img: 'static/images/banner/banner.png'
            }],
            entryNav: [{
                url: '',
                tit: '每日簽到',
                img: 'static/images/nav/entry_nav_1.png'
            }, {
                url: '',
                tit: '點卡購買',
                img: 'static/images/nav/entry_nav_2.png'
            }, {
                url: '',
                tit: '手遊專區',
                img: 'static/images/nav/entry_nav_3.png'
            }, {
                url: '',
                tit: '紅利商城',
                img: 'static/images/nav/entry_nav_4.png'
            }, {
                url: '',
                tit: '紅利奪寶',
                img: 'static/images/nav/entry_nav_5.png'
            }, {
                url: '',
                tit: '玩遊戲',
                img: 'static/images/nav/entry_nav_6.png'
            }, {
                url: '',
                tit: '實物商城',
                img: 'static/images/nav/entry_nav_7.png'
            }, {
                url: '',
                tit: '便民服務',
                img: 'static/images/nav/entry_nav_8.png'
            }, {
                url: '',
                tit: '免費虛寶',
                img: 'static/images/nav/entry_nav_9.png'
            }, {
                url: '',
                tit: '代儲專區',
                img: 'static/images/nav/entry_nav_10.png'
            }],
            gamePc: [{
                url: '',
                tit: '每日簽到',
                img: 'static/images/pc/pc_1.png'
            }, {
                url: '',
                tit: '點卡購買',
                img: 'static/images/pc/pc_2.png'
            }, {
                url: '',
                tit: '手遊專區',
                img: 'static/images/pc/pc_3.png'
            }, {
                url: '',
                tit: '紅利商城',
                img: 'static/images/pc/pc_4.png'
            }],
            gameCard: [{
                url: '',
                tit: 'MY CARD',
                img: 'static/images/card/card_1.png'
            }, {
                url: '',
                tit: 'GASH',
                img: 'static/images/card/card_2.png'
            }, {
                url: '',
                tit: '華儀WGS卡',
                img: 'static/images/card/card_3.png'
            }, {
                url: '',
                tit: '普雷卡',
                img: 'static/images/card/card_4.png'
            }, {
                url: '',
                tit: 'A卡（香港）',
                img: 'static/images/card/card_5.png'
            }, {
                url: '',
                tit: 'HEAT Project',
                img: 'static/images/card/card_6.png'
            }, {
                url: '',
                tit: 'BY卡',
                img: 'static/images/card/card_7.png'
            }, {
                url: '',
                tit: '遊E卡',
                img: 'static/images/card/card_8.png'
            }, {
                url: '',
                tit: 'GAME淘卡',
                img: 'static/images/card/card_9.png'
            }, {
                url: '',
                tit: '查看更多',
                img: 'static/images/common/add.png'
            }],
            gameSy: [{
                url: '',
                tit: '龍之谷',
                img: 'static/images/sy/sy_1.png'
            }, {
                url: '',
                tit: '傳說對決',
                img: 'static/images/sy/sy_2.png'
            }, {
                url: '',
                tit: '陰陽師',
                img: 'static/images/sy/sy_3.png'
            }, {
                url: '',
                tit: 'NBA LIVE',
                img: 'static/images/sy/sy_4.png'
            }, {
                url: '',
                tit: '托蘭異世錄',
                img: 'static/images/sy/sy_5.png'
            }, {
                url: '',
                tit: '創世破曉',
                img: 'static/images/sy/sy_6.png'
            }, {
                url: '',
                tit: '白貓tennis',
                img: 'static/images/sy/sy_7.png'
            }, {
                url: '',
                tit: '貓咪大戰爭',
                img: 'static/images/sy/sy_8.png'
            }, {
                url: '',
                tit: 'Fate GO',
                img: 'static/images/sy/sy_9.png'
            }, {
                url: '',
                tit: '查看更多',
                img: 'static/images/common/add.png'
            }],
            gameDetail: [{
                url: '',
                tit: 'Google play谷歌卡( 500點 ★網Google play谷歌卡( 500點 ★網Google play谷歌卡( 500點 ★網',
                txt: '谷歌卡(香港)／500點',
                img: 'static/images/game/game_1.png',
                money: '452.56',
                bonus: '9000',
                type: '點數卡',
                stock: '100',
                recm: false
            }, {
                url: '',
                tit: 'steam點數卡(港幣) 1000港幣 ★steam點數卡(港幣) 1000港幣 ★',
                txt: 'steam點數卡(香港) ／1000點',
                img: 'static/images/game/game_2.png',
                money: '89299.82',
                bonus: '18000',
                type: '點數卡',
                stock: '50',
                recm: true
            }, {
                url: '',
                tit: 'Google play谷歌卡( 500點 ★網Google play谷歌卡( 500點 ★網Google play谷歌卡( 500點 ★網',
                txt: '谷歌卡(香港)／500點',
                img: 'static/images/game/game_1.png',
                money: '452.56',
                bonus: '9000',
                type: '點數卡',
                stock: '9999',
                recm: false
            }]
        }
    },
    components: {
        vCell,
        vBottom,
        vContent,
        vFooter
    },

    mounted() {

    }
}

</script>
<style scoped>
@import '/static/css/home/index.css'

</style>
