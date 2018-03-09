<template>
  <div class="basic-info">
    <ul>
      <li>
        <input type="text" name="" id="" value="" placeholder="请输入您的姓名" />
      </li>
      <li>
        <input type="text" name="" id="" value="" placeholder="请输入18位的身份证号码" />
      </li>
      <li>
        <input type="text" name="" id="" value="" placeholder="请输入您的公司名称" />
      </li>
    </ul>
    <section>
      <form id="idCardForm1" action="upload_image.do" method="post" enctype="multipart/form-data" target="hiddenframe">
        <input type="file" name="imgFile" id="uploadFile1" multiple="multiple" value="" />
        <label for="uploadFile1" class="upload-label">
          <img src="static/images/idCard_03.jpg"/>
        </label>
        <h3>身份证个人面</h3>
      </form>
      <form id="idCardForm2" action="upload_image.do" method="post" enctype="multipart/form-data" target="hiddenframe">
        <input type="file" name="imgFile" id="uploadFile2" multiple="multiple" value="" />
        <label for="uploadFile2" class="upload-label">
          <img src="static/images/idCard_03.jpg"/>
        </label>
        <h3>身份证国徽面</h3>
      </form>
    </section>
    <button class="sub">保&nbsp;&nbsp;存</button>
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
