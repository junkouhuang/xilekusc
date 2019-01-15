//选中数量jquery
var show = true;//中间变量
$(document).ready(function () {
    $("#back2top").click(function () {
        $("html,body").animate({scrollTop: 0}, 500);
    });
    //阻止冒泡事件
    var linkList = document.getElementById("link-list");
    document.addEventListener("click", function () {
        $(".list-info").slideUp();
    });
    var content = "";  //用于存放表格数据
    linkList.addEventListener("click", function (event) {
        event = event || window.event;
        event.stopPropagation();
        var sl = 0;//用于存放數量
        var flag = false;//中间变量
        $(".amount-input").each(function () { //遍历选中数量的尺码
            if ($(this).val() > 0) {
                flag = true;
                return false;
            }
        });
        //#######
        if (flag) { //如果有选中数量的，就进来执行一次循环
            $(".amount-input").each(function () {
                var $ys = $(this).parents(".amount").siblings(".ys").find("span").text();	//选中颜色
                var $sl = 0;
                var $cm;
                var $sl;
                var isExist = false;
                if ($(this).val() > 0) {
                    isExist = contains($(".ys"), $ys);  //如果返回为true说明存在相等的
                    //---------------------------------------------------
                    if (isExist) {  //存在相同颜色则累加
                        //-----------------------是否存在动态表格---------------------------
                        if ($("#table-list .color").length > 0) {
                            $("#table-list .color").each(function () {
                                //-------------------是否相等--------------------------------
                                if ($(this).text() == $ys) {
                                    $sl = 0;
                                    var content3 = "";
                                    $(".table-sku ." + $ys).each(function () {//存在相同颜色则累加
                                        $sl += parseInt($(this).val());
                                        if ($(this).val() > 0) {
                                            content3 += "<li><span class='ruler'>" + $(this).parents(".amount").siblings(".size").find("span").text() + "</span>(" + $(this).val() + ")</li>";
                                        }
                                    });
                                    $(this).siblings(".desc").find("ul").html(content3);
                                    $(this).siblings(".sl").find("." + $ys).text($sl);
                                }
                            });
                        }
                        //-----------------------是否存在动态表格END---------------------------
                        else {
                            var $content1 = "";
                            $content1 += "<tr><td class='color'>" + $ys + "</td>";
                            $content1 += "<td class='sl'><span class=" + $ys + "></span><span>份</span></td>";
                            $content1 += "<td class='desc'><ul><li><span class='ruler'></span></li></ul></td></tr>";
                            $("#table-list").html($content1);
                        }
                        //---------------------------------------------------
                    } else {  //不重复颜色
                        if ($("#table-list .color").length > 0) {
                            $("#table-list .color").each(function () {
                                //-------------------是否相等--------------------------------
                                if ($(this).text() == $ys) {
                                    console.log("---");
                                    var $content2 = "";
                                    $content2 += "<td class='color " + $ys + " '>" + $ys + "</td>";
                                    $content2 += "<td class='sl'><span class=" + $ys + "></span><span>份</span></td>";
                                    $content2 += "<td class='desc'><ul><li><span class='ruler'></span></li></ul></td>";
                                    $("#table-list ." + $ys).siblings(".desc").find("ul ").html($content2);
                                    $sl = 0;
                                    $(".table-sku ." + $ys).each(function () {
                                        $sl += parseInt($(this).val());
                                        if ($(this).val() > 0) {
                                            $("#table-list ." + $ys).siblings(".desc").find("ul ").html("<li><span class='ruler'>" + $(this).parents(".amount").siblings(".size").find("span").text() + "</span>(" + $(this).val() + ")</li>");
                                        }
                                    });
                                    $("#table-list ." + $ys).siblings(".sl").find("." + $ys).text($sl);
                                } else {
                                    if ($("#table-list ." + $ys).length > 0) {
                                        var $content2 = "";
                                        $content2 += "<tr><td class='color " + $ys + " '>" + $ys + "</td>";
                                        $content2 += "<td class='sl'><span class=" + $ys + "></span><span>份</span></td>";
                                        $content2 += "<td class='desc'><ul><li><span class='ruler'></span></li></ul></td></tr>";

                                        $("#table-list ." + $ys).siblings(".desc").find("ul ").html($content2);
                                        $sl = 0;
                                        $(".table-sku ." + $ys).each(function () {
                                            $sl += parseInt($(this).val());
                                            if ($(this).val() > 0) {
                                                $("#table-list ." + $ys).siblings(".desc").find("ul ").html("<li><span class='ruler'>" + $(this).parents(".amount").siblings(".size").find("span").text() + "</span>(" + $(this).val() + ")</li>");
                                            }
                                        });
                                        $("#table-list ." + $ys).siblings(".sl").find("." + $ys).text($sl);
                                    } else {
                                        var $content2 = "";
                                        $content2 += "<tr><td class='color " + $ys + " '>" + $ys + "</td>";
                                        $content2 += "<td class='sl'><span class=" + $ys + "></span><span>份</span></td>";
                                        $content2 += "<td class='desc'><ul><li><span class='ruler'></span></li></ul></td></tr>";

                                        $("#table-list").append($content2);
                                        $sl = 0;
                                        $(".table-sku ." + $ys).each(function () {
                                            $sl += parseInt($(this).val());
                                            if ($(this).val() > 0) {
                                                $("#table-list ." + $ys).siblings(".desc").find("ul ").html("<li><span class='ruler'>" + $(this).parents(".amount").siblings(".size").find("span").text() + "</span>(" + $(this).val() + ")</li>");
                                            }
                                        });
                                        $("#table-list ." + $ys).siblings(".sl").find("." + $ys).text($sl);
                                    }
                                }
                            });
                        } else {
                            console.log("****");
                            var $content2 = "";
                            $content2 += "<tr><td class='color " + $ys + " '>" + $ys + "</td>";
                            $content2 += "<td class='sl'><span class=" + $ys + "></span><span>份</span></td>";
                            $content2 += "<td class='desc'><ul><li><span class='ruler'></span></li></ul></td></tr>";
                            $("#table-list").append($content2);
                            $sl = 0;
                            $(".table-sku ." + $ys).each(function () {
                                $sl += parseInt($(this).val());
                                if ($(this).val() > 0) {
                                    $("#table-list ." + $ys).siblings(".desc").find("ul ").append("<li><span class='ruler'>" + $(this).parents(".amount").siblings(".size").find("span").text() + "</span>(" + $(this).val() + ")</li>");
                                }
                            });
                            $("#table-list ." + $ys).siblings(".sl").find("." + $ys).text($sl);
                        }
                    }
                }
            });
        } else {
            alert("您没选中数量！");
            return false;
        }
        if (show) {
            $(".list-info").slideDown();
            $(".icon-arrow-up em").addClass("toggle");
            show = false;
        } else {
            $(".list-info").slideUp();
            $(".icon-arrow-up em").removeClass("toggle");
            show = true;
        }
    });
});

//判断是否含有该颜色
function contains(arr, obj) { //判断是否含有该颜色
    var odet = 0;
    $(arr).each(function () {
        if ($(this).siblings(".amount").find(".amount-input").val() > 0) {

            if ($(this).children("span").text() == obj) {
                odet = odet + 1;
            }
        }
    });
    if (odet > 1) {
        return true;
    } else {
        return false;
    }
}

//数量减少方法
function prev(o) {
    $(o).siblings("i").removeClass("allow");
    var buyNum = $(o).siblings("input").val();
    if (buyNum > 0) {
        buyNum--;
    } else {
        $(o).addClass("allow");
        buyNum = 0;
    }
    $(o).siblings("input").val(buyNum);
    dgxx();
    $(".list-info").slideUp();//点击减少数量按钮，显示选中记录收起
    show = true;
    $(".icon-arrow-up em").removeClass("toggle");
}

//手动录入数量的方法
function keyup(o) {
    $(o).val($(o).val().replace(/\b(0+)/gi, ""));
    $(o).val($(o).val().replace(/\D/g, 0));
    dgxx();
    $(".list-info").slideUp();//手动数量按钮，显示选中记录收起
    show = true;
    $(".icon-arrow-up em").removeClass("toggle");
}

//数量增加方法
function next(w) {
    //获取库存
    var rep = $(w).parents(".amount").siblings(".count").find(".value").text();
    var buyNum = $(w).siblings("input").val();
    buyNum++;
    if (buyNum <= rep) {
        $(w).siblings("input").val(buyNum);
        $(w).siblings("i").removeClass("allow");
        dgxx();
        $(".list-info").slideUp();//点击增加数量按钮，显示选中记录收起
        show = true;
        $(".icon-arrow-up em").removeClass("toggle");
    } else {
        $(w).addClass("allow");
    }
}

//查看更多尺寸方法
$(document).ready(function () {
    $(".obj-expand a").click(function () {
        if ($(this).children().children().hasClass("down")) {
            $(".obj-sku .obj-content").removeClass("default");
            $(this).parent().addClass("wx");
            $(this).children().addClass("rotate").children("em").removeClass("down").addClass("up");
        } else {
            $(".obj-sku .obj-content").addClass("default");
            $(this).children().removeClass("rotate").children("em").removeClass("down").addClass("down");
            $(this).parent().removeClass("wx");
        }
    });
});

function dgxx() {
    var num = 0; //计算选中数量
    var rmb = 0;//计算总金额
    $(".fd-hide").slideDown();
    $(".amount-input").each(function () {
        num = num + parseInt($(this).val());
    });
    $(".table-sku tbody tr").each(function () {
        if ($(this).children(".prices").find(".value").text() > 0) {
            var median1 = $(this).children(".prices").find(".value").text();
        } else {
            var median1 = 0;
        }
        var median2 = $(this).children(".amount").find(".amount-input").val();
        var mfsl = parseInt($(".mfsl").text());
        if (isNaN(mfsl)) {
            mfsl = 1;
        }
        var median = median1 * median2 * mfsl;

        rmb = rmb + median;
    });
    $(".amount .value").text(num);
    $(".rmb .value").text(rmb.toFixed(2));
}

$(function () {
    //更多按钮方法
    var len = $(".table-sku tr").length;
    if (len > 3) {
        $(".obj-sku .obj-expand a").css("display", "block");
    }
    //库存不足(且非新品)
    $(".cannt").parent().parent().parent("tr").children("td").css("color", "#ccc");
    $(".cannt").children("a,input").css("cursor", " not-allowed").attr("disabled", "disabled").removeAttr("onclick");

});
//加入购物车事件
$(".addToCarBtn input").click(function () {
    //判断加入前是否选择数量
    var param = {};
    var shoppingCartItemDetailList = [];

    function ShoppingCartItem(primaryvalue, qty, reserve) {
        this.primaryvalue = primaryvalue;
        this.qty = qty;
        this.reserve = reserve;
    }

    $('.amount-input').each(function () {
        var primaryvalue = $(this).attr("name");
        var qty = $(this).val();
        var reserve = $(this).parent().parent().parent().siblings(".reserve").text();
        if (qty > 0) {
            shoppingCartItemDetailList.push(new ShoppingCartItem(primaryvalue, qty, reserve));
        }
    });
    param["productrediskey"] = $("#productrediskey").val();
    param["shoppingCartItemDetailList"] = shoppingCartItemDetailList;
    //获取数量
    var flag = false;
    var parem = [];
    $(".amount-input").each(function () {
        if ($(this).val() > 0) {
            flag = true;
            parem.push($(this).val());
        }
    });
    if (flag) {
        var bool = false;
        for (var i = 0; i < parem.length; i++) {
            if (parseInt(parem[i]) < parseInt($("#leastorderqty").text())) {
                bool = true;
            }
        }
        if (bool) {
            alert("订货数量不能小于起订数量");
        } else {
            $.ajax({
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                url: contentPath + "/shoppingController/addShoppingCart",
                data: JSON.stringify(param),
                type: "post",
                async: false,  //true为异步加载，false为同步加载，默认为true
                //cache:false,//true读取缓存,false不读取缓存,只用GET才生效，默认为true
                success: function (data) {
                    //当前是登陆状态######
                    if (data.success) {
                        //可以成功加入购物车******
                        if (data.obj.success == true) {
                            if (data.obj.msg != null && data.obj.msg != "") {
                                alert(data.obj.info);
                                var content = "<form action=' " + contentPath + "/mall/addToCart'  method='post'><input type='text' name='redisCartItemKey' value=" + data.obj.msg + "></form>";
                                $("#addToCartSuccess").append(content);
                                $("#addToCartSuccess form").eq(0).submit();
                            } else {
                                alert(data.obj.info);
                            }
                        }
                        //1 :已经添加过购物车，前端跳转到购物车页面,4 不需调整的错误,9 提示已经生成订单，询问是否同意追加订单数量******
                        else {
                            if (data.obj.errortype == 1) {
                                alert(data.obj.info);
                                window.location.href = contentPath + "/shoppingController/getShoppingCart";
                            } else if (data.obj.errortype == 4) {
                                alert(data.obj.info);
                            } else if (data.obj.errortype == 9) {
                                var flag = window.confirm("当前产品已经生成订单,是否要往订单里追加数量？");
                                if (flag) {
                                    var detailid = data.obj.msg;
                                    addToCart(detailid);
                                }
                            } else {
                                alert(data.obj.info);
                            }
                        }
                    }
                    //当前是未登陆状态######
                    else {
                        if (data.obj == 1) {//如果当前还没登陆，就弹出登陆窗口
                            $(".J_minlogin").show();
                            $(".maskLayer").show();
                            $("body").css("overflow", "hidden");
                        } else {
                            alert(data.msg);
                        }
                    }
                },
                //error
                error: function (request) {
                    alert("error");
                }
            });
        }
    } else {
        $(".tips").css("display", "block");
        setTimeout(function () {
            $(".tips").css("display", "none");
        }, 2000);
    }
});

function addToCart(detailid) {
    //判断加入前是否选择数量
    var param = {};
    var shoppingCartItemDetailList = [];

    function ShoppingCartItem(primaryvalue, qty, reserve) {
        this.primaryvalue = primaryvalue;
        this.qty = qty;
        this.reserve = reserve;
    }

    $('.amount-input').each(function () {
        var primaryvalue = $(this).attr("name");
        var qty = $(this).val();
        var reserve = $(this).parent().parent().parent().siblings(".reserve").text();
        if (qty > 0) {
            shoppingCartItemDetailList.push(new ShoppingCartItem(primaryvalue, qty, reserve));
        }
    });
    param["productrediskey"] = $("#productrediskey").val();
    param["shoppingCartItemDetailList"] = shoppingCartItemDetailList;
    param["detailid"] = detailid;
    $.ajax({
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: contentPath + "/ordersController/appendXpCanReturnToOrders",
        data: JSON.stringify(param),
        type: "post",
        async: false,  //true为异步加载，false为同步加载，默认为true
        success: function (data) {
            if (data.success) {
                window.location.href = contentPath + "/ordersController/getOrdersList";
            }else{
                alert(data.msg);
            }
        }
    });

}

//图片放大镜jquery
$(document).ready(function () {
    var showproduct = {
        "boxid": "showbox",
        "sumid": "showsum",
        "boxw": 400,//宽度,该版本中请把宽高填写成一样
        "boxh": 400,//高度,该版本中请把宽高填写成一样
        "sumw": 60,//列表每个宽度,该版本中请把宽高填写成一样
        "sumh": 60,//列表每个高度,该版本中请把宽高填写成一样
        "sumi": 7,//列表间隔
        "sums": 5,//列表显示个数
        "sumsel": "sel",
        "sumborder": 1,//列表边框，没有边框填写0，边框在css中修改
        "lastid": "showlast",
        "nextid": "shownext"
    };//参数定义
    $.ljsGlasses.pcGlasses(showproduct);//方法调用，务必在加载完后执行
});
//详情图片展示
$(function () {
    var content = "";
    for (var i = 0; i < $("#showsum img").length; i++) {
        content += "<img src=" + $("#showsum img").eq(i).attr("src") + " width='650px;'>";
    }
    $("#mod-detail").html(content);
});

//显示原始图
function expandImg(o) {
    $(".aside").hide();
    $("#img-expand").show().contents().find("body").css({"margin": "0", "padding": "0"});
    var availHeight = $(window.frames["img-expand"].document).find("body").height();
    $("#img-expand").show().contents().find("head").html("<link href='" + contentPath + "/css/bootstrap.min.css' rel='stylesheet'><link href='" + contentPath + "/css/orderDetail.css' rel='stylesheet'>");
    $("#img-expand").show().contents().find("body").html("<div  style='text-align:center;margin:0;padding:0;background:#333;'>" +
        "<img src=" + $(o).siblings("b").find("img").attr("src") + " class='1' onclick='javascript:this.className==1?(this.className=0,this.style.height=\"auto\",this.style.cursor=\"zoom-out\"):(this.className=1,this.style.height=\"100%\",this.style.cursor=\"zoom-in\")'>" +
        "<span id='rt_close' onclick=\"window.parent.document.getElementById('img-expand').style.display='none';window.parent.document.getElementsByTagName('body')[0].style.overflow='auto'\" title='关闭' style='cursor: pointer;position:fixed;top:15px;right:15px;color: #fff; font-size: 30px;border-radius:50%;padding:6px;background: #4a524a;' class='glyphicon glyphicon-remove'></span></div>");
    $("#img-expand").contents().find("body").find(".0").css({"height": "auto", "cursor": "zoom-out"});
    $("#img-expand").contents().find("body").find(".1").css({"height": availHeight, "cursor": "zoom-in"});
    $("body").css("overflow", "hidden");
}
