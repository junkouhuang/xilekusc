$(function(){
	$("#back2top").click(function(){
		$("html,body").animate({scrollTop:0}, 500);
	});
	//滚动监听事件
	var curr=2;
	$(window).scroll(function(){
	            var scrollTop = $(this).scrollTop();
	            if(scrollTop>253){
	            	$("#nav-list1").slideDown();
	            }else{
	            	$("#nav-list1").slideUp();
	            }
	            var scrollHeight = $(document).height();
	            var windowHeight = $(this).height();
	            if(scrollTop + windowHeight == scrollHeight){
	            	var pages=$(".pages:first").val();
	            	if(curr<=pages){
	            		demo(curr);
	            		curr=curr+1;
	            	}
	           }
	      });
	var param = {};	
    $.ajax({
        dataType:"json",
        contentType: "application/json; charset=utf-8",  
        url:contextPath+"/productShowController/getDailyProductList",
        async:true,
        data:JSON.stringify(param),    //参数值
        type:"POST",   //请求方式
        success:function(res){
        	$('#tbody').html(PackagData(res));
        	$(".item").each(function(){
        		$(this).find(".bigImg").eq(0).attr("src",$(this).find("li img").eq(0).attr("src"));
        	});
        	//点击小图片，大图片更换
        	$("img").hover(function(){
        		$(this).parent().parent().parent('.item_bottom').siblings(".mbshop_listPdImg").children("img").attr("src",$(this).attr("src"));
        	});
        	//大图片hover替换
        	$(".bigImg").hover(function(){
        		$(this).attr("src",$(this).parent().siblings(".item_bottom").find("li").eq(1).children("img").attr("src"));
        	},function(){
        		$(this).attr("src",$(this).parent().siblings(".item_bottom").find("li").eq(0).children("img").attr("src"));
        	  });
		    //点中图片进入购物车
			$(".bigImg").each(function(){
				    $(this).click(function(){
				    	$(this).parent().parent().parent().parent().submit();
				});
			});//END
			//图片组切换
			var index=1;
			$(".item_bottom .next").click(function(){
				$(this).siblings(".prev").removeClass("allow");
				var attr=$(this).siblings(".smallImg").children("li");
				var test=[],
				 result=[];
				arrLength=$(this).siblings(".smallImg").children("li").length;
				var begin=0,
				end=5;
				while (end < arrLength) {
					result.push(attr.slice(begin, end));		
					begin = begin + 5;
					end = end + 5;
					if (end >=arrLength) {
						end = arrLength;
						result.push(attr.slice(begin, end));
						for(var i=0;i<result.length;i++){
					       for(var j=0;j<result[i].length;j++){
					    	 result[i][j].className='';
					       }	
						}					
						if(index<result.length){
							for(var x=0;x<result[index].length;x++){
								result[index][x].className="owl";
							}
							index=index+1;
						}else{
							index=result.length-1;
							for(var x=0;x<result[index].length;x++){
								result[index][x].className="owl";
							}
						}
					}
					return false;
				}
				
			});
			
			$(".item_bottom .prev").click(function(){
				var attr=$(this).siblings(".smallImg").children("li");
				var test=[],
				 result=[];
				arrLength=$(this).siblings(".smallImg").children("li").length;
				var begin=0,
				end=5;
				while (end < arrLength) {
					result.push(attr.slice(begin, end));		
					begin = begin + 5;
					end = end + 5;
					if (end >=arrLength) {
						end = arrLength;
						result.push(attr.slice(begin, end));
						for(var i=0;i<result.length;i++){
					       for(var j=0;j<result[i].length;j++){
					    	 result[i][j].className='';
					       }	
						}					
						if(index>0){
							
							index=index-1;
							for(var x=0;x<result[index].length;x++){
								result[index][x].className="owl";
							}
						}else{
							$(this).addClass("allow");
							index=0;
						
							for(var x=0;x<result[index].length;x++){
								result[index][x].className="owl";
							}
						}
						
					}
				}
				
			});
        },
        error:function(r){
        	alert(r);
        }
    });
});

//内容
function PackagData(res){  
    	var content="";  
        for(var i=0;i<res.length;i++){ 
        	content+="<form action='"+contextPath+"/productShowController/getProductDetail' method='post'>"; 
        	content+="<input type='hidden' name='productShowRedisHashKey'  value='"+res[i].productshowrediskey+"'/>";
        	content+="<ul class='batchlist'>"; 
        	content+="<li class='item' id = " +res[i].productid+ ">"; 
        	content+="<div class='mbshop_listPdImg'><img src='' class='bigImg'></div>"; 
        	content+="<div class='item_bottom'>";  
            content+="<a class='prev allow'></a>";  
        	content+="<ul class='smallImg'>";
        	for (var  x=0;x<res[i].productImageList.length;x++ ) { 		// 遍历Set图片集合imageurl
        		content+="<li class='owl'><img src="+res[i].productImageList[x].imageurl+" /></li>";
        		}
        	content+="</ul>";  
        	content+="<a class='next'></a>";  
        	content+="<div><span class='batchcode' id="+res[i].productcode+">"+res[i].productcode+"</span>";  
        	content+="<span class='batchname'>"+res[i].productname+"</span>";  
        	content+="<span class='sale'>零售价：￥"+res[i].price+"</span>";  
        	content+="<span class='sellsale'>批发价：￥"+res[i].lp+"</span>";  
        	content+="</div>";  
            content+="</div>";  
        	content+="</li>";  
        	content+="</ul>"; 
        	content+="</form>"; 
        }  
        return content;  
} 