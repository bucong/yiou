<template>
  <div class="appoint-info">
    <p>( 1 ) 预约周期：1-14天内（国定节假日除外），预约截止时间为进仓前一天的15:00。 </p>
    <p>( 2 ) 取消时限：预约进仓前1天的12:00前。</p>
    <p>( 3 ) 三个月内累计爽约3次的将被列入违约名单，90天内不能再次进行预约。</p>
    <p>( 4 ) 请在预约进仓时间段前的半个小时内到达单处进行换单登记，超时则预约号序失效，并将记录一次爽约。</p>
    <p>( 5 ) 请详细阅读预约单及进仓文件载明的须知，确保单单一致，单货一致。</p>
    <a href="appoint1.html">开始预约</a>
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
