<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body{
    margin: 0px;
    font-family: Microsoft YaHei;
  }
  ul li{
    list-style: none;
    float: left;
  }
  .router-link-active {
    color: #00cccc;
  }
</style>
