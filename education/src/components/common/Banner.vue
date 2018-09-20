<template>
  <div class="banner">
    <div class="header-wrapper">
      <div class="top-bar">
        <el-row :gutter="20">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <img src="https://res.hjfile.cn/classec/common/header/images/logo_hover-29a6f.png" id="logo">
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">
              <el-button type="success" round>
                <span class="iconfont locate-icon">&#xe63f;</span>
                <span class="address">成 都</span>
              </el-button>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple home-list">
              <div class="top-title">
                <ul class="title-list">
                  <router-link tag="li"
                               v-for="item in titleList"
                               :key="item.id"
                               :to="{path: '/' + item.id}"
                               class="titles">
                    {{ item.text }}
                  </router-link>
                </ul>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <div class="user-login">
                <span class="iconfont">&#xe7eb;</span>
                <span class="iconfont">&#xe745;</span>
                <el-button plain>登录</el-button>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="bg-img">
        <img :src="bgImg" class="background-img">
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Banner",
      data () {
        return {
          titleList : [
            {
              id : 'home',
              text : '首页'
            },
            {
              id : 'about',
              text : '关于我们'
            },
            {
              id : 'teachers',
              text : '青橙教师'
            },
            {
              id : 'job',
              text : '工作机会'
            },
            {
              id : 'contact',
              text : '联系我们'
            }
          ],
          bgImg : 'http://pic.soutu123.com/back_pic/04/66/55/72587b946057704.jpg',
          company : [
            {
              id : 'about',
              text : '关于我们'
            },
            {
              id : 'contact',
              text : '联系我们'
            },
            {
              id : 'protocal',
              text : '服务协议'
            },
            {
              id : 'statement',
              text : '承诺声明书'
            },
            {
              id : 'privacyPolicy',
              text : '隐私权政策'
            },
            {
              id : 'standard',
              text : '老师行为规范'
            }
          ]
        }
      }
    }
</script>

<style scoped>
  /*顶栏*/
  .el-row {
    margin: 0 !important;
  }
  div.top-bar {
    position: absolute;
    width: 100%;
    z-index: 3;
  }
  #logo {
    margin-top: 15px;
    margin-left: 15px;
  }
  .el-button.is-round {
    margin-top: 15px;
    border-radius: 20px;
    padding: 2px 23px;
  }
  .locate-icon {
    margin-left: -2px;
  }
  .home-list {
    margin-top: 15px;
  }
  .title-list {
    display: flex;
    padding: 0;
  }
  .titles {
    flex: 1;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    color: #fff;
    margin-top: 10px;
    cursor: pointer;
  }
  .user-login {
    text-align: right;
    margin-top: 15px;
    margin-right: 20px;
  }
  .user-login span {
    font-size: 20px;
  }
  .el-button {
    margin-left: 10px;
    padding: 5px 15px;
    font-size: 14px;
  }
  .background-img {
    width: 100%;
  }
  /*footer*/
  .company ul {
    display: flex;
    padding: 0 25%;
  }
  .company ul li {
    flex: 1;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    font-family: Microsoft YaHei;
  }
  .company p {
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    font-family: Microsoft YaHei;
  }
  .router-link-active {
  color: #00cccc;
  }
</style>
