<template>
  <div class="editaddress">
    <van-nav-bar
      title="修改联系人"
      left-text="返回列表"
      left-arrow
      :fixed="true"
      @click-left="onClickLeft"
    />
    <van-address-edit
      style="margin-top:3rem"
      :area-list="areaList"
      :address-info	="AddressInfo"
      show-postal
      show-delete
      show-set-default
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"

    />
  </div>
</template>

<script>
import { Toast } from "vant";
import {  mapState } from 'vuex';
import {getCurrentUserAddress,delUserAddress,changeUserAddress} from './../../service/api/index'
import areaList from './../../config/area'
import PubSub from 'pubsub-js'

export default {
  name: "Editaddress",
  data() {
    return {
      areaList: areaList,

      AddressInfo:{}
    };
  },
  mounted() {
    
    if (this.$route.query.address_id) {
      if (this.userInfo.token) {
        this.getCurrentAddress(this.userInfo.token,this.$route.query.address_id)
      }
    }
  },
  computed:{
    ...mapState(['userInfo'])
  },
  methods: {

    onClickLeft() {
      this.$router.go(-1);
    },
    async  onSave(address) {
        let result= await changeUserAddress(address.id, this.userInfo.token, address.name, address.tel, address.province+address.city, address.addressDetail, address.postalCode, address.isDefault, address.province, address.city, address.county, address.areaCode)
        if (result.success_code===200) {
          Toast({
          message:'地址修改成功！',
          duration:500,
        });
        this.$router.back()
        PubSub.publish('refreshList')
        }
      
    },

    async onDelete(content) {
     let result= await delUserAddress(this.AddressInfo.id)
      if (result.success_code===200) {
        Toast({
          message:'删除地址成功！',
          duration:500,
        });
        this.$router.back()
        PubSub.publish('refreshList')
      }
      
    },


    async getCurrentAddress(user_id,address_id){

      let result= await getCurrentUserAddress(user_id,address_id);
      if (result.success_code===200) {
        let currentAddress=result.data
         this.AddressInfo={
            id:currentAddress._id,
            name:currentAddress.address_name,
            tel:currentAddress.address_phone,
            province:currentAddress.province,
            city:currentAddress.city,
            county:currentAddress.county,
            addressDetail:currentAddress.address_area_detail,
            areaCode:currentAddress.areaCode,
            postalCode:currentAddress.address_post_code,
            isDefault:currentAddress.address_tag,
         }   
      }

    }
  },
};
</script>

<style scoped>
.editaddress {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  background-color: #f5f5f5;
}
</style>