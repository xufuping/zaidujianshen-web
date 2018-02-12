/**
 * Created by MBENBEN on 2017/8/23.
 */

// 获取产品图片+信息

$(function () {

    $.ajax({
        type: "GET",
        url: "/blog/findAllProducts",
        //url: "http://rapapi.org/mockjsdata/22327/findAllProducts",
        //data: {
        //    pageIndex: pageIndex,
        //    pageSize: pageSize
        //},
        success: function (response) {
            if (response.status === "1") {
                // console.log("我是返回的数据总条数：" + response.data.result.length);
                for (var i = 0; i < response.data.result.length; i++) {
                    var content = '<li>' +
                                        '<figure class="uk-overlay uk-overlay-hover">' +
                                            '<div class="courseImg">' +
                                                '<img src="' + response.data.result[i].productImg +'"/>' +
                                            '</div>' +
                                            '<div class="courseText">' +
                                                '<p class="coursePrice"><i class="uk-icon-cny uk-icon-small"></i>' +
                                                    response.data.result[i].productPrice +
                                                '</p>' +
                                                '<p class="uk-h3 courseTitle">' + response.data.result[i].productName + '</p>' +
                                            '</div>' +
                                            '<figcaption class="uk-overlay-panel uk-overlay-background uk-overlay-bottom uk-overlay-slide-bottom courseBox">' +
                                                '<p class="courseIntro">' +
                                                    response.data.result[i].productContent +
                                                '</p>' +
                                            '</figcaption>' +
                                        '</figure>' +
                                    '</li>';
                    $(".courseShow").append(content);
                }
            }
        },
        error: function () {
            // console.log("product-Server error. Please try again.");
            errorSug();
        }
    });

});