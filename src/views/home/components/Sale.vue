<template>
  <div class="salewrap">
      <div class="saletitle">
          <div class="title">限时抢购</div>
          <div class="saletime">07:00场</div>
          <div class="salestatus">已结束</div>
          <div class="more">更多</div>
      </div>
      <div class="salecontents">
          <saleitem v-for="(saleProductor,index) in saleProduct" :key="index" :saleProductor="saleProductor"/>
      </div>
  </div>
</template>

<script>
import Saleitem from './Saleitem.vue'

export default {
        components: { Saleitem },
        name:'Sale',
        props:{
            saleProduct:Array
        }
}
</script>

<style scoped>
.salewrap{
    margin-top:0.5rem ;
    width: 100%;
    height: 15rem;
     background: #ffffff; 
}

.saletitle {
    widows: 100%;
    height: 2rem;
     /* background: red;  */
    line-height: 1.3rem;
    padding: 0.3rem 0.3rem;
}
.title{
    /* width: 25%;  */
    height: 1.31rem;
    float: left;
    font-size: 1rem;
    border-left: 4px solid #3cb963;
    padding: 0 0.2rem;    
}
.saletime{
    font-size: 0.7rem;
    color: red;
    float: left;
    margin-left: 0.2rem;
    
}
.salestatus{
    font-size: 0.7rem;
    margin-left: 0.2rem;
    float: left;
    border: 1px solid #999;
    color: #666;
    padding: 0 0.15rem; 
    border-radius: 5px;
}
.more{
    float:right;
    color: #3cb963;
    font-size: 0.7rem;
    margin-right: 0.2rem;
}
 .salecontents{
    
   width: 100%; 
    height: 13rem;
    
    display: flex; 
    overflow-x: auto;
    justify-content: space-between; 
    
} 
</style>