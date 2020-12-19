<template>
    <div class="cartbody">
        <div class="goodsitem" v-for="(good,index) in shopCart" :key=index  >
            <input @click="singerSelected(good.id)" type="checkbox" :checked="good.checked">
            <div class="goodsimg">
                <img :src="good.small_image" :alt="good.name" srcset="">
            </div>
            <div class="goodsinfo">
                <span class="goodsname">{{good.name}}</span>
                <span class="goodsprice">￥{{good.price}}</span>
                <div class="goodsnums">
                    <span @click="subnum(good.id,good.num)" class="goodsnumsub">-</span>
                    <span class="goodsnum">{{good.num}}</span>
                    <span @click="addnum(good.id,good.name,good.small_image,good.price)" class="goodsnumadd">+</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
import { Dialog } from 'vant';

export default {
        name:'Cratbody',
        props:{
            shopCart:Object
        },
        methods: {
            ...mapMutations(['REMOVE_CART','ADD_GOODS','SINGER_SELECTED']),
            //减小按钮
            subnum(goodsId,goodsNum){
                if(goodsNum>1){               
                    this.REMOVE_CART({goodsId});
                }else if(goodsNum===1){
                    Dialog.confirm({
                                    title: '提示',
                                    message: '确认要删除该商品吗',
                                    })
                                    .then(() => {//点击确定
                                         this.REMOVE_CART({goodsId});
                                    })
                                    .catch(() => {//点击取消
                                        // do nothing
                                    });
                }
            },
            //增加按钮
            addnum(goodsId, goodsName, goodsImage, goodsPrice){
                this.ADD_GOODS({
                    goodsId, goodsName, goodsImage, goodsPrice
                })
            },
            //单选
            singerSelected(goodsId){
                this.SINGER_SELECTED({goodsId})
            }
        },
}
</script>

<style scoped>
.cartbody{
    width: 100%;
    margin-top: 2.7rem;
    /* height: 200rem; */
    background-color: #fff;
    margin-bottom: 5rem;
}

.goodsitem{
    width: 95%;
    margin: 0 auto;
    height: 5rem;
    /* background: skyblue; */
    border-bottom: 1px solid #dddddd;
    /* display: flex; */
    line-height: 5rem;
    position: relative;
    
}

.goodsitem input{
    width: 0.8rem;
    height: 0.8rem;
    border: 1px solid #cccccc;
    border-radius: 50%;
    outline: none;
    color: #ffffff;
    background-color: #fff;
    appearance: none;
    line-height: 0.75rem;
    text-align: center;   
    font-size: 0.7rem; 
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -0.4rem;
}

.goodsitem input:checked{
    color: #fff;background: #3cb963; border: 1px solid #3cb963;
}

.goodsitem input::after{
    content: '\2714';
}
.goodsimg{
    width: 4rem;
    height: 4rem;
    margin-left: 1rem;
    margin-top: 0.5rem;
    float: left;
}
.goodsimg img{
    width: 100%;
    height: 100%;

}
.goodsinfo{
    margin-left: 1rem;
    float: right;
    margin-top: 0.5rem;
    width: 70%;
}

.goodsname{
    width: 100%;
    height: 2rem;
    display: block;
    font-size: 0.8rem;
    line-height: 2rem;
    float: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.goodsprice{
    float: left;
    height: 2rem;
    width: 2rem;
    line-height: 2rem;
    font-size: 0.7rem;
}

.goodsnums{
    float: left;
    height: 2rem;
    line-height: 2rem;
    margin-left: 8rem;
  
}


.goodsnum{
    display: inline-block;
    height: 1rem;
    width: 1.5rem;
    font-size: 0.7rem;
    line-height: 1rem;
    text-align: center;
    background: #dddddd;
    margin: 0 0.4rem;
}
</style>