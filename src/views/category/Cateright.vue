<template>
  <div class="catedetail">
      <div class="catedetailwrap">
          <div class="catedetailtop">
            <span class="catename">推荐</span>
            <div class="catedetailtopR">
              <span>销量</span>
              <span>价格</span>
            </div>
          </div>       
         <div class="detailall">
            <div class="detailitem" v-for="(CateDetail,index) in CateDetailData" :key="index">
              <div class="detailimg">
                <img :src="CateDetail.small_image" :alt="CateDetail.product_name" />
              </div>
              <div class="detaildes">
                <span class="detailname">{{CateDetail.product_name}}</span>
                <span class="detailspec">{{CateDetail.spec}}</span>
                <div class="detailprice">
                  <span class="price">￥{{CateDetail.price}}</span>
                  <span class="oldprice">￥{{CateDetail.origin_price}}</span>
                  <van-icon class="itemcart" name="cart" color="#fff" size="1rem" @click="addToCart(CateDetail)"/>
                </div>
              </div>
            </div>
        </div> 
      </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import {getCateDetailData} from './../../service/api/index'
import { mapMutations } from 'vuex';
export default {
  name: "Cateright",
  data() {
    return {
      // CateDetailData:[],
    };
  },
  props:{
    CateDetailData:{}
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
          })
          Toast({
                message: '添加到购物车成功！',
                duration: 800,
              });
        }

       
  }

};
</script>

<style scoped>
.catedetail {
  width: 75%;
  /* margin-top: 3.15rem; */
  background: #ffffff;
  float: right;
}
.catedetailwrap {
  margin-left: 0.5rem;
  /* position: relative; */
}

.catedetailtop {
  width: 74%;
  height: 2rem;
  line-height: 2rem;
  font-size: 0.7rem;
  border-bottom: 1px solid #f5f5f5;
  float: right;
  margin-right: 2%;
  color: #666;
 background: #ffffff;
  position: fixed;
  top:3.15rem;
  left: 25%;
  z-index: 999;
}

.catedetailtop .catename {
  display: block;
  float: left;
}
.catedetailtopR {
  float: right;
  width: 6rem;
  display: flex;
  flex-direction: row;
}

.catedetailtopR span {
  display: inline-block;
  width: 2.2rem;
  height: 100%;
  margin-left: 0.5rem;
}
.detailall{
  width: 100%;
  height: 50rem;
  margin-top:2.5rem ;
  
}
.detailitem{
  width: 100%;
  height: 6.5rem;
  background: #ffffff;
  padding: 1rem 0.5rem;
  position: relative;
  border-bottom: 1px solid #f5f5f5;
}
.detailimg{
  width:4.5rem ;
  height: 4.5rem;
  float: left;
  
}
.detailimg img{
  width: 100%;
  height: 100%;
}
.detaildes{
  float: left;
  width:9.5rem ;
  margin-left: 0.5rem; 
  display: flex;
  flex-direction: column;
  
}
.detailname{
  display: inline-block;
  height: 1.1rem;
  line-height: 1.1rem;
  font-size: 0.8rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.detailspec{
  display: inline-block;
  font-size: 0.6rem;
  height:2.2rem ;
  line-height: 1.1rem;
  overflow: hidden;
}
.detailprice{
  height: 1.2rem;
}
.oldprice{
    color: #666;
    text-decoration: line-through;
    /* display: block; */
    font-size: 0.6rem;
    margin-left: 0.3rem;
}
.price{
    color: #f76e6e;
    /* display: block; */
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
    right: 0.7rem;
}

</style>