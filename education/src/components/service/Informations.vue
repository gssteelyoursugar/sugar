<template>
    <div class="techer-info">
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
            <div class="grid-content bg-purple">
              <div class="top-title">
                <ul class="title-list">
                  <router-link tag="li"
                               v-for="item in titleList"
                               :key="item.id"
                               :to="{path: '/' + item.id}"
                               class="titles"
                  >
                    {{ item.text }}
                  </router-link>
                </ul>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <div class="join-us">
                <router-link to="/job" tag="p" class="join">加入我们</router-link>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="virtural">
        <div class="sorts" style="margin-top: 10px;">
          <ul class="type-list">
            <router-link tag="li"
                         v-for="item in typeList"
                         :key="item.key"
                         :to="{path: '/' + item.id}"
                         class="items">
              {{ item.text }}
            </router-link>
          </ul>
        </div>
      </div>
      <div class="infor">
        <p>青橙教员  ></p>
        <div class="form-wrapper">
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple forms">
                <swiper :options="swiperOption">
                  <swiper-slide v-for="item in images" :key="item.key">
                    <img :src="item.imgUrl" class="swiper-img">
                  </swiper-slide>
                  <div class="swiper-pagination"  slot="pagination"></div>
                </swiper>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light forms">
                <div class="table-list">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <td> {{ teacherInfo[0].nickname }}</td>
                        <td>{{ teacherInfo[0].job }}</td>
                        <td>教龄</td>
                        <td> {{ teacherInfo[0].year }}年</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>就读高校</td>
                        <td class="add-info">{{ teacherInfo[0].graduated }}</td>
                        <td>学校属性</td>
                        <td class="add-info" >985 211</td>
                      </tr>
                      <tr>
                        <td>专业</td>
                        <td class="add-info"> {{ teacherInfo[0].major }}</td>
                        <td>来自省份</td>
                        <td class="add-info">{{ teacherInfo[0].city}} - {{ teacherInfo[0].province}}</td>
                      </tr>
                      <tr>
                        <td>学历</td>
                        <td class="add-info">{{ teacherInfo[0].level}}</td>
                        <td>现住址</td>
                        <td class="add-info" >{{ teacherInfo[0].realAddress}}</td>
                      </tr>
                      <tr>
                        <td>身份状态</td>
                        <td  class="add-info">{{ teacherInfo[0].status}}</td>
                        <td>认证状态</td>
                        <td class="add-info">{{ teacherInfo[0].dataStatus}}</td>
                      </tr>
                    </tbody>
                </table>
                </div>
                <div class="rates">
                  <span class="left">评价星级</span>
                  <span class="right"> <el-rate v-model="stars" void-color="#F7BA2A"></el-rate> </span>
                </div>
              </div>
              <div class="buttons">
                <el-button type="primary">点我预约</el-button>
                <el-input v-model="input" placeholder="请输入内容"></el-input>
                <el-button type="success">下单</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Informations",
      data () {
          return {
            stars : 4,
            input: 100,
            swiperOption : {
              pagination : '.swiper-pagination',
              autoplay : 3000,
              speed : 1500,
              loop : true
            },
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
            typeList : [
              {
                id : 'service',
                text : '小学辅导'
              },
              {
                id : 'service',
                text : '中学辅导'
              },
              {
                id : 'service',
                text : '高中辅导'
              },
              {
                id : 'service',
                text : '兴趣特长'
              },
              {
                id : 'community',
                text : '青橙社区'
              }
            ],
            images : [
              {
                id : '0001',
                imgUrl : 'http://pic.soutu123.com/back_pic/00/05/13/335625eea81dadc.jpg'
              },
              {
                id : '0002',
                imgUrl : 'http://pic.soutu123.com/back_pic/18/09/10/824a9edf0174f9ab899b90c0463ca849.jpg'
              },
              {
                id : '0003',
                imgUrl : 'http://pic.soutu123.com/back_pic/00/05/15/755625f6f3bf1d6.JPG'
              },
              {
                id : '0004',
                imgUrl : 'http://pic.soutu123.com/back_pic/18/09/10/fd53b18cc0eb72e2d29d84649610065b.jpg'
              }
            ],
            teacherInfo : [
              {
                id : '01',
                nickname : '陈老师',
                job : '数学老师',
                year : '2',
                graduated : '广西大学',
                major : '物联网工程',
                level : '本科',
                status : '大二就读',
                city : '广西',
                province : '南宁',
                realAddress : '西安市长安区',
                dataStatus : '人工认证'
              },
              {
                id : '02',
                nickname : '李老师',
                job : '音乐老师',
                year : '3',
                graduated : '桂林电子科技大学',
                major : '现代舞',
                level : '本科',
                status : '大四就读',
                city : '广西',
                province : '南宁',
                realAddress : '西安市长安区',
                dataStatus : '人工认证'
              },
              {
                id : '03',
                nickname : '梁老师',
                job : '英语老师',
                year : '3',
                graduated : '北京大学',
                major : '网络工程',
                level : '本科',
                status : '大二就读',
                city : '广西',
                province : '南宁',
                realAddress : '西安市长安区',
                dataStatus : '人工认证'
              },
              {
                id : '04',
                nickname : '王老师',
                job : '语文老师',
                year : '1',
                graduated : '南京大学',
                major : '土木工程',
                level : '本科',
                status : '大三就读',
                city : '广西',
                province : '南宁',
                realAddress : '西安市长安区',
                dataStatus : '人工认证'
              },
            ]
          }
      }
    }
</script>

<style scoped>
  .el-row {
    margin: 0 !important;
  }
  div.top-bar {
    width: 100%;
    background: url("http://pic.soutu123.com/back_pic/00/01/88/75/05cef06f4f3fa1d093d8e98b5c443e67.jpg");
    padding: 10px 0;
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
  .title-list {
    display: flex;
    padding: 0;
  }
  .titles {
    flex: 1;
    text-align: center;
    font-weight: normal;
    font-size: 14px;
    color: #fff;
    margin-top: 10px;
    cursor: pointer;
  }
  /*.user-login {*/
  /*text-align: right;*/
  /*margin-top: 15px;*/
  /*margin-right: 20px;*/
  /*}*/
  .user-login span {
    font-size: 20px;
  }
  .join {
    text-align: right;
    margin-right: 20px;
    font-size: 18px;
    font-family: 微软雅黑;
    font-weight: 500;
    color: #f00;
    cursor: pointer;
  }
  /*透明tabbar*/
  div.virtural {
    width: 100%;
    background-color: #8BC34A;
    padding: 5px 0;
    opacity: 0.8;
    border-radius: 35px;
    color: #fff;
    margin: 5px 0;
  }
  div.virtural p {
    margin: 20px 30px;
    color: #000000;
    font:bold 14px 微软雅黑, Geneva, sans-serif;
    line-height:1.5;
  }
  /*选中高亮*/
  .router-link-active {
    color: #00cccc;
  }

  .type-list {
    display: flex;
    padding-left:10%;
    padding-right:10%;
  }
  li.items {
    flex: 1;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
  }
  .form-wrapper {
    padding: 30px;
  }
  .swiper-img {
    width: 100%;
  }
  .forms {
    margin: 0 40px;
    background: #c8c8c8;
  }
  .infor p {
    margin: 15px 40px;
    font-size: 20px;
  }
  .table-bordered>thead>tr>td, .table-bordered>thead>tr>th {
    text-align: center;
    font-size: 20px;
    padding: 16px 34px;
  }
  .table>tbody>tr>td {
    padding: 18px;
    font-size: 18px;
    line-height: 1.42857143;
    vertical-align: top;
    border-top: 1px solid #fff;
    text-align: center;
  }
  .add-info {
    color: #4f4f4f;
    font-size: 16px !important;
    font-weight: 100;
  }
  .rates {
    display: flex;
    padding: 10px 45px 20px;
    font-size: 18px;
  }
  .rates span.left {
    margin-right: 40px;
  }
  .rates span.right {
    margin-left: 40px;
  }
  .buttons{
    margin: 40px 10rem;
    display: flex;
  }
  .el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 30%;
    margin: 0 15%;
  }
</style>
