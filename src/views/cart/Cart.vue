<template>
  <div id="cart" v-if="userInfo.token">
      <div class="carttop">
          <span class="toptitle">购物车</span>
          <span class="topremove" @click="clearCart()" >清空购物车</span>
      </div>
      <carybody :shopCart="shopCart"/>
      <div class="cartfooter">
          <div class="checkall">
            <input type="checkbox" :checked="checkedflag" @click="allselected(checkedflag)">
            <span>全选</span> 
          </div>
          <div class="carttotal">
              <span >合计:</span>
              <span class="pricetotal">￥{{pricetotal}}</span>
          </div>
          <div class="cartbuy">
              <router-link tag="span"  to="/order">
              去结算({{goodsCount}})
              </router-link>
          </div>
       </div>
  </div>
  <logintype v-else/>
</template>

<script>
import Carybody from './Carybody.vue'
import Logintype from './../../views/login/Logintype'
import { Dialog } from 'vant';
import {mapActions, mapMutations, mapState} from 'vuex'


export default {
  components: { Carybody ,Logintype, Logintype,},
    name:'Cart',
    data() {
        return {
            // checkedflag:false,
        }
    },
    mounted() {
        this.autoLogin();
    },
    computed:{
        ...mapState(['shopCart','userInfo']),

        checkedflag(){
            let flag=this.goodsCount>0
            Object.values(this.shopCart).forEach((goods,index)=>{
                if(!goods.checked){
                    flag=false
                }
            });
            return flag;
        },
         goodsCount(){
             let goodsCount=0;
             Object.values(this.shopCart).forEach((goods,index)=>{
                if(goods.checked){
                    goodsCount++
                }
            });
             return goodsCount
        },
        pricetotal(){
            let pricetotal=0;
             Object.values(this.shopCart).forEach((goods,index)=>{
                if(goods.checked){
                    pricetotal+=goods.price*goods.num
                }
            });
            return pricetotal.toFixed(2)
            console.log(pricetotal);
        }
    },
    methods: {
        ...mapMutations(['ALL_SELECTED','CLEAR_CART']),
        ...mapActions(['autoLogin']),
        allselected(checkedflag){
            checkedflag=!checkedflag
            this.ALL_SELECTED({checkedflag})
            },

        clearCart(){
            Dialog.confirm({
            title: '提示',
            message: '确认要清空购物车吗',
            })
            .then(() => {//点击确定
                 this.CLEAR_CART()
            })
            .catch(() => {//点击取消
                // do nothing
            });

                                
        }
    },
}
</script>


<style scoped>
#cart{
    width: 100%;
    height: 100%;
    background:#f5f5f5;
}
.carttop{
    width: 100%;
    height: 2.5rem;
    background: #ffffff;
    line-height: 2.5rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;

}

.toptitle{
    margin-left: 42%;
    font-weight: bold;
    font-size: 1rem;
}
.topremove{
    font-size: 0.8rem;
    color: #f54b4b;
    position: absolute;
    right: 0.5rem;
    top: 0;
}

.cartfooter{
    width: 100%;
    height: 2rem;
    background-color: #fff;
    position: fixed;
    bottom: 2.7rem;
    border-top: 1px solid #dddddd;
    line-height: 2rem;
    display: flex;
    font-size: 0.8rem;
    
}

.cartfooter input{
    width: 0.8rem;
    height: 0.8rem;
    border: 1px solid #cccccc;
    border-radius: 50%;
    outline: none;
    color: #ffffff;
    background-color: #fff;
    appearance: none;
    line-height: 0.75rem;
    text-align: center;   
    font-size: 0.7rem; 
    position: absolute;
    left: 0.4rem;
    top: 50%;
    margin-top: -0.4rem;

}

.cartfooter input:checked{
    color: #fff;background: #3cb963; border: 1px solid #3cb963;
}

.cartfooter input::after{
    content: '\2714';
}

.checkall span{
    display: block;
    margin-left: 1.4rem;
    width: 2rem;
}
.carttotal{
    margin-left: 1rem;
    width: 10rem;
}

.pricetotal{
    color:rgb(235, 63, 63)
}

.cartbuy{
    margin-top: 0.25rem;
    margin-left: 4.5rem;
    display: block;
    width: 6rem;
    height: 1.4rem;
    background:rgb(235, 63, 63) ;
    line-height: 1.4rem;
    color: #fff;
    text-align: center;
    border-radius: 15px;
}
</style>
