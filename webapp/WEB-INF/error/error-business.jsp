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
<title>业务异常</title>
<!-- 必须写在html之内 -->
<jsp:include page="../mall/cssPage.jsp"></jsp:include>
</head>

<body>
<div class="piece1">
  <div class="piece1_hd">
     <img src="${pageContext.request.contextPath}/images/error.png"/>
     <h3 style=" color: #b77a3d;">错误代码：${ex.exceptionCode},错误信息：${ex.exceptionMsg}</h3>
     <a href="${pageContext.request.contextPath}/mall/index" style=" font-size: 16px;color: #b77a3d;">返回首页</a>
  </div>
</div>
</body>
</html>