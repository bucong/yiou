<template>
  <div class="appoint-info">
    <p>( 1 ) 送货车辆到达宜欧仓库后,车辆有序在场外排队停放,不得堵塞道路,影响道路正常通行。  </p>
    <p>( 2 ) 驾驶员凭行驶证到门卫处登记,签署安全告知书。</p>
    <p>( 3 ) 携带进仓文件到仓库换单处换取收货操作单,收货操作单上会有库区序号。</p>
    <p>( 4 ) 排队等待叫号入库。排队期间，您可进入宜欧物流微信公众号“排队查询”系统进行实时查看，也可关注门卫处的排队LED显示屏，我们将会以短信和语音通知您入库。如车辆得到允许进库的通知后30分钟仍未靠对应库区平台,仓库现场将删除此票登记信息。如送货车辆再次进行送仓需要重新到换单处换单,重新排队。</p>
    <p>( 5 ) 听从安保人员指挥及相关道路指引将车辆停靠至相应库区。</p>
    <p>( 6 ) 送货驾驶员将收货操作单和进仓文件交给仓库理货员安排卸货。</p>
    <p>( 7 ) 进仓驾驶员在卸货完成后,领取收货凭证,到换单处缴纳费用。</p>
    <p>( 8 ) 完成缴费后,凭发票和收货凭证去门卫处换行驶证离开仓库。</p>
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
