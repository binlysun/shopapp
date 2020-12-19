<template>
  <div class="ulikeitem" >
      <div class="itemimg">
          <img :src="ulikeproduct.small_image" :alt="ulikeproduct.name" >
      </div>
      <div class="itemname">
          {{ulikeproduct.product_name}}
      </div>
      <div class="itemdes">
          {{ulikeproduct.spec}}
      </div>
      <div class="itemfoot">
          <span class="price">￥{{ulikeproduct.price}}</span>
          <span class="oldprice">￥{{ulikeproduct.origin_price}}</span>
          <div>
            <van-icon class="itemcart" name="cart" color="#fff" size="1rem"  @click="addToCart(ulikeproduct)"/>
          </div>
      </div>
  </div>
</template>

<script>

import { Toast } from 'vant';
import {mapMutations} from 'vuex'

export default {
    name:'Ulikeitem',
    data(){
        return{
           
        }
    },
    props:{
        ulikeproduct:Object
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
.ulikeitem{
    margin-top: 0.8rem;
    background: #ffffff;
    width: 49%;
    height: 15rem;
    border-radius: 8px;
    flex-shrink: 0;
    padding: 0.5rem;
    position: relative;
}
.itemimg{
    width: 100%;
    height: 8rem;
}

.itemimg img{
    width: 100%;
    height: 100%;
}
.itemname{
    font-size: 0.9rem;
    line-height: 1rem; 
    margin-top: 0.5rem;
    width: 100%;
    height: 2.1rem; 
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

.itemdes{
    margin-top: 0.2rem;
    height: 1rem;
    line-height: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.7rem;
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
    bottom: 0.7rem;
    right: 1rem;
}
</style>