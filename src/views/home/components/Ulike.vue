<template>
  <div class="ulike">
      <div class="uliketitle">
          <div class="titlename">
              <span class="titlenamemain">猜你喜欢</span>
              <span class="titlenamesub">精选好货</span>
          </div>
          <div class="titlename">
              <span class="titlenamemain">特价促销</span>
              <span class="titlenamesub">今日折扣</span>
          </div>
          <div class="titlename">
              <span class="titlenamemain">惬意下午茶</span>
              <span class="titlenamesub">享午后时光</span>
          </div>
          <div class="titlename">
              <span class="titlenamemain">火锅到家</span>
              <span class="titlenamesub">还吃省事</span>
          </div>
         
      </div>
        
        <div class="ulikecontent">
                <Ulikeitem v-for="(ulikeproduct,index) in ulikeproducts" :key="index" :ulikeproduct='ulikeproduct'/>

        </div>
        
  </div>
</template>

<script>
import Ulikeitem from './Ulikeitem.vue'
export default {
  components: { Ulikeitem },
        name:'Ulike',
        props:{
            ulikeproducts:Array,
        }
}
</script>

<style scoped>
.ulike{
    margin-top: 0.5rem;
    width: 100%;
    height: 100%;
   
}
.uliketitle{
    width: 100%;
    height: 2.5rem;
    
    line-height: 1.25rem;
}
.titlename{
    width: 25%;
    height: 100%;
    /* background: #cccccc; */
    padding:0  0.2rem ;
    text-align: center;
    float: left;
}
.titlenamemain{
    display: block;
    color: #3cb963;
    font-weight: 550;
    font-size: 0.9rem;
}
.titlenamesub{
    display: block;
    color: #ffffff;
    background: #3cb963;
    height:1rem ;
    line-height: 1rem;
    width: 3.7rem;
    margin: 0 auto;
    font-size: 0.7rem;
    border-radius: 10px;
}
.ulikecontent{
    /* height: auto; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem;
    flex-wrap: wrap;
    padding-bottom: 3.6rem;
}

</style>