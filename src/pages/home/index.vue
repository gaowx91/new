<template>
    <div class="wrapper">
        <v-Header>
            <div class="mod-header" slot="home" id="mod-header">
                <router-link to="">
                    <span class="is-left text-default">
                    <img src="static/images/common/aim.png" alt="">立即登入
                    </span>
                </router-link>
                <div class="mod-searchbar">
                    <i class="mintui mintui-search"></i> 輸入搜尋關鍵字
                </div>
                <span class="is-right">
                <img src="static/images/common/scan.png" alt="">
                </span>
            </div>
        </v-Header>
        <v-Content>
            <mt-swipe class="mod-swipe">
                <mt-swipe-item v-for="(item, index) in data.swipe" :key="index">
                    <router-link :to="item.url">
                        <img v-lazy="item.img">
                    </router-link>
                </mt-swipe-item>
            </mt-swipe>
            <nav class="mod-re-entry">
                <router-link v-for="(item,index) in data.entryNav" :to="item.url" :key="index">
                    <figure>
                        <img v-lazy="item.img" alt="">
                        <figcaption>
                            {{item.tit}}
                        </figcaption>
                    </figure>
                </router-link>
            </nav>
            <v-CellBox>
                <div class="cell-header" slot='header'>
                    <h3 class="tit">線上遊戲</h3>
                    <router-link to="goodslist" class="more">顯示全部<i class="mint-cell-allow-right"></i></router-link>
                </div>
                <div class="mod-re-pc">
                    <router-link v-for="(item,index) in data.gamePc" :to="item.url" :key="index">
                        <img v-lazy="item.img" alt="">
                    </router-link>
                </div>
            </v-CellBox>
            <v-CellBox>
                <div class="cell-header" slot='header'>
                    <h3 class="tit">點數卡</h3>
                    <router-link to="goodslist" class="more">顯示全部<i class="mint-cell-allow-right"></i></router-link>
                </div>
                <div class="mod-re-card">
                    <router-link v-for="(item,index) in data.gameCard" :to="item.url" :key="index">
                        <figure>
                            <img v-lazy="item.img" alt="">
                            <figcaption>
                                {{item.tit}}
                            </figcaption>
                        </figure>
                    </router-link>
                </div>
            </v-CellBox>
            <v-CellBox>
                <div class="cell-header" slot='header'>
                    <h3 class="tit">手遊專區</h3>
                    <router-link to="goodslist" class="more">顯示全部<i class="mint-cell-allow-right"></i></router-link>
                </div>
                <div class="mod-re-sy">
                    <router-link v-for="(item,index) in data.gameSy" :to="item.url" :key="index">
                        <figure>
                            <img v-lazy="item.img" alt="">
                            <figcaption>
                                {{item.tit}}
                            </figcaption>
                        </figure>
                    </router-link>
                </div>
            </v-CellBox>
            <v-CellBox>
                <div class="cell-header" slot='header'>
                    <h3 class="tit">商品推薦</h3>
                </div>
                <div class="mod-card-list">
                    <v-Cell :to="{path:item.url,params:{goodsNo:'S01-170922-1721956157'}}" v-for="(item,index) in data.gameDetail" :key="index">
                        <div slot='left' class="cell-left">
                            <img v-lazy="item.img" class="my-avatar">
                        </div>
                        <div class="row hd">
                            <span class="badge badge-primary badge-min">{{item.type}}</span>
                            <span class="tit">{{item.tit}}</span>
                        </div>
                        <div class="row md">{{item.txt}}</div>
                        <div class="row bd">
                            <span class="text-default">
                            <span class="text-danger money">{{item.money}}</span>
                            <span>RMB</span>
                            </span>
                            <span class="text-muted">紅利:{{item.bonus}}</span>
                        </div>
                    </v-Cell>
                </div>
            </v-CellBox>
        </v-Content>
        <vFooter>
            <v-Bottom slot="nav"></v-Bottom>
        </vFooter>
    </div>
</template>
<script>
require('#/css/home/index.css')
import vCell from '@/components/cell'
import vBottom from '@/components/bottom'
import vFooter from '@/components/footer'
import vContent from '@/components/content'
import vHeader from '@/components/header'
import vCellBox from '@/components/box'
export default {
    data() {
        return {
            wrapperHeight: 0,
            data:''
        }
    },
    components: {
        vCell,
        vBottom,
        vHeader,
        vContent,
        vFooter,
        vCellBox
    },
    methods:{

    },
    mounted() {
        this.overScroll();
        this.$http.get('static/api/home.json').then((res) => {
            this.data=res.data
        })
    }
}

</script>
