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
<title>充值</title>
<!-- 必须写在html之内 -->
<jsp:include page="cssPage.jsp"></jsp:include>
<script type="text/javascript">  
       var  contextPath ="${pageContext.request.contextPath}";
       window.history.forward(1);
</script>    
</head>

<body>
<!--head-->
<header class="header">
	<jsp:include page="head.jsp"></jsp:include>
</header>
<!-- section -->
<section class="J_recharge">
    <div class="o-mt">
   			<h2>填写充值金额</h2>
	</div>
	<div class="m">
		<div class="form" >
   				<form  action="${pageContext.request.contextPath}/zqianController/chargeZqianToPay"  method="post" id="frm0">
   				<div class="item">
   					<span class="label">充值账户：</span>
					<div class="fl" id="username"><b>${ sessionScope.user.username}</b></div>
					<div class="clr"></div>
   				</div>
   				<div class="item">
   					<span class="label">充值金额：</span>
   					<div class="fl">
   					<div class="row">
						<div class="col-lg-2">
							<input type="text" class="form-control text " placeholder="请输入金额"  name="amountstr" > 
						</div>
						<span class="meassage"></span>
					</div>
<!--    						<input class="text col-lg-2 form-control" type="number"  name="amountstr" min="1"> -->
						<!-- <label>元</label> -->
						<div class="msg-text"></div>
						<div class="msg-error"></div>
						<div class="clr"></div>
						<div class="msg-text">请注意：支持国内主流银行储蓄卡充值，在线支付成功后，充值金额会在1分钟内到账；如果需要提现，请联系<a href="//dd3-web.jd.com/jdchat/custom.action?entry=jd_fwztc" target="_blank" class="ftx-05">在线客服</a>办理。</div>
						<div class="clr"></div>
   					</div>
   					<div class="clr"></div>
   				</div>
   				<div class="item">
   					<span class="label">&nbsp;</span>
   					<div class="fl">
   						<input class="btn-next canClick btn"   type="button"  value="下一步">
   					</div>
   					<div class="clr"></div>
   				</div>
   				</form>
   			</div>
	</div>
	<div class="m m1">
	   			<div class="mt">
	   				<h3>温馨提示：</h3>
	   			</div>
				<div class="mc">
					<p>
						1. 充值成功后，余额可能存在延迟现象，一般1到5分钟内到账，如有问题，请咨询客服；
						<br>
	                    2. 充值金额输入值必须是不小于10且不大于50000的正整数；
						<br>
						3. 您只能用储蓄卡进行充值，如遇到任何支付问题可以查看在线支付帮助；
						<br>
						4. 充值完成后，您可以进入账户充值记录页面进行查看余额充值状态。
					</p>
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
<script type="text/javascript" src="${pageContext.request.contextPath}/js/wallet.js"></script>
</body>
</html>