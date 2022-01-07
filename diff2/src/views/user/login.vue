<template>
  <div class="login-container">
     <div class="log_svg_bg">
        <div class="log_text-msg">
        <div class="text1">时间</div>
        <div class="text2">过得很快，转眼间...</div> 

      <div class="login-btn">
                 <router-link  to="/register"> <el-button type='info'>注册</el-button>      </router-link>
          </div>

      </div>
       <img class="log_svg_bg_img " :class="isRefreshed ? 'log_svg_bg_img_left':''" src="../../assets/img/svg/undraw_augmented_reality_heuy.svg" alt="">
     </div>
     
     <div class="log-cart">
       <div class="log_text">登录账号</div>
       <div class="log_input-cell">
        <i class="icon ion-android-person"></i>
       <el-input class="log_input-inline" @focus="isfocus=true" type='number'  maxlength="10" show-word-limit v-model="mobile" placeholder="请输入手机号"></el-input>
       </div>
        <div class="log_input-cell">
        <i class="icon ion-chatbubble"></i>
       <el-input class="log_input-inline" type='password' v-model="password" placeholder="请输入登录密码"></el-input>
       
       </div>
       <div class='clear'></div>
       <div class="log_submit"><el-button type="info" >登  录</el-button></div>
     </div>
  </div>
</template>

<script>
export default {
    name:"Login",
    data(){
      return{
        mobile:"",
        password:"",
        isRefreshed:false 
      }
    },
    methods:{


    },
    created(){

    },
    mounted(){
     this.isRefreshed = true
    }
}
</script>

<style>
.log_svg_bg{
  position: absolute;
  left: 0%;
  top:100px;
  width: 30%;
}
.log_svg_bg .log_svg_bg_img{
  width: 100%;
  transition: 1s ease-in-out;
   transform:  translateX(-500px);
} 
.log_svg_bg .log_svg_bg_img_left{
 transform:  translateX(100px);
}
.log-cart{
  float: right;
  margin-top: 200px;
  margin-right:20%;
  width:400px;
}
.log_text{
  font-size: 1.8rem;
  font-weight: bold;
  color: #000;
  text-align: center;
}
.log_input-cell{
  background-color: rgb(240, 240, 240);
  border-radius: 100px;
   width: 350px;
   margin: 30px auto;
     padding: 0px 10px;
     height: 50px;
}
.log_input-cell .icon{
  float: left;
  font-size: 2rem;
  width: 30px;
 line-height: 50px;
}
.log_input-cell  .log_input-inline{
  float: left;
  width: 316px;
 
}
.log_input-cell  .log_input-inline input{
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
.log_submit{
  width: 100%;
}
.log_submit button{
  width: 300px;
  margin: 30px auto;
  display: block;
  border-radius: 100px;
  font-weight: bold;
}
.log_text-msg{
  margin-left: 30px;
}
.log_text-msg .text1{
  font-size: 3rem;
  font-weight: bold;
}
.log_text-msg .text2{
  font-size: 2rem;
  margin-top: .3rem;
}
.log_text-msg button{
  margin-top: 30px;
  margin-left: 20%;
}

@media screen and (max-width:1000px){
  .log_svg_bg .log_svg_bg_img{
  transform:  translateX(0px);
  
} 
    } 
@media screen and (max-width:770px){
  .log_svg_bg .log_svg_bg_img{
  width: 40%;
  transition: 2s ease-in-out;
  transform:  translateX(0px);
  position: absolute;
  top: 50px;
} 

.log_svg_bg{
  top: 0;
  width: 100%;
}
.log_text-msg .text1{
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
}
.log_text-msg .text2{
  font-size: .8rem;
  margin-top: .3rem;
  text-align: center;
}
.log_text-msg button{
  margin-top: 67px;
  margin-left: 20%;
}
.login-btn{
  position: absolute;
  top:30px; 
  right: 50px;
}
.log-cart{
  width: 90%; 
  margin-left:5% ;
  float: none;
}

}
@media screen and (max-width:390px){
.log_input-cell{
  width: 90%;
}
.log_input-cell .log_input-inline{
width: 70%;
}
}

</style>