<template>
  <div class="index-content">
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
      <div class="virtural">
        <div class="sorts">
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
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in images" :key="item.id">
          <img :src="item.imgUrl" class="swiper-img">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
    <div class="content-wrapper">
      <div class="show-list">
        <div class="list-header">
          <h2>{{ topicTitle }}</h2>
          <h4>{{ topicContent }}</h4>
          <img src="http://pic.soutu123.com/back_pic/02/65/33/375787842b77fda.jpg" class="showlist-img">
        </div>
        <div class="list-content">
          <div class="card">
            <div class="card-one left-card">
              <h4 class="text-title"> {{ topicOne.title }}</h4>
              <p class="text-content"> {{ topicOne.content }} </p>
            </div>
            <div class="card-one">
              <img :src="topicOne.imgUrl" class="card-img">
            </div>
          </div>
          <div class="card">
            <div class="card-two left-card">
              <img :src="topicTwo.imgUrl" class="card-img">
            </div>
            <div class="card-two">
              <h4 class="text-title"> {{ topicTwo.title }}</h4>
              <p class="text-content"> {{ topicTwo.content }}</p>
            </div>
          </div>
          <div class="kids-swiper">
            <swiper :options="swiperOption">
              <swiper-slide v-for="item in kidsImages" :key="item.id">
                <img :src="item.imgUrl" class="swiper-img">
              </swiper-slide>
              <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
          </div>
          <div class="introduce">
            <img src="http://pic.soutu123.com/back_pic/00/04/09/62562108ebc344e.jpg" class="swiper-img">
          </div>
        </div>
      </div>
    </div>
    <div class="footer-wrapper">
      <div class="company">
        <ul>
          <li v-for="item in company" :key="item.id">
            {{ item }}
          </li>
        </ul>
        <p> @2018青橙教育</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Index',
  data () {
    return {
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
      topicTitle : '海量名师等你选择',
      topicContent : '全国超50000000+名专业教师、全方位经过人工实名审核、首创教师星级体系服务',
      topicOne : {
        id : '00001',
        title : "我们始终相信让孩子快乐的学习才是成功的",
        content : `青橙教育致力于实现颠覆中国传统教育，
                   正如中国教育学会名誉会长、北师大资深教授顾明远先生倡导：“没有爱就没有教育，
                   没有兴趣就没有学习，教书育人在细微处，学生成长在活动中”。`,
        imgUrl : 'http://pic.soutu123.com/master_pic/00/10/89/475672b7e15bf50.jpg'
      },
      topicTwo : {
        id : '00002',
        title : "一对一辅导，因材施教提分看得见",
        content : `青橙教育十分注重学生的个性发展，强调让学生自己动手探索并设计实验，
                   讲授知识时不仅注重讲授思维过程，更追求知识理论的逻辑性和层次体系。
                   非常强调：Independent Thinking独立思考+Creative Thinking（创新思考）+Critical Thinking 即质疑精神。
                   有质疑，才有创新，有独立思考，才能发现事物背后的真相。我们认为做学术研究，不敢质疑，和一个木头没什么区别。`,
        imgUrl : 'http://pic.soutu123.com/master_pic/00/10/89/475672b7e15bf50.jpg'
      },
      kidsImages : [
        {
          id : '000001',
          imgUrl : 'http://pic.soutu123.com/back_pic/00/01/88/75/8abcd801ff1dad906cc288ffdf6e6113.jpg'
        },
        {
          id : '000002',
          imgUrl : 'http://pic.soutu123.com/back_pic/00/01/77/3256094b0081578.jpg'
        }
      ],
      company : ['关于我们','联系我们','服务协议','承诺声明书','隐私权政策','老师行为规范']
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
  /*透明tabbar*/
  div.virtural {
    position: absolute;
    top: 7%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.68);
    opacity: .6;
    z-index: 3;
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
  .sorts {
    margin-top: 10px;
    padding: 15px;
  }
  .type-list {
    display: flex;
    padding-left:10%;
    padding-right:10%;
  }
  .items {
    flex: 1;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
  }
  /*轮播*/
  .swiper-img {
    width: 100% ;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    background: #fff !important;
  }
  /*展示区*/
  .showlist-img {
    width: 100%;
  }
  .list-header h4,h2 {
    text-align: center;
    color: #101010;
  }
  .list-content {
    padding: 20px 15px;
  }
  .card {
    display: flex;
    text-align: center;
  }
  .card-img {
    width: 100%;
  }
  .card-one,.card-two{
    flex: 1;
    padding: 10px;
  }
  .card-one h4 {
    font-size: 30px;
    font-weight: 500;
    color: #FF9800;
  }
  .card-two h4 {
    font-size: 30px;
    font-weight: 500;
    color: #8BC34A;
  }
  .text-content {
    font-size: 29px;
    line-height: 4.5rem;
    text-align: left;
    font-weight: lighter;
  }
  /*底部轮播图*/
  .kids-swiper,.introduce {
    padding: 0 10px;
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
</style>
