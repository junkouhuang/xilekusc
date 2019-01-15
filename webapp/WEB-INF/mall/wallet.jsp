<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html>
<meta charset="utf-8">
<head>
<title>值值钱包</title>
<!-- 必须写在html之内 -->
<jsp:include page="cssPage.jsp"></jsp:include>
<script type="text/javascript">  
       var  contentPath ="${pageContext.request.contextPath}";
</script>    
</head>

<body>
<!--head-->
<header class="header">
	<jsp:include page="head.jsp"></jsp:include>
</header>
<!-- section -->
<section class="J_wallet">
	<div class="rich-assets">
	<table>
		<colgroup>
              <col width="278">
              <col width="278">
              <col width="">
        </colgroup>
        <tbody>
                <tr>
                    <td class="td1">
                        <div class="td1-title">我的可用余额</div>
                        <div class="td1-price">
                        	<c:if test="${zqian==null}">
                             	<em class="td1-p-num">0</em>.00
                             </c:if>
                             <c:if test="${zqian!=null}">
                              	<em class="td1-p-num">${zqian.balance}</em>
                             </c:if>
                            <a class="td1-p-btn" href="${pageContext.request.contextPath}/zqianController/chargeZqianToRecharge" >充值</a>
                        </div>
                    </td>
                    <td class="td2">
                        <div>全部余额：<em class="td2-num">${zqian.balance}</em></div>
                        <div>账户状态：有效
                        </div>
                    </td>
                    <td class="td3">
                        <div>
	                       <c:if test="${zqian==null}">
	                        	<a class="td3-btn" id="J_pop-btn" href="${pageContext.request.contextPath}/mall/dredge">开通值值余额</a>
	                        </c:if>
                        </div>
                     </td>
                </tr>
        </tbody>
    </table>
	</div>
	<div class="rich-tab">
         <div class="ui-select-listBox">
             <ul class="clearfix">
                 <li class="ui-select-listBox-list ui-select-listBox-list--now"><a href="javascript:;" onclick="recentDetail()"><span>近三个月收支明细</span></a><i class="ui-select-listBox-l-line">|</i></li>
              </ul>
             <div class="ui-select-listBox-line">
                 <div class="ui-select-listBox-l-red" style="left: -1px; width: 169px;"></div>
             </div>
        </div>
	</div>
	<div class="rich-detail">
		<c:if test="${zqian.zqianHistoryList==null}">
		 	<div class="d-table-bg" style="display: block;">
	            <div class="d-none">
	               <!--  <img src="//img30.360buyimg.com/jr_image/jfs/t3079/183/5827188194/12256/4b49b741/58846e1bNea85a6b6.png" alt=""> -->
	                <span>您还没有任何收支明细记录哦~</span>
	            </div>
	            <div class="d-tip">提示：系统仅显示您两年之内的余额明细，更早的余额明细不再显示。</div>
	        </div> 
        </c:if>
         <c:if test="${zqian.zqianHistoryList!=null}">
		 	<div class="d-table-bg" style="display: block;">
	            <table  class="table table-striped">
	            	<thead  class="text-c">
	           			<tr><th   style="text-align:center;">业务时间</th><th   style="text-align:center;">金额</th><th   style="text-align:center;">交易类型</th></tr>
	           		</thead>
	            	<tbody>
	            	<c:forEach items="${zqian.zqianHistoryList}"  var="historylist">
	            		<tr   class="text-c"  style="text-align:center;">
	            		<td><fmt:formatDate value="${historylist.createtime}"/></td>
	            		<c:if test="${historylist.optype=='1'}">
	            		<td>+${historylist.money}</td>
	            		<td>充值</td>
	            		</c:if>
	            		<c:if test="${historylist.optype=='2'}">
	            		<td>+${historylist.money}</td>
	            		<td>退款</td>
	            		</c:if>
	            		<c:if test="${historylist.optype=='3'}">
	            		<td>+${historylist.money}</td>
	            		<td>退货</td>
	            		</c:if>
	            		<c:if test="${historylist.optype=='4'}">
	            		<td>-${historylist.money}</td>
	            		<td> 订单支付</td>
	            		</c:if>
	            		<c:if test="${historylist.optype=='5'}">
	            		<td>-${historylist.money}</td>
	            		<td>提现</td>
	            		</c:if>
	            		<c:if test="${historylist.optype=='6'}">
	            		<td>-${historylist.money}</td>
	            		<td>配出</td>
	            		</c:if>
	            		<c:if test="${historylist.optype=='7'}">
	            		<td>+${historylist.money}</td>
	            		<td>配入</td>
	            		</c:if>
	            		</tr>
	            	</c:forEach>
	            	</tbody>
	            </table>
	        </div> 
        </c:if>         
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