<template>
  <div class="footer">
    <div class="company">
      <ul>
        <router-link tag="li"
                     v-for="item in company"
                     :key="item.id"
                     :to="{path: '/' + item.id}"
        >
          {{ item.text }}
        </router-link>
      </ul>
      <p> @2018青橙教育</p>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Footer",
      data () {
          return {
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
  /*footer*/
  .company ul {
    display: flex;
    padding: 0 35%;
    font-size: 12px;
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
  img {
    width: 100%;
  }
</style>
