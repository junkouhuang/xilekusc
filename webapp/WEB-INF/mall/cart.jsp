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
<title>采购单</title>
<!-- 必须写在html之内 -->
<jsp:include page="cssPage.jsp"></jsp:include>
<script type="text/javascript">
	var contentPath="${pageContext.request.contextPath}";
</script>
</head>

<body>
<!--头部-->
<header class="header">
	<jsp:include page="head.jsp"></jsp:include>
</header>
<!--主体-->
<section class="mycar_wrap">
	<div class="content">
		<!-- <div class="J_Header">
			<p class="logo">采购单</p>
			<ul class="order-header-bread">
            <li class="shopping_finish"><span>完成</span></li>
            <li class="shopping_pay"><span>支付</span> </li>
            <li class="shopping_confirm"><span>确认订单 </span></li>
            <li class="shopping_cart"><span>购物车</span></li>
        </ul>
		</div> -->
		<!-- <div class="J_Aarn">
			<span>您还没有登陆！登陆后购物车的商品将保存到您的账号中<input type="button" value="登录" class="toLogin"></span>
		</div> -->
		<div class="shop">
			<span class="all">全部商品</span>
		</div>
		<div class="tag">
			<ol class="mbshop_cart">
				<li class="mbshop_cart_1127_01">
				    <label class="mbshop_checkbox" id="alles">
				    	<i id="checkAll" class="glyphicon glyphicon-unchecked"></i>
				    	<i class="icofont"></i>
				    	<b class="qx" >全选</b>
				    </label>
				</li>
				<li class="mbshop_cart_1127_02"  id="${cartmap.value.delete}">商品信息</li>
				<li class="mbshop_cart_1127_03">颜色尺码</li>
				<li class="mbshop_cart_1127_04">单价</li>
				<li class="mbshop_cart_1127_05">数量</li>
				<li class="mbshop_cart_1127_06">小计</li>
				<li class="mbshop_cart_1127_07"  id="${cartmap.value.redisCartItemKey}">操作</li>
			</ol>
		</div>
		<div class="mbshopAll " >
            <c:set value="${cartmap.value.dw}" var="itemdetail" />    
			<c:forEach var="cartmap" items="${cartmap}">
				<div class="mbshopBox" id="${cartmap.value.redisCartItemKey}">
					<div class="single_label">
						<div class="single_label_00">
							<c:choose>
								<c:when test="${cartmap.value.itemType==1}">
								<span class="single_label_01">新品批发</span>
								</c:when>
								<c:when test="${cartmap.value.itemType==2}">
								<span class="single_label_01">生产预定</span>
								</c:when>
								<c:when test="${cartmap.value.itemType==3}">
								<span class="single_label_01">补货批发</span>
								</c:when>
								<c:when test="${cartmap.value.itemType==4}">
								<span class="single_label_01">生活用品</span>
								</c:when>		
							</c:choose>
						</div>
   					    <div class="J_count_down" ><span class="${cartmap.value.expireSeconds}"></span></div>
					</div>
					
					<ul class="mbshop_cart_1127_single_goods"  id="${cartmap.value.redisCartItemKey}"  >
					   <li><input  value="${cartmap.value.delete}" id="redisCartItemKey" class="${cartmap.value.redisCartItemKey}" style="display:none;" /> </li>
						<li class="mbshop_cart_1127_single_01" >
							<p>
								<label class="mbshop_checkbox">
									<i class="glyphicon glyphicon-unchecked single_goods_checkbox s3" ></i>
								</label>
							</p>
						</li>
						<li class="mbshop_cart_1127_single_02">
							<dl>
								<dt>
									<a href="#">
										<img src="${cartmap.value.imageUrl}" onmouseover="ImageMoveOver(this)" onmouseout="ImageMoveOut(this)"/>
									</a>
								</dt>
								<c:if test="${cartmap.value.dw =='份' || cartmap.value.dw == '包'}">
									<dd>
										<a href="#" class="itemname"><span> ${cartmap.value.itemName} </span></a><span  class=" pack">包裝  ${cartmap.value.mfsl}件/ ${cartmap.value.dw} </span>
									</dd>
								</c:if>
								<c:if test="${cartmap.value.dw == '件'}">
								<dd>
									<a href="#" class="itemname"><span> ${cartmap.value.itemName} </span></a><span class=" pack">包裝  单件包装</span>
								</dd>
								</c:if>
							</dl>
						</li>
						<li class="mbshop_cart_1127_single_03">
						<c:forEach var="shoppingCartItemDetailList" items="${cartmap.value.shoppingCartItemDetailList}">
							<div class="single03">
							<div class="yscm">
									<p><i class=" glyphicon glyphicon-unchecked  s4" ></i><i  class="${shoppingCartItemDetailList.color}">颜色：${shoppingCartItemDetailList.color}</i><em class="${shoppingCartItemDetailList.primaryvalue}"  >尺码：${shoppingCartItemDetailList.size}</em></p>
						     </div>
						     <div class="rmbk">
									<em>￥<span class="plmprice">${shoppingCartItemDetailList.mplprice}</span></em>
						    </div>
							<div class="kuc">
									<span  class="mbshop_cart_1127_single_label_left" onclick="prev(this)">-</span>
									<input type="text" value="${shoppingCartItemDetailList.qty}" name="numEdit" class="mbshop_cart_1127_single_goods_num" onkeyup="change(this)">
									<em class="mfsl" style="display:none">${cartmap.value.mfsl}</em>
									<p style="display:none">${shoppingCartItemDetailList.primaryvalue}</p>
									<span class="mbshop_cart_1127_single_label_right" onclick="next(this)">+</span>
									<i class="">(${cartmap.value.dw})</i>
									<i class="repertory">库存 ${shoppingCartItemDetailList.sl}</i>
							</div>
							</div>
						</c:forEach> 
						<div class=" subtotal">￥<span class=""></span></div>
						</li>
						<li class="mbshop_cart_1127_single_07">
							  <a href="javascript:void(0);" class="in_favorites" >移入收藏夹</a>
							  <a href="javascript:void(0);" class="delete_goods" onclick="panel_remove(this)"><i class="glyphicon glyphicon-trash "></i></a>
						</li>
					</ul>
					<div class="img_max" id="img_max"></div>
					<div class="unit-gallery"></div>
				</div>
			</c:forEach>	
		</div>
		<div class="clearfix"></div>
	    <div class="go_to_balance">
	    	<div class="go_to_balance_left">
	    		<ul class="payMenu">
	    			<li><h4>总计<span class="amount-total"></span></h4></li>
	    			<li class="aleadyCheck"><h5>已选<span class="quantity-total"></span></h5></li>
	    			<li class="delete-choose"><h5  onclick="delSingle(this)">删除</h5></li>
	    		</ul>
    		</div>
	    	<a class="go_to_balance_right checkout-disabled" >去结算</a>
	    </div>
	</div>
</section>
<!-- 删除成功时，淡入淡出提示 -->
<div class="hint">删除成功</div>
<!--底部-->
<footer class="footer">
	<jsp:include page="foot.jsp"></jsp:include>
</footer>
<!-- js -->
<jsp:include page="jsPage.jsp"></jsp:include>
 <!-- 购物车脚本文件 -->
<script type="text/javascript" src="${pageContext.request.contextPath}/js/cart.js"></script>
</body>
</html>