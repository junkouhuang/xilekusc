$(function(){
	//加载的时候初始化
	init();
	//滚动监听(结算)
	$(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        var scrollHeight = $(document).height();
        var windowHeight = $(this).height();
        if(scrollHeight>0){
        	$(".go_to_balance").addClass("cartFixed");
        }
        if(scrollTop + windowHeight == scrollHeight){
        	
       }
	});
	
	//============================选择所有商品=============================
	$("#checkAll,.qx").click(function(){
			var single=$(".s3");
			var singleS9=$(".s4");
			if($("#checkAll").hasClass("glyphicon-unchecked")){ //全选
/*				if($(this).hasClass("qx")){
					$(this).siblings(".glyphicon-unchecked").attr("class","glyphicon glyphicon-check"); //全选按钮添加class
				}else{*/
					$("#checkAll").attr("class","glyphicon glyphicon-check"); //全选按钮添加class
/*				}*/
				for(var i=0;i<single.length;i++){//单个商品添加class
					$(single).eq(i).attr("class","glyphicon glyphicon-check single_goods_checkbox   s3  ");
				}
				for(var i=0;i<singleS9.length;i++){//单个尺码添加class
					$(singleS9).eq(i).attr("class","glyphicon glyphicon-check single_goods_checkbox   s4  ");
				}
				checkall();  //全选事件计算金额（小计），选中数量，总金额
			}else{ //取消全选
				$("#checkAll").attr("class","glyphicon glyphicon-unchecked"); //全选按钮添加class
				for(var i=0;i<single.length;i++){//单个商品添加class
					$(single).eq(i).attr("class","glyphicon glyphicon-unchecked single_goods_checkbox  s3 ");
				}
				for(var i=0;i<singleS9.length;i++){//单个尺码添加class
					$(singleS9).eq(i).attr("class","glyphicon glyphicon-unchecked single_goods_checkbox   s4");
				}
				//减少数量和增加数量计算金额（小计）事件
				addAndSubtract1();
			}
	   		contorlSe(); //“选中”颜色控制
	   		balace(); //“选中”颜色控制
	  	});
	  	
	//=================================单选商品===================================
	$(".s3").each(function(){
		$(this).click(function(){
			var  single=$(this).parents(".mbshop_cart_1127_single_01").siblings(".mbshop_cart_1127_single_03").find(".single03"); //获取尺码
			if($(this).hasClass("glyphicon-unchecked")){
				$(this).attr("class","glyphicon glyphicon-check single_goods_checkbox  s3 s9");
				for(var i=0;i<single.length;i++){
					$(single).eq(i).children(".yscm").find("i").eq(0).attr("class","glyphicon glyphicon-check   s4");
				}
			}else{
				$(this).attr("class","glyphicon glyphicon-unchecked single_goods_checkbox  s3 s9 ");
				for(var i=0;i<single.length;i++){
					$(single).eq(i).children(".yscm").find("i").eq(0).attr("class","glyphicon glyphicon-unchecked  s4");
				}
			}
			addAndSubtract1();	//减少数量和增加数量计算金额（小计）事件
			balace();//“去结算”颜色控制
			contorlSe();//“选中”颜色控制
			isAllCheck();//存在没勾选的商品，则全选框不打勾
		});
	});
	
	//===========================单选尺码=============================
	$(".s4").each(function(){
		$(this).click(function(){
			if($(this).hasClass("glyphicon-unchecked")){
				 $(this).attr("class","glyphicon glyphicon-check   s4");
			}else{
				 $(this).attr("class","glyphicon glyphicon-unchecked   s4");
			}
			   addAndSubtract1();//减少数量和增加数量计算金额（小计）事件
			   var o=$(this);
			   contorlGoodCheck(o);//“尺码全选”左选框选中
			   contorlGoodColor(o);//“尺码选中”颜色控制
			   balace();//“去结算”颜色控制
			   contorlSe();//“选中”颜色控制
		});
	});
	
	   //============================结算=================================================
	   $(".go_to_balance_right").click(function(){
		   if($(this).hasClass("checkout-disabled")){			   
			
		   }else{
			   var content="<form style='display:none' id='toorder'  action='"+contentPath+"/ordersController/addOrders' method='post'>";
			   $(".mbshop_cart_1127_single_01 ").each(function(){
				   if($(this).find("i").hasClass("glyphicon-check")){
					   content+="<input name='redisCartItemKeys' value= '"+$(this).siblings().children("input").attr("class")+"'/>";
				   }
			   });
			   content+="</form>";
			   $(this).append(content);
			   $(this).children("form").submit();
		   }
	   });

	   //===============================倒计时======================================
	   $(".J_count_down span").each(function(){
		 var total=$(this).attr("class"); 
		 var sign=$(this);
		 var clear=setInterval(function(){
		 if(total>0){
				total--;
				var hour=parseInt(total/3600);
				if(hour>0){
					hour=hour;
				}else{
					hour=0;
				}
				var minute=parseInt((total-hour*3600)/60);
				if(minute>0){
					minute=minute;
				}else{
					minute=0;
				}
				second=parseInt((total-hour*3600)%60);
				if(second>0){
					second=second;
				}else{
					second=0;
				}
				sign.text(hour+"时"+minute+"分"+second+"秒");
			}else{
				 clearInterval(clear);
				 sign.text("");
			 }
	   } ,1000);
		 
	   });
	   
	   //恢复
	   $(".regain").click(function(){});
});

//显示和隐藏删除图标
$(function(){
	$(".mbshopBox").each(function(){
		$(this).mouseover(function(){
			$(this).find(".delete_goods").css("display","block");
		});
		$(this).mouseout(function(){
			$(this).find(".delete_goods").css("display","none");
		});
	});
});
//删除整个商品	
function panel_remove(o){
		var r=window.confirm("您确定要删除该货品吗？");
		if(r){
			ajax1(o);
	}
}
//按尺码删除
function delSingle(){
	var flag=false;
	$(".s4").each(function(){
		if($(this).hasClass("glyphicon-check")){
			flag=true;
			return false;
		}
	});
		if(flag){
			var r=window.confirm("您确定要删除该尺码吗？");
			if(r){
				ajax2();
				return false;
			}
			else{
				return false;
			}
		}else{
			alert("请选择要删除的尺码!");
			return false;
		}
}
//ajax1
function ajax1(o){
		$.ajax({
			dataType:"json",
			contentType: "application/json; charset=utf-8", 
			url:contentPath+"/shoppingController/removeShoppingCartItem?redisCartItemKey="+$(o).parent().siblings().find("#redisCartItemKey").attr("class"),
			type:"post", 
			//cache:false,//true读取缓存,false不读取缓存,只用GET才生效，默认为true
			success:function(data){
				if(data.success){
					alert("删除成功");
					window.location.href=contentPath+"/shoppingController/getShoppingCart";
					window.location.reload; 
				}else{
					alert(data.msg);
					return false;
				}
			},
			error:function(request){
				alert("error");
			}
		});
}
//ajax2
var arr=[];
var param2 = {};//存放redisCartItemKey，primaryvalue字符串数组
function ajax2(){
	$(".mbshopBox").each(function(){
    var redisCartItemKey=$(this).attr("id");
	$(this).find(".single03").each(function(){
		if($(this).find(".yscm").find("i").hasClass("glyphicon-check")){
		arr.push($(this).find(".yscm").find("em").attr("class"));
		param2["redisCartItemKey"]=redisCartItemKey;
		param2["primaryvalues"]=arr;
		//获取redisCartItemKey
		//判断是否有选择行
		delete2();
		}else{
			
		}
  });
 });
}
//delete2
function delete2(){
		$.ajax({
			dataType:"json",
			contentType: "application/json; charset=utf-8", 
			url:contentPath+"/shoppingController/removeShoppingCartItemDetails",
			type:"post", 
			data:JSON.stringify(param2),//将字符串数组转为json格式数组
			cache:false,//true读取缓存,false不读取缓存,只用GET才生效，默认为true
			success:function(data){
				if(data.success){
					window.location.href=contentPath+"/shoppingController/getShoppingCart";
					window.location.reload; 
					$(".hint").animate({ opacity:1},100,function(){
						$(".hint").fadeOut("slow");
					});
				}else{
					alert(data.msg);
					return false;
				}
			},
			error:function(request){
				alert("error");
			}
		});
}
//加载的时候初始化
function init(){
	var total=0;
	var num=0;
	var xjje=0;
	var zjz=0;
	var zsl=0;
	$(".mbshopBox").each(function(){
		zjz=0;
		num=0;
		xjje=0;
	$(this).find(".single03").each(function(){
		var plmprice=$(this).find(".plmprice").text();
		var fs=$(this).find(".mbshop_cart_1127_single_goods_num").val();
		var mfsl=$(this).find(".mfsl").text();
		zjz=zjz+plmprice*fs*mfsl;
		total=total+plmprice*fs*mfsl;
		num=num+parseInt(fs);
		zsl=zsl+parseFloat(fs);
	});
	var amountSum=0;
	var amount=0;
	var money=0;
	$(".mbshopBox").each(function(){
		$(this).find(".single03").each(function(){
			if($(this).find(".s4").hasClass("glyphicon-check")){
				var num=$(this).find(".mbshop_cart_1127_single_goods_num").val();
				$(".go_to_balance_right").removeClass("checkout-disabled ");
			}
			amount=amount+num;
		});
		amountSum=amount+amountSum;//每款数量
		money=money+$(this).find(".subtotal").text();
	});
	xjje=xjje+zjz;
	$(this).find(".subtotal").find("span").text(xjje.toFixed(2));//单个商品小结
	});
	$(".quantity-total").text("0");
	$(".amount-total").text("￥ 0.00" );
	
	 //超出有效期，商品变灰色
	   var _flag=true;
	   $(".mbshop_cart_1127_single_goods").each(function(){
       var flag=$(this).children().children("input").val();
		   if(flag=="false"){
			   _flag=false;
			   return false;
		   }
	   });
	   if(_flag){
		   $("#checkAll").hide();
	   }else{
		   $("#checkAll").show();
	   }
    $(".mbshop_cart_1127_single_goods ").each(function(){
    	var flag=$(this).children().children("input").val();
    	if(flag=="true"){ //如果flag为true则表示该商品已过有效期
    	    $(this).find(".mbshop_checkbox").parent().html("<span class='lose'>失效</span>");
    	    $(this).find(".s4").css("display","none");
    	    $(this).find(".s4").attr("class","glyphicon glyphicon-check single_goods_checkbox   s5  ");
    	    $(this).find(".mbshop_cart_1127_single_07").append("<input type='button'  class='regain' value='恢复'/>");
    		$(this).addClass("gray");
    	}
    }); 
}
//全选事件计算金额（小计），选中数量，总金额
function checkall(){
	var total=0;
	var num=0;
	var xjje=0;
	var zjz=0;
	var zsl=0;
	$(".mbshopBox").each(function(){
		zjz=0;
		num=0;
		xjje=0;
	if($(this).find("#redisCartItemKey").val()=="false"){
	$(this).find(".single03").each(function(){
		var plmprice=$(this).find(".plmprice").text();
		var fs=$(this).find(".mbshop_cart_1127_single_goods_num").val();
		var mfsl=$(this).find(".mfsl").text();
		zjz=zjz+plmprice*fs*mfsl;
		total=total+plmprice*fs*mfsl;
		num=num+parseInt(fs);
		zsl=zsl+parseInt(fs);
	});
	}
	xjje=xjje+zjz;
	$(this).find(".subtotal").find("span").text(xjje.toFixed(2));
	});
	$(".quantity-total").text(zsl);
	$(".amount-total").text("￥"+total.toFixed(2));
}
//减少数量事件
function prev(o){
	$(o).parent().siblings(".yscm").find("input").attr('checked','checked');
	var  buyNum=	$(o).siblings("input").val();
	var  oldNum=	$(o).siblings("input").val();
	if(buyNum>1){
		buyNum--;
	}else{
		$(o).addClass("allow");
		buyNum=1;
	}
	var parm={};
	var arry=[];
    var redisCartItemKey=$(o).parent().parent().parent().siblings().children().attr("class");
    var primaryvalue=$(o).siblings("p").text();
    var qty=buyNum;
    function fun(primaryvalue,qty){
    	this.primaryvalue=primaryvalue;
    	this.qty=qty;
    }
    arry.push(new fun(primaryvalue,qty));
    parm["redisCartItemKey"]=redisCartItemKey;
    parm["shoppingCartItemDetailList"]=arry;
	$.ajax({
		dataType:"json",
		contentType: "application/json; charset=utf-8", 
		url:contentPath+"/shoppingController/editShoppingCartItemDetail",
		type:"post", 
		data:JSON.stringify(parm),//将字符串数组转为json格式数组
		cache:false,//true读取缓存,false不读取缓存,只用GET才生效，默认为true
		success:function(data){
			if(data.success){
				$(o).siblings(".repertory").text("库存"+data.obj.sl);
				return false;
			}else{
				$(o).siblings("input").val(oldNum);
				alert(data.msg);
				return false;
			}
		},
		error:function(request){
			$(o).siblings("input").val(oldNum);
			alert("error");
		}
	});
	
	 $(o).siblings("input").val(buyNum);
	 
	 addAndSubtract();
	 nextAndPre(o);
	 contorlSe();
	 addAndSubtract(); //减少数量和增加数量计算金额（小计）事件
	 nextAndPre(o);//“选中”颜色控制
	 contorlGoodShu(); //“数量框选中”颜色控制结算
	 contorlGoodCheck($(o).parent().siblings(".yscm").find("i"));//“尺码全选”左选框选中
	 isAllCheck();//是否全选
}

//手动改变数量事件
function change(o){
	$(o).parent().siblings(".yscm").find("i").eq(0).attr("class"," glyphicon glyphicon-check  s4");	
	$(o).val($(o).val().replace(/\b(0+)/gi, ""));
	$(o).val($(o).val().replace(/\D/g,1));
	if($(o).val()==0){
		$(o).val("1");
	}
	var  buyNum=	$(o).val();
	var  oldNum=	$(o).val();
	var parm={};
	var arry=[];
    var redisCartItemKey=$(o).parent().parent().parent().siblings().children().attr("class");
    var primaryvalue=$(o).siblings("p").text();
    var qty=buyNum;
    function fun(primaryvalue,qty){
    	this.primaryvalue=primaryvalue;
    	this.qty=qty;
    }
    arry.push(new fun(primaryvalue,qty));
    parm["redisCartItemKey"]=redisCartItemKey;
    parm["shoppingCartItemDetailList"]=arry;
	$.ajax({
		dataType:"json",
		contentType: "application/json; charset=utf-8", 
		url:contentPath+"/shoppingController/editShoppingCartItemDetail", /** 商品类型 1：新品可退 2：新品不可退 3:补货 4 生活用品 5：预定 */
		type:"post", 
		data:JSON.stringify(parm),//将字符串数组转为json格式数组
		cache:false,//true读取缓存,false不读取缓存,只用GET才生效，默认为true
		success:function(data){
			if(data.success){
				$(o).siblings(".repertory").text("库存"+data.obj.sl);
				return false;
			}else{
				$(o).val(oldNum);
				alert(data.msg);
				return false;
			}
		},
		error:function(request){
			$(o).val(oldNum);
			alert("error");
		}
	});
	
	 $(o).siblings("input").val(buyNum);
	
	 addAndSubtract();
	 nextAndPre(o);
	 contorlSe();
	 contorlGoodShu(o);
	 contorlGoodCheck($(o).parent().siblings(".yscm").find("i"));//“尺码全选”左选框选中
}
//增加数量事件
function next(o){
	$(o).parent().siblings(".yscm").find("i").eq(0).attr('class',"glyphicon glyphicon-check   s4");	
	var  buyNum=	$(o).siblings("input").val();
	var  oldNum=	$(o).siblings("input").val();
	if(buyNum>0){
		buyNum++;
		$(o).siblings(".mbshop_cart_1127_single_label_left").removeClass("allow");
	}
	var parm={};
	var arry=[];
    var redisCartItemKey=$(o).parent().parent().parent().siblings().children().attr("class");
    var primaryvalue=$(o).siblings("p").text();
    var qty=buyNum;
    function fun(primaryvalue,qty){
    	this.primaryvalue=primaryvalue;
    	this.qty=qty;
    }
    arry.push(new fun(primaryvalue,qty));
    parm["redisCartItemKey"]=redisCartItemKey;
    parm["shoppingCartItemDetailList"]=arry;
	$.ajax({
		dataType:"json",
		contentType: "application/json; charset=utf-8", 
		url:contentPath+"/shoppingController/editShoppingCartItemDetail",
		type:"post", 
		data:JSON.stringify(parm),//将字符串数组转为json格式数组
		cache:false,//true读取缓存,false不读取缓存,只用GET才生效，默认为true
		success:function(data){
			if(data.success){
				$(o).siblings(".repertory").text("库存"+data.obj.sl);
				return false;
			}else{
				$(o).siblings("input").val(oldNum);
				alert(data.msg);
				return false;
			}
		},
		error:function(request){
			$(o).siblings("input").val(oldNum);
			alert("error");
		}
	});
	
	 $(o).siblings("input").val(buyNum);
	
	 addAndSubtract(); //减少数量和增加数量计算金额（小计）事件
	 nextAndPre(o);//“选中”颜色控制
	 contorlSe();//“选中”颜色控制
	 contorlGoodShu(); //“数量框选中”颜色控制结算
	 contorlGoodCheck($(o).parent().siblings(".yscm").find("i"));//“尺码全选”左选框选中
	 isAllCheck();//是否全选
}

//减少数量和增加数量计算金额（小计）事件
var xjje=0;
function addAndSubtract(){
	var total=0;
	var num=0;
	var xjje=0;
	var zjz=0;
	var zsl=0;
	$(".mbshopBox").each(function(){
		zjz=0;
		num=0;
		xjje=0;
	$(this).find(".single03").each(function(){
		if($(this).find(".s4").hasClass("glyphicon-check")){
			var plmprice=$(this).find(".plmprice").text();
			var fs=$(this).find(".mbshop_cart_1127_single_goods_num").val();
			var mfsl=$(this).find(".mfsl").text();
			zjz=zjz+plmprice*fs*mfsl;
			total=total+plmprice*fs*mfsl;
			num=num+parseInt(fs);
			zsl=zsl+parseInt(fs);
		}
	});
	xjje=xjje+zjz;
	$(this).find(".subtotal").find("span").text(xjje.toFixed(2));
	});
	$(".quantity-total").text(zsl);
	$(".amount-total").text("￥"+total.toFixed(2));
}

//减少数量和增加数量计算金额（小计）事件
var xjje=0;
function addAndSubtract1(){
	var total=0;
	var num=0;
	var xjje=0;
	var zjz=0;
	var zsl=0;
	$(".mbshopBox").each(function(){
		zjz=0;
		num=0;
		xjje=0;
	$(this).find(".single03").each(function(){
		if($(this).find(".s4").hasClass("glyphicon-check")){
			var plmprice=$(this).find(".plmprice").text();
			var fs=$(this).find(".mbshop_cart_1127_single_goods_num").val();
			var mfsl=$(this).find(".mfsl").text();
			zjz=zjz+plmprice*fs*mfsl;
			total=total+plmprice*fs*mfsl;
			num=num+parseInt(fs);
			zsl=zsl+parseFloat(fs);
		}
		if(zsl>0){
			$(".quantity-total").text(zsl);
			$(".amount-total").text("￥"+total.toFixed(2));
		}else{
			$(".quantity-total").text("0");
			$(".amount-total").text("￥ 0.00");
		}
	});
	});
	
}

//======================去结算”颜色控制============================
function balace(){
	$(".mbshopBox").each(function(){
		var _flag=false;
		$(this).find(".single03").each(function(){
			if($(this).find(".s4").hasClass("glyphicon-check")){
				 _flag=true;
				 return false;
			}
		});
		if(_flag){
			$(".go_to_balance_right").removeClass("checkout-disabled");
			return false;
		}else{
			$(".go_to_balance_right").addClass("checkout-disabled");
		};
	});
};
//“选中”颜色控制
function contorlSe(){
	$(".mbshopBox").each(function(){
		$(this).find(".single03").each(function(){
			if($(this).find(".s4").hasClass("glyphicon-check")){
				$(this).parent().parent(".mbshop_cart_1127_single_goods").addClass("se"); //添加背景颜色
				return false;
			}else{
				$(this).parent().parent(".mbshop_cart_1127_single_goods").removeClass("se"); //取消背景颜色
			};
		});
	});
};
//“尺码全选”左选框选中
function contorlGoodCheck(o){
	    var flag=true;//用来存放中间参数（是否被选中）
		$(o).parent().parent().parent().parent(".mbshop_cart_1127_single_03").find(".single03").each(function(){
			if($(this).find(".s4").hasClass("glyphicon-check")){
				
			}else{
				flag= false;
				return  false;
			};
			return flag;
		});	
			if(!flag){
				$(o).parent().parent().parent().parent(".mbshop_cart_1127_single_03").siblings(".mbshop_cart_1127_single_01").find(".s3").attr("class","glyphicon glyphicon-unchecked single_goods_checkbox s3");
				$("#checkAll").attr("class","glyphicon glyphicon-unchecked");
			}else{
				$(o).parent().parent().parent().parent(".mbshop_cart_1127_single_03").siblings(".mbshop_cart_1127_single_01").find(".s3").attr("class","glyphicon glyphicon-check single_goods_checkbox s3");
				var isCheck=true; //中间值(用于判断是否需要全选)
				$(".s3").each(function(){
						if($(this).hasClass("glyphicon-check")){
							isCheck=true;
						}else{
							isCheck=false;
							return false;
						}
					return isCheck;
				});
				if(isCheck){
					$("#checkAll").attr("class","glyphicon glyphicon-check");
				}else{
					$("#checkAll").attr("class","glyphicon glyphicon-unchecked");
				}
			}
};
//“尺码选中”颜色控制
function contorlGoodColor(o){
	    var flag=true;
		$(o).parent().parent().parent().parent(".mbshop_cart_1127_single_03").find(".single03").each(function(){
			if($(this).find(".s4").hasClass("glyphicon-check")){
				flag= false;
			}else{
				flag= true;
			};
			$(".go_to_balance_right").addClass("checkout-disabled ");
			if(!flag){
				$(".go_to_balance_right").removeClass("checkout-disabled ");
			}else{
				$(".mbshopBox").each(function(){
					$(this).find(".single03").each(function(){
						if($(this).find(".s4").hasClass("glyphicon-check")){
							$(".go_to_balance_right").removeClass("checkout-disabled ");
						}
					});
				});
			}
			return flag;
		});	
};
//“-”，“+”点击事件
function nextAndPre(o){
	var isSel=true;
	$(o).parent().parent().parent().find(".single03").each(function(){
		if($(this).find(".s4").hasClass("glyphicon-unchecked")){
			$(this).parent(".mbshop_cart_1127_single_03").siblings(".mbshop_cart_1127_single_01").find("i").attr("class","glyphicon glyphicon-check single_goods_checkbox s3");
	        isSel=true;
		}else{
			$(this).parent(".mbshop_cart_1127_single_03").siblings(".mbshop_cart_1127_single_01").find("i").attr("class","glyphicon glyphicon-unchecked single_goods_checkbox s3");
		     isSel=false;
		}
		return isSel;
	});
	//小计方法
	 contorlGoodShu(o);
};
//“数量框选中”颜色控制
function contorlGoodShu(o){
	   var flag=true;
		$(o).parent().parent().parent(".mbshop_cart_1127_single_03").find(".single03").each(function(){
			if($(this).find(".s4").hasClass("glyphicon-check")){
				flag= false;
			}else{
				flag= true;
			};
			$(".go_to_balance_right").addClass("checkout-disabled ");
			if(!flag){
				$(".go_to_balance_right").removeClass("checkout-disabled ");
			}else{
				$(".mbshopBox").each(function(){
					$(this).find(".single03").each(function(){
						if($(this).find(".s4").hasClass("glyphicon-check")){
							$(".go_to_balance_right").removeClass("checkout-disabled ");
						}
					});
				});
			}
			return flag;
		});	
};
//存在没勾选的商品，则全选框不打勾
function isAllCheck(){
	var _flag=true;
	$(".mbshop_cart_1127_single_01").each(function(){
		if($(this).find("i").hasClass("glyphicon-unchecked")){
			_flag=false;
			return false;
		}
	});
		if(_flag){
			$("#checkAll").attr("class","glyphicon glyphicon-check");
		}else{
			$("#checkAll").attr("class","glyphicon glyphicon-unchecked");
		}
}

//图片放大镜
//兼容IE和火狐   缩小放大、缩放 
var timer;
var timers;
function ImageMoveOver(args) { 
	      clearTimeout(timers);
		  var imgSrc = $(args).attr("src"); 
		    if (args) { 
		    	$(args).parents(".mbshop_cart_1127_single_goods").siblings(".img_max").html("<img src="+imgSrc+" class='fd-clr'   onmouseover='img_maxOver()' onmouseout='img_maxOut(this)'>");
		    	$(args).parents(".mbshop_cart_1127_single_goods").siblings(".img_max").children(".fd-clr").width($(args).width() * 2.1);
		    	$(args).parents(".mbshop_cart_1127_single_goods").siblings(".img_max").children(".fd-clr").height($(args).height() * 2.5);
		    	$(args).parents(".mbshop_cart_1127_single_goods").siblings(".img_max").show();
		    	$(args).parents(".mbshop_cart_1127_single_goods").siblings(".unit-gallery").show();
		    } 
}

function  ImageMoveOut(args){
	    timer=setTimeout(function(){
		$(args).parents(".mbshop_cart_1127_single_goods").siblings(".img_max").hide();
		$(args).parents(".mbshop_cart_1127_single_goods").siblings(".unit-gallery").hide();
	},500);
}

function img_maxOver(){
	clearTimeout(timer);
}

function img_maxOut(o){
	timers=setTimeout(function(){
	$(o).parent().hide();
	$(o).parent().siblings(".unit-gallery").hide();
	 },500);
}