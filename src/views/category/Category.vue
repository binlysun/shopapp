<template>
  <div id="Category">
    <div class="searchboxtop">
        <input type="text" placeholder="请输出搜索内容">
        <van-icon class="searchicon" name="search" />
    </div>
    <div class="Categorycentent">
      <div class="leftwrap">
        <div class="Cateleft">
          <!-- <span class="catename"><i class="new">新</i>新品</span> -->
          <span 
          ref="menulist"
          class="catename" 
          v-for="(cate, index) in cateData" 
          :key="index"
          :class="{curcate:curIndex===index}"
          @click="changeCatename(index)"
          >{{cate.name}}</span>
        </div>
      </div>
      <div class="cateright">
        <Cateright :CateDetailData='CateDetailData'/>
      </div>
    </div>
  </div>
</template>

<script>

import BScrool from 'better-scroll'

import { getCateData } from "./../../service/api/index";
import {getCateDetailData} from './../../service/api/index'

import { GoodsAction, Toast } from 'vant';
//引入pubsub

import {mapMutations} from 'vuex'

import Cateright from './Cateright.vue';

export default {
  components: { Cateright },
 
  name: "Category",
  data() {
    return {
      activeKey: 0,
      value: "",
      cateData: [],
      CateDetailData:[],
      curIndex:0,
    };
  },
  created() {
    getCateData()
      .then((response) => {
       
        //获取分类内容
        this.cateData = response.data.cate;

         //数据加载完成后初始化滚动框架
        this.$nextTick(()=>{
        this.leftScroll=new BScrool('.leftwrap',{probeType:3})
      });
      })
      .catch((error) => {
        //todo
        console.log(error);
      });
      getCateDetailData("lk001")
      .then((response) => {
        
        //获取分类内容
        this.CateDetailData = response.data.cate[0].products;
      })
      .catch((error) => {
        //todo
        console.log(error);
      });

      
  },
  methods:{
    ...mapMutations(['ADD_GOODS']),
    //左边点击改变分类
    changeCatename(index){

      this.curIndex=index

      //通过bscroll滚动顶部
      let menulist=this.$refs.menulist;
      let ml=menulist[index];
      
      this.leftScroll.scrollToElement(ml,300);

      let url=index+1
      getCateDetailData('lk00'+url)
      .then((response) => {
       
        //获取分类内容
        this.CateDetailData = response.data.cate[0].products;
      })
    } 
  },
  mounted() {
    
  },

};
</script>


<style scoped>
#Category {
  width: 100%;
  /* height: 100%; */
}

.searchboxtop{
    border-bottom: 1px solid #f5f5f5;
    background: #fff;
     z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3.15rem;
    padding: 0.5rem;
}
.searchboxtop input{
  display: block;
  height: 1.8rem;
  margin: 0 auto;
  line-height: 2.15rem;
  width: 90%;
  text-align: center;
  border: 1px solid #f5f5f5;
 border-radius: 30px;
 font-size: 0.5rem;
 position: relative;
}
.searchicon{
  position: absolute;
  top: 1rem;
  left: 30%;
}
.Cateleft {
  width: 25%;
  /* height: auto; */
  float: left;

}

.Categorycentent{
  margin-top: 3.15rem;
} 
.catename {
  display: block;
  width: 100%;
  height: 2.5rem;
  text-align: center;
  line-height: 2.5rem;
  font-size: 0.8rem;
}
.curcate {
  background-color: #fff;
  border-left: 3px solid #3cb963;
}

.catename .new {
  color: #fff;
  margin: 0 0.2rem;
  background: #f05656;
  display: inline-block;
  font-size: 0.6rem;
  width: 0.7rem;
  height: 0.7rem;
  line-height: 0.7rem;
  border-radius: 3px;
  text-align: center;
}
</style>
