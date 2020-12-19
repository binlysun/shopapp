<template>
  <div class="navwrap">
      <div class="navitem" v-for="(navmsg,index) in navmsgs" :key="index">
          <div class="navitemimg">
              <img :src="navmsg.icon_url" :alt="navmsg.name" >
          </div>
          <div class="navitemname">
              {{navmsg.name}}
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Nav',
    props:{
        navmsgs:Array
    }
}
</script>

<style scoped>
.navwrap{
    width: 100%;
    height: 8rem;
    background: #ffffff;
    display: flex;
    flex-wrap:wrap
}
.navitem{
    width: 20%;
    height: 4rem;
    padding: 0.5rem;
    
}
.navitemimg{
    width: 2rem;
    height: 2rem;
    margin: 0 auto;
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    
}
.navitemimg img{
    width: 100%;
    height: 100%;
}
.navitemname{
    padding-top:0.3rem ;
    font-size: 0.7rem;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #666;
}

</style>