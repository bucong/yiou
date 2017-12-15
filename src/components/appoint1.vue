<template>
  <div class="appoint1">
    <section class="flex appoint1-head shadow">
      <img src="../assets/images/appoint_03.png"/>
      <input type="text" name="" id="" value="" placeholder="输入要预约的单号" />
      <img src="../assets/images/appoint_05.png"/>
    </section>
    <section class="appoint-list">
      <router-link to="">
        <ul>
          <li>
            <img src="../assets/images/appoint1Icon_03.png"/>
            <label>单号</label>
            <span>20170925123465875</span>
          </li>
          <li>
            <img src="../assets/images/appoint1Icon_06.png"/>
            <label>公司</label>
            <span>戴森电子信息有限公司</span>
          </li>
          <li>
            <img src="../assets/images/appoint1Icon_08.png"/>
            <label>仓库</label>
            <span>上海外高桥保税区</span>
          </li>
          <li>
            <img src="../assets/images/appoint1Icon_10.png"/>
            <label>体积</label>
            <span>300m<sup>3</sup></span>
          </li>
          <li>
            <img src="../assets/images/appoint1Icon_15.png"/>
            <label>时间</label>
            <span>2017-10-23</span>
          </li>
          <img src="../assets/images/appointStatus1.png" class="status"/>
        </ul>
      </router-link>
      <router-link to="">
        <ul>
          <li>
            <img src="../assets/images/appoint1Icon_03.png"/>
            <label>单号</label>
            <span>20170925123465875</span>
          </li>
          <li>
            <img src="../assets/images/appoint1Icon_06.png"/>
            <label>公司</label>
            <span>戴森电子信息有限公司</span>
          </li>
          <li>
            <img src="../assets/images/appoint1Icon_08.png"/>
            <label>仓库</label>
            <span>上海外高桥保税区</span>
          </li>
          <li>
            <img src="../assets/images/appoint1Icon_10.png"/>
            <label>体积</label>
            <span>300m<sup>3</sup></span>
          </li>
          <li>
            <img src="../assets/images/appoint1Icon_15.png"/>
            <label>时间</label>
            <span>2017-10-23</span>
          </li>
          <img src="../assets/images/appointStatus2.png" class="status"/>
        </ul>
      </router-link>
      <router-link to="">
        <ul>
          <li>
            <img src="../assets/images/appoint1Icon_03.png"/>
            <label>单号</label>
            <span>20170925123465875</span>
          </li>
          <li>
            <img src="../assets/images/appoint1Icon_06.png"/>
            <label>公司</label>
            <span>戴森电子信息有限公司</span>
          </li>
          <li>
            <img src="../assets/images/appoint1Icon_08.png"/>
            <label>仓库</label>
            <span>上海外高桥保税区</span>
          </li>
          <li>
            <img src="../assets/images/appoint1Icon_10.png"/>
            <label>体积</label>
            <span>300m<sup>3</sup></span>
          </li>
          <li>
            <img src="../assets/images/appoint1Icon_15.png"/>
            <label>时间</label>
            <span>2017-10-23</span>
          </li>
          <img src="../assets/images/appointStatus3.png" class="status"/>
        </ul>
      </router-link>
    </section>
    <section class="no-appoint" style="display: none;">
      <img src="../assets/images/appoint_10.jpg" alt="" />
      <p>暂无历史内容</p>
    </section>
    <div class="guide" style="display: none;">
      <button>知道了</button>
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
