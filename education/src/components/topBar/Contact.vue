<template>
  <div>
    <banner></banner>
    <div class="content">
      <div style="width:10%;height: 500px;"></div>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
  import banner from '@/components/common/Banner'
  import footer from '@/components/common/Footer'
  export default {
    name: "Contact",
    components : {
      banner,
      bottom : footer
    }

  }
</script>

<style scoped>
  .content {
    padding: 0 15rem;
    margin: 10px 15px 100px 15px;
  }
</style>
