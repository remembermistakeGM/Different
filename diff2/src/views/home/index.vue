<template>
  <div class="home-container" style="">
    <div class="home_header">
      <div class="home_search">
        <input type="text" placeholder="Search..." />
        <div class="search"></div>
      </div>
      <div class="home_title_text">
        时间给我们留下了什么？
        <div class="btn"></div>
      </div>
      <div class="top-bar">
        <ul>
          <li><router-link to="/scroll">过去</router-link></li>
          <li><router-link to="/">现在</router-link></li>
          <li><router-link to="/about">将来 </router-link></li>
        </ul>
      </div>

      <div class="home_user_img" @click='toUser'>
        <img
          src="https://www.designhotels.com/media/hvce4cdy/01-cretanmalia-agapi-costantza-sbokou-pier.jpg?center=0.509627971580746,0.21166666666666667&mode=crop&width=3328&height=1864&rnd=132338421781900000"
          alt=""
        />
      </div>
      <div
        :class="{ change: isChange }"
        class="open-silder-btn"
        @click="isChange = !isChange,isShowSlide = true"
      >
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <div class="clear"></div>
    </div>
    <div id="wrap" :style="{ height: screenHeight + 'px' }">
      <div id="main" :style="{ top: nowTop + 'px' }">
        <div v-for="(item, index) in list" :key="index" id="page1" class="page">
          <div class="home_box">
            <div class="box-item-group" @mouseenter="enter" @mouseleave="leave">
              <el-row>
                <el-col :span="12" class="box-item-cell">
                  <div class="box-item">
                    <img
                      class="box-item-img"
                      :src="item.old_image"
                      alt=""
                      :style="{ height: screenHeight + 'px' }"
                    />
                  </div>
                  <div class="box-item-section">
                    <div class="box-item-title">
                      {{ item.old_time | showOldTime }}
                    </div>
                  </div>
                  <transition name="bounce" >
                    <div class="box-item-msg" v-show="ishover" v-if="item.description !==''">
                      <div class="introduce">
                        {{item.description}}
                      </div>
                      <div class="address" v-if="item.address !==''">
                        <i class="fa fa-location-arrow" aria-hidden="true"></i>
                        <p>{{item.address}}</p>
                      </div>
                      <div class="clear"></div>
                    </div>
                  </transition>
                </el-col>
                <el-col :span="12" class="box-item-cell">
                  <div class="box-item">
                    <img
                      class="box-item-img"
                      :src="item.now_image"
                      alt=""
                      :style="{ height: screenHeight + 'px' }"
                    />
                  </div>
                  <div class="box-item-section">
                    <div class="box-item-title">
                      {{ item.now_time | showNowTime }}
                    </div>
                  </div>
                </el-col>
                <div></div>
              </el-row>
            </div>
          </div>
        </div>
      </div>
    </div>  
    <div v-if="isShowSlide"  class="navigation" :class="[isZoom ? 'zoom' : '',isChange ? 'navleft-in':'navleft-out']"> 
      <div class="zoom" @click="isZoom = !isZoom">
        <span></span>
        <i class="icon ion-play"></i> 
      </div> 
      <ul>
        <li
          v-for="(item, index) in menuList"
          :key="index"
          @click="click(item,index)"
          :class="item.name == active ? 'active' : ''"
          ref='li'
        >
          <div class="" :class="item.name == active ? 'active' : ''"></div>
          <a href="#">
            <span class="icon">
              <!-- <ion-icon :name="item.icon"></ion-icon> -->
              <i class="icon" :class="item.icon"></i>
            </span>
            <span class="title">{{ item.name }}</span>
          </a>
        </li> 
        <div class="marker" ref="marker"></div>
      </ul>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "Home",
  data() {
    return {
      list: [
        {
          id: "1",
          old_time: "",
          now_time: "",
          old_image: require("../../assets/img/home/77c6a7efce1b9d16f10.png"),
          now_image: require("../../assets/img/home/77c6a7efce1b9d16f101.png"),
          description:"40年后...",
          address:""
       },
       
 
        {
          id: "2",
          old_time: "1987",
          now_time: "",
          old_image: require("../../assets/img/home/shanghai-pass.jpg"),
          now_image: require("../../assets/img/home/shanghai-now.jpg"),
           description:"",
          address:"上海滩"
        },
          {
          id: "3",
          old_time: "",
          now_time: "",
          old_image: require("../../assets/img/home/0dd7912397dda.png"),
          now_image: require("../../assets/img/home/0dd7912397dda1.png"),
          description:"浴缸的兄弟,相隔20年",
          address:""
        }, 
         {
          id: "4",
          old_time: "1982",
          now_time: "2012",
          old_image: require("../../assets/img/home/023b5bb5c9ea.png"),
          now_image: require("../../assets/img/home/023b5bb5c9ea1.png"),
          description:"从 1982 年到 2012 年，每五年就有五名男子在加利福尼亚科普柯湖的小屋里拍摄同一张照片",
          address:""
        },  
        
      ],
      //翻页
      ishover: false,
      screenWeight: 0, // 屏幕宽度
      screenHeight: 0, // 屏幕高度
      index: 1, // 用于判断翻页
      curIndex: 1, // 当前页的index
      startTime: 0, // 翻屏起始时间
      endTime: 0, // 上一次翻屏结束时间
      nowTop: 0, // 翻屏后top的位置
      pageNum: 0, // 一共有多少页
      main: Object,
      obj: Object,
      // 侧边栏按钮状态 
      isChange: false,
      isShowSlide:false,
      //侧边栏
      isZoom: true,
      active: "主页", 
      menuList: [
        { name: "主页", icon: "ion-flag" },
        { name: "我的", icon: "ion-person" },
        { name: "发布", icon: "ion-android-add-circle" },
        { name: "帮助", icon: "ion-help-circled" },
      ],
    };
  },
  created() {
    
  },

  methods: {

    //鼠标移动至图片上
    enter() {
      this.ishover = true;
    },
    leave() {
      this.ishover = false;
    },
    //翻页
    scrollFun(event) {
      this.startTime = new Date().getTime();
      // mousewheel事件中的 “event.wheelDelta” 属性值：返回的如果是正值说明滚轮是向上滚动
      // DOMMouseScroll事件中的 “event.detail” 属性值：返回的如果是负值说明滚轮是向上滚动
      let delta = event.detail || -event.wheelDelta;
      // 如果当前滚动开始时间和上次滚动结束时间的差值小于1.5s，则不执行翻页动作，这样做是为了实现类似节流的效果
      if (this.startTime - this.endTime > 500) {
        if (
          delta > 0 &&
          parseInt(this.main.offsetTop) >=
            -(this.screenHeight * (this.pageNum - 2))
        ) {
          // 向下滚动
          this.index++;
          this.toPage(this.index);
        } else if (delta < 0 && parseInt(this.main.offsetTop) < 0) {
          // 向上滚动
          this.index--;
          this.toPage(this.index);
        }
        // 本次翻页结束，记录结束时间，用于下次判断 
        this.endTime = new Date().getTime();
      }
    },
    // 翻页
    toPage(index) {
      if (index != this.curIndex) {
        let delta = index - this.curIndex;
        this.nowTop = this.nowTop - delta * this.screenHeight;
        this.curIndex = index;
      }
    },
    //侧边栏选中  
       click(item,index) {
          this.active = item.name;
          let marker =this.$refs.marker
            marker.style.top =60*(index+1)+"px";
      },

      //点击头像
       toUser(){

       this.$router.replace('/user')
       }
  },
  mounted() {
    this.screenWeight = document.documentElement.clientWidth;
    this.screenHeight = document.documentElement.clientHeight;
    this.screenHeight = this.screenHeight - 160;

    this.main = document.getElementById("main");
    this.obj = document.getElementsByTagName("div");
    for (let i = 0; i < this.obj.length; i++) {
      if (this.obj[i].className == "page") {
        this.obj[i].style.height = this.screenHeight + "px";
      }
    }
    this.pageNum = document.querySelectorAll(".page").length;

    // 浏览器兼容
    if (navigator.userAgent.toLowerCase().indexOf("firefox") != -1) {
      document.addEventListener("DOMMouseScroll", this.scrollFun, false);
    } else if (document.addEventListener) {
      document.addEventListener("mousewheel", this.scrollFun, false);
    } else if (document.attachEvent) {
      document.attachEvent("onmousewheel", this.scrollFun);
    } else {
      document.onmousewheel = this.scrollFun;
    }
   
  },
  filters: {
    showOldTime(old_time) {
      if (old_time == "" || old_time == undefined || old_time == null) {
        return (old_time = "时间不详");
      } else {
        return old_time;
      }
    },
    showNowTime(now_time) {
      if (now_time == "" || now_time == undefined || now_time == null) {
        return (now_time = "现在");
      } else {
        return now_time;
      }
    },
  },
};
</script>


<style>
@import "home.css";

#wrap {
  overflow: hidden;
  width: 100%;
}

#main {
  position: relative;
  transition: top 0.3s;
}

.page {
  /*谨删*/ 
  width: 100%;
  margin: 0;
}

#pageUl {
  position: fixed;
  right: 10px;
  bottom: 50%;
}

.active {
  color: red;
}
</style>