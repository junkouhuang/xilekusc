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
<title>单品列表</title>
<!-- 必须写在html之内 -->
<jsp:include page="cssPage.jsp"></jsp:include>
<script type="text/javascript">  
       var  contextPath ="${pageContext.request.contextPath}";
</script>    
</head>

<body>
<!--head-->
<header class="header">
	<jsp:include page="head.jsp"></jsp:include>
</header>
<!-- section -->
<div  id="page-header1" class="page-header1"><span>我的新品</span></div>
<div  id="nav-list1" class="nav-list1">
	<div class="nav-content" id="nav-content">
		<ul class="nav-ul" id="nav-ul">
			<li><a  href="${pageContext.request.contextPath}/mall/batchfblist" class="nav-list1_show">本周新品</a></li>
			<li><a  href="${pageContext.request.contextPath}/mall/batchbhlist">品类浏览</a></li>
			<li><a  href="${pageContext.request.contextPath}/mall/batchfmlist">家居生活</a></li>
		</ul>
		<i class="Hui-iconfont" id="nav-menu-i">&#xe6c0;</i>
		<ul   class="nav-menu" id="nav-menu">
			<li><i class="Hui-iconfont">&#xe67f;</i><a href="${pageContext.request.contextPath}/mall/index"  class="nav-menu-a"> 主页</a></li>
			<li><i class="Hui-iconfont">&#xe670;</i><a href="${pageContext.request.contextPath}/shoppingController/getShoppingCart"   class="nav-menu-a"> 购物车</a></li>
			<li><i class="Hui-iconfont">&#xe70f;</i><a href="${pageContext.request.contextPath}/ordersController/getOrdersList"  class="nav-menu-a" > 我的订单</a></li>
			<li><i class="Hui-iconfont">&#xe705;</i><a href="${pageContext.request.contextPath}/mall/login"   class="nav-menu-a">登入</a></li>
			<li><i class="Hui-iconfont">&#xe6a6;</i><a href="${pageContext.request.contextPath}/userController/logout"   class="nav-menu-a">退出</a></li>
		</ul>
	</div>
</div>
<section class="batchfb_wrap1">
    <div class="bottom" id="tbody">
        <img src="${pageContext.request.contextPath}/images/loading-yhdUpdate_01.gif " class="loading-yhd"/>
     </div>
     <div class="mt-10" id="page1" style="text-align:center; display:none;"></div>
</section>
<div class="clearfix" style="margin-bottom:100px;"></div>
<!-- aside -->
<aside class="aside">
		<div class="asidebar">
			<i class="service" ></i>
			<a  id="service" href="${pageContext.request.contextPath}/xx" ><i class="glyphicon glyphicon-earphone" style="color: rgb(255, 255, 255); font-size: 12px;"> </i><span>客服</span></a>
			<i class="service" ></i>
			<a  id="wallet"  href="${pageContext.request.contextPath}/zqianController/getUserZqian" ><i class="glyphicon glyphicon-folder-open" style="color: rgb(255, 255, 255); font-size: 12px;  "></i><span> 钱包</span></a>
			<i class="wallet" ></i>
			<i class="service" ></i>
		</div>
		<a  id="back2top" ><i class="Hui-iconfont" style="color: rgb(255, 255, 255); font-size: 12px;  ">&#xe6d6;</i><span> TOP</span></a>
</aside>
<!--foot-->
<footer class="footer">
	<jsp:include page="foot.jsp"></jsp:include>
</footer>
<!-- js -->
<jsp:include page="jsPage.jsp"></jsp:include>
<!-- 新品列表脚本文件 -->
<script type="text/javascript" src="${pageContext.request.contextPath}/js/batchfblist.js"></script>
</body>
</html>