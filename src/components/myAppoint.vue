<template>
  <div class="my-appoint">
    <section class="my-appoint-head shadow">
      <div class="flex shadow search">
        <input type="text" name="" id="" value="" placeholder="输入关键词"/>
        <img src="static/images/appoint_05.png"/>
      </div>
      <div class="flex switch">
        <span :class="active=='now'?'active':''" @click="changeActive('now')">当前订单</span>
        <span :class="active=='history'?'active':''" @click="changeActive('history')">历史订单</span>
      </div>
    </section>
    <section class="appoint-list">
      <ul v-for="item in list">
        <li>
          <img src="static/images/appoint1Icon_03.png"/>
          <label>单号</label>
          <span>{{item.order}}</span>
        </li>
        <li>
          <img src="static/images/appoint1Icon_06.png"/>
          <label>公司</label>
          <span>{{item.company}}</span>
        </li>
        <li>
          <img src="static/images/appoint1Icon_08.png"/>
          <label>仓库</label>
          <span>{{item.warehouse}}</span>
        </li>
        <li>
          <img src="static/images/appoint1Icon_10.png"/>
          <label>体积</label>
          <span>{{item.volume}}m<sup>3</sup></span>
        </li>
        <li>
          <img src="static/images/appoint1Icon_15.png"/>
          <label>时间</label>
          <span>{{item.time}}</span>
        </li>
        <p class="status" @click="orderOperation(item.url)" :style="'background-image:url(static/images/appointStatus'+item.code+'.png)'">{{item.status}}</p>
      </ul>
    </section>
    <section class="no-appoint" style="display: none;">
      <img src="static/images/appoint_10.jpg" alt="" />
      <p>暂无历史内容</p>
    </section>
    <div class="guide" style="display: none;">
      <button>知道了</button>
    </div>
  </div>
</template>

<script>
import { Navbar, TabItem,MessageBox } from 'mint-ui';
export default {
  name: 'love',
  data () {
    return {
      active: 'now',
      list:[
        {url:'appoint2',order: '20170925123465875',company: '戴森电子信息有限公司',warehouse:'上海外高桥保税区',volume:30,time: '2018-02-24',status:'可预约',code:1},
        {url:'',order: '20170925123465875',company: '戴森电子信息有限公司',warehouse:'上海外高桥保税区',volume:30,time: '2018-02-24',status:'取消预约',code:2},
        {url:'lineInfo',order: '20170925123465875',company: '戴森电子信息有限公司',warehouse:'上海外高桥保税区',volume:30,time: '2018-02-24',status:'排队中',code:3},
        {url:'detail',order: '20170925123465875',company: '戴森电子信息有限公司',warehouse:'上海外高桥保税区',volume:30,time: '2018-02-24',status:'待付款',code:4},
        {url:'evaluate',order: '20170925123465875',company: '戴森电子信息有限公司',warehouse:'上海外高桥保税区',volume:30,time: '2018-02-24',status:'待评价',code:2}
      ]
    }
  },
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background:#eef2f8')
  },
  methods:{
    changeActive:function(e){
      this.active=e;
    },
    orderOperation:function(url){
      console.log(url)
      if(url==''){
        MessageBox.confirm('确定取消预约吗?').then(action => {
          if(action=='confirm'){
            MessageBox('提示', '操作成功');
          }
        });
      }else{
        this.$router.push({path:url});
      }
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
