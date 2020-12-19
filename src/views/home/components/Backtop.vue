<template>
  <van-icon class="topicon" name="back-top" size="1.5rem" @click="ToTop" />
</template>

<script>
export default {
  name:'Backtop',
  props:{
    ToTop:Function,
  }
}
</script>

<style scoped>
.topicon{
    width: 2.2rem;
    height: 2.2rem;
    position: fixed;
    bottom: 5rem;
    right: 1rem;
    border: 1px solid #cccccc;
    border-radius: 50%;
    color: #cccccc;
    background: #ffffff;
   line-height: 2.2rem;
   text-align: center;
}

</style>