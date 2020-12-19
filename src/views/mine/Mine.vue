<template>
  <div id="mine">
      <van-nav-bar
        title="我的"
        @click-right="onClickRight"
        :fixed=true
        
        >  
            <template #right>
                <van-icon name="bulb-o" size="20" badge="9" color="#333" />
            </template>
        </van-nav-bar>
<!-- @click="this.$router.push('/mine/minecenter')" -->
        <van-cell
         style="margin-top:2.5rem;background-color: #f5f5f5;" 
         :center=true
         @click="ToMinecenter()"
         >
            <!-- 使用 title 插槽来自定义标题 -->
            <template #title class="mineinfo" >
                <div class="mineinfoimg">
                    <img src="./../../images/header.jpg" alt="">
                </div>
                <div class="minginfonames">
                    <span class="minginfoname">叮咚_{{userInfo.token}}</span>
                    <span class="minginfoid">{{userInfo.phone}}</span>
                </div>
            </template>
        </van-cell>
        
        <van-grid clickable :column-num="3" >
            <van-grid-item  to="/" >
                <span class="ownernum">3</span>
                <span class="owner">优惠券</span>
            </van-grid-item>
            <van-grid-item >
                <span class="ownernum">595</span>
                <span class="owner">积分</span>
            </van-grid-item>
            <van-grid-item >
                <span class="ownernum">896.30</span>
                <span class="owner">余额.充值(元)</span>
            </van-grid-item>
        </van-grid>
        
        <van-cell-group  style="margin-top:0.5rem;">
            <van-cell :border=false title="我的订单" value="查看全部订单" is-link title-style="font-size:0.9rem" />
            <van-grid :border=false>
                <van-grid-item icon="peer-pay" text="待支付" />
                <van-grid-item icon="tosend" text="待收货" />
                <van-grid-item icon="records" text="待评价" />
                <van-grid-item icon="balance-pay" text="售后/退款" />
            </van-grid>
        </van-cell-group>

        <van-grid :border=false style="margin-top:0.5rem;" :column-num="2" :gutter="10">
            <van-grid-item >
                <div class="mineadwrap">
                    <div class="minead">
                        <span class="mineadtitle">叮咚渔场</span>
                        <span class="mineaddes">0元领🐟</span>
                    </div>
                    <div class="mineadimg">
                        <img src="https://img.ddimg.mobi/product/7068f53276ddc1558012546082.jpg!deliver.product.list" alt="">
                    </div>
                </div>
            </van-grid-item>
            <van-grid-item >
                <div class="mineadwrap">
                    <div class="minead">
                        <span class="mineadtitle">邀请邻友</span>
                        <span class="mineaddes">得40元红包</span>
                    </div>
                    <div class="mineadimg">
                        <img src="https://ddimg.ddxq.mobi/562d52ead80ee1532573147955.jpg!maicai.product.list" alt="">
                    </div>
                </div>
            </van-grid-item>
        </van-grid>        

        <van-grid  :column-num="4" :border=false style="margin-top:0.5rem; background-color: #fff;">
            <van-grid-item icon="vip-card-o" text="绿卡会员" />
            <van-grid-item icon="notes-o" text="收货地址" />
            <van-grid-item icon="gift-o" text="邀请有奖" />
            <van-grid-item icon="service-o" text="联系客服" />
            <van-grid-item icon="gift-card-o" text="礼品卡" />
            <van-grid-item icon="hotel-o" text="企业采购" />
            <van-grid-item icon="manager-o" text="叮咚招聘" />
            <van-grid-item icon="envelop-o" text="意见反馈" />
            <van-grid-item icon="scan" text="扫一扫" />
            <van-grid-item icon="setting-o" text="设置" />
        </van-grid> 
        <van-cell-group  style="margin-top:0.5rem;">
            <van-cell :border=false title="关于我们" value="下载APP体验更佳" is-link title-style="font-size:0.9rem" />
        </van-cell-group>     

        <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { Toast } from 'vant';
export default {
    name:'Mine',
    methods: {
        ...mapActions(['autoLogin']),
        onClickRight(){
            alert('消息通知')
        },
        ToMinecenter(){
            if (this.userInfo.token) {
                this.$router.push("/minecenter")
            } else {
                Toast({
                    message:'请登录后再操作',
                    duration:500,
                })
                
                return
            }
        }
    },
    mounted() {
        this.autoLogin()

    },
    computed:{
        ...mapState(['userInfo'])

    }
}   

</script>


<style scoped>

#mine{
    width: 100%;
    height: 100%;
    background:#f5f5f5
}
.van-nav-bar{
    background-color: #f5f5f5;
}

.ownergo{
    background-color: #f5f5f5;
}
.mineinfoimg{
    float: left;
    width: 4rem;
    height: 4rem;
   border-radius: 50%;
   overflow: hidden;
   border: 1px solid #cccccc;
}
.mineinfoimg img{
   width: 4rem;
    height: 4rem; 
}
.minginfonames{
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    padding-top:0.8em ;
}
.minginfoname{
    font-weight: bold;
    display: block;
    width:  7rem;
    white-space:nowrap ;
    overflow: hidden;
    text-overflow: ellipsis;

}
.minginfoid{
    font-size: 0.8rem;
    color: #cccccc;
}

.ownernum{
    font-size: 0.8rem;
    font-weight: bold;

}
.owner{
    font-size: 0.7rem;
    color: #ccc;

}
.mineadwrap{
    display: flex;
    justify-content: space-between;
}
.mineadimg{
    width: 3.5rem;
    height: 3.5rem;

}
.mineadimg img{
    width: 100%;
    height: 100%;
}

.minead{
    width: 5rem;
    display: flex;
    flex-direction: column;
    padding-top: 0.5rem;
    overflow: hidden;
}
.mineadtitle{
    font-size: 0.9rem;
}
.mineaddes{
    font-size: 0.7rem;
   padding-top: 0.3rem;
   color: #cccccc;
}
</style>
