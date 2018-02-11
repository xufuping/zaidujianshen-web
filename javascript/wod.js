/**
 * Created by MBENBEN on 2017/8/23.
 */
// 搜索

$(function() {

    // 记录所搜索的日期
    var recordDate = null;

    // 点击搜索
    $(".searchLink").bind("click", function(){

        // 隐藏加载更多
        $("#loading").hide();

        // 清除本来就有的盒子内容
        $("#wodConBox").empty();

        // 验证搜索内容
        if ($("#searchTime").val() === "") {
            window.location.reload();
        } else {
            console.log("你输入的是"+$("#searchTime").val());
            $.ajax({
                type: "GET",
                url: "/blog/search",
                //url: "http://rapapi.org/mockjsdata/22327/search",
                //url: "http://172.22.4.202:8888/blog/selectWod?pageIndex=1&pageSize=5",
                data:{
                    time: $("#searchTime").val()
                },
                success: function(response){
                    if (response.status === "1") {
                        for(var i = 0; i < response.data.result.length; i++){
                            var content = '<li class="wodListItem">' +
                                '<div class="wodListLeft">'+
                                '<img src="' + response.data.result[i].wodImg + '" class="wodListImg"/>' +
                                '</div>'+
                                '<div class="wodListRight">'+
                                '<p class="wodListDate uk-h2" >' + response.data.result[i].wodDate + '</p>' +
                                '<p class="wodListTitle uk-h2">' + response.data.result[i].wodTitle + '</p>'+
                                '<div class="wodListContent">'+
                                response.data.result[i].wodInfo +
                                '</div>'+
                                '</div>'+
                                '<div class="clear"></div>'+
                                '</li>';
                            $("#wodConBox").append(content);
                        }
                        recordDate = response.data.result[0].wodDate;
                        // console.log("我是查询返回的日期"+response.data.result[0].wodDate);
                    }
                },
                error: function(){
                    console.log("Search for error. Please try again.");
                }
            });
        }
    });

});

// 获取WOD每条信息

$(function () {

    // 声明加载文章的变量
    var loading = $("#loading"); // 获取加载button
    var essayUl = $("#wodConBox"); // 获取文章ul
    //var essayLi = $("#wodConBox li"); // 获取文章ul下的li条目
    var pageIndex = 1; // 每次请求发送的页码
    var pageSize = 10; // 每次请求发送的请求条数
    //console.log("Li条数：" + essayLi.length);

    // 刷新第一页面的文章
    showWod();

    // 加载更多文章
    loading.bind("click", showWod);

    function showWod() {
        //console.log("出现WOD");
        $.ajax({
            type: "GET",
            url: "/blog/selectWod",
            //url: "http://rapapi.org/mockjsdata/22327/selectWod",
            //url: "http://172.22.4.202:8888/blog/selectWod?pageIndex=1&pageSize=5",
            data: {
                pageIndex: pageIndex,
                pageSize: pageSize
            },
            success: function (response) {

                //console.log("我是请求页码"+pageIndex);

                if (response.status === "1") {
                    //console.log("我是返回的数据总条数：" + response.data.result.length);
                    for (var i = 0; i < response.data.result.length; i++) {
                        var content = '<li class="wodListItem">' +
                                            '<div class="wodListLeft">'+
                                            '<img src="' + response.data.result[i].wodImg + '" class="wodListImg"/>' +
                                            '</div>'+
                                            '<div class="wodListRight">'+
                                                '<p class="wodListDate uk-h2" >' + response.data.result[i].wodDate + '</p>' +
                                                '<p class="wodListTitle uk-h2">' + response.data.result[i].wodTitle + '</p>'+
                                                '<div class="wodListContent">'+
                                                    response.data.result[i].wodInfo +
                                                '</div>'+
                                            '</div>'+
                                            '<div class="clear"></div>'+
                                        '</li>';

                        //console.log("我是返回的第" + i + "次数据:");
                        essayUl.append(content);
                    }
                    pageIndex += 1;
                    //console.log("我是返回页码数："+pageIndex);
                }
            },
            error: function () {
                console.log("Wod-Server error. Please try again.");
            }
        });
    }

});