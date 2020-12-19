<template>
  <div class="saleitem" >
      <div class="itemimg">
          <img :src="saleProductor.small_image" :alt="saleProductor.pec" >
      </div>
      <div class="itemname">
          {{saleProductor.product_name}}
      </div>
      <div class="itemfoot">
          <span class="price">￥{{saleProductor.price}}</span>
          <span class="oldprice">￥{{saleProductor.origin_price}}</span>
          <van-icon class="itemcart" name="cart" color="#fff" size="1rem" @click="addToCart(saleProductor)"/>
      </div>

  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { Toast } from 'vant';

export default {
        name:'Saleitem',
        props:{
            saleProductor:Object
        },
        methods:{
        ...mapMutations(["ADD_GOODS"]),
        addToCart(goods){
            this.ADD_GOODS({
              goodsId:goods.id,
              goodsName:goods.name, 
              goodsImage:goods.small_image, 
              goodsPrice:goods.price,
              checked: true,
          });
          Toast({
                message: '添加到购物车成功！',
                duration: 800,
              });
        }
    }
}
</script>

<style scoped>
.saleitem{
    width: 33%;
    height: 13rem;
    /* background-color: #ccc; */
    padding: 0.5rem 0.3rem;
    position: relative;
   flex-shrink: 0;
   
}
.itemimg{
    width: 100%;
    height: 6.8rem;
}

.itemimg img{
    width: 100%;
    height: 100%;
}
.itemname{
    font-size: 0.8rem;
    line-height: 1rem; 
    margin-top: 0.5rem;
    width: 100%;
    height: 2rem; 
    /* white-space: nowrap; */
    /* overflow: hidden;
    text-overflow: ellipsis;
    */
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.itemfoot{
    width: 100%;
    margin-top: 0.5rem;  
    font-size: 0.5rem; 
}
.oldprice{
    color: #666;
    text-decoration: line-through;
    display: block;
    /* font-size: 0.6rem; */
}
.price{
    color: #f76e6e;
    display: block;
    font-size: 0.8rem;
    
}
.itemcart{
    width: 1.5rem;
    height: 1.5rem;
    background: #3cb963;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0.8rem;
    right: 1rem;
}
</style>