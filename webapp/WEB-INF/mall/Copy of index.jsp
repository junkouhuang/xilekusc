<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<head>
<title>首页-zhizhi360.com r值库存交易平台</title>
<!-- 必须写在html之内 -->
<jsp:include page="cssPage.jsp"></jsp:include>
</head>

<body>
<!--header-->
<header class="header">
	<jsp:include page="head.jsp"></jsp:include>
</header>
<!-- nav -->
 <nav class=toolMeun>
	<ul  class="meun">
		<li class="meun1"><div class="img"></div><a  href="${pageContext.request.contextPath}/mall/batchfblist">本周新品</a><!-- <span class="less">还剩下100件商品</span> --></li>
		<li class="meun2"><div class="img"></div><a  href="${pageContext.request.contextPath}/mall/batchbhlist"">品类浏览</a><!-- <span class="less">还剩下89件商品</span> --></li>
		<li class="meun3"><div class="img"></div><a  href="${pageContext.request.contextPath}/mall/batchfmlist">家居生活</a><!-- <span class="less">还剩下12件商品</span> --></li>
	</ul>
   
</nav> 
<!--section-->
<section class="section">
	<div class="slideBanner">
		<ul id="J_slideBanner_panel">
           <li class="active">
              <a><img src="${pageContext.request.contextPath}/images/weekend623-13.jpg"  id="adv"></a>
           </li>
        </ul>
        <span class="prev" id="prev">
              <i class="glyphicon glyphicon-chevron-left btn-lg"  id="J_slidebaner_left"></i>
        </span>
	   	<span  class="next" id="next">
              <i class="glyphicon glyphicon-chevron-right btn-lg"  id="J_slidebaner_right" ></i>
        </span>
        <ol class="mslide_dot_box" id="mslide_dot_box">
           <li class="dot_show"></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
        </ol>
	</div>
</section>
<!-- aside -->
<%-- <aside class="aside">
		<div class="asidebar">
			<a class="service" ><i class="	glyphicon glyphicon-headphones"></i><span>客服</span></a>
			<a class="wallet"  href="${pageContext.request.contextPath}/zqianController/getUserZqian"><i class="glyphicon glyphicon-credit-card"></i><span>钱包</span></a>
		</div>
</aside> --%>
<!--footer-->
<footer class="footer">
	<jsp:include page="foot.jsp"></jsp:include>
</footer>
<!-- js -->
<jsp:include page="jsPage.jsp"></jsp:include>
</body>
</html>