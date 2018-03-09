<template>
  <div class="pay-record">
    <section class="head flex">
      <span>全部</span>
      <button data-options='{"type":"month"}' class="mui-btn mui-btn-block choose-month">
        <img src="static/images/record_03.png"/>
      </button>
    </section>
    <section class="record-list">
      <div>
        <span>10月</span>
        <ul>
          <li>预约单号：20170965242365</li>
          <li>入库时间：2017-10-10 , 8:30-9:30</li>
          <li>货物体积：200m<sup>3</sup></li>
          <li>卸货仓库：外高桥保税区 cf2</li>
          <li>金额：2688元</li>
        </ul>
      </div>
      <div>
        <span>9月</span>
        <ul>
          <li>预约单号：20170965242365</li>
          <li>入库时间：2017-10-10 , 8:30-9:30</li>
          <li>货物体积：200m<sup>3</sup></li>
          <li>卸货仓库：外高桥保税区 cf2</li>
          <li>金额：2688元</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
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
