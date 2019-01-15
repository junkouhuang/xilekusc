//15分00秒
	var total=900;
	setInterval(function(){
		if(total>0){
			total--;
			var minute=parseInt(total/60);
			if(minute>0){
				minute=minute;
			}else{
				minute=0;
			}
			second=parseInt(total%60);
			if(second>0){
				second=second;
			}else{
				second=0;
			}
			$(".counttime").text(minute+"分"+second+"秒");
		}else{
			window.location.href=contentPath+"/ordersController/getOrdersList";
		}
	},1000);
function utf16to8(str) { //转码
	var out, i, len, c;
	out = "";
	len = str.length;
	for (i = 0; i < len; i++) {
	c = str.charCodeAt(i);
	if ((c >= 0x0001) && (c <= 0x007F)) {
	out += str.charAt(i);
	} else if (c > 0x07FF) {
	out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
	out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
	out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
	} else {
	out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
	out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
}
}
return out;
}

//选择支付方式生成二维码
$(function () {
	//默认weChatPay
	var flag=true;
	$(".webchatPay .order-with-qr").slideDown();
	ajax("W01",$(".orderinfo").val(),$(".w_amount").text(),"weChatPay");
	//weChatPay
	$(".webchatPay").click(function(){
		$(".aliPay .order-with-qr").slideUp();
		$(".webchatPay .order-with-qr").slideDown();
		ajax("W01",$(".orderinfo").val(),$(".w_amount").text(),"weChatPay");
		flag=true;
	});
	//aliPay
	$(".aliPay").click(function(){
		$(".webchatPay .order-with-qr").slideUp();
		$(".aliPay .order-with-qr").slideDown();
		ajax("A01",$(".orderinfo").val(),$(".z_amount").text(),"aliPay");
		flag=true;
	});
	function ajax(wechat,oradercode,amount,incident){
		$.ajax({
	  		url:contentPath+"/allInPayController/scanPay",
	  		type:"post", 
	  		data: {"paytype":wechat,"ordercode":oradercode,"amount":amount,"incident":incident},  
	  		dataType:"json",
	  		async:false,  
	    	cache:false,
	    	success:function(data){
	    		$("#"+incident).empty();
	    		$("#"+incident).qrcode({
	                 render : "canvas",    //设置渲染方式，有table和canvas，使用canvas方式渲染性能相对来说比较好
	                 text : data.payinfo,    //扫描二维码后显示的内容,可以直接填一个网址，扫描二维码后自动跳向该链接
	                 width : "150",               //二维码的宽度
	                 height : "150",              //二维码的高度
	                 background : "#ffffff",       //二维码的后景色
	                 foreground : "#000000",        //二维码的前景色
	                 src: contentPath+'/images/'+incident+'.png',        //二维码中间的图片
	             });
	    		//$("#"+incident).qrcode(utf16to8(data.payinfo));
	       },
        	error:function(request){
        		alert("error");
        	}
  	 	});  
	}
	setInterval(function(){
		if(flag){
			$.ajax({
		  		url:contentPath+"/payinfoController/checkPayResult",
		  		type:"post", 
		  		data: {"payinfocode":$(".orderinfo").val()},  
		  		dataType:"json",
		  		async:false,  
		    	cache:false,
		    	success:function(data){
		    	console.log(data);
		    	if(data.error==true){
		    		flag=false;
		    		alert(data.message);
		    	}else{
		    		if(data.success==true){
		    			window.location.href=contentPath+"/mall/paySuccess";
		    		}
		    	}
		       },
	        	error:function(request){
	        		alert("error");
	        	}
	  	 	});  
			
		}
	},10000);
});

//网银：快捷支付
$(function(){	
	$("#wy-pay").click(function(){
		$("#cardPay").submit();
	});
});

//余额支付:值钱支付
function ziqanPay(){
	var password=$("#p1").val()+$("#p2").val()+$("#p3").val()+$("#p4").val()+$("#p5").val()+$("#p6").val();
	var param={};
	param["payinfocode"]=$(".orderinfo").val();
	param["password"]=password;
	$.ajax({
  		url:contentPath+"/zqianController/ziqanPay",
  		type:"post", 
  		contentType: "application/json; charset=utf-8",  
  		data: JSON.stringify(param),  
  		dataType:"json",
  		async:false,  
    	cache:false,
    	success:function(data){
    	if(data.success==false){
    		alert(data.msg);
    	}else{
    			window.location.href=contentPath+"/mall/paySuccess?amount="+data.msg;
    	}
       },
    	error:function(request){
    		alert("error");
    	}
	 	});  
}

//值钱支付（输入密码）
$(function(){
	
	$("#p1").focus();
	
	$("#p1,#p2,#p3,#p4,#p5,#p6").click(function(){
		if($("#p1").val()==null || $("#p1").val()==' ' || $("#p1").val().length == 0){
			$("#p1").focus();
			return false ;
		}
		if($("#p2").val()==null || $("#p2").val()==' ' || $("#p2").val().length == 0){
			$("#p2").focus();
			return false ;
		}
		if($("#p3").val()==null || $("#p3").val()==' ' || $("#p3").val().length == 0){
			$("#p3").focus();
			return false ;
		}
		if($("#p4").val()==null || $("#p4").val()==' ' || $("#p4").val().length == 0){
			$("#p4").focus();
			return  false;
		}
		if($("#p5").val()==null || $("#p5").val()==' ' || $("#p5").val().length == 0){
			$("#p5").focus();
			return  false;
		}
		if($("#p6").val()==null || $("#p6").val()==' ' || $("#p6").val().length == 0){
			$("#p6").focus();
			return false ;
		}
		$("#p6").focus();
	});
	
	$("#p1").keyup(function(e){
		var key = e.which; //e.which是按键的值 
		
		if (key == 8 || key == 13 || key == 32) { 
			
		} else{
			if($(this).val()==null || $(this).val()==' ' || $(this).val().length == 0){
					$("#p1").focus();
				}else{
					$("#p2").focus();
				}
			}
	});
	
	$("#p2").keyup(function(e){
		var key = e.which; //e.which是按键的值 
		if (key == 8 || key == 13 || key == 32) { 
			
		} else{
			if($(this).val()==null || $(this).val()==' ' || $(this).val().length == 0){
				$("#p2").focus();
			}else{
				$("#p3").focus();
			}
			}
	});
	
	$("#p3").keyup(function(e){
		var key = e.which; //e.which是按键的值 
		if (key == 8 || key == 13 || key == 32) { 
			
		} else{
			if($(this).val()==null || $(this).val()==' ' || $(this).val().length == 0){
				$("#p3").focus();
			}else{
				$("#p4").focus();
			}
			}
	});
	
	$("#p4").keyup(function(e){
		var key = e.which; //e.which是按键的值 
		if (key == 8 || key == 13 || key == 32) { 
			
		} else{
			if($(this).val()==null || $(this).val()==' ' || $(this).val().length == 0){
				$("#p4").focus();
			}else{
				$("#p5").focus();
			}
			}
	});
	
	$("#p5").keyup(function(e){
		var key = e.which; //e.which是按键的值 
		if (key == 8 || key == 13 || key == 32) { 
			
		} else{
			if($(this).val()==null || $(this).val()==' ' || $(this).val().length == 0){
				$("#p5").focus();
			}else{
				$("#p6").focus();
			}
			}
	});
	$("#p6").keydown(function(e){
		
	});
	
	$("#p1，#p2，#p3，#p4，#p5").click(function(){
		alert("kkkkk");
			$("#p6").focus();
	});
	
	//回删

	$("#p6").keyup(function (e) { //这里给function一个事件参数命名为e，叫event也行，随意的，e就是IE窗口发生的事件。 
		var key = e.which; //e.which是按键的值 
		if (key == 8) { 
			$("#p6").val("");
			$("#p5").focus();
		} 
	}); 
	
	$("#p5").keyup(function (e) { //这里给function一个事件参数命名为e，叫event也行，随意的，e就是IE窗口发生的事件。 
		var key = e.which; //e.which是按键的值 
		if (key == 8) { 
			$("#p5").val("");
			$("#p4").focus();
		} 
	}); 
	
	$("#p4").keyup(function (e) { //这里给function一个事件参数命名为e，叫event也行，随意的，e就是IE窗口发生的事件。 
		var key = e.which; //e.which是按键的值 
		if (key == 8) { 
			$("#p4").val("");
			$("#p3").focus();
		} 
	}); 
	
	$("#p3").keyup(function (e) { //这里给function一个事件参数命名为e，叫event也行，随意的，e就是IE窗口发生的事件。 
		var key = e.which; //e.which是按键的值 
		if (key == 8) { 
			$("#p3").val("");
			$("#p2").focus();
		} 
	}); 
	
	$("#p2").keyup(function (e) { //这里给function一个事件参数命名为e，叫event也行，随意的，e就是IE窗口发生的事件。 
		var key = e.which; //e.which是按键的值 
		if (key == 8) { 
			$("#p2").val("");
			$("#p1").focus();
		} 
	}); 
});
