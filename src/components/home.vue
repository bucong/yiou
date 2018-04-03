<template>
  <div class="people">
    <section class="portrait">
      <div>
        <img src="static/images/portrait.jpg" class="head-img"/>
        <img :src="'static/images/sex'+sex+'.png'" class="sex" alt="" />
      </div>
      <h3>{{name}}</h3>
      <p>
        <span class="fa fa-mobile"></span>
        {{$store.state.phone}}
      </p>
      <h5>{{company}}</h5>
    </section>
    <div class="spacing"></div>
    <ul>
      <li>
        <router-link to="/myAppoint">
          <img src="static/images/peopleIcon_03.png"/>
          <div>我的预约</div>
          <span class="fa fa-angle-right"></span>
        </router-link>
      </li>
      <li>
        <router-link to="/vehicleInfo">
          <img src="static/images/peopleIcon_06.png"/>
          <div>车辆信息</div>
          <span class="fa fa-angle-right"></span>
        </router-link>
      </li>
      <li>
        <router-link to="/basicInfo">
          <img src="static/images/peopleIcon_08.png"/>
          <div>基本资料</div>
          <span class="fa fa-angle-right"></span>
        </router-link>
      </li>
      <li>
        <router-link to="/payRecord">
          <img src="static/images/peopleIcon_10.png"/>
          <div>支付记录</div>
          <span class="fa fa-angle-right"></span>
        </router-link>
      </li>
    </ul>
    <div class="spacing"></div>
    <ul>
      <li>
        <router-link to="/message">
          <img src="static/images/peopleIcon_12.jpg"/>
          <div>留言建议</div>
          <span class="fa fa-angle-right"></span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '@/vuex/store';
export default {
  name: 'home',
  data () {
    return {
      msg: '',
      name: '卜聪',
      sex: 1,
      phone: '17621960934',
      company: '上海硕道信息技术有限公司'
    }
  },
  store,
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
