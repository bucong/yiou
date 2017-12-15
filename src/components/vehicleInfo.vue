<template>
  <div class="vehicle-info">
    <section class="vehicle-add">
      <div class="flex">
        <input type="text" class="shadow" name="" value="" placeholder="请输入您的车牌号" />
        <button class="shadow">添加</button>
      </div>
    </section>
    <section class="list shadow">
      <div class="flex">
        <h5>沪C-J2D456</h5>
        <div>
          <span class="fa fa-trash-o"> 删除</span>
        </div>
      </div>
      <form class="vehicleForm" action="upload_image.do" method="post" enctype="multipart/form-data" target="hiddenframe">
        <input type="file" name="imgFile" class="vehicleFile" multiple="multiple" value="" />
        <label for="vehicleFile" class="upload-label">
          <img src="../assets/images/vehicle_03.jpg"/>
        </label>
      </form>
    </section>
    <section class="list shadow">
      <div class="flex">
        <h5>沪C-J2D456</h5>
        <div>
          <label for="vehicleFile" class="upload-label">
            <span class="iconfont icon-tihuan"> 重新上传</span>
          </label>
          <span class="fa fa-trash-o"> 删除</span>
        </div>
      </div>
      <form class="vehicleForm" action="upload_image.do" method="post" enctype="multipart/form-data" target="hiddenframe">
        <input type="file" name="imgFile" class="vehicleFile" id="vehicleFile" multiple="multiple" value="" />
        <label for="vehicleFile" class="upload-label">
          <img src="../assets/images/vehicle_06.jpg"/>
        </label>
      </form>
    </section>
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
