<template>
  <div class="appoint2">
    <section class="appoint2-info">
      <div class="logistics-info">
        <h5>
          <img src="../assets/images/appoint1Icon_03.png"/>
          <label>单号</label>
          <span>20170925012365489</span>
        </h5>
        <h5>
          <img src="../assets/images/appoint1Icon_10.png"/>
          <label>体积</label>
          <span style="margin-right: 1.3rem;">300m<sup>3</sup></span>
          <img src="../assets/images/appoint1Icon_18.png"/>
          <label>箱数</label>
          <span>300箱</span>
        </h5>
      </div>
    </section>
    <section class="appoint2-detail">
      <h4>临港非保税仓库</h4>
      <h6>上海市浦东新区临港新城广祥路18号</h6>
      <div>
        <p>*请核对您即将进入的仓库地址</p>
        <p>*如与进仓通知书上的地址不符，请及时联系工厂作进一步确认</p>
        <p>*如地址相符请直接点击“下一步”</p>
      </div>
      <a href="">下一步：选择预约时段</a>
    </section>
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
