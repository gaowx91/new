<template>
    <nav class="tab-nav" id="tab-nav" slot="nav">
        <div class="tab-item">
        <router-link to="/home">
                <img src="static/images/common/home.png" alt="">
                <span class="txt">首頁</span>
            </router-link>
        </div>
        <div class="tab-item">
        <router-link to="/search">
                <img src="static/images/common/search.png" alt="">
                <span class="txt">全部遊戲</span>
            </router-link>
        </div>
        <div class="tab-item">
        <router-link to="/servers">
                <img src="static/images/common/headset.png" alt="">
                <span class="txt">聯絡客服</span>
            </router-link>
        </div>
        <div class="tab-item">
        <router-link to="/member">
                <img src="static/images/common/user.png" alt="">
                <span class="txt">個人中心</span>
            </router-link>
        </div>

    </nav>
</template>
<script>
import '#/css/components/bottomnav.css';
export default {
    name: 'app',
    data() {
        return {
            tabnav: [{
                imgUrl: 'static/images/common/home.png',
                title: '首頁',
                link: ''
            }, {
                imgUrl: 'static/images/common/search.png',
                title: '全部遊戲',
                link: 'search'
            }, {
                imgUrl: 'static/images/common/headset.png',
                title: '聯絡客服',
                link: 'customer'
            }, {
                imgUrl: 'static/images/common/user.png',
                title: '個人中心',
                link: 'member'
            }]
        }
    }
}
</script>
