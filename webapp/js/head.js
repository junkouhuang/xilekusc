
$(function(){
	$("#search").bind("click",function(){
		$("#simpleSearch").slideToggle();
		$("#q").focus();
	});
	$("#myaccount").hover(function(){
		$("#menu-list").slideDown();
	},function(){
		$("#menu-list").slideUp();
	});
	$("#myaccount1").hover(function(){
		$("#menu-list1").slideToggle();
	});
	var etxtList=["秋季男装狂刷价，最低消费38元起！","换季夏装大清仓，全场6折！","秋季新品上市,买二送一！"];
	var index=0;
	setInterval(function(){
		$("#header-banner p").addClass("animation");
		index++;
		if(index<etxtList.length){
			$("#header-banner").html("<p class='animation'>"+etxtList[index]+"</p>");
		}else{
			 index=0;
			 $("#header-banner").html("<p class='animation'>"+etxtList[index]+"</p>");
		}
	},3000);
});
