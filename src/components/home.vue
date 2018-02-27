<template>
  <div class="people">
    <section class="portrait">
      <div>
        <img src="../assets/images/portrait.jpg" class="head-img"/>
        <img :src="sex" class="sex" alt="" />
        <!--<img src="../assets/images/sex2.png" class="sex" alt="" />-->
      </div>
      <h3>{{name}}</h3>
      <p>
        <span class="fa fa-mobile"></span>
        {{phone}}
      </p>
      <h5>{{company}}</h5>
    </section>
    <div class="spacing"></div>
    <ul>
      <li>
        <router-link to="/myAppoint">
          <img src="../assets/images/peopleIcon_03.png"/>
          <div>我的预约</div>
          <span class="fa fa-angle-right"></span>
        </router-link>
      </li>
      <li>
        <router-link to="/vehicleInfo">
          <img src="../assets/images/peopleIcon_06.png"/>
          <div>车辆信息</div>
          <span class="fa fa-angle-right"></span>
        </router-link>
      </li>
      <li>
        <router-link to="/basicInfo">
          <img src="../assets/images/peopleIcon_08.png"/>
          <div>基本资料</div>
          <span class="fa fa-angle-right"></span>
        </router-link>
      </li>
      <li>
        <router-link to="/payRecord">
          <img src="../assets/images/peopleIcon_10.png"/>
          <div>支付记录</div>
          <span class="fa fa-angle-right"></span>
        </router-link>
      </li>
    </ul>
    <div class="spacing"></div>
    <ul>
      <li>
        <router-link to="/evaluate">
          <img src="../assets/images/peopleIcon_12.jpg"/>
          <div>留言建议</div>
          <span class="fa fa-angle-right"></span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      msg: '',
      name: '卜聪',
      sex: 'assets/images/sex1.png',
      phone: '17621960934',
      company: '上海硕道信息技术有限公司'
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
<style scoped lang="scss" type="text/less">

</style>
