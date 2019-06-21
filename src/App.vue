<template>
  <div id="app">
    <div v-if="getPageId!='Success'" class="heading">Sample Project</div>
     <HeaderButtons v-if="getPageId!='Success'" />
      <router-view/>
  
  </div>
</template>

<script>
import HeaderButtons from './components/HeaderButtons.vue'
import './assets/common_css/style.scss'
import {mapGetters} from 'vuex'

export default {
  name: 'app',
  components: {
    HeaderButtons
  },
  computed: {
    ...mapGetters(['getPageId'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 50px;
}
body{
  text-align: center;
}
.heading{
  text-align: center;
  margin-bottom: 1%;
  font-size: 35px;
}
</style>
