<template>
  <div class="evaluate">
    <h2><span class="fa fa-file-text-o"></span>单号：201709652541256</h2>
    <div class="spacing"></div>
    <ul>
      <li>
        <span>卸货速度</span>
        <div :style="'background-image:url(static/images/evaluate'+speed+'.png)'">
          <label @click="star('speed',1)"></label>
          <label @click="star('speed',2)"></label>
          <label @click="star('speed',3)"></label>
          <label @click="star('speed',4)"></label>
          <label @click="star('speed',5)"></label>
        </div>
      </li>
      <li>
        <span>服务质量</span>
        <div :style="'background-image:url(static/images/evaluate'+quality+'.png)'">
          <label @click="star('quality',1)"></label>
          <label @click="star('quality',2)"></label>
          <label @click="star('quality',3)"></label>
          <label @click="star('quality',4)"></label>
          <label @click="star('quality',5)"></label>
        </div>
      </li>
      <li>
        <span>服务态度</span>
        <div :style="'background-image:url(static/images/evaluate'+attitude+'.png)'">
          <label @click="star('attitude',1)"></label>
          <label @click="star('attitude',2)"></label>
          <label @click="star('attitude',3)"></label>
          <label @click="star('attitude',4)"></label>
          <label @click="star('attitude',5)"></label>
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
      speed: 0,
      quality: 0,
      attitude:0
    }
  },
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background:#eef2f8')
  },
  methods:{
    star:function(category,score){
      if(category=='speed'){
        this.speed=score;
      }else if(category=='quality'){
        this.quality=score;
      }else{
        this.attitude=score;
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
