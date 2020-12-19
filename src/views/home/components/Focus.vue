<template>
  <div class="focus">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in focusImg" :key="index">
              <img v-lazy="image.icon_url" :alt="image.public_name"  srcset="">
            </van-swipe-item>
        </van-swipe>
  </div>
</template>

<script>
export default {
    name:'Focus',
    props:{
        focusImg:Array,
    },
    data() {
        return {
        
        };
    },
}
</script>

<style scoped>
.focus{
    width: 100%;
    height: 13.5rem;
}

.focus img{
    width: 100%;
    height: 100%;
}
</style>