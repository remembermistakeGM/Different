<template>
  <div class="regiter-container">
     <div class="svg_bg">
        <div class="reg-text-msg">
        <div class="text1">欢迎您加入我们</div>
        <div class="text2">一起看看世界</div>
 
      <div class="login-btn">    <router-link  to="/login"><el-button type='info'>登录</el-button>      </router-link></div>

      </div>
       <img class="svg_bg_img" :class="isfocus ? '':'svg_bg_img_left'" src="../../assets/img/svg/undraw_environment_iaus.svg" alt="">
     </div>
     
     <div class="regiter-cart">
       <div class="reg-text">注 册</div>
       <div class="reg-input-cell">
        <i class="icon ion-android-person"></i>
       <el-input class="reg-input-inline" @focus="isfocus=true" type='number'  maxlength="10" show-word-limit v-model="mobile" placeholder="请输入手机号"></el-input>
       </div>
        <div class="reg-input-cell">
        <i class="icon ion-chatbubble"></i>
       <el-input class="reg-input-inline" type='number' v-model="code" placeholder="请输入验证码"></el-input>
       
       </div>
       <div class="code-btn"> <el-button type="info" >发送验证码</el-button></div>
       <div class='clear'></div>
       <div class="reg-submit"><el-button type="info" >注  册</el-button></div>
     </div>
  </div>
</template>

<script>
export default {
    name:"Register",
    data(){
      return{
        mobile:"",
        code:"",
        isfocus:false 
      }
    },
    methods:{
   

    }
}
</script>

<style>
.svg_bg{
  position: absolute;
  left: 0%;
  top:100px;
  width: 30%;
}
.svg_bg .svg_bg_img{
  width: 100%;
  transition: 2s ease-in-out;
} 
.svg_bg_img_left{
 transform:  translateX(-180px);
}
.regiter-cart{
  float: right;
  margin-top: 200px;
  margin-right:20%;
  width:400px;
}
.reg-text{
  font-size: 1.8rem;
  font-weight: bold;
  color: #000;
  text-align: center;
}
.reg-input-cell{
  background-color: rgb(240, 240, 240);
  border-radius: 100px;
   width: 350px;
   margin: 30px auto;
     padding: 0px 10px;
     height: 50px;
}
.reg-input-cell .icon{
  float: left;
  font-size: 2rem;
  width: 30px;
 line-height: 50px;
}
.reg-input-cell  .reg-input-inline{
  float: left;
  width: 316px;
 
}
.reg-input-cell  .reg-input-inline input{
  background-color: transparent;
 height: 50px;
 border: none;
 font-size: 1.3rem;
 font-weight: 600;
 color: #000;
}
.code-btn{
  float: right;
}
.code-btn button{
  border-radius: 100px;

}
.reg-submit{
  width: 100%;
}
.reg-submit button{
  width: 300px;
  margin: 30px auto;
  display: block;
  border-radius: 100px;
  font-weight: bold;
}
.reg-text-msg{
  margin-left: 30px;
}
.reg-text-msg .text1{
  font-size: 3rem;
  font-weight: bold;
}
.reg-text-msg .text2{
  font-size: 2rem;
  margin-top: .3rem;
}
.reg-text-msg button{
  margin-top: 67px;
  margin-left: 20%;
}
@media screen and (max-width:770px){
  .svg_bg .svg_bg_img{
  width: 40%;
  transition: 2s ease-in-out;
  transform:  translateX(-80px);
  position: absolute;
  top: 50px;
} 

.svg_bg{
  top: 0;
  width: 100%;
}
.reg-text-msg .text1{
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
}
.reg-text-msg .text2{
  font-size: .8rem;
  margin-top: .3rem;
  text-align: center;
}
.reg-text-msg button{
  margin-top: 30px;
  margin-left: 20%;
}
.login-btn{
  position: absolute;
  top:30px; 
  right: 50px;
}
.regiter-cart{
  width: 90%; 
  margin-left:5% ;
  float: none;
}

}
@media screen and (max-width:390px){
  .reg-input-cell{
  width: 90%;
}
.reg-input-cell .reg-input-inline{
width: 70%;
}
}

</style>