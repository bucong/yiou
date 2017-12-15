<template>
  <div class="pay-finish">
    <img src="../assets/images/payFinish_03.png"/>
    <h5>支付完成！</h5>
    <p>如需发票，请向柜台人员索取，谢谢！</p>
    <button>查看订单</button>
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
