<template>
  <div class="addadress">
    <van-nav-bar
      title="添加联系人"
      left-text="返回列表"
      left-arrow
      :fixed="true"
      @click-left="onClickLeft"
    />
    <van-address-edit
    style="margin-top:3rem"
      :area-list="areaList"
      show-postal
      show-set-default
      value="110101"
      @save="onSave"

    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import areaList from './../../config/area'
import {addUserAddress} from './../../service/api/index'
import { Toast } from "vant";
import PubSub from 'pubsub-js'

export default {
  name: "Addadress",
  data() {
    return {
      areaList: areaList,
      searchResult: [],
    };
  },
  computed:{
    ...mapState(['userInfo'])
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async onSave(address) {  
      if (this.userInfo.token) {

        let result =await addUserAddress(this.userInfo.token, address.name, address.tel, address.province+address.city, address.addressDetail, address.postalCode, address.isDefault, address.province, address.city, address.county, address.areaCode)
        console.log(result);
        if (result.success_code===200) {
             Toast({
                message:'添加成功',
                duration:500
            })
            this.$router.back()
            PubSub.publish('refreshList')
        } else {
           Toast({
                message:result.result+':'+result.message,
                duration:500
            })
        }

      }else{
        Toast({
          message:'登录已过期，请重新登录',
          duration:500
        })
      }

    },
  },
};
</script>

<style>
.addadress {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  background-color: #f5f5f5;
}
</style>