<template>
  <div class="minecenter">
       <van-nav-bar
        title="用户中心"
        :fixed=true
        left-arrow
        @click-left="$router.back()"
        style="background-color: #fff;"
        >  
        </van-nav-bar>
        <van-cell-group  style="margin:3rem 0;background-color: #f5f5f5;"  >
            <van-cell title="账号" value="内容" >{{userInfo.token}}</van-cell>
            <van-cell title="姓名" value="内容" is-link>{{userInfo.real_name}}</van-cell>
            <van-cell title="手机号" value="内容" is-link>{{userInfo.phone}}</van-cell>
        </van-cell-group>
        <van-button  @click="logOut()" type="danger" round size="large">退出登录</van-button>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import {getLogOut} from './../../service/api/index'
export default {
        name:'minecenter',
        methods: {
            ...mapMutations(['LOG_OUT']),
            async logOut(){
                let result =await getLogOut()
                console.log(result);
                if (result.success_code===200) {
                    this.LOG_OUT()
                    this.$router.back()
                }
            }
        },
        computed:{
            ...mapState(['userInfo'])
        },

}   
</script>

<style scoped>
.minecenter{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    background: #f5f5f5;
}

</style>