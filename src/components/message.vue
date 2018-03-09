<template>
  <div class="evaluate">
    <div class="spacing"></div>
    <div class="flex question-classify">
      <span>问题分类</span>
      <select name="" v-model="classify">
        <option value="">请选择</option>
        <option :value="val" v-for="val in classifyList">{{val}}</option>
      </select>
    </div>
    <div class="spacing"></div>
    <textarea name="" rows="" cols="" placeholder="请您提出更多宝贵意见" v-model="content"></textarea>

    <button style="margin-top: 6rem;" @click="messageSub">确认留言</button>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
  import axios from 'axios';
export default {
  name: 'error',
  data () {
    return {
      classifyList: ['客户服务','预约排队','收货流程','其他'],
      classify: '客户服务',
      content: '123'
    }
  },
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background:#eef2f8')
  },
  methods:{
    messageSub:function(){
      if(this.classify==''){
        MessageBox('提示', '请选择分类');
      }else if(this.content==''){
        MessageBox('提示', '内容不能为空！');
      }else{
        axios.post('http://39.106.202.165:3000/user/userlist')
          .then(function(res){
            console.log(res.data.result);
          })
          .catch(function(err){
            console.log(err);
          });
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
