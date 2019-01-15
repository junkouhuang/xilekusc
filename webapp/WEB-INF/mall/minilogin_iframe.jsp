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
<title>登陆</title>
<!-- 必须写在html之内 -->
<jsp:include page="cssPage.jsp"></jsp:include>
<script type="text/javascript">
	var contentPath="${pageContext.request.contextPath}";
</script>
</head>

<body>
<div class="minlogin">
	<div class="center">
			    <div class="login_tab">
			    	<div class="fl mod">
	                    <a class="lo_mod login-tab tab_on"  href="javascript:;" title="普通登入">普通登录</a>
	                </div>
	                <div class="fl mod">
	                    <a class="eb_mod login-tab" href="javascript:;" title="手机免密码登入">二维码登陆</a>
	                </div>
	                <i class="glyphicon glyphicon-remove" style="position:absolute;top:5px;right:5px;" onclick="$('#J_minlogin', window.parent.document).hide()"></i>
			    </div>
		        <span class="glyphicon glyphicon-minus-sign sign"></span>
			    <span class="J_Message">
			    	<span class="error"></span>
			    </span>
			    <form id="formId" class="showTradition">
					<div class="item-fore1">
						<input type="text" name="username" placeholder="手机号" id="username"  autocomplete="on" autofocus="autofocus" />
					</div>
					<div class="item-fore2">
						<input type="password" name="password" placeholder="密码" id="password">
					</div>
					<div class="item-fore3">
						<a id="subLogin" type="button" class="min" onclick="loginFun(this)">登陆</a>
						<div style="color: red;text-align: center;margin-top:5px">${error }</div>
					    <a href="${pageContext.request.contextPath}/mall/findpwd">
						    <span class="glyphicon glyphicon-question-sign btn-lg forgetpwdicon"></span>
						    <span class="forgetpwdtxt">忘记密码？</span>
					    </a>
					</div>
				</form>
				<div class="showCode">
					<img src="${pageContext.request.contextPath}/images/show.png" width="120" height="120">
				</div>
				<div class="ot_btn">
					<ul>
						<li class="forqq">
							<a><img src="http://s17.mogucdn.com/p2/170104/upload_5763lkilh8f7abid345gbhh167d79_19x19.png">QQ登陆</a>
						</li>
						<li class="forwechat">
						    <a><img src="http://s16.mogucdn.com/p2/170104/upload_8d4dd486c18961b55lf0hbe5ebf7l_18x19.png">微信登陆</a>
						</li>
					</ul>
				</div>
				<div class="regist-link">
					<a href="${pageContext.request.contextPath}/mall/register">
						<span class="glyphicon glyphicon-circle-arrow-right btn-lg toRegitser"><i class="toRegisterTxt">立即注册</i></span>
					</a>
				</div>
	</div>
</div>
<!-- 登陆成功时，淡入淡出提示 -->
<div class="reminder">登陆成功</div>
<!-- js -->
<jsp:include page="jsPage.jsp"></jsp:include>
<!-- 登陆脚本文件 -->
<script type="text/javascript" src="${pageContext.request.contextPath}/js/login.js"></script>
</body>
</html>