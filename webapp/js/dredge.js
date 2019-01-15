//开通值钱前端校验
$(function(){
	$(".card_hint,.pwd_hint,.confirmPwd_hint").css("display","none");
	$("#oPenZiqian").click(function(){
	//身份证校验
	var identity_card=$("#identity_card").val();//身份证输入信息
	$(".pwd_hint").text(" "); 
	$(".confirmPwd_hint").text(""); 
		if(identity_card==""||identity_card==undefined){
			$(".card_hint").text("身份证号码不能为空！"); 
			$(".card_hint").css({"display":"block","color":"red","text-align":"right"}); 
			return false;
		}else{
			var reg_identity_card =/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;// 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X  
			if(reg_identity_card.test(identity_card)){
				$(".card_hint").text(""); 
				$(".card_hint").css('display','none'); 
			}else{
				$(".card_hint").text("身份证号码格式不正确！"); 
				$(".card_hint").css({"display":"block","color":"red","text-align":"right"}); 
				return false;
			}
		}
		
	//密码校验
		var pwd=$("#pwd").val();//获取密码
		$(".confirmPwd_hint").text(""); 
		if(pwd==""){
			$(".pwd_hint").text("密码不能为空！"); 
			$(".pwd_hint").css({"display":"block","color":"red","text-align":"right"}); 
	        return false;
	    }
	    else{
	        var reg_pwd =/^[0-9a-zA-Z_#]{6,16}$/;
	        if (reg_pwd.test(pwd)) {
	        	$(".pwd_hint").text(" "); 
	    		$(".pwd_hint").css('display','none'); 
	        } else {
	        	$(".pwd_hint").text("密码必须是6-16位！"); 
	    		$(".pwd_hint").css({"display":"block","color":"red","text-align":"right"}); 
	            return false;
	        }
		}
		
	//确认密码校验
	var confirmPwd=$("#confirmPwd").val();//获取确认密码
		if(confirmPwd==""){
			$(".confirmPwd_hint").text("确认密码不能为空！"); 
			$(".confirmPwd_hint").css({"display":"block","color":"red","text-align":"right"}); 
	        return false;
	    }
	    else{
	        if (pwd==confirmPwd) {
	        	$(".confirmPwd_hint").text(""); 
	        } else {
	        	$(".confirmPwd_hint").text("两次密码输入不一致"); 
	    		$(".confirmPwd_hint").css({"display":"block","color":"red","text-align":"right"}); 
	            return false;
	        }
	    }
		$("#submitForm").submit();
	});
	$("#confirmPwd").keydown(function(e){
		var ev=document.all ? window.event : e;
		if(ev.keyCode==13){
			$("#submitForm").submit();
		};
	});
});
