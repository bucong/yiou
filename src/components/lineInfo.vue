<template>
  <div class="line-info">
    <section class="info">
      <div class="flex">
        <div class="air flex">
          <img src="static/images/air_03.png"/>
          <h1>{{temperature}}℃</h1>
          <div>
            <p>{{weatherAddress}}</p>
            <p>{{weather}}</p>
          </div>
        </div>
        <select name="">
          <option value="">{{address}}</option>
        </select>
      </div>
      <div class="flex line-num">
        <div>
          <label>{{totalCar}}</label> (辆)<br />
          当日累计
        </div>
        <div>
          <label>{{lineCar}}</label> (辆)<br />
          当前排队
        </div>
      </div>
      <ul>
        <li :class="[item.status==2?'green':'',item.status==3?'blue':'']" v-for="item in lineList"><span>{{item.car}}</span><span>库区 / cf2</span></li>
      </ul>
    </section>
    <div class="scroll-box">
      <mt-swipe :auto="0">
        <mt-swipe-item v-for="item in orderList">
          <h3>{{item.wareHouse}}</h3>
          <p>您预约的时段为 <span>{{item.orderTime}}</span></p>
          <p>当前在您的前面还有 <span>{{item.before}}</span> 辆车，请耐心等待，并保持手机畅通</p>
          <p>预计等待时间 <span>{{item.wait}}</span></p>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <section class="operation">
      <a href="appointInfo">预约须知</a>
      <a href="changeInfo">换单须知</a>
    </section>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
export default {
  name: 'love',
  data () {
    return {
      weatherAddress: '上海',
      temperature: 16,
      weather: '多云 4~18℃',
      address: '保税区仓库',
      totalCar: 235,
      lineCar: 35,
      lineList: [
        {car: '沪C·H37J23',status: 1},
        {car: '苏H·H328H3',status: 1},
        {car: '苏J·K75890',status: 1},
        {car: '沪B·777826',status: 1},
        {car: '沪A·87H452',status: 2},
        {car: '沪C·J89654',status: 3},
        {car: '沪C·H37J23',status: 1},
        {car: '沪C·H37J23',status: 1},
        {car: '苏H·H328H3',status: 1},
        {car: '苏J·K75890',status: 1},
        {car: '沪B·777826',status: 1},
        {car: '沪A·87H452',status: 1},
        {car: '沪C·J89654',status: 1},
        {car: '沪C·H37J23',status: 1},
        {car: '沪C·H37J23',status: 1},
      ],
      orderList: [
        {wareHouse: 'B库',orderTime:'12:00-14:00',before:5,wait: '1小时10分钟'},
        {wareHouse: 'C库',orderTime:'14:00-16:00',before:3,wait: '45分钟'},
        {wareHouse: 'F库',orderTime:'14:00-16:00',before:8,wait: '1小时35分钟'}
      ]
    }
  },
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background:#eef2f8')
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
