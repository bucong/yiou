var gallery = mui('.mui-slider');
gallery.slider({
  interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
});
//获取短信
$('.get-check').click(function(){
	if(1==1){
		$('.get-check').attr('disabled',true);
		var i=60;
		$('.get-check').html(i+' s');
		time=setInterval(function(){
			i--;
			$('.get-check').html(i+' s');
			if(i==0){
				clearInterval(time);
				$('.get-check').html('免费获取');
				$('.get-check').removeAttr('disabled');
			}
		},1000)
	}
})
//注册成功
$('.reg-success .sub').click(function(){
	$('.meng').show();
})
$('.finish-vehicle h5').click(function(){
	$('.meng').hide();
})
//上传文件
//身份证
$('#uploadFile1').change(function(){
	$("#idCardForm1").ajaxSubmit({
		type: 'post',
		url: "upload_image.do",
		success: function(data){	
			data = data.replace(/<.?[Pp][Rr][Ee]>/g,""); 
			var uploadInfo = eval('(' + data + ')');
			if(uploadInfo.state == "SUCCESS"){ 
		 		$("#idCardForm1 img").attr('src',uploadInfo.url);
		   	return;
		  }else{
		   	mui.alert('上传失败');
		    return;
		  }		  				
		},
		error: function(){
			mui.alert('上传失败');
		  	return;
		}
	});
})

//车辆信息添加
$('.vehicle-add button').click(function(){
	if($('.vehicle-add input').val()==''){
		mui.alert('请输入车牌号');
	}else{
		vehicleNum++;
		var vehicleAdd='';
		vehicleAdd+='<section class="list shadow">';
		vehicleAdd+='<div class="flex">';
		vehicleAdd+='<h5>'+$('.vehicle-add input').val()+'</h5>';
		vehicleAdd+='<div>';
		vehicleAdd+='<label for="vehicleFile'+vehicleNum+'" class="re-upload"><span class="iconfont icon-tihuan"> 重新上传</span></label>';
		vehicleAdd+='<span class="fa fa-trash-o"> 删除</span>';
		vehicleAdd+='</div>';
		vehicleAdd+='</div>';
		vehicleAdd+='<form id="vehicleForm1" action="upload_image.do" method="post" enctype="multipart/form-data" target="hiddenframe">';
		vehicleAdd+='<input type="file" name="imgFile" id="vehicleFile'+vehicleNum+'" multiple="multiple" value="" />';
		vehicleAdd+='<div><label for="vehicleFile'+vehicleNum+'">';
		vehicleAdd+='<img src="images/vehicle_03.jpg"/>';
		vehicleAdd+='</label></div>';
		vehicleAdd+='</form>';
		vehicleAdd+='</section>';
		$('.vehicle-info').append(vehicleAdd);
	}
})
$('.uploadFile').change(function(){
	$(this).parent().ajaxSubmit({
		type: 'post',
		url: "upload_image.do",
		success: function(data){	
			data = data.replace(/<.?[Pp][Rr][Ee]>/g,""); 
			var uploadInfo = eval('(' + data + ')');
			if(uploadInfo.state == "SUCCESS"){ 
		 		$("#idCardForm1 div").html('<img src="'+uploadInfo.url+'"/>');
		   	return;
		  }else{
		   	mui.alert('上传失败');
		    return;
		  }		  				
		},
		error: function(){
			mui.alert('上传失败');
		  	return;
		}
	});
})
$('.vehicle-info').on('click','.fa-trash-o',function(){
	var delObj=$(this);
	mui.confirm('确定要删除吗？','提示',function(e){
		if(e.index==1){
			//确定
			console.log(delObj.parent().parent().parent());
			delObj.parent().parent().parent().remove();
		} 
	})
})

//预约
$('.guide button').click(function(){
	$('.guide').hide();
})
//预约第三步
$('.appoint3-detail select').change(function(){
	if($(this).val()=='other'){
		$('.appoint3-add-vehicle').show();
		$('.meng').show();
	}
})
$('.appoint3-add-vehicle .add-vehicle-cancel').click(function(){
	$('.appoint3-add-vehicle').hide();
	$('.meng').hide();
})
$('.appoint3-add-vehicle h3 span').click(function(){
	$('.appoint3-add-vehicle').hide();
	$('.meng').hide();
})

//我的预约列表
$('.my-appoint .switch span').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
})

//预约详情
$('.detail-vehicle').on('click','div',function(){
	$('.appoint3-add-vehicle').show();
	$('.meng').show();
})

//评价晒图
$('.evaluate li label').click(function(){
	var star=$(this).index()+1;
	$(this).parent().css('background-image','url(images/evaluate'+star+'.png)')
})
