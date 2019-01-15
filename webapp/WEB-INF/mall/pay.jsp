<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
%>
<!DOCTYPE html>
<html>
<meta charset="utf-8">
<head>
<title>支付</title>
<!-- 必须写在html之内 -->
<jsp:include page="cssPage.jsp"></jsp:include>
<script>
	var contentPath = "${pageContext.request.contextPath}";
	window.history.forward(1);
</script>
</head>


<body>
	<!--head-->
	<header class="header">
		<jsp:include page="head.jsp"></jsp:include>
	</header>
	<!-- section -->
	<section class="pay">
		<!-- choose pay way-->
		<div class="J-payMethod">
			<div class="md-order-head">
				<p>
					请您于 <span class="counttime"></span>内完成支付 (逾期将被取消)
				</p>
<!-- 				<ul class="pay-header-bread">
					<li class="shopping_finish"><span>完成</span>
					</li>
					<li class="shopping_pay"><span>支付</span></li>
					<li class="shopping_confirm"><span>确认订单 </span>
					</li>
					<li class="shopping_cart"><span>购物车</span>
					</li>
				</ul> -->
				<div>
					<span></span>
				</div>
			</div>
			<form class="lightPayForm" name="expressFastPayFrom"id="lightPayForm">
				<input type="text" name="payinfocode" value="${paymodel.orderinfo }" class="orderinfo" style="display:none" />
				<div id="J-rcChannels" class="J-rcChannels">
					<c:forEach var="paytype" items="${paymodel.paytypes}">
						<c:if test="${paytype==1}">
							<ul>
								<li class="channel-bank webchatPay"><i
									class="channel-icon wx icon Hui-iconfont ">&#xe719;</i> <span
									class="wechat">微信支付</span>
									<div class="order-with-qr">
										<div class="order-wrapper">
											<!-- QR code -->
											<div class="order-title" id="weChatPay"></div>
											<div class="J_APop">
												应付金额：￥<span class="w_amount"> ${paymodel.amount}</span>
											</div>
											<div class="tip">请使用微信扫描二维码以完成支付</div>
										</div>
									</div></li>
								<li class="channel-bank aliPay "><i
									class="channel-icon zfb icon Hui-iconfont">&#xe71c;</i> <span
									class="zhifubao">支付宝支付</span>
									<div class="order-with-qr">
										<div class="order-wrapper">
											<!-- QR code -->
											<div class="order-title" id="aliPay"></div>
											<div class="J_APop">
												应付金额：￥<span class="z_amount"> ${paymodel.amount}</span>
											</div>
											<div class="tip">请使用支付宝扫描二维码以完成支付</div>
										</div>
									</div>
									</li>
									<li class="channel-bank network"  id="wy-pay" >
										<i class="channel-icon zfb icon Hui-iconfont">&#xe6f0;</i> 
										<span class="zhifubao" >去网上银行付款</span>
									</li>
							</ul>
						</c:if>
						<c:if test="${paytype==3}">
							<div class="zhizhiContainer" id="${payinfo.payfortype}">
								<span class="ui-label "></span>
								<p class="ui-pwd ">值值支付密码</p>
								<div class="sixDigitPassword" tabindex="0" style="width: 186px;">
										<input type="password" name="pw1" size="1" id="p1"
											onkeyup="this.value=this.value.replace(/\D/g,'')"
											maxlength="1" /> <input type="password" name="pw2" size="1"
											id="p2" onkeyup="this.value=this.value.replace(/\D/g,'')"
											maxlength="1" /> <input type="password" name="pw3" size="1"
											id="p3" onkeyup="this.value=this.value.replace(/\D/g,'')"
											maxlength="1" /> <input type="password" name="pw4" size="1"
											id="p4" onkeyup="this.value=this.value.replace(/\D/g,'')"
											maxlength="1" /> <input type="password" name="pw5" size="1"
											id="p5" onkeyup="this.value=this.value.replace(/\D/g,'')"
											maxlength="1" /> <input type="password" name="pw6" size="1"
											id="p6" onkeyup="this.value=this.value.replace(/\D/g,'')"
											maxlength="1"  style="border-right: none;"/> <a onclick="ziqanPay()">确认付款</a>
								</div>
							</div>
						</c:if>
					</c:forEach>
				</div>
			</form>
		</div>
	</section>
	<div class="modal">
		<form action="${pageContext.request.contextPath}/cardPayController/cardPay" id="cardPay" method="post">
			<label class="ui-form-label">订单号码</label><input type="text"  name="orderNo" class="orderNo" value=${paymodel.orderinfo }>
			<label class="ui-form-label">订单金额</label><input type="text"  name="orderAmount" class="orderAmount" value=${paymodel.amount }>
		</form>
	</div>
	<div class="clearfix"></div>
	<!--foot-->
	<footer class="footer">
		<jsp:include page="foot.jsp"></jsp:include>
	</footer>
	<!-- js -->
	<jsp:include page="jsPage.jsp"></jsp:include>
	<!-- 支付脚本文件 -->
	<script type="text/javascript"
		src="${pageContext.request.contextPath}/js/pay.js"></script>
</body>
</html>
