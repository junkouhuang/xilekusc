<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<head>
<title>首页-zhizhi360.com r值库存交易平台</title>
<!-- 必须写在html之内 -->
<jsp:include page="cssPage.jsp"></jsp:include>
<script type="text/javascript">  
       var  contextPath ="${pageContext.request.contextPath}";
</script>   
</head>

<body>
<!--header-->
<header class="header">
	<jsp:include page="head.jsp"></jsp:include>
</header>
<div id="container"> </div>
<!-- aside -->
<aside class="aside">
		<div class="asidebar">
			<i class="service" ></i>
			<a  id="service" href="${pageContext.request.contextPath}/xx" ><i class="glyphicon glyphicon-earphone" style="color: rgb(255, 255, 255); font-size: 12px;"> </i><span>客服</span></a>
			<i class="service" ></i>
			<a  id="wallet"  href="${pageContext.request.contextPath}/zqianController/getUserZqian" ><i class="glyphicon glyphicon-folder-open" style="color: rgb(255, 255, 255); font-size: 12px;  "></i><span> 钱包</span></a>
			<i class="wallet" ></i>
		</div>
</aside>
<!--footer-->
<footer class="footer">
	<jsp:include page="foot.jsp"></jsp:include>
</footer>
<!-- js -->
<jsp:include page="jsPage.jsp"></jsp:include>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/delaunay.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/TweenMax.js"></script>
</body>
</html>