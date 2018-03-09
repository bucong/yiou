<template>
  <div class="line-info">
    <section class="info">
      <div class="flex">
        <div class="air flex">
          <img src="static/images/air_03.png"/>
          <h1>16℃</h1>
          <div>
            <p>上海</p>
            <p>多云 4~18℃</p>
          </div>
        </div>
        <select name="">
          <option value="">保税区仓库</option>
        </select>
      </div>
      <div class="flex line-num">
        <div>
          <label>235</label> (辆)<br />
          当日累计
        </div>
        <div>
          <label>35</label> (辆)<br />
          当前排队
        </div>
      </div>
      <ul>
        <li><span>沪C-12345</span><span>库区 / cf2</span></li>
        <li><span>沪C-12345</span><span>库区 / cf2</span></li>
        <li><span>沪C-12345</span><span>库区 / cf2</span></li>
        <li><span>沪C-12345</span><span>库区 / cf2</span></li>
        <li class="green"><span>沪C-12345</span><span>库区 / cf2</span></li>
        <li class="blue"><span>沪C-12345</span><span>库区 / cf2</span></li>
        <li><span>沪C-12345</span><span>库区 / cf2</span></li>
      </ul>
    </section>
    <div class="scroll-box">
      <div class="scroll-long">
        <div>
          <h3>A库</h3>
          <p>您预约的时段为 <span>12：00-14：00</span></p>
          <p>当前在您的前面还有 <span>5</span> 辆车，请耐心等待，并保持手机畅通</p>
          <p>预计等待时间 <span>45</span> 分钟</p>
        </div>
        <div>
          <h3>B库</h3>
          <p>您预约的时段为 <span>12：00-14：00</span></p>
          <p>当前在您的前面还有 <span>5</span> 辆车，请耐心等待，并保持手机畅通</p>
          <p>预计等待时间 <span>45</span> 分钟</p>
        </div>
        <div>
          <h3>C库</h3>
          <p>您预约的时段为 <span>12：00-14：00</span></p>
          <p>当前在您的前面还有 <span>5</span> 辆车，请耐心等待，并保持手机畅通</p>
          <p>预计等待时间 <span>45</span> 分钟</p>
        </div>
        <div>
          <h3>D库</h3>
          <p>您预约的时段为 <span>12：00-14：00</span></p>
          <p>当前在您的前面还有 <span>5</span> 辆车，请耐心等待，并保持手机畅通</p>
          <p>预计等待时间 <span>45</span> 分钟</p>
        </div>
      </div>
    </div>
    <section class="operation">
      <a href="appointInfo.html">预约须知</a>
      <a href="changeInfo.html">换单须知</a>
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
