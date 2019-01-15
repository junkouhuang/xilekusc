//登陆界面选项卡切换
$(document).ready(function(){
  $(".login_tab .lo_mod").click(function(){
	    $(this).addClass("tab_on");
	    $(".login_tab .eb_mod").removeClass("tab_on");
	    $(" .showTradition").css("display","block");
	    $(" .showCode").css("display","none");
  });
    $(".login_tab .eb_mod").click(function(){
	    $(this).addClass("tab_on");
	    $(".login_tab  .lo_mod").removeClass("tab_on");
	    $(" .showTradition").css("display","none");
	    $(" .showCode").css("display","block");
	    $(".error").css("visibility","hidden");
	    $(".sign").css("visibility","hidden");
  });
});

function verify() {
	var username=$("#username").val();
	var password=$("#password").val();
	//手机号码校验
	if(username==""){
		$(".J_Message .error").text("手机号不能为空！").css("visibility","visible");
		$(".sign").css("visibility","visible");
		return false;
	}
	/*else{
		var re1 = /^1\d{10}$/;
		if (re1.test(username)) {
			
		} else {
			$(".J_Message .error").text("手机号格式错误！").css("visibility","visible");
			$(".sign").css("visibility","visible");
			return false;
		}
	}*/
	//密码验证
	if(password==""){
		$(".J_Message .error").text("密码不能为空！").css("visibility","visible");
		$(".sign").css("visibility","visible");
		return false;
	}
	else{
		var re2 =/^[0-9a-zA-Z_#]{6,16}$/;
		
		if (re2.test(password)) {
			return true;
		} else {
			$(".J_Message .error").text("密码必须是6-16位！").css("visibility","visible");
			$(".sign").css("visibility","visible");
			return false;
		}
	}
};
$(document).ready(function(){
	//回车登陆
	$("#password").keydown(function(event){
	   var evt = window.event||event;//事件对象浏览器兼容性处理
	    if(evt.keyCode==13){
   		loginFun();
	    }
   }); 
}); 
	//点击登陆
var alreadyLogin=false;
	function loginFun(o){
		var blag=verify();//校验登陆信息是否符合登陆条件
		var username=$("#username").val();
		var password=$("#password").val();
		if(!blag){
		return;
		}
		$("#subLogin").text("正在登陆......");
		
	 	$.ajax({
	  		url:contentPath+"/userController/userLogin", 
	  		type:"POST", 
	  		data: {"username":username,"password":password,"alreadyLogin":alreadyLogin},  
	  		dataType:"json",
	  		async:false,  
	    	cache:false,
	    	success:function(data){
	    	
	    		if(data.success){
	    			$('body', parent.document).css("overflow","auto");
					$('body', parent.document).find(".maskLayer").hide();
	    			$(".reminder").animate({opacity:1} ,1000,function(){
	  				    $(".reminder").animate({opacity:0});
	  			  });
	    			
	    			if($(o).attr("class")=="min"){
	    				$("body",parent.document).find(".J_minlogin").css("display","none");
	    				$("body",parent.document).find(".loginin span").text(data.obj.username).css("display","inline-block");
	    				$("body",parent.document).find(".loginin").css("display","inline-block");
	    				$("body",parent.document).find(".loginout,.loginoute,.loginine").css("display","none");
	    				
	    			}else if($("#password").parent().siblings().children("#subLogin").attr("class")=="min"){
	    				$("body",parent.document).find(".J_minlogin").css("display","none");
	    				$("body",parent.document).find(".loginin span").text(data.obj.username).css("display","inline-block");
	    				$("body",parent.document).find(".loginin").css("display","inline-block");
	    				$("body",parent.document).find(".loginout,.loginoute,.loginine").css("display","none");
	    				
	    			}else{
	    				window.location.href=contentPath+"/mall/index";
	    				$(".loginin span").text(data.obj.username);
	    				$(".loginin").css("display","inline-block");
	    				$(".loginout").css("display","none");
	    			}
	    			
	    		}else{
	    			if(data.msg=="AlreadyLogin"){
	    				var isLogin=window.confirm("该账户已在别处登陆，是否确定登陆？");
	    				console.log(isLogin);
	    				alreadyLogin=true;
	    				if(isLogin){
	    					loginFun();
	    					$('body', parent.document).css("overflow","auto");
	    					$('body', parent.document).find(".maskLayer").hide();
	    				}
	    			}else{
	    				alert(data.msg);
	    				/*window.location.reload();*/
	    				$("#subLogin").text("登陆");
	    				/*var username=$("#username").val();*/
	    				return false;
	    			}
	    		}
	       },
	        	error:function(){
	        		$("#subLogin").text("登陆");
	        		alert("error");
	        	}
  	 	});  
	}
