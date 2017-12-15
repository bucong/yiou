<template>
  <div class="pay-type">
    <mt-radio
      title=""
      v-model="value"
      :options="options" @click="check">
    </mt-radio>
    <button>确&nbsp;&nbsp;认</button>
  </div>
</template>

<script>
  import { Radio } from 'mint-ui';
export default {
  name: 'error',
  data () {
    return {
      msg: '',
      value: '',
      options : [
        {
          label: '微信',
          value: '值A'
        },
        {
          label: '线下支付',
          value: '值B'
        }
      ]
    }
  },
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background:#eef2f8')
  },
  methods:{
    check:function(){
      console.log('值为'+this.value)
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
