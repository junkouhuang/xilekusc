<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html>
<meta charset="utf-8">
<head>
<title>商品详情</title>
<!-- 必须写在html之内 -->
<jsp:include page="cssPage.jsp"></jsp:include>
<script>
	var contentPath="${pageContext.request.contextPath}";
</script>
</head>

<body>
<!--头部-->
<header class="header">
	<jsp:include page="head.jsp"></jsp:include>
</header>
<!--主体-->
<section class="orderDetail_wrap">
	<div class="detail">
	    <div class="detailLeft">
	        <div class="tb-booth"   id="showbox">      
 				<c:forEach items="${product.productImageList}" var="image">
	            		<img  src="${image.imageurl}"  width="620" height="617"/><!-- 正式数据 -->
	            </c:forEach>
	        </div>
	        <div id="showsum"></div>
			<p class="showpage">
			  <a href="javascript:void(0);" id="showlast"> <i class="glyphicon glyphicon-chevron-left"></i> </a>
			  <a href="javascript:void(0);" id="shownext"> <i class="glyphicon glyphicon-chevron-right"></i></a>
			</p>
	    </div>
	    
	    <form id="form4" method="post" >
		    <div class="detailRight">
		    		<input value=${product.productrediskey } id="productrediskey"  style="display: none"/>
		    		<span class='pfname' id="${product.bussinessId}">${product.itemName}</span>
		    		<input type='hidden' name='itemType' id='itemType' value='${product.productrediskey}' />
			    	<div class="price">
			    		<span class="scprice">市场参考价<b></b><span  style="color:red;font-size:22px;font-weight: bold;">${product.pricedes}</span></span>
			    		<c:choose>
						 <c:when test="${!empty   sessionScope.user.username}">
							  		<c:if test="${sessionScope.user.store.storeleveltype=='LPA'}">
						    			<span class="dpprice">吊&nbsp;&nbsp;&nbsp;牌&nbsp;&nbsp;&nbsp;价<b>￥</b><span  style="color:red;font-size:22px;font-weight: bold;">${product.sellPrice}</span></span>
						    	    </c:if>
							  </c:when>
					    </c:choose>
			    		<span class="jyprice">建议零售价<b>￥</b><span  style="color:red;font-size:22px;font-weight: bold;">${product.price}</span></span>
			            <c:choose>
							  <c:when test="${!empty  sessionScope.user.username}">
						    		<span class="pfprice">批&nbsp;&nbsp;&nbsp;发&nbsp;&nbsp;&nbsp;价<b>￥</b><span  style="color:red;font-size:22px;font-weight: bold;">${product.plPrice}</span></span>
					         </c:when>
					    </c:choose>
		    		</div>
		    		<div class="mod-detail">
		    			<span>品&nbsp;&nbsp;牌&nbsp;<span>${product.brand}</span></span>
			    		<%-- <span>生产日期&nbsp;<span>${product.produceText}</span></span> --%>
		    			<span>材&nbsp;&nbsp;质&nbsp;<span>${product.texture}</span></span>
		    			<c:if test="${product.dw == '份'||product.dw == '包'}">
		    			<span>包&nbsp;&nbsp;装&nbsp;<span class="mfsl">${product.mfsl}<em>件/</em>${product.dw }</span></span>
		    			</c:if>
		    			<c:if test="${product.dw == '件'}">
		    			<span>包&nbsp;&nbsp;装&nbsp;<span class="mfsl">单件包装</span></span>
		    			</c:if>
		    			<span>起订数量&nbsp;<span id="leastorderqty">${product.leastorderqty}${product.dw }</span></span>
	    				<span>开始订货时间&nbsp;<span id="starttime" class="starttime"><fmt:formatDate value="${product.statime}" type="both"></fmt:formatDate></span></span>
    					<span>截止订货时间&nbsp;<span id="cuttime" class="cuttime"><fmt:formatDate value="${product.cuttime}" type="both"></fmt:formatDate></span></span>
		    			<c:if test="${product.returnType == 1}">
		    			<span style="color:#c3d90e">喜乐库专供</span>
		    			</c:if>
		    		</div>
		    		<div class="d-content">
		    			<div class="obj-sku">
							<div class="obj-content default">
			    				<table class="table-sku">
			    				    <thead>
			    				        <tr>
			    				            <th class="name">颜色</th>
			    				            <th class="name1">尺码</th>
			    				            <th  class="prices">价格</th>
			    				            <th  class="count">库存</th>
			    				            <th class="amount" style="padding-left: 47px;">数量</th>
			    				        </tr>
			    				    </thead>
			    					<tbody>
			    					<c:forEach items="${product.productDetailList}" var="productDetail">
			    						<tr>
			    							<td class="ys"><span>${productDetail.color}</span></td>
			    							<c:if test="${productDetail.sizeDes}">
			    							<td class="size"><span>${productDetail.size} / ${productDetail.sizeDes}</span></td>
			    							</c:if>
			    							<td class="size">
			    							<span>
			    							<c:choose>
			    							<c:when test="${productDetail.sizeDes=='' || productDetail.sizeDes==null || productDetail.sizeDes=='undefined'}">
													${productDetail.size} / --
											</c:when>
											<c:otherwise>
													${productDetail.size} / ${productDetail.sizeDes}
											</c:otherwise>
											</c:choose>
											</span>
											</td>
			    							<td  class="reserve"  style="display:none;" >${productDetail.reserve}</td>
			    							<c:if test="${productDetail.mplprice=='' || productDetail.mplprice==0|| productDetail.mplprice==null}">
			    							<td class="prices"><span><em class="value">--</em><em class="price-unit">元</em></span></td>
			    							</c:if>
			    							<c:if test="${productDetail.mplprice>0}">
			    							<td class="prices"><span><em class="value">${productDetail.mplprice}</em><em class="price-unit">元</em></span></td>
			    							</c:if>
	                                        <td class="count">
		                                        <span>
													<c:choose>
														<c:when test="${productDetail.reserve==true && product.itemType == 1&&productDetail.sl==0}">
															<em class="value" >断货预定</em>
														</c:when>
														<c:otherwise>
															<em class="value">${productDetail.sl}</em>
														</c:otherwise>
													</c:choose>
		                                        </span>
	                                        </td>
	                                        <td class="amount">
	                                        	<div class="control">
	                                        	<c:choose>
										           <c:when test="${productDetail.reserve==true }">
											               	 <div class="unit-detail-amount-control">
																    <i onclick="prev(this)" class="allow">-</i>
														            <input type="tel" value="0"  class="amount-input  ${productDetail.color}" name="${productDetail.primaryvalue}" maxlength="5" max="100"  onkeyup="keyup(this)">
															        <i  onclick="next(this)">+</i>
															        <span  style="margin-left: 4px;">( ${product.dw } )</span>
															        <a href="#" class="book">到货通知</a><!-- 数量不可选 -->
															 </div>
										            </c:when>
										        
										            <c:when test="${ product.itemType == 1&&productDetail.sl!=0}">
											               	 <div class="unit-detail-amount-control">
																    <i onclick="prev(this)" class="allow">-</i>
														            <input type="tel" value="0"  class="amount-input ${productDetail.color}" name="${productDetail.primaryvalue}" maxlength="5" max="100"   onkeyup="keyup(this)">
															        <i  onclick="next(this)">+</i>
															        <span  style="margin-left: 4px;">( ${product.dw } )</span>
															 </div>
										            </c:when>  
									
										             <c:when test="${product.itemType!= 1&&productDetail.sl==0}">
											               	 <div class="unit-detail-amount-control cannt">
																    <i onclick="prev(this)" class="allow">-</i>
														            <input type="tel" value="0"  class="amount-input ${productDetail.color}" name="${productDetail.primaryvalue}" maxlength="5" max="100"   onkeyup="keyup(this)">
															        <i  onclick="next(this)">+</i>
															        <span  style="margin-left: 4px;">( ${product.dw } )</span>
															 </div>
										            </c:when>  
										         
										            <c:otherwise> 
 									                 			<div class="unit-detail-amount-control ">
																    <i onclick="prev(this)" class="allow">-</i>
														            <input type="tel" value="0"  class="amount-input ${productDetail.color}" name="${productDetail.primaryvalue}" maxlength="5" max="100"   onkeyup="keyup(this)">
															        <i  onclick="next(this)">+</i>
															        <span style="margin-left: 4px;">( ${product.dw } )</span>
														  		</div>
										            </c:otherwise>  
									        	</c:choose>  
									        	
	                                        	</div>
	                                        </td>
			    						</tr>
	            					</c:forEach>
			    					</tbody>
			    				</table>
			    			</div>
			    			<div class="obj-expand" style="display: block;">
			                    <a href="javascript:void(0)" >
				                    <i class="icon-arrow icon-arrow-down">
				                    	<em class="down"></em><span></span>
				                    </i>
			                    </a>
			                </div>
		    			</div>
		    		</div>
		    		<div class="clearfix"></div>
		    		<div class="obj-list fd-hide">
		    			<div class="list-total">
		    				<p class="amount">
		    					<span class="value">1</span>
		    					<span class="unit">${product.dw }</span>
		    					<i style="color:#e5e5e5;padding-left:10px">|</i>
		    				</p>
		    				<p class="rmb">
		    					<span class="value">68.00</span>
		    					<span class="unit-price">元</span>
		    				</p>
		    				<p class="profit fd-hide">
		    					<span class="icon-belt-card"></span>
		    					<span class="profit-info">市场返利 
		    						<span class="profit-value">2.00 元</span>
		    					</span>
		    				</p>
		    			</div>
		    			<div class="list-selected">
		    				<a class="link-list" id="link-list">
		    					<label class="link-list-txt ms-yh">已选清单
		    						<i class="icon-arrow-up">
			    						<em></em>
			    						<span></span>
		    						</i>
		    					</label>
		    				</a>
		    				<div class="list-info">
		    					<table id="table-list">
									
								</table>
		    				</div>
		    			</div>
		    		</div>
		    		<div class="addToCarBtn">
		    			<input type="button" value="加入购物车" class="btn btn-default"/>
		    			<div style="display:none;" id="addToCartSuccess"></div>
		    			<p class="tips"><i class="glyphicon glyphicon-exclamation-sign"></i>订购数量必须为大于0</p>
		    		</div>
		    	</div>
	    </form>
	</div>
</section>
<div class="clearfix"></div>
<!-- 详情 -->
<section class="goodsdetail">
	<div class="item">
		<ul>
		<li>
			<h3>商品详情</h3>
			<p>${product.text1}</p>
			<p>${product.text2}</p>
			<p>${product.text3}</p>
		</li>
		<li  class="mod-detail" id="mod-detail"></li>
	</ul>
	</div>
</section>
<!-- 迷你登陆窗口 -->
<div class="maskLayer"></div>
<iframe src="${pageContext.request.contextPath}/mall/minilogin_iframe"  class="J_minlogin"  id="J_minlogin"></iframe>
<!-- 图片放大镜 -->
<iframe class="img-expand" id="img-expand" name="img-expand" ></iframe>
<aside class="aside" >
		<div class="asidebar">
			<i class="service" ></i>
			<a  id="service" href="${pageContext.request.contextPath}/xx" ><i class="glyphicon glyphicon-earphone" style="color: rgb(255, 255, 255); font-size: 12px;"> </i><span>客服</span></a>
			<i class="service" ></i>
			<a  id="wallet"  href="${pageContext.request.contextPath}/zqianController/getUserZqian" ><i class="glyphicon glyphicon-folder-open" style="color: rgb(255, 255, 255); font-size: 12px;  "></i><span> 钱包</span></a>
			<i class="wallet" ></i>
			<i class="service" ></i>
		</div>
		<a  id="back2top" ><i class="Hui-iconfont" style="color: rgb(255, 255, 255); font-size: 12px;  ">&#xe6d6;</i><span> TOP</span></a>
</aside>
<!--底部-->
<footer class="footer">
	<jsp:include page="foot.jsp"></jsp:include>
</footer>
<!-- js -->
<jsp:include page="jsPage.jsp"></jsp:include>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/orderDetail.js"></script>
</body>
</html>