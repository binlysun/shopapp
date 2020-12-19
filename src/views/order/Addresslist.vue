<template>
  <div id="addresslist">
    <van-nav-bar
      title="选择联系地址"
      left-text="返回确认订单"
      left-arrow
      :fixed="true"
      @click-left="onClickLeft"
    />
    <van-address-list
      v-model="chosenAddressId"
      style="margin-top:3rem"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
    <router-view></router-view>
  </div>
</template>

<script>
import { Toast } from "vant";
import {getUserAddress} from './../../service/api/index'
import { mapState } from 'vuex';
import PubSub from 'pubsub-js'

export default {
  name: "Addaddress",
  data() {
    return {
      chosenAddressId:null,
      list: [],
      
    };
  },
  computed:{
    ...mapState(['userInfo']),
  },
  mounted() {
    this.getUserAddress();
    PubSub.subscribe ('refreshList',(msg)=>{
      if (msg==='refreshList') {
        this.getUserAddress()
      }
    })

  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onAdd() {
      this.$router.push('/order/addresslist/addaddress');
    },

    onEdit(adress,index) {
      this.$router.push("/order/addresslist/editaddress?address_id="+adress.address_id);

    },
    async  getUserAddress(){
      if (this.userInfo.token) {
         let result =await getUserAddress(this.userInfo.token)
         if (result.success_code===200) {
           let adressarr=result.data;
           this.list=[];
           adressarr.forEach((address,index) => {
             let adress={
                  id: String(index+1),
                  name:address.address_name,
                  tel: address.address_phone,
                  address: address.address_area+address.address_area_detail,
                  isDefault: address.address_tag,
                  user_id:address.user_id,
                  address_id:address._id,
             }
             this.list.unshift(adress);
           });
            this.chosenAddressId=String(this.list.length)
         }
      }
    },

  },



};
</script>

<style>
#addresslist {

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 200;
  background-color: #f5f5f5;
}
</style>