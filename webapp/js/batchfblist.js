$(function(){
	demo();
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
	            	console.log(curr);
	            	if(curr<=pages){
	            		demo(curr);
	            		curr=curr+1;
	            	}
	           }
	      });
});

function demo(curr){  
    var pageSize = 12;  
    $.getJSON(contextPath+'/productShowController/getLatestProductList', {
    	page: curr || 1,  			//当前页
        pageSize: pageSize,			//当前页总记录数
    },
    function (res){ 
        laypage({  
              cont: 'page1', //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div> 按钮容器
              pages: res.pages, //通过后台拿到的总页数  
              curr: curr || 1,  
              skip: true, //是否开启跳页  
              first: '首页', //若不显示，设置false即可  
              last: '尾页', //若不显示，设置false即可  
              prev: '<', //若不显示，设置false即可  
              next: '>', //若不显示，设置false即可  
              jump: function (obj,first) { //触发分页后的回调  
                   if(!first){ //点击跳页触发函数自身，并传递当前页：obj.curr  
                       demo(obj.curr);  
                   	}  
              	}  
          });  
        
        $('#tbody').append(PackagData(res));  //内容容器
        var items=[];
        $("#tbody form").each(function(index){
        	items.push(index);
        });
        setInterval(function(){
        	 $("#tbody form").eq(items[Math.floor(Math.random()*items.length)]).children(".batchlist").addClass("rotateImg").parent().siblings().children(".batchlist").removeClass("rotateImg");;
        },2000);
    
       	$(".item").each(function(){
       		if($(this).find("li img").eq(0).attr("src")==undefined || $(this).find("li img").eq(0).attr("src")=='' ){
       			$(this).find(".bigImg").eq(0).attr("src",contextPath+"/images/loading-1411a6e187.gif");
       		}else{
       			$(this).find(".bigImg").eq(0).attr("src",$(this).find("li img").eq(0).attr("src")).removeAttr("style");
       		}
    	});
    	//点击小图片，大图片更换为选中的地址
    	$("img").hover(function(){
    		$(this).parent().parent().parent('.item_bottom').siblings(".mbshop_listPdImg").children("img").attr("src",$(this).attr("src"));
    	});
    	//大图片hover替换（显示为第二张图片）
    	$(".bigImg").hover(function(){
    		var imgSrc=$(this).parent().siblings(".item_bottom").children().children().children().attr("src");
    		if(imgSrc==""){
    			$(this).attr("src",contextPath+"/images/loading-1411a6e187.gif");
    		}else{
    			$(this).attr("src",$(this).parent().siblings(".item_bottom").find("li").eq(1).children("img").attr("src"));
    		}
    	},function(){
    		var imgSrc=$(this).parent().siblings(".item_bottom").children().children().children().attr("src");
    		if(imgSrc==""){
    			$(this).attr("src",contextPath+"/images/loading-1411a6e187.gif");
    		}else{
    			$(this).attr("src",$(this).parent().siblings(".item_bottom").find("li").eq(0).children("img").attr("src"));
    		}
    	  });
	    //点中图片进入购物车
		$(".bigImg").each(function(){
			    $(this).click(function(){
			    	$(this).parent().parent().parent().parent().submit();
			});
		});
		//生成图片数组（下一页）
		var index=0;
		$(".item_bottom .next").click(function(){
			$(this).siblings(".prev").removeClass("allow");
			var attr=$(this).siblings(".smallImg").children("li"); //获取小图片的对象
			var test=[],result=[];
			arrLength=$(this).siblings(".smallImg").children("li").length;//获取小图片的长度
			var begin=0,end=5;
			while (end < arrLength) {
				result.push(attr.slice(begin, end));		
				begin = begin + 5;
				end = end + 5;
				if (end >=arrLength){
					end = arrLength;
					result.push(attr.slice(begin, end));  //选取数组
					for(var i=0;i<result.length;i++){
				       for(var j=0;j<result[i].length;j++){
				    	 result[i][j].className='';
				       }	
					}	
					index=index+1;
					if(index<result.length){
						for(var x=0;x<result[index].length;x++){
							result[index][x].className="owl";
						}
						index=index+1;
						if(index>=result.length){
							index=result.length-1;
							$(this).addClass("nodrop");
							$(this).siblings().addClass("drop1");
						}
					}
					else{
						index=result.length-1;
						$(this).addClass("nodrop");
						$(this).siblings().addClass("drop1");
						for(var x=0;x<result[index].length;x++){
								result[index][x].className="owl";
						}
					}
				}
				return false;
			}
		});
		//图片数组切换(上一页)
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
						$(this).addClass("allow");
						$(this).siblings(".next").removeClass("nodrop");
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
  	});  
}  

//内容
function PackagData(res){
	if(res.list.length>0){
		$(".loading-yhd").remove();
	}
	var content="";  
    for(var i=0;i<res.list.length;i++){ 
    	content+="<form action='"+contextPath+"/productShowController/getProductDetail' method='post'>"; 
    	content+="<input type='hidden' name='productShowRedisHashKey'  value='"+res.list[i].productshowrediskey+"'/>";
    	content+="<input type='hidden' name='pages'  class='pages' value='"+res.pages+"'/>";
    	content+="<ul class='batchlist'>"; 
    	content+="<li class='item' id = " +res.list[i].productid+ ">"; 
    	content+="<div class='mbshop_listPdImg'><img class='bigImg' style='margin-top:72px;height:100px;margin-left:2px'  src="+contextPath+"/images/loading-1411a6e187.gif"+"></div>"; 
    	content+="<div class='item_bottom'>";  
        content+="<a class='prev allow' title='向左'></a>";  
    	content+="<ul class='smallImg'>";
    	if(res.list[i].productImageList.length>0){
    		for (var  x=0;x<res.list[i].productImageList.length;x++ ) { 		// 遍历Set图片集合imageurl
        		content+="<li class='owl'><img src="+res.list[i].productImageList[x].imageurl+" /></li>";
        		}
    	}else{
        		content+="<li class='owl'><img src='' /></li><li class='owl'><img src='' /></li><li class='owl'><img src='' /></li><li class='owl'><img src='' /></li><li class='owl'><img src='' /></li>";
    	}
    	content+="</ul>";  
    	content+="<a class='next' title='向右'></a>";  
    	content+="<div class='mbshop_listPdCon'><span class='batchcode' id="+res.list[i].productcode+">"+res.list[i].productcode+"</span>";  
    	content+="<span class='batchname'>"+res.list[i].productname+"</span>";  
    	if(res.list[i].producttype==2){	
    		content+="<span class='reserve'>预定</span>";  
    	}
    	content+="<span class='sale'>零售价：<em>￥"+res.list[i].price+"</em></span>";  
    	content+="<span class='sellsale'>批发价：<em>￥"+res.list[i].lp+"</em></span>";  
    /*	if(res[i].cut==1){	*/
    	content+="<span class='statime'>开始订货时间 <em>"+res.list[i].statime+"</em></span>";  
    /*	}*/
    /*	if(res[i].cut==1){	*/
    	content+="<span class='cuttime'>截止订货时间 <em>"+res.list[i].cuttime+"</em></span>";  
    /*	}*/
    	content+="</div>";  
        content+="</div>";  
    	content+="</li>";  
    	content+="</ul>"; 
    	content+="</form>"; 
    }  
    return content;  
} 

//点击返回顶部
var timer1;
var timer2;
$(function(){
	$("#back2top").click(function(){
		$("html,body").animate({scrollTop:0}, 500);
	});
	//显示功能菜单
	$("#nav-menu-i").hover(function(){
		    clearTimeout(timer2);
			$("#nav-menu").slideDown();
	},
    function(){
		timer1=setTimeout(function(){
			$("#nav-menu").slideUp();
		},500);
	});
	
	$("#nav-menu").hover(function(){
		clearTimeout(timer1);
		$("#nav-menu").slideDown();
		$("#nav-menu-i").css("color","#ccc");
	},function(){
		timer2=setTimeout(function(){
			$("#nav-menu").slideUp();
			$("#nav-menu-i").css("color","#fff");
		},500);
	});
});
