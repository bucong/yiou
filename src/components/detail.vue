<template>
  <div class="appoint-detail">
    <h2><span class="fa fa-clock-o"></span>卸货已完成，请付款...</h2>
    <div class="spacing"></div>
    <section>
      <ul>
        <li>预约单号：20170092545632541</li>
      </ul>
      <hr />
      <ul>
        <li>客户名称：戴森电器有限公司</li>
        <li>入库时间：2017-09-10 , 8:30-9:30</li>
        <li>货物体积：200m<sup>3</sup></li>
        <li>卸货仓库：外高桥保税区</li>
        <li>库&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;区：cf2</li>
      </ul>
    </section>
    <div class="spacing"></div>
    <section>
      <ul class="detail-vehicle">
        <li class="flex">车牌号码：沪C-12355<div>修改<span class="fa fa-angle-right"></span></div></li>
        <li class="flex">车牌号码：沪C-12355<div>修改<span class="fa fa-angle-right"></span></div></li>
      </ul>
    </section>
    <h4>金额：￥112.00</h4>
    <button>立即支付</button>
    <div class="meng"></div>
    <div class="meng-box appoint3-add-vehicle">
      <h3>修改车牌<span>&times;</span></h3>
      <input type="text" class="vehicle-num" placeholder="请输入你的车牌" />
      <div class="flex">
        <button class="add-vehicle-cancel">取消</button>
        <div></div>
        <button class="add-vehicle-sub">确定</button>
      </div>
    </div>
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
