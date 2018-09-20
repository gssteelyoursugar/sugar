<template>
 <div class="about">
   <banner></banner>
   <div class="content">
     <p>
       “青橙教育”
     </p>
     <p>
       青橙教育隶属于扁桃科技（南京）有限公司，是全国中小学全科辅导品牌，由国内领先的教育机构扁桃科技（南京）有限公司旗下青橙教育品牌精选全国各年级、各学科超万名专业教师，根据每个孩子的特点进行高品质个性化教学，提供全国规模的上门一对一，以及高端在线教育服务。目前轻轻家教在线+上门的服务模式已经覆盖全国范围，有几万名教师在轻轻家教平台上注册，平均教龄2年。
       目前青橙教育已成为全国家庭的选择，提供了百万小时的上门及在线教学服务。
     </p>
   </div>
   <bottoms></bottoms>
 </div>
</template>

<script>
    import banner from '@/components/common/Banner'
    import footer from '@/components/common/Footer'
    export default {
      name: "About",
      components : {
        banner,
        bottoms : footer
      }

    }
</script>

<style scoped>
  .content {
    padding: 0 10rem;
    font-size: 20px;
    margin: 10px 15px 6rem 15px;
    line-height: 6rem;
  }
</style>
