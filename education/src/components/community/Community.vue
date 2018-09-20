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
              <router-link tag="li"
                           :to="{path: '/' + item.id}"
                           v-for="item in navbar"
                           :key="item.id"
              >
                {{ item.text }}
              </router-link>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Community",
    data () {
      return {
        bars : [
          {
            id : 'home',
            text : '青橙官网'
          },
          {
            id : 'mall',
            text : '青橙商城'
          },
          {
            id : 'service',
            text : '教员库'
          },
          {
            id : 'client',
            text : '青橙客户端'
          }
        ],
        navbar : [
          {
            id : 'community',
            text : '推荐'
          },
          {
            id : 'forum',
            text : '论坛'
          },
          {
            id : 'form',
            text : '板块'
          },
          {
            id : 'mall',
            text : '商城'
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
    margin-right: 20px;
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
