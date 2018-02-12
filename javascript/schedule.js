/**
 * Created by MBENBEN on 2017/8/23.
 */
$(function(){

    var scheduleType = "GroupSchedule";
    //console.log(scheduleType);

    // 获取课程表图片
    $.ajax({
        type: "GET",
        url: "/blog/findSchedule/" + scheduleType,
        //url: "http://rapapi.org/mockjsdata/22327/findSchedule/{scheduleType}",
        success: function(response) {
            if (response.status === "1") {
                //console.log(response.data.scheduleImg);
                $(".scheduleImg").attr("src", response.data.scheduleImg);
            }
        },
        error: function() {
            // console.log("Failed to obtain picture.");
            errorSug();
        }
    });

});

$(function () {

    var scheduleType = "MembershipDues";
    //console.log(scheduleType);

    // 获取价格表图片
    $.ajax({
        type: "GET",
        url: "/blog/findSchedule/" + scheduleType,
        //url: "http://rapapi.org/mockjsdata/22327/findSchedule/{scheduleType}",
        success: function(response) {
            if (response.status === "1") {
                //console.log(response.data.scheduleImg);
                $(".dueImg").attr("src", response.data.scheduleImg);
            }
        },
        error: function() {
            // console.log("Failed to obtain picture.");
            errorSug();
        }
    });

});