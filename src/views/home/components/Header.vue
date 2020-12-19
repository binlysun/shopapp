<template>
  <div class="wrap">
      <div class="location">
          <van-icon name="location-o" size="0.8rem"/>
          <span>深圳龙岗区黄金山</span>
          <van-icon name="arrow-down" size="0.8rem" />
      </div>
      <div class="search">
          <van-icon class="h-s-icon" name="search" size="0.8rem"/>
          <span>请输入商品名称</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'Header',
}
</script>

<style scoped>
.wrap{
    width: 100%;
    height: 2.5rem;
    display: flex;
    background: #ffffff;
    align-items: center;
}
.location{
    width: 40%;
    height:100%;
   display: flex;
   align-items: center;
   font-size: 0.7rem;
   margin-left: 2%;
}

.location>span{
    padding: 0 0.2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.search{
    width: 50%;
    height: 1.5rem;
    background: #f5f5f5;
    border: 1px solid #dddddd;
    position: relative;
    border-radius:1rem;
    margin-left: 1rem;
    line-height: 1.3rem;
}

.search .h-s-icon{
    position: absolute;
    top:0.3rem;
    left: 20%;
}

.search>span{
    margin-left: 30%;
    font-size: 0.8rem;
    color:#ccc;
    line-height: 1.5rem;
   
}
</style>