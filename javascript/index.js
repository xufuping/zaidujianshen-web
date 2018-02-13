/**
 * Created by MBENBEN on 2017/8/11.
 */
$(function(){

    // 声明加载文章的变量
    var loading = $("#loading"); // 获取加载button
    var essayUl = $("#essayUl"); // 获取文章ul
    //var essayLi = $("#essayUl li"); // 获取文章ul下的li条目
    var pageIndex = 1; // 每次请求发送的页码
    var pageSize = 10; // 每次请求发送的请求条数
    //console.log("Li条数：" + essayLi.length);

    // 声明获取轮播图
    var bannerType = "bigBanner"; // 轮播图片类型

    // 刷新第一页面的文章
    showEssay();

    // 加载更多文章
    loading.bind("click", showEssay);

    function showEssay() {
        $.ajax({
            type: "GET",
            url: "/blog/findAllArticles",
            // url: "http://rapapi.org/mockjsdata/22327/findAllArticles",
            //url: "http://172.22.4.202:8888/blog/findAllArticles?pageIndex=1&pageSize=5",
            data: {
                pageIndex: pageIndex,
                pageSize: pageSize
            },
            success: function (response) {

                // console.log("我是请求页码"+pageIndex);

                if (response.status === "1") {
                    //console.log("我是返回的数据总条数：" + response.data.result.length);
                    for (var i = 0; i < response.data.result.length; i++) {
                        if (i == 1) {
                            // console.log("unslider");
                            unsliderStart(); // 发送加载图片的ajax
                        }
                        var content = '<li class="essayList">' +
                            '<div class="essayBox">' +
                            '<p class="uk-h2 essayDate">' + response.data.result[i].articleTime + '</p>' +
                            '<p class="uk-h3 essayTitle">' + response.data.result[i].articleTitle + '</p>' +
                            '<div class="essayContent">' +
                            response.data.result[i].articleLink +
                            response.data.result[i].articleContent +
                            '</div>' +
                            '</div>' +
                            '</li>';

                        // console.log("我是返回的第" + i + "次数据:");
                        essayUl.append(content);
                    }
                    pageIndex += 1;
                    // console.log("我是返回页码数："+pageIndex);
                }
            },
            error: function () {
                console.log("Essay-Server error. Please try again.");
                errorSug();
            }
        });
    }

    // 获取轮播图片
    function unsliderStart() {
        // console.log("执行成功！");
        $.ajax({
            type: "GET",
            url: " /blog/findBannerByType/" + bannerType,
            // url:"http://rapapi.org/mockjsdata/22327/findBannerByType/%7BbannerType%7D" ,
            //url: "http://172.22.4.202:8888/blog/findBannerByType/bigBanner",
            success: function(response) {
                if (response.status === "1") {
                    for (var i = 0; i < response.data.length; i++) {
                        // console.log("第" + (i+1) + "个轮播图返回成功" + response.data[i].bannerImg);
                        var content = '<li><img src="' 
                        + response.data[i].bannerImg + 
                        '" alt="图片正在加载，请稍等..." width="100%" ></li>';
                        $("#bannerBoxul").append(content);
                    }
                }
            },
            error: function() {
                // console.log("Banner-Server error. Please try again.");
                errorSug();
            }
        });
    }
});