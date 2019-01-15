$(function () {
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        var scrollHeight = $(document).height();
        var windowHeight = $(this).height();
        if (scrollHeight > 0) {
            $(".myorder-discount").addClass("cartFixed");
        }
        if (scrollTop + windowHeight == scrollHeight) {

        }
    });
    //全部，paystatus等待支付 0，已付定金 1，支付完成 2 ,失效订单9
    $(".mytotalPrice,.ordersPay").children("span").text("0.00");
    $("." + $(".mr55").attr("id")).css("display", "block");
    $(".shop span").click(function () {
        $(this).addClass("mr55").siblings().removeClass("mr55");
        var payId;
        if ($(this).hasClass("mr55")) {
            payId = $(this).attr("id");
        }
        $(".xxj").each(function () {
            if ($(this).attr("status") == payId) {
                $(".xxj").each(function () {
                    $(this).css("display", "none");
                });
                $(this).css("display", "block");
                return false;
            }
        })
        $(".xxj").each(function () {
            $(this).css("display", "none");
        });
        $("." + $(this).attr("id")).css("display", "block");
        var page = 1;
        var pageSize = 10;
        var flag = $(".mr55").attr("id");
        var content = "<form  action='" + contentPath + "/ordersController/getOrdersList' method='post'>";
        content += "<input name='page' value= '" + page + "'/>";
        content += "<input name='pageSize' value= '" + pageSize + "'/>";
        content += "<input name='flag' value= '" + flag + "'/>";
        content += "</form>";
        $(".frm").append(content);
        $(".frm").children("form").submit();
    });

    //上一页
    $(".J_prev").click(function () {
        var page = $(this).attr("id");
        if (page > 0) {
            var pageSize = 10;
            var flag = $(".mr55").attr("id'");
            var content = "<form  action='" + contentPath + "/ordersController/getOrdersList' method='post'>";
            content += "<input name='page' value= '" + page + "'/>";
            content += "<input name='pageSize' value= '" + pageSize + "'/>";
            content += "<input name='flag' value= '" + flag + "'/>";
            content += "</form>";
            $(".frm").append(content);
            $(".frm").children("form").submit();
        }
    });

    //下一页
    $(".J_next").click(function () {
        var page = $(this).attr("id");
        if (page > 0) {
            var pageSize = 10;
            var flag = $(".mr55").attr("id");
            var content = "<form  action='" + contentPath + "/ordersController/getOrdersList' method='post'>";
            content += "<input name='page' value= '" + page + "'/>";
            content += "<input name='pageSize' value= '" + pageSize + "'/>";
            content += "<input name='flag' value= '" + flag + "'/>";
            content += "</form>";
            $(".frm").append(content);

            $(".frm").children("form").submit();
        }
    });

    $(".J_pageNum").click(function () {
        var page = $(this).text();
        var pageSize = 10;
        var flag = $(".mr55").attr("id");
        var content = "<form  action='" + contentPath + "/ordersController/getOrdersList' method='post'>";
        content += "<input name='page' value= '" + page + "'/>";
        content += "<input name='pageSize' value= '" + pageSize + "'/>";
        content += "<input name='flag' value= '" + flag + "'/>";
        content += "</form>";
        $(".frm").append(content);

        $(".frm").children("form").submit();
    });


    //结算按钮(状态：等待付款)
    $(".mytoPay").click(function () {
        if ($(".J_wait_pay").hasClass("mr55")) {
            var content = "<form style='display:none' id='topayfor'  action='" + contentPath + "/ordersController/ordersPayOrder' method='post'>";
            $(".xzb ").each(function () {
                if ($(this).hasClass("glyphicon-check")) {
                    content += "<input name='ordersIds' value= '" + $(this).siblings("input").val() + "'/>";
                }
            });
            content += "</form>";
            $(this).append(content);
            $(this).children("form").submit();
        }
    });

    //结算按钮(状态：等待付款)
    $(".J_pay_wait").click(function () {
        if ($(".J_wait_pay").hasClass("mr55")) {
            var content = "<form style='display:none' id='topayfor'  action='" + contentPath + "/ordersController/ordersPayOrder' method='post'>";
            content += "<input name='ordersIds' value= '" + $(this).parent().parent().siblings().find('input').val() + "'/>";
            content += "</form>";
            $(this).append(content);
            $(this).children("form").submit();
        }
    });

    //结算按钮(状态：已付定金)
    $(".ordersPayOther").click(function () {
        if ($(".J_down_pay").hasClass("mr55")) {
            var content = "<form style='display:none' id='topayfor'  action='" + contentPath + "/ordersController/ordersPayOther' method='post'>";
            $(".xzb").each(function () {
                if ($(this).hasClass("glyphicon-check")) {
                    content += "<input name='ordersIds' value= '" + $(this).siblings("input").val() + "'/>";
                }
            });
            content += "</form>";
            $(this).append(content);
            $(this).children("form").submit();
        }
    });

    //结算按钮(状态：已付定金)
    $(".J_down_PayOther").click(function () {
        if ($(".J_down_pay").hasClass("mr55")) {
            var content = "<form style='display:none' id='topayfor'  action='" + contentPath + "/ordersController/ordersPayOther' method='post'>";
            content += "<input name='ordersIds' value= '" + $(this).parent().parent().siblings().find('input').val() + "'/>";
            content += "</form>";
            $(this).append(content);
            $(this).children("form").submit();
        }
    });


    //倒计时
    $(".fd-clr i").each(function () {
        var total = $(this).attr("class");
        var sign = $(this);
        var clear = setInterval(function () {
            if (total > 0) {
                total--;
                var hour = parseInt(total / 3600);
                if (hour > 0) {
                    hour = hour;
                } else {
                    hour = 0;
                }
                var minute = parseInt((total - hour * 3600) / 60);
                if (minute > 0) {
                    minute = minute;
                } else {
                    minute = 0;
                }
                second = parseInt((total - hour * 3600) % 60);
                if (second > 0) {
                    second = second;
                } else {
                    second = 0;
                }
                sign.text(hour + "时" + minute + "分" + second + "秒");
            } else {
                clearInterval(clear);
                sign.text("");
            }
        }, 1000);
    });
    oxj();
});

//全选
window.onload = function () {
    var flag = true;
    $(".mbshop_cart_1127_01").click(function () {
        if (flag) {
            $("#myorderChx").prop("checked", true);
        } else {
            $("#myorderChx").prop("checked", false);
        }
        if ($("#myorderChx").hasClass("glyphicon-unchecked")) {
            $("#myorderChx").attr("class", "glyphicon glyphicon-check");
            $(".xzb").each(function () {
                $(this).attr("class", "xzb glyphicon  glyphicon-check");
            });
            $(".mytoPay,.ordersPayOther").removeClass(" mytoPayDis");
            $(".xxj").css("background", "#f3f0f0");
            oxj();
            flag = false;
        } else {
            $("#myorderChx").attr("class", "glyphicon glyphicon-unchecked");
            $(".xzb").each(function () {
                $(this).attr("class", "xzb glyphicon  glyphicon-unchecked");
            });
            $(".mytoPay,.ordersPayOther").addClass(" mytoPayDis");
            $(".xxj").css("background", "");
            oxj();
            flag = true;
        }
    });

    //单选
    $(".xzb").click(function () {
        var flag = false;

        if ($(this).hasClass("glyphicon-unchecked")) {
            $(this).attr("class", "xzb glyphicon glyphicon-check");
            oxj();
        } else {
            $(this).attr("class", "xzb  glyphicon glyphicon-unchecked");
            oxj();
        }
        $(".xzb").each(function () {
            if ($(this).hasClass("glyphicon-unchecked")) {
                flag = false;
                return false;
            } else {
                flag = true;
            }
        });
        if (!flag) {
            $(this).parent().parent().css("background", "");
            $("#myorderChx").attr("class", "glyphicon glyphicon-unchecked");
        } else {
            $(this).parent().parent().css("background", "#f3f0f0");
            $("#myorderChx").attr("class", "glyphicon glyphicon-check");
        }
    });
};

function oxj() {
    //小计
    var zj = 0;
    var sum = 0;
    var flag = false;
    $(".fd-clr ").each(function () { //遍历订单号
        if ($(this).find("i").hasClass("glyphicon-check")) {
            flag = true;
            $(".mytoPay,.ordersPayOther").removeClass(" mytoPayDis");
        }
    });
    if (flag) {
        if ($(".mr55").attr("id") == 0) { //待支付状态，总计取定金
            $(".fd-clr ").each(function () { //遍历订单号
                zj = 0;
                if ($(this).find("i").hasClass("glyphicon-check")) {
                    $(this).siblings(".mbshopBox").each(function () {
                        $(this).find(".xiqx .fjx").each(function () {
                            zj = zj + parseFloat($(this).find(".orderamount span").text());
                        });
                    });
                    sum = sum + zj;
                    $(".mytotalPrice").children("span").text(sum.toFixed(2));
                }
            });
        }
        else if ($(".mr55").attr("id") == 1) { //已付定金，总计取尾款
            $(".fd-clr ").each(function () { //遍历订单号
                zj = 0;
                if ($(this).find("i").hasClass("glyphicon-check")) {
                    $(this).siblings(".mbshopBox").each(function () {
                        zj = zj + parseFloat($(this).find(".sq span").text());
                    });
                    sum = sum + zj;
                    $(".ordersPay").children("span").text(sum.toFixed(2));
                }
            });
        }
        else if ($(".mr55").attr("id") == 2 || $(".mr55").attr("id") == 9) {
            $(".fd-clr ").each(function () { //遍历订单号
                zj = 0;
                if ($(this).find("i").hasClass("glyphicon-check")) {
                    $(this).siblings(".mbshopBox").each(function () {
                        $(this).find(".xiqx .fjx").each(function () {
                            zj = zj + parseFloat($(this).find(".xij span").text());
                        });
                    });
                    sum = sum + zj;
                    $(".mytotalPrice,.ordersPay").children("span").text(sum.toFixed(2));
                }
            });
        }
    } else {
        $(".mytoPay,.ordersPayOther").addClass(" mytoPayDis");
        $(".mytotalPrice,.ordersPay").children("span").text("0.00");
    }
}

//等待付款界面撤销订单backout_order
$(function () {
    $(".backout_order").click(function () {
        var ordersIds = $(this).parent().parent().siblings().find(".xzb").siblings("input").val();
        $.ajax({
            url: pageContext + "/ordersController/revokeOrder",    //请求的url地址
            dataType: "json",
            async: true,
            data: {"orderid": ordersIds},
            type: "POST",   //请求方式
            success: function (data) {
                console.log(data);
                if (data.success) {
                    alert(data.msg);
                    window.location.reload();
                } else {
                    alert(data.msg);
                }
            }, error: function () {
                alert("系统错误！");
            }
        });
    });
});

//已付定金界面撤销订单revoke_order
function revoke_order(o) {
    var ordersIds = $(o).attr("id");
    $.ajax({
        url: pageContext + "/ordersController/revokeOrderPaid",    //请求的url地址
        dataType: "json",
        async: true,
        data: {"orderid": ordersIds},
        type: "POST",   //请求方式
        success: function (data) {
            if (data.success) {
                alert(data.msg);
                window.location.reload();
            } else {
                alert(data.msg);
            }
        }, error: function () {
            alert("系统错误！");
        }
    });
};

function calculateSingleAmount(o) {
    var ordersIds = $(o).parent().parent().siblings().find(".xzb").val();
    console.log(ordersIds);
    $.ajax({
        url: pageContext + "/ordersController/calculateSingleAmount",    //请求的url地址
        dataType: "json",
        async: true,
        data: {"orderid": ordersIds},
        type: "POST",   //请求方式
        success: function (data) {
            if (data.success) {
                window.location.reload();
            } else {
                alert(data.msg);
            }
        }, error: function () {
            alert("系统错误！");
        }
    });
};