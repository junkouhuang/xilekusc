<%@ page language="java" pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<script type="text/javascript">
var pageContext="${pageContext.request.contextPath}";
</script>
<div class="header-banner" id="header-banner"><p>秋季男装狂刷价，最低消费38元起！</p></div>
<div class="header-nav">
	<ul>
	<c:choose>
		<c:when test="${!empty  sessionScope.user.username}">
		<li  class="myaccount"  id="myaccount1"><span> ${sessionScope.user.username}</span>
			<ul class="menu-list" id="menu-list1">
				<li><a href="${pageContext.request.contextPath}/mall/index" > 主页</a></li>
				<li><a href="${pageContext.request.contextPath}/shoppingController/getShoppingCart" > 购物车</a></li>
				<li><a href="${pageContext.request.contextPath}/ordersController/getOrdersList" > 我的订单</a></li>
				<li><a href="${pageContext.request.contextPath}/mall/login" >登入</a></li>
				<li><a href="${pageContext.request.contextPath}/userController/logout" >退出</a></li>
			</ul>
		</li>
		</c:when>
		<c:otherwise>
		<li  class="myaccount"  id="myaccount"><span> 我的账户</span>
			<ul class="menu-list" id="menu-list">
				<li><a href="${pageContext.request.contextPath}/mall/index" > 主页</a></li>
				<li><a href="${pageContext.request.contextPath}/shoppingController/getShoppingCart" > 购物车</a></li>
				<li><a href="${pageContext.request.contextPath}/ordersController/getOrdersList" > 我的订单</a></li>
				<li><a href="${pageContext.request.contextPath}/mall/login" >登入</a></li>
				<li><a href="${pageContext.request.contextPath}/userController/logout" >退出</a></li>
			</ul>
		</li>
		</c:otherwise>
		</c:choose>
		<li  class="search"  id="search"><i class="glyphicon glyphicon-search" > 搜索</i></li>
	</ul>
</div>
<div  class="stickyheader">Investment advertising</div>
<div class="nav-list" id="nav-list\">
	<ul>
		<li><a  href="${pageContext.request.contextPath}/mall/batchfblist">本周新品</a></li>
		<li><a  href="${pageContext.request.contextPath}/mall/batchbhlist">品类浏览</a></li>
		<li><a  href="${pageContext.request.contextPath}/mall/batchfmlist">家居生活</a></li>
	</ul>
</div>
<div class="simpleSearch" id="simpleSearch">
	<input type="search" id="q" class="q" placeholder="搜索"/>
	<i class="glyphicon glyphicon-search" style="color: rgb(0, 0, 0); font-size: 16px;"></i>
</div>
