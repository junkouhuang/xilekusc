//加载页面数据
$(document).ready(function(){
	$.ajax({
		url:contentPath+"/shoppingController/getShoppingCartItem",
	    data:{"redisCartItemKey": $("#redisCartItemKey").val()},
		dataType:"json",
  		type:"post", 
  		async:false,
  		success:function(res){
  			$(".success-cont").html(PackagData(res));
  			//返回列表
  			$("#back").click(function(){
  				//返回新品列表
  				if($(".itemType").val()==1 || $(".itemType").val()==2){
  					window.location.href=contentPath+"/mall/batchfblist";
  				}
  				//返回补货列表
  				if($(".itemType").val()==3){
  					window.location.href=contentPath+"/mall/batchbhlist";
  				}
  				//返回生活用品列表
  				if($(".itemType").val()==4){
  					window.location.href=contentPath+"/mall/batchfmlist";
  				}
  			});
  		},error:function(){
  		}
	});
});

//内容
function PackagData(res){  
	console.log(res);
    	var content="";  
    		content+="<input type='hidden' class='itemType' value="+res.obj.itemType+"></p>"; 
        	content+="<a href='#' target='_blank' class='J_SkuMask'><img style='width:60px;height:60px;' src="+res.obj.imageUrl+"></a>";
        	content+="<div class='J_ItemSkuSelect'>"; 
        	content+="<p>"+res.obj.itemName+"</p>"; 
        	for(var i = 0; i < res.obj.shoppingCartItemDetailList.length; i++){
        	var pic = res.obj.shoppingCartItemDetailList[i];
   			content+="<div style='color:#333;font-size:12px;display:block;'><span class='J_SkuMask'>颜色："+pic.color+"</span><span class='J_SkuMask'>  尺码："+pic.size+"</span><span>/</span><span>"+pic.sizeDes+"</span><span style='display:none' class='reserve'> reserve："+pic.reserve+"</span><span> 数量：<span>"+pic.qty+"</span></div>";
        	}
            content+="</div>";  
        return content;  
} 
