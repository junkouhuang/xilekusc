<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html>
<meta charset="utf-8">
<head>
<title>添加购物车成功</title>
<!-- 必须写在html之内 -->
<jsp:include page="cssPage.jsp"></jsp:include>
<script>
	var contentPath="${pageContext.request.contextPath}";
</script>
</head>

<body>
<!--头部-->
<header class="header">
	<jsp:include page="head.jsp"></jsp:include>
</header>
<!--主体-->
<section class="mycar_wrap">
	<div class="content">
		<div class="J_Header">
			<p class="logo"><i class="glyphicon glyphicon-ok-sign" style="color: rgb(0, 0, 0); font-size: 23px;"></i><span style="margin-left:10px; font-size: 20px;">商品已成功加入购物车</span></p>
		</div>
	    <div class="go_to_balanceSuccess_top"  id="go_to_balanceSuccess_top">
	        <div class='success-cont'>
	        </div>
			<div class="go_to_balanceSuccess_left"></div>
		    	<a  id="back" ><i class="glyphicon glyphicon-chevron-left" style="color: rgb(0, 0, 0); font-size: 16px;"></i><span style="font-size: 17px;">返回列表</span></a>
		    	<a class="go_to_balanceSuccess_right1 btn btn-default"  href="javascript:history.go(-1);">查看商品详情</a>
		    	<a class="go_to_balanceSuccess_right2 btn btn-default"  href="${pageContext.request.contextPath}/shoppingController/getShoppingCart">去购物车结算<!-- <i class="glyphicon glyphicon-chevron-right"></i> --></a>
	    	</div>	
	    </div>
</section>
<input id="redisCartItemKey" value=${param.redisCartItemKey } style="display:none;"/>
<!--底部-->
<footer class="footer">
	<jsp:include page="foot.jsp"></jsp:include>
</footer>
<!-- js -->
<jsp:include page="jsPage.jsp"></jsp:include>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/addToCart.js"></script>
</body>
</html>