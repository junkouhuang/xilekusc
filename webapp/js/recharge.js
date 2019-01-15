$(function(){
	$(".text").keyup(function(){
		if($(".text").val()>=1){
			$(".btn-next").removeClass("canClick");
			$(".meassage").html("");
		}else if(isNaN($(".text").val())){
			$(".meassage").html("<i class='glyphicon glyphicon-info-sign'></i>请输入数字");
			$(".btn-next").addClass("canClick");
		}else if($(".text").val()<1){
			$(".meassage").html("<i class='glyphicon glyphicon-info-sign'></i>输入金额不能小于1");
			$(".btn-next").addClass("canClick");
		}else{
			
		}
	});
	$(".text").click(function(){
		if($(".text").val()>0){
			$(".btn-next").removeClass("canClick");
		}else{
			$(".btn-next").addClass("canClick");
		}
	});
	$(".btn-next").click(function(){
		if($(".btn-next").hasClass("canClick")){
			
		}else{
			$("#frm0").submit();

		}
	});
});