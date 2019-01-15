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
<title>确认订单</title>
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
<div class="confirm_order">
    <div class="order-header">
    	<div class="order-header-title">
        	<p class="order-product-title">确认订单</p>
        </div>
        <!-- <ul class="order-header-bread">
            <li class="shopping_finish"><span>完成</span></li>
            <li class="shopping_pay"><span>支付</span> </li>
            <li class="shopping_confirm"><span>确认订单 </span></li>
            <li class="shopping_cart"><span>购物车</span></li>
        </ul> -->
    </div>
    <div class="order-address">
    	<h4>收货人信息</h4>
        <ul class="order-address-checkbox">

        </ul>
	    <div class="cart_address_ctrl"><a id="updateAddress" >管理收货地址</a><a id="addOtherAddress">新增新地址</a></div>
    </div>
    <div class="clearfix"></div>
   <!-- 管理地址 -->
    <div id="J_manage_address" class="J_manage_address">
    
    </div>
    <!-- 修改或新增地址 -->
    <form id="frm1">
    <div class="__addressPop ">
    	<dl class="address_pop">
    		<dt>省：</dt>
    		<dd class="pt_ie6hack">
    		<i class="needicon">*</i>
    		<select name="province3" class="province3"></select><select name="city3" class="city3"></select><select name="area3" class="area3"></select>
    		<span class="province_error"></span>
    		</dd>
    		<dt>邮政编码：</dt>
    		<dd>
    		<i class="needicon">*</i>
    		<input type="text" data-type="c" data-errormsg="请填写正确的邮政编码" data-normal="" class="text formsize_normal J_postcode J_form vm" name="zip">
    		<span class="J_postcode_error"></span>
    		</dd>
    		<dt>街道地址：</dt>
    		<dd>
    		<i class="needicon">*</i>
    		<textarea data-type="*" data-min="5" data-max="100" data-normal="请填写街道地址，最少5个字，最多不能超过100个字" data-errormsg="请填写街道地址，最少5个字，最多不能超过100个字" class="textarea formsize_large J_street J_form" name="address" cols="30" rows="3"></textarea>
    		<span class="J_street_error"></span>
    		</dd>
    		<dt>收货人姓名：</dt>
    		<dd>
    		<i class="needicon">*</i>
    		<input type="text" data-type="*" data-errormsg="请填写收货人" data-normal="" class="text formsize_normal J_name J_form vm" name="realName">
    		<span class="J_name_error"></span>
    		</dd>
    		<dt>手机：</dt>
    		<dd>
    		<i class="needicon">*</i>
    		<input type="text"  class="text formsize_normal J_mobile J_form vm" name="mobile">
    		<span class="phone_error"></span>
    		</dd>
    		<dt></dt>
    		<dd class="pt10 oper_btn"><a href="javascript:;" class=" J_okbtn mr10 confirm_btn_add" data-id="0"  id="confirm_btn_default" onclick="confirm(this)">确认地址</a><a href="javascript:;" class="cancel_btn J_cancelbtn" onclick="cancel_btn()">取消</a><input type="reset"  style="display:none"/></dd>
    	</dl>
    </div>
    </form>
    <!-- 订单列表 -->
    <div class="order-product">
    	<p>确认订单信息</p>
       	<div class="confirm">
			<ol class="mbshop_cart">
				<li class="mbshop_cart_1127_02">商品信息</li>
				<li class="mbshop_cart_1127_03">颜色尺码</li>
				<li class="mbshop_cart_1127_05">数量</li>
				<li class="mbshop_cart_1127_04">单价</li>
				<li class="mbshop_cart_1127_06">金额</li>
				<li class="mbshop_cart_1127_08">小计</li>
				<li class="mbshop_cart_1127_09">类型 </li>
			</ol>
		</div>
    </div>
    <div class="confirmContent">		
				<c:forEach items="${list}" var="orders">
				<div class="xxj" >
                <c:forEach items="${orders.value}" var="ordertailList">
				<div class="mbshopBox" id="${ordertailList.redisCartItemKey}">
					<ul class="mbshop_cart_1127_single_goods ">
						<li class="mbshop_cart_1127_single_02">
							<dl>
								<dt>
									<a href="#">
										<img src='${ordertailList.imageUrl}'/>
									</a>
								</dt>
								<dd>
									<div class="goodtitle"><a href="#">${ordertailList.itemName}</a></div>
									<c:if test="${ordertailList.dw=='份'}">
									<p >单位<span class="a1">${ordertailList.mfsl}</span><em>件/</em><span> ${ordertailList.dw} </span></p>
									</c:if>
									<c:if test="${ordertailList.dw=='件'}">
									<p >单位<span class="a1">单件包装</span></p>
									</c:if>
								</dd>
							</dl>
						</li>
						<li class="xiq">
						
					   <c:forEach items="${ordertailList.shoppingCartItemDetailList}" var="detailGoodList">
					   <div class="fj">
							<div class="ms">
								<p><i>颜色：<span>${detailGoodList.color}</span></i><i>尺码：<span>${detailGoodList.size}</span></i></p>
							</div>
							<div class="shull">
									<span class="">${detailGoodList.qty}</span><br/>
							</div>
							<div class="daj">
								<em class="">￥ <span>${detailGoodList.mplprice}</span></em>
							</div>
							<div class="xijsi">￥<span>${detailGoodList.mplAmount}</span></div>
						</div>
						</c:forEach>
						</li>
					</ul>
				</div>
				<div class="clearfix"></div>
				</c:forEach>
					<div class="otder">
						<div class="otderLeft">
							<span class="status-wait-buyer-action"></span>
						</div>
						<div class="otderRght">
							<span class="">${orders.key}</span>
						</div>
					</div> 
				</div>
				</c:forEach>
		</div>
	<div class="clearfix"></div>
    <div class="order-discount">
    	总计：
    	<span class="totalPrice">￥ <span></span></span>
 		<a class="toCreateOrder">生成订单</a>
    </div>
    <div class="order-total">
    </div>
</div>
<!--底部-->
<footer class="footer">
	<jsp:include page="foot.jsp"></jsp:include>
</footer>
<!-- js -->
<%-- <jsp:include page="jsPage.jsp"></jsp:include> --%>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/orderAffirm.js"></script>
<script language="javascript" defer>new PCAS("province3","city3","area3");</script>
</body>
</html>
