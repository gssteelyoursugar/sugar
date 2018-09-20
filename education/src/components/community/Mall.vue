<template>
    <div class="recommond">
      <div class="top-bar">
        <ul>
          <router-link tag="li"
                       :to="{path: '/' + item.id}"
                       v-for="item in bars"
                       :key="item.id"
                       class="bars"
          >
            {{ item.text }}
          </router-link>
        </ul>
      </div>
      <div class="logo">
        <el-row :gutter="20">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <img src="https://res.hjfile.cn/classec/common/header/images/logo_hover-29a6f.png" id="logo">
            </div>
          </el-col>
          <el-col :span="12">
            <div class="route">
              <ul>
                <router-link tag="li" to="/home">
                  首页
                </router-link>
              </ul>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="shop-img">
        <img src="http://pic.soutu123.com/back_pic/00/05/13/335625eea81dadc.jpg" alt="">
        <img src="http://pic.soutu123.com/back_pic/18/09/10/824a9edf0174f9ab899b90c0463ca849.jpg" alt="">
      </div>
      <div class="info">
        <p>
          招商联系电话：19977132129
        </p>
        <p>
          QQ、微信同号:1109168899
        </p>
      </div>
      <bootom></bootom>
    </div>
</template>

<script>
    import footer from '@/components/common/Footer'
    export default {
      name: "Mall",
      components : {
        bootom : footer
      },
      data () {
        return {
          bars : [
            {
              id : 'home',
              text : '青橙官网'
            },
            {
              id : 'community',
              text : '青橙社区'
            },
            {
              id : 'service',
              text : '教员库'
            },
            {
              id : 'client',
              text : '青橙客户端'
            }
          ]
        }
      }
    }
</script>

<style scoped>
  .top-bar {
    background: #8BC34A;
    display: flex;
    padding: 13px 15px 5px;
    position: relative;
  }
  .top-bar ul {
    padding: 0 10%;
    width: 100%;
  }
  .top-bar ul li {
    margin-right: 25px;
    font-size: 16px;
    font-family: Microsoft YaHei;
    color: #fff;
    cursor: pointer;
  }
  /*logo*/
  .logo {
    padding: 10px 5rem;
    margin-top: 20px;
  }
  .bg-purple {
    margin-top:20px;
  }
  .route ul li {
    color: #FF4081;
    font-size: 20px;
    font-family : Microsoft YaHei;
    cursor: pointer;
  }
  .shop-img img {
    width: 100%;
  }
  .info {
    margin: 50px 0px;
    text-align: center;
    font-size: 20px;
    font-family: 微软雅黑;
  }

</style>
