/**
* Created by MBENBEN on 2017/8/4.
*/

// 选项卡切换动画
$(function (){
    $("#storeIntro").click(function (){
        $(".storeIntroBox").css("display","block");
        $(".storeCoachesBox").css("display","none");
    });
    $("#storeCoaches").click(function (){
        $(".storeIntroBox").css("display","none");
        $(".storeCoachesBox").css("display","block");
        showCoaches();
    });

    // 获取店铺介绍
    $.ajax({
        type: "GET",
        url: "/blog/findAboutUs",
        //url: "http://rapapi.org/mockjsdata/22327/findAboutUs",
        success: function (response) {
            if (response.status === "1") {
                $("#storeIntroTitle").append(response.data.aboutTitle);
                $(".storeIntroInfo").append(response.data.aboutInfo);
            }
        },
        error: function () {
            alert("Failed to get the store information.");
        }
    });

    // 获取教练信息
    function showCoaches() {
        $.ajax({
            type: "GET",
            url: "/blog/selectCoach",
            //url: "http://rapapi.org/mockjsdata/22327/selectCoach",
            success: function (response) {
                if (response.status === "1") {
                    console.log(response.data.result.length);
                    for (var i = 0;i < response.data.result.length;i++) {
                        var content = '<li>' +
                                            '<div class="uk-animation-slide-bottom storeCoachesImg">' +
                                                '<img src="' + response.data.result[i].coachImg + '" />' +
                                            '</div>' +
                                            '<div class="uk-animation-slide-bottom storeCoachesText">' +
                                                '<h1>' + response.data.result[i].coachName + '</h1>' +
                                                '<p>' + response.data.result[i].coachIntroduction + '</p>' +
                                            '</div>' +
                                            '<div class="clear"></div>' +
                                        '</li>';
                        $("#coachesBoxUl").append(content);
                    }
                }
            },
            error: function () {
                alert("Failed to obtain coaching information.");
            }
        });
    }

});