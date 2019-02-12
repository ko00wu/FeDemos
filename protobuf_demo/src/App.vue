<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <div>
      <a href="https://www.baidu.com/">百度</a>
    </div>
    <div>
      <a href="https://www.google.com/">谷歌</a>
    </div>
    <button @click="_handleAlert">alert</button> -->
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    _handleAlert() {
      alert('来自JS的Alert');
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
