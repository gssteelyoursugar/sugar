<template>
  <div class="job">
    <banner></banner>
    <div class="content">
      <div class="title">
        <p>区域代理</p>
      </div>
      <div class="main">
        <p class="tiny-title">岗位职责</p>
        <p class="tiny-content">
          1、负责运营中心加盟校区日常运营的支持工作；</br>
          2、根据各分校区实际的情况进行支持，并对主管区域的分校区业绩进行负责；</br>
          3、组织实施公司总体战略，发掘市场机会，领导创新与变革；</br>
          4、执行相关管理流程和规章制度，及时进行组织和流程的优化调整；</br>
          5、完成上级相关指派的工作，日报、周报、月报编写。</br>
          任职要求：</br>
          1、本科在校及以上学历；</br>
          2、有过家教工作经验，或者K12运营经验；</br>
          3、熟悉教育型企业（K12）业务和运营流程；</br>
          4、熟悉中小学课外辅导学校全面运作，企业经营管理、各部门工作流程；</br>
          5、有过中小学个性化教育分校运营经验者优先</br>
          6、熟练使用办公软件。</br>
          薪资构成：</br>
          利润分成+校区高提成+优厚出差补助</br>
          晋升空间：</br>
          区域代理-大区经理-大区总监-全国运营中心总监</br>
          工作地址：</br>
          您所在城市</br>
        </p>
      </div>
    </div>
    <bottoms></bottoms>
  </div>
</template>

<script>
  import banner from '@/components/common/Banner'
  import footer from '@/components/common/Footer'
  export default {
    name: "Job",
    components : {
      banner,
      bottoms : footer
    },
    data () {
      return {
      }
    }

  }
</script>

<style scoped>
  .content {
    padding: 0 15rem;
    margin: 10px 15px 100px 15px;
  }
  .title {
    padding: 1px;
    border-left: 10px solid #A1D564;
  }
  .title p {
    margin-left: 15px;
    font-size: 18px;
  }
  .main {
    margin-left: 20%;
  }
  .tiny-title {
    margin: 0;
    font-size: 20px;
    font-weight: bold;
  }
  .tiny-content {
    line-height:  3rem;
  }
</style>
