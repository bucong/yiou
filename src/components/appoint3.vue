<template>
  <div class="appoint3">
    <div class="logistics-info" style="border: .01rem solid #e6e6e6;margin-top: .3rem;">
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
    <h6>请确定进仓的日期</h6>
    <div id='schedule-box' class="boxshaw"></div>
    <section class="appoint3-detail">
      <h5><img src="../assets/images/appoint3_04.png"/> 请确定进仓的时间</h5>
      <div class="flex">
        <select name="">
          <option value="">12:00-14:00</option>
          <option value="">14:00-16:00</option>
          <option value="">16:00-18:00</option>
        </select>
        <div>
          共计 <span>2</span> 小时
        </div>
      </div>
    </section>
    <section class="appoint3-detail">
      <h5><img src="../assets/images/appoint3_07.png"/> 请确认进仓的车牌</h5>
      <div class="flex">
        <select name="">
          <option value="">沪C-12345</option>
          <option value="">沪C-12345</option>
          <option value="other">其他</option>
        </select>
        <div>
          <span class="fa fa-trash-o"> 删除</span>
        </div>
      </div>
      <div class="flex">
        <select name="">
          <option value="">沪C-12345</option>
          <option value="">沪C-12345</option>
          <option value="other">其他</option>
        </select>
        <div>
          <span class="fa fa-plus"> 添加</span>
          <span class="fa fa-trash-o"> 删除</span>
        </div>
      </div>
    </section>
    <section class="appoint3-detail">
      <h5><img src="../assets/images/appoint3_10.png"/> 联系人信息</h5>
      <div class="flex">
        <input type="text" name="" id="" value="张三" disabled="" style="width: 2.12rem;" />
        <input type="text" name="" id="" value="" placeholder="电话" disabled="" style="width: 3.92rem;" />
      </div>
    </section>
    <button class="sub">确&nbsp;&nbsp;定</button>
    <div class="meng"></div>
    <div class="meng-box appoint3-add-vehicle">
      <h3>添加车牌<span>&times;</span></h3>
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
