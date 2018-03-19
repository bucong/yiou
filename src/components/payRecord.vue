<template>
  <div class="pay-record">
    <section class="head flex">
      <span>全部</span>
      <button @click="openPicker" class="choose-month">
        <img src="static/images/record_03.png"/>
      </button>
    </section>
    <section class="record-list">
      <div v-for="item in list">
        <span>{{item.month}}月</span>
        <ul>
          <li>预约单号：{{item.orderNum}}</li>
          <li>入库时间：{{item.time}}</li>
          <li>货物体积：{{item.volume}}m<sup>3</sup></li>
          <li>卸货仓库：{{item.wareHouse}}</li>
          <li>金额：{{item.money}}元</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  import { DatetimePicker } from 'mint-ui';
export default {
  name: 'love',
  data () {
    return {
      list: [
        {
          month: 9,
          orderNum: 'BK20170925242365',
          time: '2017-10-10 , 8:30-9:30',
          volume: 30,
          wareHouse: '外高桥保税区 cf2',
          money: '2820'
        },{
          month: 11,
          orderNum: 'BK20171115242365',
          time: '2017-10-10 , 8:30-9:30',
          volume: 30,
          wareHouse: '外高桥保税区 cf2',
          money: '2820'
        }
      ]
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
