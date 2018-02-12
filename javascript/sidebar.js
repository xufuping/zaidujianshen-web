// 产品列表

$(function() {

   // 获取边栏产品每一个类别
   var proTypeFir = $("#proTypeFir");
   var proTypeSec = $("#proTypeSec");
   var proTypeThi = $("#proTypeThi");
   var proTypeFou = $("#proTypeFou");

   // 或许边栏产品每一个类别的类容
   var proIntroBox = [
                       [$(".firProFir"), $(".firProSec"), $(".firProThi")],
                       [$(".secProFir"), $(".secProSec"), $(".secProThi")],
                       [$(".thiProFir"), $(".thiProSec"), $(".thiProThi")],
                       [$(".fouProFir"), $(".fouProSec"), $(".fouProThi")]
                   ];

   var proType = $("#proTypeFir").text(); // 获取第一个类的名字/后面用来获取每个类的名字
   var j = 1; // 给每一类定义一个相应的值

   product(proType, j);

   //proTypeFir.one("click", function () {
   //    proType = $("#proTypeFir").text();
   //    j = 1;
   //    product(proType, j);
   //});
   proTypeSec.one("click", function () {
       proType = $("#proTypeSec").text();
       j = 2;
       product(proType, j);
   });
   proTypeThi.one("click", function () {
       proType = $("#proTypeThi").text();
       j = 3;
       product(proType, j);
   });
   proTypeFou.one("click", function () {
       proType = $("#proTypeFou").text();
       j = 4;
       product(proType, j);
   });

   function product (proType, j) {
       //console.log("我是类别：" + proType + "我是第" + j);
       var productType = proType; // 定义转换传入的类别

       $.ajax({
           type: "GET",
           url: "/blog//findProductByType/" + productType,
           //url:"http://rapapi.org/mockjsdata/22327/findProductByType/%7BproductType%7D" ,
           data: {
               pageIndex: 1,
               pageSize: 3
           },
           success: function(response) {
               if (response.status === "1") {
                   if (response.data.result.length < 3) {
                       for (var i = 0; i < response.data.result.length; i++) {
                           var productImg = response.data.result[i].productImg;
                           var productName = response.data.result[i].productName;
                           var productPrice = response.data.result[i].productPrice;
                           var productContent = response.data.result[i].productContent;
                           //console.log("获取到的图片地址：" + productImg + " 图片名称：" + productName);
                           //console.log("获取到的价格和内容：" + productPrice + productContent);

                           // Box后面增加一个p标签
                           var productInfo =   '<figure class="uk-overlay uk-overlay-hover">' +
                                   // <!--获取图片资源-->
                               '<img src="' + productImg + '" />' +
                               '<figcaption class="uk-overlay-panel uk-overlay-background uk-overlay-bottom uk-overlay-slide-bottom productInfo">' +
                                   // <!--获取文字介绍和价格-->
                               '<div class="productInfoBox">' +
                               '<span class="productInfoTitle">' + productName +
                               '</span>' +
                               '<i class="uk-icon-cny uk-icon-small productMoney"></i>' +
                               '<span class="productInfoPrice">' + productPrice +
                               '</span>' +
                               '<p class="productInfoIntro">' + productContent +
                               '</p>' +
                               '</div>' +
                               '</figcaption>' +
                               '</figure>';
                           proIntroBox[j-1][i].append(productInfo);
                       }
                   } else {
                       for (var i = 0; i < 3; i++) {
                           var productImg = response.data.result[i].productImg;
                           var productName = response.data.result[i].productName;
                           var productPrice = response.data.result[i].productPrice;
                           var productContent = response.data.result[i].productContent;
                           //console.log("获取到的图片地址：" + productImg + " 图片名称：" + productName);
                           //console.log("获取到的价格和内容：" + productPrice + productContent);

                           // Box后面增加一个p标签
                           var productInfo =   '<figure class="uk-overlay uk-overlay-hover">' +
                                   // <!--获取图片资源-->
                               '<img src="' + productImg + '" />' +
                               '<figcaption class="uk-overlay-panel uk-overlay-background uk-overlay-bottom uk-overlay-slide-bottom productInfo">' +
                                   // <!--获取文字介绍和价格-->
                               '<div class="productInfoBox">' +
                               '<span class="productInfoTitle">' + productName +
                               '</span>' +
                               '<i class="uk-icon-cny uk-icon-small productMoney"></i>' +
                               '<span class="productInfoPrice">' + productPrice +
                               '</span>' +
                               '<p class="productInfoIntro">' + productContent +
                               '</p>' +
                               '</div>' +
                               '</figcaption>' +
                               '</figure>';
                           proIntroBox[j-1][i].append(productInfo);
                       }
                   }
               }
           },
           error: function() {
            // console.log("CourseList-Server error. Please try again.");
            errorSug();
           }
       });

   }

});

// 关于我们

$(function() {

  // 获取关于我们的文字内容
  $.ajax({
       type: "GET",
       url: "/blog/findAboutUs",
       //url: "http://rapapi.org/mockjsdata/22327/findAboutUs",
       success: function(response){
           if(response.status === "1") {
               $(".aboutUsInfo > span").append(response.data.aboutInfo);
           }
       },
       error: function() {
        // console.log("About us words-Server error. Please try again.");
        errorSug();
       }
  });

   // 声明获取轮播图
   var bannerType = "smallBanner"; // 轮播图片类型

   // 获取轮播图片
   $.ajax({
       type: "GET",
       url: " /blog/findBannerByType/" + bannerType,
       //url:"http://rapapi.org/mockjsdata/22327/findBannerByType/%7BbannerType%7D" ,
       success: function(response) {
           if (response.status === "1") {
               for (var i = 0; i < response.data.length; i++) {
                //    console.log("第" + (i+1) + "个轮播图返回成功" + response.data[i].bannerImg);
                   var content = '<div class="swiper-slide"><img src="'
                       + response.data[i].bannerImg +
                       '"/></div>';
                   $("#bannerSmallBox").append(content);
               }
           }
       },
       error: function() {
        // console.log("About us banner-Server error. Please try again.");
        errorSug();
       }
   });

});

// 联系我们

$(function() {
   $(".writeSubmit").click(function(){

       // 检测判断是否为空或者格式是否正确
       if($("#writeName").val() == "" ||
           $("#writePhone").val() == "" ||
           $("#writeTitle").val() == "" ||
           $("#writeText").val() == ""){
            // console.log("I'm sorry, the information you entered is incomplete.");
            errorSug();
       } else {
           if(/^1[34578]\d{9}$/.test($("#writePhone").val())){
               $.ajax({
                   type: "POST",
                   url:"/blog/addContact" ,
                   //url:"http://rapapi.org/mockjsdata/22327/addContact",
                   data:{
                       contactName : $("#writeName").val(),
                       contactPhone : $("#writePhone").val(),
                       contactTitle : $("#writeTitle").val(),
                       contactContent : $("#writeText").val()
                   },
                   success: function(response) {
                       if (response.status === "1") {
                        //    console.log($("#writeName").val() +
                        //                $("#writePhone").val() +
                        //                $("#writeTitle").val() +
                        //                $("#writeText").val());
                        //    console.log("Submit success!");
                           window.location.reload();
                       }
                   },
                   error: function() {
                    //    console.log("Sorry, there was an error in the server when it was submitted.");
                    errorSug();
                   }
               });
           } else {
            // console.log("I'm sorry, your phone number is incorrect.");
            errorSug();
           }
       }
   });
});