<template>
  <div class="appoint-result">
    <img src="../assets/images/appointFail_03.png"/>
    <h2>对不起，预约失败！</h2>
    <div></div>
    <button class="re-appoint">重新预约</button>
  </div>
</template>

<script>
import { Navbar, TabItem } from 'mint-ui';
export default {
  name: 'love',
  data () {
    return {
      selected: '1'
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
