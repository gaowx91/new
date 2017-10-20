<template>
    <div class="wrapper">
        <v-Header>
            <div class="mod-header">
                <i class="mintui mintui-back" @click="$router.go(-1)"></i>
                <div class="title">
                    <div class="mod-searchbar">
                        <i class="mintui mintui-search"></i> 輸入搜尋關鍵字
                    </div>
                </div>
                <span class="is-right">
                <img src="static/images/common/menu.png" alt="">
                </span>
            </div>
            <ul class="g-currency">
                <li @click="currencyVisible=true"><span class="w200">{{currencyCn}}<span class="text-muted">{{currencyEn}}</span></span>
                </li>
                <li @click="goodTypeVisible = true"><span class="w200">{{goodsType}}</span></li>
            </ul>
        </v-Header>
        <v-Content class="g-wrapper">
            <v-CellBox>
                <div class="mod-goods-list" :loading="loading">
                <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" :autoFill="false" ref="loadmore" >
                    <v-Cell :to="{path:'/goodsdetail',query: { goodId: item.vcGoodsNo,type:item.tiCurrency }}" v-for="(item,index) in goodsList" :key="index">
                        <div slot='left' class="cell-left">
                            <img v-lazy="item.img" class="my-avatar">
                        </div>
                        <div class="row hd">
                            <span class="badge badge-primary badge-min">{{item.vcGoodsNo |filterType}}</span>
                            <span class="tit">{{item.ncGoodsName}}</span>
                        </div>
                        <div class="row md">{{item | filterGoodsCates}}</div>
                        <div class="row bd">
                            <span class="text-default"><span class="text-danger money">{{item.dcPrice}}</span><span>{{currencyEn}}</span></span>
                            <span class="text-muted">紅利:{{item.iBonus}}</span>
                        </div>
                    </v-Cell>
                    <p v-if="goodsList.length == 0">暫無數據</p>
                    <p v-if="allLoaded && goodsList.length">暫無更多內容</p>
                    <!-- <div slot="bottom" class="mint-loadmore-bottom">
                      <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
                      <span v-show="bottomStatus === 'loading'">
                         <mt-spinner type="snake"></mt-spinner>
                      </span>
                    </div> -->
                </mt-loadmore>
                </div>
            </v-CellBox>
        </v-Content>
        <mt-popup v-model="currencyVisible" position="bottom" class="mint-popup-4 popup-select">
            <div class="popup-bar">
                <mt-button type="primary" @click="currencyVisible = false">取消</mt-button>
                <mt-button type="danger" @click="currencyHandle">確認</mt-button>
            </div>
            <mt-picker :slots="currencySlots" @change="currencyChange" :visible-item-count="3" ref="resetCurrencyValue"></mt-picker>
        </mt-popup>
        <mt-popup v-model="goodTypeVisible" position="bottom" class="mint-popup-4 popup-select">
            <div class="popup-bar">
                <mt-button type="primary" @click="goodTypeVisible = false">取消</mt-button>
                <mt-button type="danger" @click="goodsTypeHandle">確認</mt-button>
            </div>
            <mt-picker :slots="goodsSlots" @change="goodsTypeChange" :visible-item-count="3" ref="resetGoodsTypeValue"></mt-picker>
        </mt-popup>
    </div>
</template>
<script>
import '#/css/goods/goods_list.css'
import vContent from '../../components/content'
import vCellBox from '../../components/box'
import vCell from '../../components/cell'
import vHeader from '../../components/header'


const currency = {
    '台幣TWD': '1',
    '港幣HKD': '2',
    '人民幣RMB': '3',
};
const gameTypeData = {
    '全部物品': '0',
    '遊戲幣': '01',
    '道具': '02',
    '帳號': '03',
    '點數卡': '04',
    '代練': '05',
    '代練': '06',
    '送禮': '07',
    '其他': '08',
    '產包': '09',
    //'10' :'預售',
    '代儲': '11'
};
// const currency = {
//     '台幣': 'TWD',
//     '港幣': 'HKD',
//     '人民幣': 'RMB',
// };

const gametype_ar = {
    '0': '全部物品',
    '01': '遊戲幣',
    '02': '道具',
    '03': '帳號',
    '04': '點數卡',
    '05': '代練',
    '06': '商城道具',
    '07': '送禮',
    '08': '其他',
    '09': '產包',
    //'10' :'預售',
    '11': '代儲'
};


export default {
    data() {
        return {
            currencySlots: [{
                flex: 1,
                values: Object.keys(currency),
                // values: ['台幣', '港幣','人民幣'],
                className: 'slot1',
                textAlign: 'center',
                // valueIndex:'2'
                // value:'台幣'
            }],
            goodsSlots: [{
                flex: 1,
                values: Object.keys(gameTypeData),
                className: 'slot1',
                textAlign: 'center',
            }],
            currencyCn: '台幣',
            currencyEn: 'TWD',
            goodsType: '全部物品',
            currencyVisible: false,
            goodTypeVisible: false,
            loading:false,
            goodsList:[],
            allLoaded: false,
            bottomStatus: '',
            postData:{
                gameId:0,
                // gameId:5946,
                serverId:0,
                goodsTypeId:0,
                cardCateId:0,
                cardPointId:0,
                searchKey:'',
                currencyId:1,
                page:1,
                pageSize:5,
            },
            maxPage:1,
            topStatus:'',
        }
    },
    created(){
        console.log(this.$route.query);
        this.postData = Object.assign(this.postData,this.$route.query);
        console.log(this.postData);
        this.getGoodsList('top');
    },
    methods: {
        currencyChange(picker, values) {//币种picker改变
            // console.log(values[0]);
            // console.log(currency[values[0]]);
            // picker.setSlotValues(1, currency[values[0]]);
            this.currencyValue = values[0];
        },
        currencyHandle() {//币种确认
            this.currencyVisible = false;
            this.currencyCn = this.currencyValue.replace(/[A-Z]/g,'');
            this.currencyEn = this.currencyValue.replace(/[^A-Z]/g,'');
            // this.currencyEn = currency[this.currencyValue];
            //切换币种，重新拉商品列表
            if(this.postData.currencyId !== currency[this.currencyValue]){
                this.postData.currencyId = currency[this.currencyValue];
                this.getGoodsList('top');//重新加载
            }
        },
        goodsTypeChange(picker, values) {//商品类型picker改变
            // picker.setSlotValues(1, values[0]);
            this.goodsValue = values[0];
        },
        goodsTypeHandle() {//商品类型确认
            this.goodTypeVisible = false;
            this.goodsType = this.goodsValue;
            //切换币种，重新拉商品列表
            if(this.postData.goodsTypeId!== gameTypeData[this.goodsValue]){
                this.postData.goodsTypeId = gameTypeData[this.goodsValue];
                this.getGoodsList('top');//重新加载
            }
        },
        handleTopChange(status) {
            this.topStatus = status;
        },
        loadTop(){
            this.postData.page = 1;
            this.getGoodsList('top');
            this.$refs.loadmore.onTopLoaded();
        },
        handleBottomChange(status) {
            console.log(status);
        this.bottomStatus = status;
        },
        loadBottom() {
         // this.postData.page += 1;
         console.log(this.postData.page);
         console.log(this.maxPage);
         if(this.postData.page < this.maxPage){
            this.getGoodsList('bottom');
          }else{
            this.allLoaded = true;// 若数据已全部获取完毕
            console.log('数据已全部获取完毕');
          }
          this.$refs.loadmore.onBottomLoaded();//加载数据后需要对组件进行一些重新定位的操作
        },
        getGoodsList(status){//获取商品列表
            // let apiUrl = 'http://wap.api.7391test.com/api/search/GoodSearch/S-0-0-0-0-0-0-0-0-0-0-0-1-test-15-1';
            if(status == 'top'){
                this.postData.page = 1;
            }else{
                this.postData.page += 1
            }
            var apiUrl = this.CONFIG.GOOD_SEARCH +
            'S-' + this.postData.gameId + '-' + this.postData.serverId + '-' +
            this.postData.goodsTypeId + '-0-0-0-0-0-' + this.postData.cardPointId + '-' +
            this.postData.cardCateId + '-0-' + this.postData.currencyId + '-' +
            this.postData.searchKey + '-' + this.postData.pageSize + '-' + this.postData.page;

            this.loading = true;
            this.$http({
                method: 'get',
                url: apiUrl, 
                // params: this.paras,
            }).then(res => {
                //console.log(res.data);
                this.loading = false;
                if (res.data.status == true) {
                    if(status == 'top'){
                        this.goodsList = res.data.data;
                        this.allLoaded = false;//可再加载更多
                    }else{
                        this.goodsList.push(...res.data.data);
                    }
                    if(res.data.data.length){
                        let pagination = res.data.pagination;
                        this.maxPage = Math.ceil(pagination.total/pagination.pageSize);
                    }
                    console.log(this.goodsList);

                } else {
                    // this.$message.error(res.data.info)
                    // if (res.data.info == '你还未登录') {
                    //     this.$router.push('/login');
                    // }
                }
            }).catch(error => {
                this.loading = false;
                // this.$message.error('服务器出错，联系客服');
                // if(callback && typeof callback == 'function'){
                //  callback();
                // }
            });
        },
    },
    watch:{
        'currencyVisible'(n){
            if(n){
                this.$refs.resetCurrencyValue.setSlotValue(0, this.currencyCn+this.currencyEn);
            }
        },
        'goodTypeVisible'(n){
            if(n){
                this.$refs.resetGoodsTypeValue.setSlotValue(0, this.goodsType)
            }
        }
    },
    components: {
        vContent,
        vHeader,
        vCell,
        vCellBox
    },
    filters:{
        filterType(value){
            if(value){
                let typeId = value.substring(1,3);
                return gametype_ar[typeId];
            }
        },
        filterGoodsCates(item){
            let goodsCates = item.cGoodsCates;
            let goodType = '';
            if (goodsCates == "04") { //点数卡
                goodType = gametype_ar[goodsCates] + "        " + item.GameName + "/" + item.GameServer;
            } else if (item.cGoodsCates == "09") { //产包
                goodType = gametype_ar[goodsCates] + '       ' + item.GameName + item.GameServer;
            } else {
                goodType = item.GameName + item.GameServer + '/' + gametype_ar[goodsCates];
            }
            return goodType;
        }
    },
    mounted(){
        this.overScroll();
    },
}

</script>
<style>
    .mint-loadmore-bottom span {
    display: inline-block;
    -webkit-transition: .2s linear;
    transition: .2s linear;
    vertical-align: middle
}
.mint-loadmore-bottom span.is-rotate {
    -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
}
</style>