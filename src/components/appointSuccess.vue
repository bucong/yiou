<template>
  <div class="appoint-result">
    <img src="../assets/images/appointSuccess_03.png"/>
    <h2>恭喜您，预约成功！</h2>
    <div>
      <ul>
        <li>仓库： <span>外高桥保税区</span></li>
        <li>日期： <span>2017-08-11</span></li>
        <li>时间： <span>12:00-14:00</span></li>
      </ul>
    </div>
    <button class="sub">确&nbsp;&nbsp;定</button>
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
