<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="_handleLogin">login</button>
    <button @click="_handleTest">testRequest</button>
  </div>
</template>

<script>
import { fetch } from '@/utils';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  methods: {
    _handleLogin() {
      // document.cookie = 'SID='
      fetch({
        // api: 'home/page/focusList'
        // api: 'user/socialmessage/readed',
        api: 'user/account/wxMiniLogin',
        extraParams: {
          code: '011skcsY13RzQS0mFXsY1eE1sY1skcsQ'
        },
        success: data => {
          if (data.Code === 20000) {
            // document.cookie = 'SID=' + data.spareParameter.Cookie;
            // sessionStorage.setItem('userId', data.userInfo.userId);
          }
        }
      });
    },
    _handleTest() {
      // document.cookie = 'SID='
      fetch({
        api: 'home/page/focusList',
        // api: 'user/socialmessage/readed',
        // api: 'user/account/wxMiniLogin',
        // extraParams: {
        //   code: '001fX4r02X7DnZ0c2zp021v8r02fX4r7'
        // },
        success() {
          console.log('nihao');
        }
      });
      // console.log('nihao');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
