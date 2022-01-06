<template>
  <div id="app">
    <div class="app_router">
    <!-- <router-link to="/">home</router-link>   
    <router-link to="/about" style="margin-left:30px">future</router-link> -->
    </div>
    <router-view />

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
@import "./assets/css/main.css";
@import url("https://cdn.staticfile.org/ionicons/2.0.1/css/ionicons.min.css");
#app {
  /* font-family: "Microsoft YaHei","Microsoft JhengHei"; */
  font-family:  Verdana, Geneva, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* .app_router{
  margin: 30px auto;
  width: 100%;
  text-align: center;
} */
.app_router a{
  font-size: 2rem;
  font-weight: bold;
  color: rgb(172, 169, 169);
}

</style>
