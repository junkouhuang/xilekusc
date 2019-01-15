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
<title>补货列表</title>
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
<!--section-->
<div  id="page-header2" class="page-header2"><span>补货列表</span></div>
<div  id="nav-list1" class="nav-list1">
	<div class="nav-content" id="nav-content">
		<ul class="nav-ul" id="nav-ul">
			<li><a  href="${pageContext.request.contextPath}/mall/batchfblist" >本周新品</a></li>
			<li><a  href="${pageContext.request.contextPath}/mall/batchbhlist" class="nav-list1_show">品类浏览</a></li>
			<li><a  href="${pageContext.request.contextPath}/mall/batchfmlist">家居生活</a></li>
		</ul>
		<i class="Hui-iconfont" id="nav-menu-i">&#xe6c0;</i>
		<ul   class="nav-menu" id="nav-menu">
			<li><i class="Hui-iconfont">&#xe67f;</i>主页</li>
			<li><i class="Hui-iconfont">&#xe670;</i>购物车</li>
			<li><i class="Hui-iconfont">&#xe70f;</i>我的订单</li>
			<li><i class="Hui-iconfont">&#xe705;</i>登入</li>
			<li><i class="Hui-iconfont">&#xe6a6;</i>退出</li>
		</ul>
	</div>
</div>
<section class="batchbh_wrap1">
	<div class="batchfb_wrap">
	   <div class="screen-outer">
	   		<div class="screen-outerL">
	   		<p class="wg-market-category"><i class="glyphicon glyphicon-list" style="margin-right: 10px;"></i>类目</p>
	   			<ul>
	   				<li>
	   					<dl>
	   						<dt><img src="${pageContext.request.contextPath}/images/menwear.png" style="width:16px; margin: 0 5px 4px 0;"/>男装</dt>
	   						<dd>上衣</dd>
	   						<dd>裤装</dd>
	   						<dd>外套</dd>
	   						<dd>针织</dd>
	   						<dd>贴身类</dd>
	   					</dl>
	   				</li>
	   				<li>
	   					<dl>
	   						<dt><img src="${pageContext.request.contextPath}/images/suitcase.png" style="width:16px; margin: 0 5px 4px 0;"/>女装</dt>
	   						<dd>上衣</dd>
	   						<dd>贴身上衣</dd>
	   						<dd>外套</dd>
	   						<dd>皮裤</dd>
	   					</dl>
	   				</li>
	   				<li>
	   					<dl>
	   						<dt><img src="${pageContext.request.contextPath}/images/travel.png" style="width:16px;margin: 0 5px 4px 0;"/>箱包</dt>
	   						<dd>上衣</dd>
	   						<dd>贴身上衣</dd>
	   						<dd>外套</dd>
	   						<dd>皮裤</dd>
	   					</dl>
	   				</li>
	   			</ul>
	   		</div>
	   		<div class="slide">
	   		</div>
	   </div>
	</div>
	<div class="child_item">
		<ul>
			<li><i  class="glyphicon glyphicon-unchecked"></i>上衣冬装</li>
			<li><i  class="glyphicon glyphicon-unchecked"></i>睡衣</li>
			<li><i  class="glyphicon glyphicon-unchecked"></i>上衣秋装</li>
		</ul>
	</div>
	<div class="clearDiv"></div>
    <div class="bottom" id="tbody" style="left: 152px;">

     </div>
     <div class="mt-10" id="page1" style="text-align:center; "></div>
</section>
<div class="clearfix" style="margin-bottom:100px;"></div>
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
<!-- 补货列表脚本文件 -->
<script type="text/javascript" src="${pageContext.request.contextPath}/js/batchbh.js"></script>
</body>
</html>
