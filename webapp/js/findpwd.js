$(document).ready(function(){
	$("#phonemunber").focus();
	$("#retget").click(function(){ //重新获取验证码
		 $.ajax({
		  		url:contentPath+"/userController/sendSmsCodeAndVerify" ,
		  		type:"post", 
		  		data: {"mobileNumber":$("#phonemunber").val()},   
		  		dataType:"json",
		  		async:false,  
		    	cache:false,
		    	success:function(data){
			    		if(data.success ==true){  
		    			$("#next").attr("class","1 btn btn-info btn-sm removeGrey");
		    			$("#next").attr("name","1");
			    		 var changetime=60;
		    			 var endtime=setInterval(function(){
		    			        if(changetime<1){
		    			        	changetime=60;
		    			        	$(".retget").removeAttr("disabled");
		    			       		$(".retget").text("获取验证码");
		    			        	$(".retget").css("cursor","pointer");
		    			            clearInterval(endtime);
		    			        }else{
		    			            changetime--;
		    			            $(".retget").attr("disabled","disabled");
		    			            $(".retget").text("重发验证码"+changetime+"s");
		    			            $(".retget").css("cursor","default");
		    			        }
		    			        },1000);
			    		}else{
			    			alert(data.msg);
			    			return false;
			    		}
			         }
		  	 	});
	});

	//验证码校验
	$("#code").keyup(function(){
		if($(this).val()!=''){
			$("#next").removeClass("removeGrey");
		}else{
			$("#next").addClass("removeGrey");
		}
	});
	//密码校验
	$("#firstPwd").keyup(function(){
		if($(this).val()!=''){
			$("#toLogin").removeClass("removeGrey");
		}else{
			$("#toLogin").addClass("removeGrey");
		}
	});
	//下一步
	$("#next").click(function(){
		var index=$("#next").attr("name");
	    if($("#next").hasClass("0")){
	         if($("#phonemunber").val()==""){
	         		$("#tips").text("手机号不能为空").css("display","inline-block");
	         		$(".open i").css("display","inline-block");
	    		    $(".step_box li").attr("class","");
			        $(".step_box li").eq(0).attr("class","show");
			        $(".ui-item li").attr("class","");
			        $(".ui-item li").eq(0).attr("class","open");
	    	        return false;
	    	    }else{
	    	        var re1 =  /^1\d{10}$/;
	    	        if (re1.test($("#phonemunber").val())) {
	    	        	$(".ui-item p").html("已向您的手机号码<b style='color:#ff5783'>"+$("#phonemunber").val()+"</b>发送验证码，请在下方输入：");   
	    			     $.ajax({
					  		url:contentPath+"/userController/sendSmsCodeAndVerify" ,
					  		type:"post", 
					  		data: {"mobileNumber":$("#phonemunber").val()},   
					  		dataType:"json",
					  		async:false,  
					    	cache:false,
					    	success:function(data){
						    		if(data.success){  
					    			$("#next").attr("class","1 btn btn-info btn-sm");
					    			$("#next").attr("name","1");
					    			$("#code").focus();
						    		flag(1); //选项卡切换
						    		//重新获取验证码倒计时
						    		 var changetime=60;
					    			 var endtime=setInterval(function(){
					    			        if(changetime<1){
					    			        	changetime=60;
					    			        	$(".retget").removeAttr("disabled");
					    			       		$(".retget").text("获取验证码");
					    			        	$(".retget").css("cursor","pointer");
					    			            clearInterval(endtime);
					    			        }else{
					    			            changetime--;
					    			            $(".retget").attr("disabled","disabled");
					    			            $(".retget").text("重发验证码"+changetime+"s");
					    			            $(".retget").css("cursor","default");
					    			        }
					    			        },1000);
						    		}else{
						    			alert(data.msg);
						    			return false;
						    		}
						         }
					  	 	});
		                return true;
		            }else {
		                $("#tips").text("手机号码格式不正确").css("display","inline-block");
		                $("#tips").siblings("i").show();
		 	        	$(".step_box li").attr("class","");
				        $(".step_box li").eq(0).attr("class","show");
				        $(".ui-item li").attr("class","");
				        $(".ui-item li").eq(0).attr("class","open");
		 	        	 return false;
		 	           }
		           }
			    }else if(index==1){
			    	    if($("#code").val()==""){
			    		    alert("验证码不能为空");
			    	        return false;
			    	    }else{
			    	     $.ajax({
					  		url:contentPath+"/userController/verifySmsCode" ,
					  		type:"post", 
					  		data: {"mobileNumber":$("#phonemunber").val(),"smsCode":$("#code").val()},   
					  		dataType:"json",
					  		async:false,  
					    	cache:false,
					    	success:function(data){
					    		if(data.success){  
					    			$("#next").attr("class","2 btn btn-info btn-sm");
					    			$("#next").attr("name","2");
					    		   flag(2);
				    	           $("#next").css("display","none");
					               $("#toLogin").css("display","inline-block");
					              $(".ui-item p").text("");
					              $("#firstPwd").focus();
					    		}else{
					    			alert(data.msg);
					    			return false;
					    		}
					       }
				  	 	}); 
			    	    }
			       }
		         function flag(index){
		            $(".step_box li").attr("class","");
			        $(".step_box li").eq(index).attr("class","show");
			        $(".ui-item li").attr("class","");
			        $(".ui-item li").eq(index).attr("class","open");
			         }
 				});
			});
    //完成找回密码并页面跳转
     $("#toLogin").click(function(){
       if($("#firstPwd").val()==""){
	    	     $("#firstPassword").text("密码不能为空");
	    	     $("#firstPassword").css("display","inline-block");
	    	    }else if($("#secondPwd").val()==""){
	    	    $("#secondPassword").text("确认密码不能为空");
	    	    $("#secondPassword").css("display","inline-block");
	    	    }else{
	    	     if($("#firstPwd").val()==$("#secondPwd").val()){
								 var re2 =/^[0-9a-zA-Z_#]{6,16}$/;
								 if (re2.test($("#firstPwd").val())&&re2.test($("#secondPwd").val())) {
								 $.ajax({
							  		url:contentPath+"/userController/userUpdatePwd" ,
							  		type:"post", 
							  		data: {"password":$("#firstPwd").val(),"code":$("#code").val(),"userName":$("#phonemunber").val()},  
							  		dataType:"json",
							  		async:false,  
							    	cache:false,
							    	success:function(data){
						    		if(data.success){
							    			window.location.href=contentPath+"/mall/login"
							    		}else{
							    			alert(data.message);
							    		}	
							       },
						        	error:function(request){
						        		alert("error");
						        	}
						  	 	});
						        }else{
						            alert("密码必须是6-16位！");
						            return false;
						        }
			    	        return true;
			    	    }else{
				    	     alert("两次密码输入不一致");
				    	     return false;
				    	     }
	    	    } 	    
    }); 