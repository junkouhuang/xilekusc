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
<title>开通钱包</title>
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
<!-- section -->
<section class="J_dredge">
	<div class="operation-title">
		<div class="title-inset-area">
			<p class="title-text">&nbsp;&nbsp;<i class="Hui-iconfont">&#xe6b7;</i>开通值值余额</p>
		</div>
	</div>
	<div class="operation-con">
		<div  class="open-double-area">
			<!-- <h3 class="open-xjk-title">值值支付密码</h3> -->
			<form action="${pageContext.request.contextPath}/zqianController/activeZqian" id="submitForm">
			<table>
				  <tr>
				 	 <td>证件类型 </td>
				    <td>
				      <select id="disabledSelect" >
				            <option>二代身份证</option>
							<option>港澳居民来往内地通行证</option>
							<option>台湾居民来往大陆通行证</option>
							<option>中国护照</option>
							<option>外国护照</option>
				        </select>
				        </td>
				  </tr>
				  <tr >
				  	<td>证件号码 </td>
				    <td>
				      <input type="text" name="credentialsnum" id="identity_card" ><span class="card_hint"></span>
				    </td>
				  </tr>
				  <tr>
				 	 <td>请输入支付密码
				    </td>
				    <td>
				      <input type="password" id="pwd"  name="transpassword"><span class="pwd_hint"></span>
				    </td>
				  </tr>
				  <tr>
				  	<td>确认支付密码
				    </td>
				    <td>
				      <input type="password" id="confirmPwd"><span class="confirmPwd_hint"></span>
				    </td>
				  </tr>
				  <tr >
					  <td colspan="2">
					   <input class="btn btn-primary"   type="button" value="确认" id="oPenZiqian"/>
					   </td>
				  </tr>
				  </table>
				</form>
				<div class="create-wallet">
					<ul>
						<li>开通值值钱包用户需知？</li>
						<li>我们保证 —— 开通能让结算更迅速。如何？ 我们来试试……</li>
						<li>
							<ol>
								<li>便捷结算</li>
								<li>密切关注您的订单和以前购买的商品</li>
								<li>通过电子邮件接收第一手消息（和私密特卖活动）</li>
							</ol>
						</li>
					</ul>
				</div>
		</div>
	</div>
</section>
<div class="clearfix" style="margin-bottom:100px;"></div>
<!--foot-->
<footer class="footer">
	<jsp:include page="foot.jsp"></jsp:include>
</footer>
<!-- js -->
<jsp:include page="jsPage.jsp"></jsp:include>
<!-- 新品列表脚本文件 -->
<script type="text/javascript" src="${pageContext.request.contextPath}/js/dredge.js"></script>
</body>
</html>