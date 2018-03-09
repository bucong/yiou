<template>
  <div class="evaluate">
    <h2><span class="fa fa-file-text-o"></span>单号：201709652541256</h2>
    <div class="spacing"></div>
    <ul>
      <li>
        <span>卸货速度</span>
        <div>
          <label></label>
          <label></label>
          <label></label>
          <label></label>
          <label></label>
        </div>
      </li>
      <li>
        <span>服务质量</span>
        <div>
          <label></label>
          <label></label>
          <label></label>
          <label></label>
          <label></label>
        </div>
      </li>
      <li>
        <span>服务态度</span>
        <div>
          <label></label>
          <label></label>
          <label></label>
          <label></label>
          <label></label>
        </div>
      </li>
    </ul>
    <div class="spacing"></div>
    <textarea name="" rows="" cols="" placeholder="请您提出更多宝贵意见"></textarea>
    <div class="evaluate-upload">
      <form id="evaluate" action="${request.contextPath}/upload_image.do" method="post" enctype="multipart/form-data" target="hiddenframe">
        <input type="file" name="imgFile" id="upload-file" multiple="multiple" value="" />
        <label for="upload-file" class="upload-label">+</label>
      </form>
      <div class="upload-img">
        <img src="static/images/appoint2_02.jpg"/>
      </div>
    </div>
    <button>确认评价</button>
  </div>
</template>

<script>
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
