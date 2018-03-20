<template>
  <div class="register">
    <img src="static/images/register_03.png"/>
    <h1>上海宜欧国际物流有限公司</h1>
    <h5>OCEAN EAST International Logistics Co.,Ltd.</h5>
    <ul class="form">
      <li class="flex">
        <span>手机号</span>
        <input type="text" class="phone" name="" v-model="mobile" placeholder="请填写您个人手机号，方便联络通知" />
      </li>
      <li class="flex">
        <span>验证码</span>
        <input type="text" class="check-num" name="" v-model="checkNum" placeholder="短信验证码" />
        <button class="get-check">免费获取</button>
      </li>
    </ul>
    <button class="sub" @click="register">免费注册</button>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
export default {
  name: 'error',
  data () {
    return {
      mobile: '',
      checkNum: ''
    }
  },
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background: url(static/images/registerbg_02.png) no-repeat;background-size: 100% auto;')
  },
  methods:{
    register:function(){
      if(this.mobile.length!=11){
        MessageBox('提示','请填写正确的手机号');
      }else if(this.checkNum==''){
        MessageBox('提示','请填写验证码');
      }else{
        this.$router.push({path: '/regSuccess'})
      }
    }
  },
  mounted:function(){
  	//这里使用jQuery
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
