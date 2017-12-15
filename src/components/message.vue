<template>
  <div class="evaluate">
    <div class="spacing"></div>
    <div class="flex question-classify">
      <span>问题分类</span>
      <select name="">
        <option value="">请选择</option>
      </select>
    </div>
    <div class="spacing"></div>
    <textarea name="" rows="" cols="" placeholder="请您提出更多宝贵意见"></textarea>

    <button style="margin-top: 6rem;">确认留言</button>
  </div>
</template>

<script>
//import { Navbar, TabItem } from 'mint-ui';
export default {
  name: 'error',
  data () {
    return {
      msg: ''
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
