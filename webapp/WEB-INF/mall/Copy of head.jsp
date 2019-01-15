<%@ page language="java" pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<script type="text/javascript">
var pageContext="${pageContext.request.contextPath}";
</script>
<div  class="wrap">
	  <a href="${pageContext.request.contextPath}/mall/index"  class="logo">值值库存交易平台</a>
	  <form class="searchFrm"><input name="batchid"  placeholder="输入批次"><a onclick="javascript:doTotSearch();" class="glyphicon glyphicon-search"></a></form>
      <a href="${pageContext.request.contextPath}/mall/register" class="shopping-cart s1">注册</a>
      
	 <c:choose>
			<c:when test="${!empty  sessionScope.user.username}">
				<a  class="login s1 loginoute" href="${pageContext.request.contextPath}/userController/logout" >退出&nbsp;/</a>
			    <a href="#" class="login s1">欢迎您,${ sessionScope.user.username}</a>
			</c:when>
			<c:otherwise>
				<a href="${pageContext.request.contextPath}/mall/login" class="login s1 loginine"><span class="glyphicon glyphicon-user"></span>登陆&nbsp;/&nbsp;</a>
			</c:otherwise>
	  </c:choose>
	  
	  <a  class="login s1 loginin" href="${pageContext.request.contextPath}/userController/logout" >退出&nbsp;/</a>
      <a href="#" class="login s1 loginin">欢迎您,<span></span></a>
      <a href="${pageContext.request.contextPath}/userController/logout" class="login s1 loginout"><span class="glyphicon glyphicon-user"></span>登陆&nbsp;/&nbsp;</a>
      
       <c:choose>
			<c:when test="${!empty  sessionScope.user.username}">
				<a href="${pageContext.request.contextPath}/ordersController/getOrdersList" class="myorder s1"><span class="glyphicon glyphicon-list"></span> 我的订单</a>
			</c:when>
			<c:otherwise>
				<a href="${pageContext.request.contextPath}/userController/logout" class="myorder s1"><span class="glyphicon glyphicon-list"></span> 我的订单</a>
			</c:otherwise>
	  </c:choose>
	  
      <c:choose>
			<c:when test="${!empty  sessionScope.user.username}">
				  <a href="${pageContext.request.contextPath}/shoppingController/getShoppingCart" class="cart s1"><span class="glyphicon glyphicon-shopping-cart"></span> 购物车</a>
			</c:when>
			<c:otherwise>
				  <a href="${pageContext.request.contextPath}/userController/logout" class="cart s1"><span class="glyphicon glyphicon-shopping-cart"></span> 购物车</a>
			</c:otherwise>
	  </c:choose>
	  <a href="${pageContext.request.contextPath}/zqianController/getUserZqian"  class="ziqian s1"><span class="glyphicon glyphicon-credit-card"></span> 值值钱包</a>
	  
　   <a href="${pageContext.request.contextPath}/mall/index"  class="home s1"><span class="glyphicon glyphicon-home"></span> 我的值值</a>

</div> 
