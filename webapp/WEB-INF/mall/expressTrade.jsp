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
<title>绑定银行卡</title>
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
<section class="expressTrade">
	<form>
		<div class="ui-fm-item fn-w-470">
			<label class=""><i class="glyphicon glyphicon-info-sign"></i>请填写以下信息用于实名身份验证。</label>
		</div>
		<div class="ui-fm-item fn-w-470">
			<label class="ui-fm-label">姓名：</label>
			<input type="text" name="cardHolderName" placeholder="付款银行卡的开户姓名"/>
		</div>
		<div class="ui-fm-item fn-w-470">
			<label class="ui-fm-label">证件：</label>
			<select>
          	    <option value="A" selected="selected">身份证</option>
                <option value="B">护照</option>
                <option value="M">港澳居民来往内地通行证</option>
                <option value="N">台胞证</option>
			</select>
			<input type="text" name="certNo"/>
		</div>
		<div class="ui-fm-item fn-w-470">
			<label class="ui-fm-label">储蓄卡卡号：</label>
			<input type="text" name="cardNo"/>
		</div>
		<div class="ui-fm-item fn-w-470">
			<label class="ui-fm-label">手机号码：</label>
			<input type="text" name="mobileNo" placeholder="此卡在银行预留的手机号码"/>
		</div>
		<div class="ui-fm-item fn-w-470">
			
			<input type="submit" value="确定" class="sub"/>
		</div>
	</form>
</section>
<!--foot-->
<footer class="footer">
	<jsp:include page="foot.jsp"></jsp:include>
</footer>
<!-- js -->
<jsp:include page="jsPage.jsp"></jsp:include>
<!-- 补货列表脚本文件 -->
<script type="text/javascript" src="${pageContext.request.contextPath}/js/expressTrade.js"></script>
</body>
</html>
