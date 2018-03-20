<template>
  <div class="basic-info">
    <ul>
      <li>
        <input type="text" name="" placeholder="请输入您的姓名" />
      </li>
      <li>
        <input type="text" name="" placeholder="请输入18位的身份证号码" />
      </li>
      <li>
        <input type="text" name="" placeholder="请输入您的公司名称" />
      </li>
    </ul>
    <section>
      <form id="idCardForm1" action="upload_image.do" method="post" enctype="multipart/form-data" target="hiddenframe">
        <input type="file" name="imgFile" id="uploadFile1" @change="uploadFile1($event)" multiple="multiple" value="" />
        <label for="uploadFile1" class="upload-label">
          <img :src="idCard1"/>
        </label>
        <h3>身份证个人面</h3>
      </form>
      <form id="idCardForm2" action="upload_image.do" method="post" enctype="multipart/form-data" target="hiddenframe">
        <input type="file" name="imgFile" id="uploadFile2" @change="uploadFile2($event)" multiple="multiple" value="" />
        <label for="uploadFile2" class="upload-label">
          <img :src="idCard2"/>
        </label>
        <h3>身份证国徽面</h3>
      </form>
    </section>
    <button class="sub">保&nbsp;&nbsp;存</button>
  </div>
</template>

<script>
  import axios from 'axios';
export default {
  name: 'love',
  data () {
    return {
      idCard1: 'static/images/idCard_03.jpg',
      idCard2: 'static/images/idCard_03.jpg',
      file: ''
    }
  },
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background:#eef2f8');
  },
  methods:{
    uploadFile1:function(event){
      var that=this;
      this.file = event.target.files[0];
      console.log(this.file);
      let param = new FormData(); // 创建form对象
      param.append('imgFile', this.file);
      axios.post('http://39.106.202.165:3000/upload_img',param)
        .then(function(res){
          console.log(res.data.data[0]);
          that.idCard1='http://39.106.202.165:3000/'+res.data.data[0];
        })
        .catch(function(error){
          console.log(error);
        });
    },
    uploadFile2:function(event){
      var that = this;
      this.file = event.target.files[0];
      console.log(this.file);
      let param = new FormData(); // 创建form对象
      param.append('imgFile', this.file);
      axios.post('http://39.106.202.165:3000/upload_img',param)
        .then(function(res){
          console.log(res);
          that.idCard2='http://39.106.202.165:3000/'+res.data.data[0];
        })
        .catch(function(error){
          console.log(error);
        });
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
