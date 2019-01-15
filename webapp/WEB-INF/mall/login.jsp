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
<script type="text/javascript">var contentPath="${pageContext.request.contextPath}";</script>
<jsp:include page="jsPage.jsp"></jsp:include>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/login.js"></script>
<!-- IE9生效 -->
<!--[if lt IE 9]>
<link href="${pageContext.request.contextPath}/css/IE9.css"  type="text/css" rel="stylesheet">
<script src="${pageContext.request.contextPath}/js/IE9.js" type="text/javascript" ></script>
<![endif]-->
<jsp:include page="cssPage.jsp"></jsp:include>
</head>

<body>
<!--header-->
<header  class="head">
	<div  class="logo">
	　　<a href="${pageContext.request.contextPath}/mall/index"><!-- <img src="" /> -->logo</a>
	</div>
</header>
<!--section-->
<section class="login_wrap">
	<div class="login">
		<div class="left"  style="display: none;"></div>
		<div class="right">
		    <div class="login_tab">
		    	<div class="fl mod">
                    <a class="lo_mod login-tab tab_on"  href="javascript:;" title="普通登入">普通登录</a>
                </div>
                <div class="fl mod">
                    <a class="eb_mod login-tab" href="javascript:;" title="手机免密码登入">二维码登陆</a>
                </div>
		    </div>
	        <span class="glyphicon glyphicon-minus-sign sign"></span>
		    <span class="J_Message">
		    	<span class="error"></span>
		    </span>
		    <form id="formId" class="showTradition">
				<div class="item-fore1">
					<input type="text" name="username" placeholder="用户名" id="username"  autocomplete="off" autofocus="autofocus" />
				</div>
				<div class="item-fore2">
					<input type="password" name="password" placeholder="密码" id="password"  autocomplete="off"  />
				</div>
				<div class="item-fore3">
					<a id="subLogin" type="button"  class="max" onclick="loginFun(this)">登陆</a>
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
</section>
<!-- 登陆成功时，淡入淡出提示 -->
<div class="reminder">登陆成功</div>
</body>
</html>