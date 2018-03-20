<template>
  <div class="reg-success">
    <img src="static/images/regSuccess_03.png"/>
    <h1>恭喜</h1>
    <p>您已完成绑定，现在可以预约进仓了，如需修改资料 <br /> 请进入个人中心修改</p>
    <button class="sub" @click="goOrder">预约进仓</button>
    <div class="meng" :style="'display: '+carPerfect">
      <div class="meng-box finish-vehicle">
        <div>
          <h5 @click="closeGuide">&times;</h5>
          <h6></h6>
          <img src="static/images/regSuccess_02.png"/>
        </div>
        <p>请先完善车辆信息</p>
        <router-link to="/vehicleInfo">去完善</router-link>
      </div>
    </div>
  </div>
</template>

<script>
//import { Navbar, TabItem } from 'mint-ui';
export default {
  name: 'error',
  data () {
    return {
      carList: [],
      carPerfect: 'none'
    }
  },
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background:#fff')
  },
  methods:{
    goOrder:function(){
      if(this.carList.length==0){
        this.carPerfect='block';
      }
    },
    closeGuide:function(){
      this.carPerfect='none';
    }
  },
  mounted:function(){
  	//这里使用jQuery
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
