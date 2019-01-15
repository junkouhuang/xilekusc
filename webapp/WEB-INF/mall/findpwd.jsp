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
<title>找回密码</title>
<!-- 必须写在html之内 -->
<jsp:include page="cssPage.jsp"></jsp:include>
<script type="text/javascript">
	var contentPath="${pageContext.request.contextPath}";
</script>
</head>

<body>
<!--头部-->
<header  class="header">
	<jsp:include page="head.jsp"></jsp:include>
</header>
<!--主体-->
<section class="findpwd_wrap">
   <div class="content-layout">
      <div class="maincenter">
        <span class="findpwd"><i class="Hui-iconfont">&#xe63f;</i>找回密码</span>
        <ul class="step_box">
	          <li  class="show">01/输入账户名</li>
	          <li>02/验证信息</li>
	          <li>03/重置密码</li>
        </ul>
        <form  id="form" method="post">
           <ul class="ui-item">
             <li  class="open">
                 <div class="">
                     <input type="text"  placeholder="请输入手机号" name="userName"  id="phonemunber" class="form-control"><i class="glyphicon glyphicon-minus-sign "></i><span class="tips" id="tips"></span>
                 </div>
             </li>
             <li>
                 <div class="ui-item1">
                     <p style="font-size:13px;"></p>
                     <input type="text"  placeholder="手机验证码"  id="code" class="form-control"><a class="retget" id="retget"  href="javascript:void(0)" >重新获取</a>
                 </div>
             </li>
             <li>
                 <div class="ui-item2">
                     <p><i class="glyphicon glyphicon-ok-sign lg"></i>恭喜你！验证成功，请重置密码并妥善保管：</p>
                     <input type="password"  placeholder="新密码"  name="password" id="firstPwd" class="form-control"><span class="glyphicon glyphicon-minus-sign  tips"  id="firstPassword"></span><br/>
                     <input type="password"  placeholder="确认密码" name="comfirmpassword" id="secondPwd"  class="form-control"><span class="glyphicon glyphicon-minus-sign  tips"  id="secondPassword"></span>
                 </div>
             </li>
           </ul>
           <div class="subbox">
               <input type="button"  id="next"  value="下一步"   class="0 btn btn-info btn-sm" name="0">
               <input type="button"  id="toLogin"  value="完成"   class="toLogin btn btn-info btn-sm">
           </div>
        </form>
      </div>
   </div>
</section>
<!-- js -->
<jsp:include page="jsPage.jsp"></jsp:include>
<!-- 找回密码脚本文件 -->
<script type="text/javascript" src="${pageContext.request.contextPath}/js/findpwd.js"></script>
</body>
</html>