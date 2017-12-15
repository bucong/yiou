<template>
  <div class="register">
    <img src="../assets/images/register_03.png"/>
    <h1>上海宜欧国际物流有限公司</h1>
    <h5>OCEAN EAST International Logistics Co.,Ltd.</h5>
    <ul class="form">
      <li class="flex">
        <span>手机号</span>
        <input type="text" class="phone" name="" id="" value="" placeholder="请填写您个人手机号，方便联络通知" />
      </li>
      <li class="flex">
        <span>验证码</span>
        <input type="text" class="check-num" name="" id="" value="" placeholder="短信验证码" />
        <button class="get-check">免费获取</button>
      </li>
    </ul>
    <button class="sub">免费注册</button>
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
    document.querySelector('body').setAttribute('style', 'background: url(../assets/images/registerbg_02.png) no-repeat;background-size: 100% auto;')
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
