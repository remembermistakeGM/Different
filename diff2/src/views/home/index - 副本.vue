<template>
  <div class="home-container" style="">
      <div class="home_header" style="display:none">
    <div class="home_search">
      <input type="text" placeholder="Search..." />
      <div class="search"></div>
    </div>
    <div class="home_title_text">Today see what is different from the past</div>
    <div class="top-bar">
      <ul>
        <li><router-link to="/scroll">过去</router-link></li>
        <li><router-link to="/">现在</router-link></li>
        <li><router-link to="/about">将来</router-link></li>
      </ul>
    </div>
    <div class="clear"></div>
</div>
      <div id="wrap" :style="{ height: screenHeight + 'px' }">
      <div id="main" :style="{ top: nowTop + 'px' }">
      <!-- <ul id="pageUl" type="circle"> 
        <li id="pageUlLi1" class="pageUlLi" :class="{'active': curIndex == 1}">&nbsp;</li>
        <li id="pageUlLi2" class="pageUlLi" :class="{'active': curIndex == 2}">&nbsp;</li>
        <li id="pageUlLi3" class="pageUlLi" :class="{'active': curIndex == 3}">&nbsp;</li>
        <li id="pageUlLi4" class="pageUlLi" :class="{'active': curIndex == 4}">&nbsp;</li>
        <li id="pageUlLi5" class="pageUlLi" :class="{'active': curIndex == 5}">&nbsp;</li>
      </ul> -->
      <div style="background-color: #1b6d85" id="page1" class="page">
  
    <div class="home_box">
        <div class="box-item-group"  @mouseenter="enter" @mouseleave="leave">
      <el-row>
        <el-col :span="12" class="box-item-cell">
          <div class="box-item">
            <img
              class="box-item-img"
              src="https://www.designhotels.com/media/rmijxduy/popular-theme-city-teaser.jpg?anchor=center&mode=crop&width=768&height=750&rnd=132314200954500000s"
              alt=""
            />
          </div>
          <div class="box-item-section">
            <div class="box-item-title">1998/3/18 凌晨</div>
          </div>
          <transition name="bounce">
          <div class="box-item-msg" v-show="ishover">
            <div class="introduce">
              在地球陆地表面起伏的山峦中，有很多都被塑造出了独特的形状，
              在这些形状独特的山中，有一种山壁如刀削，形似板薄，被称为墙状山
              。在美国西部的国家公园中，就发育有非常典型的红层墙状山，在世界其他地方也能找到类似的山。
              中国几乎拥有所有的地貌类型，那么中国有没有墙状山，中国的墙状山分布在哪里，
              它们又有什么特点呢？四川省地矿局的教授级高级工程师范晓就为我们做出了解读。
            </div>
            <div class="address">
              <i class="fa fa-location-arrow" aria-hidden="true"></i>
              <p>四川省香格里拉木桥边</p>
            </div>
            <div class="clear"></div>
          </div>
          </transition>
        </el-col>
        <el-col :span="12" class="box-item-cell">
          <div class="box-item">
            <img
              class="box-item-img"
              src="https://www.designhotels.com/media/rmijxduy/popular-theme-city-teaser.jpg?anchor=center&mode=crop&width=768&height=750&rnd=132314200954500000s"
              alt=""
            />
          </div>
          <div class="box-item-section">
            <div class="box-item-title">1998/3/18 凌晨</div>
          </div>
        </el-col>
        <div></div>
      </el-row>
      </div>
    </div>
      </div>
      <div style="background-color: #5cb85c" id="page2" class="page">
      </div>
      <div style="background-color: #8a6d3b" id="page3" class="page">
      </div>
      <div style="background-color: #337ab7" id="page4" class="page"></div>
      <div style="background-color: #66512c" id="page5" class="page"></div>
    </div>
  </div>
<!-- 
    <div class="home_box">
        <div class="box-item-group" v-for="(item,index) in list" :key="index" @mouseenter="enter" @mouseleave="leave">
      <el-row>
        <el-col :span="12" class="box-item-cell">
          <div class="box-item">
            <img
              class="box-item-img"
              src="https://www.designhotels.com/media/rmijxduy/popular-theme-city-teaser.jpg?anchor=center&mode=crop&width=768&height=750&rnd=132314200954500000s"
              alt=""
            />
          </div>
          <div class="box-item-section">
            <div class="box-item-title">1998/3/18 凌晨</div>
          </div>
          <transition name="bounce">
          <div class="box-item-msg" v-show="ishover">
            <div class="introduce">
              在地球陆地表面起伏的山峦中，有很多都被塑造出了独特的形状，
              在这些形状独特的山中，有一种山壁如刀削，形似板薄，被称为墙状山
              。在美国西部的国家公园中，就发育有非常典型的红层墙状山，在世界其他地方也能找到类似的山。
              中国几乎拥有所有的地貌类型，那么中国有没有墙状山，中国的墙状山分布在哪里，
              它们又有什么特点呢？四川省地矿局的教授级高级工程师范晓就为我们做出了解读。
            </div>
            <div class="address">
              <i class="fa fa-location-arrow" aria-hidden="true"></i>
              <p>四川省香格里拉木桥边</p>
            </div>
            <div class="clear"></div>
          </div>
          </transition>
        </el-col>
        <el-col :span="12" class="box-item-cell">
          <div class="box-item">
            <img
              class="box-item-img"
              src="https://www.designhotels.com/media/rmijxduy/popular-theme-city-teaser.jpg?anchor=center&mode=crop&width=768&height=750&rnd=132314200954500000s"
              alt=""
            />
          </div>
          <div class="box-item-section">
            <div class="box-item-title">1998/3/18 凌晨</div>
          </div>
        </el-col>
        <div></div>
      </el-row>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      list: [
        {a: "123",},
        { a: "123" },
        { a: "123" },
      ],
      ishover: false,
        screenWeight: 0,    // 屏幕宽度
        screenHeight: 0,    // 屏幕高度
        index: 1,        // 用于判断翻页
        curIndex: 1,      // 当前页的index
        startTime: 0,      // 翻屏起始时间 
        endTime: 0,       // 上一次翻屏结束时间
        nowTop: 0,       // 翻屏后top的位置
        pageNum: 0,       // 一共有多少页
        main: Object,
        obj: Object
    };
  },
  created() {

  },

  methods: {
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
        let delta = event.detail || (-event.wheelDelta);
        // 如果当前滚动开始时间和上次滚动结束时间的差值小于1.5s，则不执行翻页动作，这样做是为了实现类似节流的效果
        if ((this.startTime - this.endTime) > 1500) {
          if (delta > 0 && parseInt(this.main.offsetTop) >= -(this.screenHeight * (this.pageNum - 2))) {
            // 向下滚动
            this.index++;
            this.toPage(this.index);
          }else if (delta < 0 && parseInt(this.main.offsetTop) < 0) {
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
      }
  },
  mounted(){
      this.$nextTick(function(){
      this.screenWeight = document.documentElement.clientWidth;
      this.screenHeight = document.documentElement.clientHeight;
            // this.screenHeight = this.screenHeight-300;
       
      this.main = document.getElementById("main");
      this.obj = document.getElementsByTagName("div");
      for (let i = 0; i < this.obj.length; i++) {
        if (this.obj[i].className == 'page') {
          this.obj[i].style.height = this.screenHeight + "px";
        }
      }
      this.pageNum = document.querySelectorAll(".page").length;

  
      // 浏览器兼容   
      if ((navigator.userAgent.toLowerCase().indexOf("firefox") != -1)) {  
        document.addEventListener("DOMMouseScroll", this.scrollFun, false);
            
      } else if (document.addEventListener) {
        document.addEventListener("mousewheel", this.scrollFun, false);
      
      } else if (document.attachEvent) {
        document.attachEvent("onmousewheel", this.scrollFun);
                  
      } else {
        document.onmousewheel = this.scrollFun;
      }
         })
    },
     
};
</script>


<style>
@import "home.css";
</style>