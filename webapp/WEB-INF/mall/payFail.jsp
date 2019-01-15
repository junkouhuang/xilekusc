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
<title>支付成功</title>
<!-- 必须写在html之内 -->
<jsp:include page="cssPage.jsp"></jsp:include>
<script>
	var contentPath="${pageContext.request.contextPath}";
</script>
</head>

<body>
<!--head-->
<header  class="header">
	<jsp:include page="head.jsp"></jsp:include>	
</header> 
<!-- section -->
<section class="paySuccess">
  	<div id="J_AmountList" class="take-delivery">
	  	<h2>该笔订单支付失败!！</h2>
  	</div>
  	<div id="J_ButtonList">
	  	<span class="info">您可以</span>
	  	<a class="J_MakePoint"  href="${pageContext.request.contextPath}/ordersController/getOrdersList" >查看已买到的宝贝</a>
	  	<a class="J_MakePoint"  href="${pageContext.request.contextPath}/mall/index" >返回主页</a>
  	</div>
  	<div id="J_RemindList">
	  	<ul>
		  	<li class="alert">
				<p><strong>安全提醒：</strong>下单后，<span style="color:#c30000;font-weight:bold;">用QQ给您发送链接办理退款的都是骗子</span>！值值不存在系统升级，订单异常等问题，谨防假冒客服电话诈骗！</p><a href="//qd.alibaba.com/zt/insurance/index.html?acm=lb-zebra-25069-314263.1003.8.440837&amp;scm=1003.8.lb-zebra-25069-314263.ITEM_14474552804580_440837" title="$!vo.infoTitle">安心购物，安全无忧，限时赠送100W值值账户安全险&gt;&gt;</a>
			</li>
		</ul>
	</div>
</section>
<div class="clearfix"></div>
<!--foot-->
<footer class="footer">
	<jsp:include page="foot.jsp"></jsp:include>
</footer>
<!-- js -->
<jsp:include page="jsPage.jsp"></jsp:include>
</body>
</html>
