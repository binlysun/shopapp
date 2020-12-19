<template>
  <div class="logintype">
      <img src="./../../images/logo.jpg" alt="" srcset="">
      <span class="title">选择登录方式</span>
      <router-link to="/login" class="type">手机登录</router-link>
      <span class="type">账号登录</span>
      <div class="else">其他登录方式</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.logintype{
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 8rem;
}
.logintype img{
    width: 80%;
}
.title{
    margin:2rem auto ;
    color: #666;
    font-size: 0.8rem;
}
.type{
    width: 60%;
    display: block;
    text-align: center;
    height: 2rem;
    line-height: 2rem;
    background: #3cb963;
    border-radius: 5rem;
    margin-bottom: 1rem;
    color: #fff;
    font-size: 0.1rem;
}
.else{
    margin: 1rem;
    font-size: 0.5rem;
}
</style>