<template>
  <div class="error">
    <img src="static/images/error_03.jpg"/>
    <h1>哎呀，出错了！</h1>
    <div class="reason">
      <span>可能原因：</span>
      <ul>
        <li>网络信号弱</li>
        <li>找不到请求页面</li>
        <li>输入的网址不正确</li>
      </ul>
    </div>
    <div class="flex operation">
      <a href=""><span class="mui-icon mui-icon-refreshempty"></span>刷新</a>
      <a href="javascript:history.back(-1)"><span class="mui-icon mui-icon-arrowleft"></span>返回</a>
    </div>
    <div class="flex bottom">
      <hr />
      <p>OCEAN EAST</p>
      <hr />
    </div>
  </div>
</template>

<script>
//import { Navbar, TabItem } from 'mint-ui';
export default {
  name: 'error',
  data () {
    return {
      msg: ''
    }
  },
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background:#fff')
  },
  methods:{

  },
  mounted:function(){
  	//这里使用jQuery
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
