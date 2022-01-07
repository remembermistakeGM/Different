<template>
  <div class="user-container">
    <div class="user-sider">
      <div class="msg_head_cart">
        <div class="user_pic">
          <img
            src="https://sanwenji.shuxiaoliu.cn/attachment/images/global/muL6kA9278Z8FCnQFu8n32i8C94UIA.jpg"
            alt=""
          />
        </div>
        <div class="user_name"><span>Ajax</span></div>
      </div>
      <div class="msg_cell_group_cart">
        <div class="msg_cell" v-for="(item, index) in msg_cell" :key="index">
          <div class="msg_cell_box">
            <div class="msg_text1">
              <i class="icon" :class="item.icon"></i
              ><span>{{ item.text1 }}</span>
            </div>
            <div class="msg_text2">{{ item.count }}</div>
          </div>
        </div>
           <div class="clear"></div>
      </div>
      <div class="clear"></div>
      <div class="msg-per-info">
        <div class="edit_msg_btn"><i class="icon ion-compose" :class="isEdit ? 'edit_active':''"  @click="onEdit"></i></div>
        <div class="clear"></div>
        <!-- 默认 -->
      <div class="edit-cart" v-if="!isEdit">
    
        <div class="edit_msg_cell">
          <span>性别：</span>
          <div class="male_select_cell input_cell">
            <div v-if="user_info.sex === 1" class="male_select_cell_box female_box">
              <i class="icon ion-female" :class="user_info.sex === 1 ? 'active':''"></i>男
            </div>
            <div v-else class="male_select_cell_box male_box">
              <i class="icon ion-male" :class="user_info.sex === 0 ? 'active':''" ></i>女
            </div>
          </div>
          <div class="clear"></div>
        </div>
        <div class="edit_msg_cell">
          <span>出生年月</span>
          <div class="block input_cell">
            {{user_info.birthday}}
        
          </div>
        </div>
        <div class="edit_msg_cell">
          <span>个人简介</span>
          <div class="input_cell">
            {{user_info.introduce}}
          </div>
        </div>
      </div>
       <!-- 编辑 -->
      <div v-else class="edit-cart">
      <div class="edit_msg_cell">
          <span>昵称</span>
          <div class="block input_cell">
            <el-input v-model="user_info.userName" type="value" placeholder="请输入昵称">
            </el-input>
          </div>
        </div>
        <div class="edit_msg_cell">
          <span>性别：</span>
          <div class="male_select_cell input_cell">
            <div class="male_select_cell_box female_box">
              <i class="icon ion-female" :class="user_info.sex === 1 ? 'active':''" @click="onfemale"></i>男
            </div>
            <div class="male_select_cell_box male_box">
              <i class="icon ion-male" :class="user_info.sex === 0 ? 'active':''"  @click="onmale"></i>女
            </div>
          </div>
          <div class="clear"></div>
        </div>
        <div class="edit_msg_cell">
          <span>出生年月</span>
          <div class="block input_cell">
            <el-date-picker v-model="user_info.birthday" type="date" placeholder="选择日期">
            </el-date-picker>
          </div>
        </div>
        <div class="edit_msg_cell">
          <span>个人简介</span>
          <el-input
            class="input_cell textarea_box"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4 }"
            placeholder="简单介绍一下你自己吧"
            v-model="user_info.introduce"
          > 
          </el-input>
        </div>
          <div class="input_cell submit_edit">
            <el-button type="info">保存</el-button>
          </div>
      </div>
      </div>
    </div>
    <div class="user_body">
        <div class="user_title">
          <div class="user_title_text">我的发布</div>
        </div>
      <div class="user-cell-box">
        <div class="user-cell-group">
          <div class="user-cell">
            
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
       user_info:{
         userName:"Ajax",
         sex:1,
         birthday:'1998-09-12',
         introduce:"大家好，我来自中东"
       },
       msg_cell: [
        { text1: "发布", count: 2, icon: "ion-paper-airplane" },
        { text1: "获赞", count: 2, icon: "ion-thumbsup" },
        { text1: "粉丝", count: 2, icon: "icon ion-person-stalker" },
        { text1: "私信", count: 2, icon: "ion-chatbox-working" },
        { text1: "收藏", count: 2, icon: "ion-heart" },
      ],
      textarea2: "",
      value1: "",
      isEdit:false,
    };
  },
  methods:{
      onEdit(){
        this.isEdit = !this.isEdit;
      },
      onfemale(){
        this.user_info.sex = 1
      },
      onmale(){
        this.user_info.sex = 0
      }
  }
};
</script>

<style>
.edit_active{
    color: #002df5;
    animation: edit .5s reverse;
}
 @keyframes edit {
    0% {
    transform:scale(1);
    }
    100% {
        transform:scale(2);
    }
   0%{
     transform:scale(1);
   }
  }
.user-sider {
  width: 400px;
  height: 80%;
  margin-top: 50px;
  margin-left: 50px;
  overflow: hidden;
  padding: 16px;
  border-radius: 45px;
  background: #f3f2f2;
  background-color: rgb(244, 244, 244);
  box-shadow: 13px 13px 38px #6e6e6e, -13px -13px 38px #ffffff;
}
.msg_head_cart {
  margin-top: 20px;
}
.user_pic img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0px auto;
  display: block;
}
.user_name {
  text-align: center;
  font-weight: bold;
  font-size: 1.3rem;
  margin-top: 10px;
}
.msg_cell_group_cart {
  margin-top: 10px;
  box-sizing: content-box;
 
}
.msg_cell_group_cart .msg_cell {
  float: left;
  width: 25%;
  margin-top: 20px;
  height: 50px;
}
.msg_cell_group_cart .msg_cell .msg_cell_box {
  padding: 10px;
  background: rgb(235, 233, 233);
  border-radius: 10px;
  box-shadow: 10px 10px 20px #bababa, -10px -10px 20px #ffffff;
  margin: 10px;
}
.msg_text1 {
  text-align: center;
}
.msg_text1 span {
  font-size: 0.8rem;
  padding-left: 5px;
  font-weight: bold;
}
.msg_text1 i {
  font-size: 1.2rem;
}
.msg_text2 {
  text-align: center;
  font-size: 0.8rem;
  color: #5a5959;
}
.msg-per-info {
  margin: 50px 10px 10px 10px;

  padding: 16px;
  border-radius: 20px;
  background: #f7f7f7;
  box-shadow: inset 20px 20px 60px #e0dfdf, inset -20px -20px 60px #ffffff;
}
.edit_msg_btn i {
  font-size: 2rem;
  float: right;
  cursor: pointer;
}
.male_select_cell .male_select_cell_box {
  float: left;
  font-size: 1.2rem;
}
.male_select_cell .male_select_cell_box i {
  font-size: 1.1rem;
  padding-right: 10px;
  color: #6e6e6e;
}
.male_select_cell .male_box{
  margin-left: 20px;
}
.male_select_cell .male_box .icon.active {
  color: rgb(219, 30, 93);
}
.male_select_cell .female_box .icon.active {
  color: rgb(30, 49, 219);
}
.edit_msg_cell {
  font-size: 1.1rem;
    margin-top: 20px;
}
.edit_msg_cell span{
  font-weight: bold;
}
.input_cell {
  margin-top: 10px;
}
.textarea_box {
  font-weight: bold;
  font-size: 1rem;
}
.submit_edit{
  margin: 30px auto;

}
.submit_edit button{
  width: 100%;
}
</style> 