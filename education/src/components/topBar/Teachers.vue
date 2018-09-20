<template>
  <div>
    <banner></banner>
    <div style="width:10%;height: 500px;"></div>
    <bottoms></bottoms>
  </div>
</template>

<script>
  import banner from '@/components/common/Banner'
  import footer from '@/components/common/Footer'
  export default {
    name: "Teachers",
    components : {
      banner,
      bottoms : footer
    }

  }
</script>

<style scoped>

</style>
