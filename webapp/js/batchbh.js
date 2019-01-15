$(function(){
	demo();
    $(".screen-outerL li").mouseover(function(){
		$(".slide").css("display","block");
	});
	$(".screen-outerL li").mouseout(function(){
		$(".slide").css("display","none");
	});
	$("#back2top").click(function(){
		$("html,body").animate({scrollTop:0}, 500);
	});
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
});

function demo(curr){  
    var pageSize = 10;  
    $.getJSON(contextPath+'/productShowController/getCategoryProductList', {
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
           $('#tbody').html(PackagData(res));  //内容容器
           $("input[type=checkbox]").bind('click',function(){
			 	 $(this).attr('checked','checked').parent().parent().siblings().children().children("input").removeAttr('checked');
			 	 $(this).parent().parent().css('background-color','#f5f5f5').siblings().css('background-color','');
			});
           $(".item").each(function(){
       		$(this).find(".bigImg").eq(0).attr("src",$(this).find(".smallImg li").eq(0).children().attr("src"));
       	});
           $('#total').html(res.total);  
  	});  
}  

//内容
function PackagData(res){  
	if(res.list.length>0){
		var content="";  
	    for(var i=0;i<res.list.length;i++){ 
	    	content+="<ul class='batchlist'>"; 
	    	content+="<li class='item' id = " +res.list[i].spbatchid+ ">"; 
	    	content+="<div class='mbshop_listPdImg'><img src='' class='bigImg'></div>"; 
	    	content+="<div class='item_bottom'>";  
	        content+="<a class='prev'><i class='glyphicon glyphicon-chevron-left'></i></a>";  
	    	content+="<ul class='smallImg'>";
	    	for (pic in res.list[i].productImageList) { 		// 遍历Set图片集合
	    		content+="<li class='owl'><img src="+ res.list[i].productImageList.imageurl+" /></li>";
	    		}
	    	content+="</ul>";  
	    	content+="<a class='next'><i class='glyphicon glyphicon-chevron-right'></i></a>";  
	    	content+="<div><span class='batchcode'>"+res.list[i].productcode+"</span>";  
	    	content+="<span class='batchname'>"+res.list[i].productname+"</span></br>";  
	    	content+="<span class='sale'>零售价：￥"+res.list[i].price+"</span>";  
	    	content+="<span class='sellsale'>批发价：￥"+res.list[i].lp+"</span></br>";  
	    	if(res.producttype==2){	
	    		content+="<span class='reserve'>预定</span>";  
	    	}
	    	content+="<span class='createtime'>开始订货时间："+res.list[i].statime+"</span></br>";  
	    	content+="<span class='standard'>截止订货时间："+res.list[i].cuttime+"</span></br>";  
	    	content+="</div>";  
	        content+="</div>";  
	    	content+="</li>";  
	    	content+="</ul>"; 
	    }  
	    return content;  
	}else{
		return    "<div style='width:1000px;height:400px;padding-top:100px;text-align: center;'><i class='Hui-iconfont' style=' font-size: 52px; color: #4d6673;'>&#xe673;</i><p>暂无数据~</p></div>";  
	};
};
//获取大图片
