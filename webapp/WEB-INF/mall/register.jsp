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
<title>注册</title>
<!-- 必须写在html之内 -->
<jsp:include page="cssPage.jsp"></jsp:include>
<script type="text/javascript">
	var contentPath="${pageContext.request.contextPath}";
</script>
</head>

<body>
<!--header-->
<header  class="head">
	<div  class="logo">
	　　<a href="${pageContext.request.contextPath}/mall/index">logo</a>
	</div>
</header>
<!--section-->
<section class="register_wrap">
	<div class="register">
		<div class="left"  style="display: none;"></div>
		<div class="right">
		    <form method="post"  id="formId"  action="${pageContext.request.contextPath}/userController/userRegister.do">
			    <div class="register_tab">
			    	<div class="fl mod" >
	                    <input type="button" class="lo_mod  tab_on"   value="我要库存用户注册"/>
	                </div>
	                <div class="fl mod">
	                    <input   type="button"  class="eb_mod"   value="我有库存用户注册"/>
	                </div>
	                <input  name="userType"  type="text"  id="getMsg"  value="1" />
			    </div>
			    <div class="minder"><span></span></div>
				<div class="item-fore1">
				    <select><option>中国</option><option>中国台湾省</option></select>
					<input type="text" name="userName"  id="userName" placeholder="手机号" autofocus="autofocus" >
				</div>
				<div class="item-fore2">
				    <input type="button" value="获取验证码"  id="isecurity_code_btn">
					<input type="text" name="code" id="code" placeholder="验证码">
				</div>
				<div class="item-fore5">
					<input type="password" name="password" placeholder="密码" class="pwd"  id="iPwd"  >
				</div>
				<div class="item-fore5">
					<input type="password" name="confirmpassword" placeholder="确认密码" class="pwd"  id="confirm_Password"  >
				</div>
				<div class="item-fore6">
					<input type="text" name="idNumber" placeholder="身份证" class="identity_card"  id="identity_card">
				</div>
				<div class="item-fore3">
					<input type="button" value="注册"  id="subBtn">
				</div>
			</form>
			<div class="link_login">
				<span class="agree"><input type="checkbox" id="checckbox"/><a href="#"  id="agreementDialog">我已同意协议</a></span>
				<a href="${pageContext.request.contextPath}/mall/login">已用账户？登陆</a>
			</div>
		</div>
	</div>
	<div class="ks-dialog-content">
		<i class="Hui-iconfont" id="dialog-close">&#xe6a6;</i>
		<h4>注册协议</h4>
		<p>【审慎阅读】您在申请注册流程中点击同意前，应当认真阅读以下协议。请您务必审慎阅读、充分理解协议中相关条款内容，其中包括：</p>
		<h6>1、与您约定免除或限制责任的条款；</h6>
		<h6>2、与您约定法律适用和管辖的条款；</h6>
		<h6>3、其他以粗体下划线标识的重要条款。</h6>
		
		<p>如您对协议有任何疑问，可向平台客服咨询。</p>
		
		<p>【特别提示】当您按照注册页面提示填写信息、阅读并同意协议且完成全部注册程序后，即表示您已充分阅读、理解并接受协议的全部内容。如您因平台服务与值值商城发生争议的，适用《值值商城服务协议》处理。如您在使用平台服务过程中与其他用户发生争议的，依您与其他用户达成的协议处理。</p>
	
		<p>阅读协议的过程中，如果您不同意相关协议或其中任何条款约定，您应立即停止注册程序。</p>
		<div  class="agreementBtn">
			<input type="button" value="同意协议"  id="agreementClose">
			<p class="close_warm"  id="close_warm"></p>
		</div>
	</div>
</section>
<!-- js -->
<jsp:include page="jsPage.jsp"></jsp:include>
</body>
</html>