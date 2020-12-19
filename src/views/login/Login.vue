<template>
  <div class="login">
       <img src="./../../images/logo.jpg" alt="" srcset="">
       <div class="loginboard">
           <div class="logintype">
               <span :class="{typeon:loginMode}" @click="changeLoginMode(true)">手机登录</span>
               <span :class="{typeon:!loginMode}" @click="changeLoginMode(false)">密码登录</span>
           </div>
           <div class="phone " v-if="loginMode">
               <div class="phonenumbox">
                    <input class="phonenum" type="number"  placeholder="手机号" maxlength="11" v-model="phone">
                    <div class="getcode">
                        <button type="button" class="getcodeon " v-if="!countDown"  :class="{phoneright:phoneRight}" @click="getPhoneCode()">获取验证码</button>
                        <button v-else  disabled="disabled" >已发送({{countDown}}s)</button>
                    </div>
               </div>
               <input type="number" placeholder="验证码" v-model="code">
           </div>
           <div class="passwd " v-else>
                <input type="text"  v-model="user_name" placeholder="请输入账号" >
                <input type="password" v-model="user_pwd" placeholder="请输入密码">
                <div class="captcha">
                    <input type="text" v-model="captcha" placeholder="验证码" maxlength="4">
                    <img  class="captchaimg" ref="captcha" src="http://demo.itlike.com/web/xlmc/api/captcha" @click="getcaptcha()">
                </div>
           </div>
           <div class="loginbtn">
               <span class="loginsure" @click="onlogin()">登录</span>
               <span class="logincancel" @click="$router.back()">返回</span>
           </div>
       </div>
  </div>
</template>

<script>

import {getPhoneCode,PhoneCodeLogin,passWorldLogin} from './../../service/api/index'
import {mapActions} from 'vuex'
 import { Toast } from 'vant';
export default {
        name:'Login',
        data() {
            return {
                loginMode:true,
                phone:null,
                countDown:0,
                code:null,//手机验证码
                userInfo:null,
                user_name:null,
                user_pwd:null,
                captcha:null,
            }
        },
        computed:{
            phoneRight(){
               return /^1(3[0-9]|4[01456879]|5[0-3,5-9]|6[2567]|7[0-8]|8[0-9]|9[0-3,5-9])\d{8}$/.test(this.phone)
            }
        },
        methods: {
            ...mapActions(['saveUserInfo']),
            changeLoginMode(flag){
                this.loginMode=flag
            },
            getcaptcha(){
                let capttag=this.$refs.captcha;
                this.$set(capttag,'src','http://demo.itlike.com/web/xlmc/api/captcha?time'+new Date())
            },
            async getPhoneCode(){
                
                if(this.phoneRight){
                    this.countDown=60
                    let timer=setInterval(()=>{
                        this.countDown--
                        if (this.countDown===0) {
                            clearInterval(timer)
                        }
                    },1000)
                    let rep= await getPhoneCode(this.phone)
                    console.log(rep);
                }
            },
            async  onlogin(){
                if (this.loginMode) {//手机验证码登录
                    if (!this.phoneRight) {
                       Toast({
                           message:"请输入正确的手机号",
                           duration:500,
                       })
                       return
                    } 
                    
                    let rep= await PhoneCodeLogin(this.phone,this.code)
                    if (rep.success_code===200) {
                        this.userInfo=rep.data;
                        this.saveUserInfo(this.userInfo)
                        this.$router.back()

                    }else{
                        Toast({
                           message:'登录失败，手机号或者验证码不正确！',
                           duration:500
                       })        
                    }
                } else {//用户名密码登录
                    if (!this.user_name||!this.user_pwd) {
                        Toast({
                           message:"请输入正确的帐号或密码",
                           duration:500,
                        })
                        return
                    } else if(!this.captcha){
                        Toast({
                           message:"请输入正确的验证码",
                           duration:500,
                        })
                        return
                    }

                    let result= await passWorldLogin(this.user_name,this.user_pwd,this.captcha)
                    console.log(result);
                     if (result.success_code===200) {
                        this.userInfo=result.data;
                        this.saveUserInfo(this.userInfo)
                        this.$router.back()

                    }else{
                              
                    }
                }
            }

        },
}
</script>

<style scoped>
.login{
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5rem;
}
.login>img{
    width: 80%;
}
.loginboard{
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-content: center;
}
.logintype{
    display: flex;
    justify-content: space-around;
}
.typeon{
    color:#3cb963 ;
    border-bottom: 2px solid #3cb963;
}

.phone{
    width: 12rem; 
    margin-top: 1rem;
    /* display: none; */
}

.logincur{
    display: block;
} 
.phone  input{
    border: 1px solid #cccccc;
    width: 12rem;
    height: 2rem;
    border-radius: 0.2rem;
    margin: 0.3rem;
    padding: 0.2rem;
    font-size:0.8rem;   
} 

.passwd{
    width: 12rem; 
    margin-top: 1rem;
    /* display: none; */
}

.passwd input{
    border: 1px solid #cccccc;
    width: 12rem;
    height: 2rem;
    border-radius: 0.2rem;
    margin: 0.3rem;
    padding: 0.2rem;
    font-size:0.8rem;
   
}
.phone .phonenumbox{
    position: relative;
}

.phone .getcode button{
    position: absolute;
    right: 0;
    top: 0.8rem;
    font-size: 0.8rem;
    width: 5rem;
    height: 1rem;
    line-height: 1rem;
    text-align:center ;
    color: #cccccc;
     /* display: none;  */
}
.phone .getcode .phoneright{
    color: #3cb963;
}

.loginbtn{
    margin-top: 1rem;
}
.loginbtn span{
    
    display: block;
    width: 12rem;
    height: 2rem;
    text-align: center;
    border: 1px solid #3cb963;
    margin-bottom: 0.5rem;
    line-height: 2rem;
    border-radius: 0.3rem;
}

.loginsure{
    background:#3cb963 ;
    color: #fff;
}

.logincancel{
    color:#3cb963 ;
}
.captcha{
    position: relative;
}

.captchaimg{
    position: absolute;
    right: 0;
    top: 0.2rem;
    font-size: 0.8rem;
    width: 5rem;
    height: 1.8rem;

}
</style>