<template>
    <div id="dash"> 
        <van-tabbar v-model="active" active-color='#3cb963' >
            <van-tabbar-item replace to="/dash" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item replace to="/category" icon="apps-o">分类</van-tabbar-item>
            <van-tabbar-item replace to="/cart" icon="cart-o" :badge="GoodsNum > 0 ? GoodsNum :''">购物车</van-tabbar-item>
            <van-tabbar-item replace to="/mine" icon="contact">我的</van-tabbar-item>
        </van-tabbar>
        <keepAlive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keepAlive>
        <keepAlive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </keepAlive>
        
    </div>
</template>

<script>
 
 import {mapState,mapMutations} from 'vuex'
export default {
    name:'Dash',
    data() {
        return {
        active: Number(sessionStorage.getItem("tabBarIndex"))||0,
      
        }
    },
    watch:{
        active(value){
            let tabBarIndex=value>0?value:0;
            //缓存到本地
            sessionStorage.setItem('tabBarIndex',value);
        }
    },
    computed:{
        ...mapState(['shopCart']),
        GoodsNum(){
            if(this.shopCart){
                let  num=0;
                Object.values(this.shopCart).forEach((goods,index)=>{
                    num+=goods.num
                })
                return num;
            }else{
                return 0;
            }
            
        }
    },
    mounted() {
        //获取购物车数据
        this.INIT_SHOP_CART();
    },
    methods: {
        ...mapMutations(['INIT_SHOP_CART'])
    },
}
</script>


<style scoped>
#dash{
    width: 100%;
    height: 100%;
 
}
</style>
