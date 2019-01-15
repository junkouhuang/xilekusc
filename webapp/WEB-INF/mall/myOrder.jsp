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
<title>我的订单</title>
<!-- 必须写在html之内 -->
<jsp:include page="cssPage.jsp"></jsp:include>
<script type="text/javascript">
	var contentPath="${pageContext.request.contextPath}";
    window.history.forward(1);
</script>
</head>

<body>
<!--头部-->
<header class="header">
	<jsp:include page="head.jsp"></jsp:include>
</header>
<!--主体-->
<section class="myOder_wrap">
	<div class="content">
		<div class="J_Header">
			<p class="logo">我的订单</p>
		</div>
		<div class="shop">
			<c:if test="${flag==0}">
			    <span class="J_wait_pay  mr55" id="0">等待付款</span>
			    <span class="J_down_pay" id="1">已付定金</span>
			    <span class="J_end_pay" id="2">支付完成</span>
			    <span class="J_lose _pay " id="9">失效订单</span>
			    <div style="display:none;" class="frm"></div>
			</c:if>
			<c:if test="${flag==1}">
			    <span class="J_wait_pay ${flag}" id="0">等待付款</span>
			    <span class="J_down_pay  mr55" id="1">已付定金</span>
			    <span class="J_end_pay" id="2">支付完成</span>
			    <span class="J_lose _pay " id="9">失效订单</span>
			    <div style="display:none;" class="frm"></div>
			</c:if>
			<c:if test="${flag==2}">
			    <span class="J_wait_pay ${flag}" id="0">等待付款</span>
			    <span class="J_down_pay" id="1">已付定金</span>
			    <span class="J_end_pay mr55" id="2">支付完成</span>
			    <span class="J_lose _pay"  id="9">失效订单</span>
			    <div style="display:none;" class="frm"></div>
			</c:if>
			
			<c:if test="${flag==9}">
			    <span class="J_wait_pay ${flag}" id="0">等待付款</span>
			    <span class="J_down_pay" id="1">已付定金</span>
			    <span class="J_end_pay" id="2">支付完成</span>
			    <span class="J_lose _pay  mr55" id="9">失效订单</span>
			    <div style="display:none;" class="frm"></div>
			</c:if>
		</div>
		<div class="ordderTools">
			<ol class="mbshop_cart">
			    <li class="mbshop_cart_1127_01" ><i id="myorderChx"  class="glyphicon glyphicon-unchecked">全选</i></li>
				<li class="mbshop_cart_1127_02">商品信息</li>
				<li class="mbshop_cart_1127_03">颜色尺码</li>
				<li class="mbshop_cart_1127_05">单位</li>
				<li class="mbshop_cart_1127_05">下单数量</li>
				<li class="mbshop_cart_1127_05">配货数量</li>
				<li class="mbshop_cart_1127_05">单价</li>
				<li class="mbshop_cart_1127_09">定金</li>
				<li class="mbshop_cart_1127_10">尾款</li>
				<li class="mbshop_cart_1127_06">金额</li>
				<li class="mbshop_cart_1127_06">小计</li>
				<li class="mbshop_cart_1127_08">收货人</li>
				<li class="mbshop_cart_1127_07"  id="">全部状态</li>
			</ol>
		</div>
		<div class="myOrderContent" >
				<c:forEach items="${pageinfo.list}"  var="list">
					<div class="xxj  ${list.paystatus}"  status="${list.status}" >
	    				<div class="fd-clr ">
		    				<i   class="xzb glyphicon glyphicon-unchecked" value="${list.id}"></i>
		    				<input type="hidden" value="${list.id}">
		    				<span class="dh">订单号</span><span class="dhm">${list.ordercode}</span>
		    				<i class="${list.expireSeconds}"></i>
	    				</div>		
		    		    <c:forEach items="${list.ordertailList}" var="ordertailList">
							<div class="mbshopBox">
								<ul class="mbshop_cart_1127_single_goods ">
									<li class="mbshop_cart_1127_single_02">
										<dl>
											<dt>
												<a href="#">
													<img src="${ordertailList.imageurl}"/>
												</a>
											</dt>
											<dd>
												<div class="goodtitle"><a href="#">${ordertailList.itemname}</a></div>
												<c:if test="${ordertailList.dw == '份'||ordertailList.dw == '包'}">
													<p >单位<span class="a1">${ordertailList.mfsl}</span><em>件/</em><span> ${ordertailList.dw} </span></p>
												</c:if>
												<c:if test="${ordertailList.dw == '件'}">
													<p >单位<span class="a1">单件包装</span></p>
												</c:if>
											</dd>
										</dl>
									</li>
									<li class="xiqx">
									<c:forEach items="${ordertailList.detailGoodList}" var="detailGoodList">
								   <div class="fjx">
								   		<!-- 颜色尺码 -->
										<div class="mss">
											<p><i>颜色：<span>${detailGoodList.ys}</span></i><i>尺码：<span>${detailGoodList.cm}</span></i></p>
										</div>
										<!-- 单位 -->
										<div class="shul">
												<span>${ordertailList.dw}</span><br/>
										</div>
										<!-- 下单数量 -->
										<div class="shul">
												<span class="${ordertailList.mfsl}">${detailGoodList.fs}</span><br/>
										</div>
										<!-- 配货数量 -->
										<div class="shul">
												<span class="">${ordertailList.phfs}</span><br/>
										</div>
										<!-- 单价 -->
										<div class="danj">
											<em>￥ <span>${ordertailList.plprice}</span></em>
										</div>
										<!-- 定金 -->
										<div class="orderamount">
											<em>￥ <span>${list.orderamount}</span></em>
										</div>
										<!-- 尾款 -->
										<div class="otheramount">
											<em>￥ <span>${list.otheramount}</span></em>
										</div>
										<!-- 金额 -->
										<div class="xij">￥<span class="">${detailGoodList.goodsamount}</span></div>
									</div>
									<!-- 小计 -->
									</c:forEach>
									<div class="sq">￥<span class="">${ordertailList.plamount}</span></div>
									</li>
									<!-- 收货人 -->
									<li class="mbshop_cart_1127_single_08">${list.name}</li>
								</ul>
							</div>
						    <div class="clearfix"></div>
						</c:forEach>
		   				<div class="otfer" >
		   				<!-- paystatus:0等待付款； status:0未配货 paystatus:0撤销订单 -->
							<c:if test="${list.paystatus == 0}">
							   <div  class="orderWaitFk"><span class="status-wait-buyer-action" >等待付款</span></div>
							   <div  class="orderFk"><input type="button" class="payment J_pay_wait"  value="付款" style=" background: #e02b41;color: #fff; border: none; padding: 3px 17px;"/></div>
							</c:if>
							<c:if test="${list.status == 0}">
							    <div class="orderNPh"><span class="orders_status">未配货</span></div>
							</c:if>
							<c:if test="${list.paystatus == 0}">
							   <div class="orderCx"><span class="backout_order">
							   <i class="glyphicon glyphicon-share-alt" ></i>撤销订单</span> </div>
							</c:if>
	
						<!-- paystatus:1已付定金； status:1已配货 paystatus:1申请退款-->	
							<c:if test="${list.paystatus == 1}">
							   <div   class="orderPayDj">已付定金</div>
							   <div  class="orderFk"><input type="button" class="payment J_down_PayOther"  value="付款"/></div>
							</c:if>
							<c:if test="${list.status == 1}">
							   <div><span class="orders_status">已配货</span></div>
							</c:if>
							<c:if test="${list.status == 2}">
						   			<div><span class="orders_status">已生成发货单</span></div>
						   </c:if>
							<c:if test="${ list.paystatus == 1 &&list.refund.refundstatus != 0 && list.refund.refundstatus != 1  && list.refund.refundstatus != 2}">
							   <div class="revoke_order "  onclick="revoke_order(this)" id="${list.id}">
							   <i class="glyphicon glyphicon-share-alt" ></i> ${list.refund.refundstatus}申请退款</div>
							</c:if>
							<c:if test="${list.paystatus == 1 && list.refund.refundstatus == 0}">
							   <div class="revoke_order"  style="color:#8c7d7d;" >
							   	等待退款 ${list.refund.refundstatus}</div>
							</c:if>
							<c:if test="${list.paystatus == 1 &&  list.refund.refundstatus == 1}">
							   <div class="revoke_order"  style="color:green;" >
							   	退款成功 </div>
							</c:if>
							<c:if test="${list.paystatus == 1 &&  list.refund.refundstatus == 2}">
							   <div class="revoke_order_fail"  style="color:#ccc;" >
							   	退款失败 </div>
							</c:if>
							<%--
							<c:if test="${list.paystatus ==1}">
						   	 	<div><input type="button" onclick="calculateSingleAmount(this)" class="showWk" value="显示尾款"/></div>
							</c:if>
							 --%>
							
						<!-- paystatus:2已付尾款； status:2已配货 paystatus:2申请退款-->	
							<c:if test="${list.paystatus == 2}">
							   <div class="orderPayWk">已付尾款</div>
							</c:if>
						<!-- status:6退款失败 ; status:7退款成功； status:8等待退款  -->	
							<c:if test="${list.paystatus == 2 && list.refund.refundstatus != 0 && list.refund.refundstatus != 1  && list.refund.refundstatus != 2}">
							   <div class="revoke_order "  onclick="revoke_order(this)"  id="${list.id}">
							   <i class="glyphicon glyphicon-share-alt" ></i>申请退款</div>
							</c:if>
							<c:if test="${list.paystatus == 2 &&  list.refund.refundstatus == 0}">
							   <div class="/"  style="color:#8c7d7d;" >
							   	等待退款</div>
							</c:if>
							<c:if test="${list.paystatus == 2 &&  list.refund.refundstatus == 1}">
							   <div class="revoke_order"  style="color:green;" >
							   	退款成功</div>
							</c:if>
							<c:if test="${ list.paystatus == 2 &&  list.refund.refundstatus == 2}">
							   <div class="revoke_order_fail"  style="color:#ccc;" >
							   	退款失败</div>
							</c:if>
							
						<!--  status:9订单失败-->	
							<c:if test="${list.status == 9}">
							   <div class="orderLose">订单失效</div>
							</c:if>
						</div>	
						<div style="">${ordertailList.plamount}</div>
					</div>
				</c:forEach>
		</div>
		
		<div class="mt-10 ${pageinfo.total}" id="page1" style="text-align:center; " >
		
		<ul class="pagination">
			<li><a href="#"  id="${pageinfo.prePage}" class="J_prev">&laquo;</a></li>
			<c:forEach items="${pageinfo.navigatepageNums}"  var="navigatepageNum">
			<li><a href="#" class="J_pageNum">${navigatepageNum}</a></li>
			</c:forEach>
			<li><a href="#"   id="${pageinfo.nextPage}" class="J_next">&raquo;</a></li>
			<li class="totalPage">总页数${pageinfo.pages}</li>
			<li class="totalSize">总条目${pageinfo.total}</li>
		</ul>
		</div>
		<c:if test="${flag==0}">
		<div class="myorder-discount">
    		总计：<span class="mytotalPrice">￥ <span></span></span>
    		<a class="mytoPay mytoPayDis">付款</a>
    	</div>
    	</c:if>
		<c:if test="${flag==1}">
		<div class="myorder-discount">
    		总计：<span class="ordersPay">￥ <span>${list.totalamount}</span></span>
    		<a class="ordersPayOther mytoPayDis">付款</a>
    	</div>
    	</c:if>
	</div>
</section>

<!--底部-->
<footer class="footer">
	<jsp:include page="foot.jsp"></jsp:include>
</footer>
<!-- js -->
<jsp:include page="jsPage.jsp"></jsp:include>
<!-- 新品列表脚本文件 -->
<script type="text/javascript" src="${pageContext.request.contextPath}/js/myOrder.js"></script>
</body>
</html>