<template>
  <div id="order">
      <van-nav-bar
            title="确认订单"
            left-text="返回购物车"
            left-arrow
            :fixed='true'
            @click-left="onClickLeft"
         />
        <van-contact-card 
            style="margin-top:3rem"
            type="add"
            add-text="选择收货地址"
            @click="onAdd" 
            />

        <van-cell-group style="margin-top:0.5rem">
            <van-cell title="送达时间" :value="arrivetime"  is-link @click="showData()"/>
            <van-popup v-model="show" round position="bottom">
                <van-datetime-picker
                v-model="currentDate"
                type="datetime"
                title="请选择送达时间"
                :min-date="minDate"
                @confirm="onConfirm()"
                @cancel="onCancel()"
                />               
            </van-popup>
            <van-cell value="共3件" is-link :center=true >
            <!-- 使用 title 插槽来自定义标题 -->
                <template #title>
                    <img src="https://img.ddimg.mobi/product/73729284b788d1558072397291.jpg!deliver.product.list" alt="" style="width:3rem">
                    <img src="https://img.ddimg.mobi/product/73729284b788d1558072397291.jpg!deliver.product.list" alt="" style="width:3rem">
                    <img src="https://img.ddimg.mobi/product/73729284b788d1558072397291.jpg!deliver.product.list" alt="" style="width:3rem">
                </template>
            </van-cell>
        </van-cell-group>

        <van-cell-group style="margin-top:0.5rem">
            <van-cell title="支付方式" value="微信"  is-link/>
        </van-cell-group>

        <van-cell-group style="margin-top:0.5rem">
            <van-cell title="备注" value="">
                <input type="text" placeholder="请输入备注">
            </van-cell>
        </van-cell-group>

        <van-cell-group style="margin-top:0.5rem">
            <van-cell title="商品金额" value="￥50.00" />
            <van-cell title="配送费" value="￥3.00" />
        </van-cell-group>

        <van-submit-bar label="实付： " :price="3050" button-text="提交订单" @submit="onSubmit" />
        <router-view></router-view>
  </div>

</template>

<script>

import moment from 'moment'
export default {
    name:'Order',
    data() {
        return {
            show:false,
            currentDate: new Date(),
            minDate:new Date(),
            arrivetime:'请选择送达时间'
        }

    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        },
        onAdd(){
            this.$router.push('/order/addresslist')
        },
        onSubmit(){
            alert("提交成功")
        },
        showData(){
            this.show=true;
        },
        onCancel(){
            this.show=false;
        },
        onConfirm(){
            this.show=false;
            this.arrivetime=moment(this.currentDate).format('MM月DD日,hh点mm分送达')
        }

    },
}
</script>

<style>
#order{
    width: 100%;
    height: 100rem;
    background-color: #f5f5f5;
}
</style>