$(document).ready(function(){
 		//注册界面选项卡切换
	    $(".register_tab .lo_mod").click(function(){
	    $(this).addClass("tab_on");
	    $(".register_tab .eb_mod").removeClass("tab_on");
	    $(".register .item-fore6").css("display","block");
	    $("#getMsg").val("");
	    $("#getMsg").val("1");
	    $(".identity_card").attr("id","identity_card");
	  });
	  $(".register_tab .eb_mod").click(function(){
	    $(this).addClass("tab_on");
	    $(" .register_tab .lo_mod").removeClass("tab_on");
	    $(".register .item-fore6").css("display","none");
	    $("#getMsg").val("");
	    $("#getMsg").val("2");
	    $(".identity_card").removeAttr("id");
	  });
	  //提交事件
		 $("#subBtn").click(function(){
			    var result = vidy();
			    if(!result){
			    	return;
			    }
		 		$.ajax({
		  		url:contentPath+"/userController/userRegister",
		  		type:"post", 
		  		data: $("#formId").serialize(),  
		  		dataType:"json",
		  		async:false,  
		    	cache:false,
		    	success:function(data){
		    		if(data.success){
		    			alert(data.msg);
		    			window.location.href=contentPath+"/mall/login";
		    		}else{
		    			alert(data.msg);
		    			return false;
		    		}
		    		
		       },
	        	error:function(request){
	        		alert("error");
	        	}
	  	 	});  
		 	});		 		 
		 $("#isecurity_code_btn").click(function(){
			 //手机号码校验
			 if($("#userName").val()==""){
				 $(".minder span").text("手机号不能为空！").css("display","block");
				 return false;
			 }
			 else{
				 var re1 = /^1\d{10}$/;
				 if (re1.test($("#userName").val())) {
					 
				 } else {
					 $(".minder span").text("手机号格式错误！").css('display','block'); 
					 return false;
				 };
			 };
			 
			 
			 $.ajax({
				 url:contentPath+"/userController/sendSmsCode",
				 type:"GET", 
				 data: {"mobileNumber":$("#userName").val(),"userType":$(".tab_on").attr("id")},  
				 dataType:"json",
				 async:false,  
				 cache:false,
				 success: function(msg ){        
					 
					 if(msg.success ==true){  
						 var changetime=60;
						 var endtime=setInterval(function(){
							 if(changetime<1){
								 changetime=60;
								 $("#isecurity_code_btn").removeAttr("disabled");
								 $("#isecurity_code_btn").val("获取验证码");
								 $("#isecurity_code_btn").css("cursor","pointer");
								 clearInterval(endtime);
							 }else{
								 changetime--;
								 $("#isecurity_code_btn").attr("disabled","disabled");
								 $("#isecurity_code_btn").val("重发验证码"+changetime+"s");
								 $("#isecurity_code_btn").css("cursor","default");
							 }
							 
						 },1000);
						 
						 flag = true;  
					 }else if(msg.success=="false") {  
						 alert(member.info);  
					 }  
				 },  
				 error: function(e){  
				 }  
			 }); 
		 });
		});  

		

//注册界面填写校验
function vidy(){
	var userName=$("#userName").val();
	var isecurity_code=$("#code").val();
	var iPwd=$("#iPwd").val();
	var confirm_Password=$("#confirm_Password").val();
	var identity_card=$("#identity_card").val();
	var checkbox=document.getElementById("checckbox").checked;
	var checkbox=$("#checckbox").is(":checked");
console.log(userName);
console.log(isecurity_code);
console.log(iPwd);
console.log(confirm_Password);
console.log(identity_card);

	//手机号码校验
	if(userName==""){
		$(".minder span").text("手机号不能为空！"); 
		$(".minder").css('display','block'); 
        return false;
    }
    else{
        var re1 = /^1\d{10}$/;
        if (re1.test(userName)) {
        } else {
        	$(".minder span").text("手机号格式错误！"); 
        	$(".minder").css('display','block'); 
            return false;
        }
    }
	//验证码校验
	if(isecurity_code==""){
		$(".minder span").text("验证码不能为空！"); 
		$(".minder").css('display','block'); 
        return false;
    }
	//密码校验
	if(iPwd==""){
		$(".minder span").text("密码不能为空！"); 
		$(".minder").css('display','block'); 
        return false;
    }
    else{
        var re2 =/^[0-9a-zA-Z_#]{6,16}$/;
        if (re2.test(iPwd)) {
        } else {
        	$(".minder span").text("密码必须是6-16位！"); 
    		$(".minder").css('display','block'); 
            return false;
        }
    }
	//确认密码校验
	if(confirm_Password==""){
		$(".minder span").text("确认密码不能为空！"); 
		$(".minder").css('display','block'); 
        return false;
    }
    else{
        if (iPwd==confirm_Password) {
        } else {
        	$(".minder span").text("两次密码输入不正确"); 
    		$(".minder").css('display','block'); 
            return false;
        }
    }
	if($(".lo_mod ").hasClass("tab_on")){		
		if(identity_card==""||identity_card==undefined){
			$(".minder span").text("身份证号码不能为空！"); 
			$(".minder").css('display','block'); 
			return false;
		}else{
			// 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X  
			var re3 =/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
			if(re3.test(identity_card)){
				
			}else{
				$(".minder span").text("身份证号码格式不正确！"); 
				$(".minder").css('display','block'); 
				return false;
			}
		}
	}
	
	if(checkbox){
	    	$(".minder").css('display','none'); 
			return true;
    }else{
    	$(".minder span").text("请选择同意协议"); 
		$(".minder").css('display','block'); 
    	return false;
    }
}
//阅读同意书事件
var clear;
$(document).ready(function(){
	$("#agreementDialog").click(function(){
		$(".ks-dialog-content").show();;
		var timer=60;
		clear=setInterval(function(){
			if(timer>0){	
				$("#close_warm").text(timer+"秒自动关闭");
				timer--;
			}else{
				clearInterval(clear);
				$(".ks-dialog-content").show();
				$("#checckbox").prop("checked","true");
			}
		},1000);
	});
	$("#agreementClose").click(function(){
		$(".ks-dialog-content").hide();
		$("#checckbox").prop("checked","true");
	});
	//同意书关闭按钮
	$("#dialog-close").click(function(){
		$(".ks-dialog-content").hide();
		clearInterval(clear);
	});
});
