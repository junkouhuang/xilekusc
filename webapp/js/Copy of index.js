window.onload=function(){
	//广告位图片轮播
     var arrg=["../images/weekend623-13.jpg","../images/dapai616hu13.jpg","../images/621-xp-banner.jpg","../images/620-MB-banner.jpg","../images/vgfjkgh,l_01.jpg"];
     var timer=setInterval(changeImg,4000);
     var curIndex=0;//构造中间值,用于作为下标索引
     function changeImg(){
    	if(curIndex==arrg.length-1){
    		curIndex=0;
    	}else{
    	  curIndex+=1;
    	}
    	change(curIndex);
    	}
     //左按钮事件
     $("#prev").click(function(){
    	clearInterval(timer);
    	 if(curIndex<0){
    		 curIndex=arrg.length-1;
    	 }else{
    		 curIndex--;
    	 }
    	change(curIndex);
     });
     //右按钮事件
     $("#next").click(function(){
    	 clearInterval(timer);
    	 if(curIndex==arrg.length-1){
    		 curIndex=0;
    	 }else{
    		 curIndex++;
    	 }
    	 change(curIndex);
     });
     //小圆点点击事件
     $("#mslide_dot_box li").each(function(){
    	 $(this).index(this);
    	 $(this).click(function(){
    		 clearInterval(timer);
    		 change($(this).index());
    	 });
     });
   //光标移入左右箭头出现
     $("#J_slideBanner_panel,#prev,#next").mouseover(function(){
    	 $("#prev,#next").css("display","block");
    	 clearInterval(timer);
     });
   //光标移入左右箭头消失
     $("#J_slideBanner_panel").mouseout(function(){
    	 $("#prev,#next").css("display","none");
    	 timer=setInterval(changeImg,2000);
     });
     function change(curIndex){
    	 $("#mslide_dot_box li").each(function(){//获取小圆点集合并将样式清空
    		 $(this).removeClass("dot_show");
    	 });
    	 $("#mslide_dot_box li").eq( curIndex).addClass("dot_show");//给当前小圆点添加样式
    	 $("#adv").attr("src",arrg[curIndex]);
     
    	/* .animate({  
             marginLeft:-200*index+"px"  
         },1000);  */
     }; 
 };
   

