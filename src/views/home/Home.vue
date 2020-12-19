<template>
  <div id="home">
    <Header />
    <Focus :focusImg="focusImg" />
    <Nav :navmsgs="navmsgs" />
    <Sale :saleProduct="saleProduct" />
    <Ulike :ulikeproducts="ulikeproducts" />
    <Backtop v-if="ShowTopIcon" :ToTop="ToTop" />
  </div>
</template>

<script>
import { getHomeData } from "./../../service/api/index";

import Header from "./components/Header";
import Focus from "./components/Focus";
import Nav from "./components/Nav";
import Sale from "./components/Sale.vue";
import Ulike from "./components/Ulike.vue";
import Backtop from "./components/Backtop.vue";

import { Toast } from 'vant';

import {mapMutations} from 'vuex'

export default {
  name: "Home",
  components: {
    Header,
    Focus,
    Nav,
    Sale,
    Ulike,
    Backtop,
  },
  data() {
    return {
      focusImg: [],
      navmsgs: [],
      saleProduct: [],
      ulikeproducts: [],

      //是否显示totop按钮
      ShowTopIcon: false,

      
    };
  },
  created() {
    getHomeData()
      .then((response) => {
        
        if (response.success) {
          //获取首页轮播图
          this.focusImg = response.data.list[0].icon_list;
          //获取导航图信息
          this.navmsgs = response.data.list[2].icon_list;
          //获取秒杀商品信息
          this.saleProduct = response.data.list[3].product_list;
          //获取猜你喜欢信息
          this.ulikeproducts = response.data.list[12].product_list;
          //监听屏幕滚动，确定是否显示topicon
          this.ShowTopIconstatus();
        }
      })
      .catch((error) => {
        //todo
        console.log(error);
      });
  },
  mounted() {
   
   
  },
  methods: {
    ...mapMutations(["ADD_GOODS"]),

    ShowTopIconstatus() {
      window.addEventListener("scroll", () => {
        let scrollTOP =
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          window.pageYOffset;
        this.scrollTOP = scrollTOP;
        if (scrollTOP >= 200) {
          this.ShowTopIcon = true;
        } else {
          this.ShowTopIcon = false;
        }
      });
    },

    ToTop() {
      //定义一个定时器让他回到顶部
      let scrollToptimer = setInterval(() => {
        // let scrollTOP=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset;
        var speed = this.scrollTOP / 4;
        document.documentElement.scrollTop -= speed;
        if (this.scrollTOP == 0) {
          clearInterval(scrollToptimer);
        }
      }, 30);
    },
  },
};
</script>

<style scoped>
#home {
  width: 100%;
  height: 2000px;
}
</style>