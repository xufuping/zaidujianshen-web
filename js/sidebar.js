$(function(){$("#proTypeFir");var o=$("#proTypeSec"),e=$("#proTypeThi"),r=$("#proTypeFou"),t=[[$(".firProFir"),$(".firProSec"),$(".firProThi")],[$(".secProFir"),$(".secProSec"),$(".secProThi")],[$(".thiProFir"),$(".thiProSec"),$(".thiProThi")],[$(".fouProFir"),$(".fouProSec"),$(".fouProThi")]],a=$("#proTypeFir").text(),n=1;function c(o,e){var r=o;$.ajax({type:"GET",url:"/blog//findProductByType/"+r,data:{pageIndex:1,pageSize:3},success:function(o){if("1"===o.status)if(o.data.result.length<3)for(var r=0;r<o.data.result.length;r++){var a='<figure class="uk-overlay uk-overlay-hover"><img src="'+o.data.result[r].productImg+'" /><figcaption class="uk-overlay-panel uk-overlay-background uk-overlay-bottom uk-overlay-slide-bottom productInfo"><div class="productInfoBox"><span class="productInfoTitle">'+o.data.result[r].productName+'</span><i class="uk-icon-cny uk-icon-small productMoney"></i><span class="productInfoPrice">'+o.data.result[r].productPrice+'</span><p class="productInfoIntro">'+o.data.result[r].productContent+"</p></div></figcaption></figure>";t[e-1][r].append(a)}else for(r=0;r<3;r++){a='<figure class="uk-overlay uk-overlay-hover"><img src="'+o.data.result[r].productImg+'" /><figcaption class="uk-overlay-panel uk-overlay-background uk-overlay-bottom uk-overlay-slide-bottom productInfo"><div class="productInfoBox"><span class="productInfoTitle">'+o.data.result[r].productName+'</span><i class="uk-icon-cny uk-icon-small productMoney"></i><span class="productInfoPrice">'+o.data.result[r].productPrice+'</span><p class="productInfoIntro">'+o.data.result[r].productContent+"</p></div></figcaption></figure>";t[e-1][r].append(a)}},error:function(){console.log("CourseList-Server error. Please try again.")}})}c(a,n),o.one("click",function(){c(a=$("#proTypeSec").text(),n=2)}),e.one("click",function(){c(a=$("#proTypeThi").text(),n=3)}),r.one("click",function(){c(a=$("#proTypeFou").text(),n=4)})}),$(function(){$.ajax({type:"GET",url:"/blog/findAboutUs",success:function(o){"1"===o.status&&$(".aboutUsInfo > span").append(o.data.aboutInfo)},error:function(){console.log("About us words-Server error. Please try again.")}});$.ajax({type:"GET",url:" /blog/findBannerByType/smallBanner",success:function(o){if("1"===o.status)for(var e=0;e<o.data.length;e++){console.log("第"+(e+1)+"个轮播图返回成功"+o.data[e].bannerImg);var r='<div class="swiper-slide"><img src="'+o.data[e].bannerImg+'"/></div>';$("#bannerSmallBox").append(r)}},error:function(){console.log("About us banner-Server error. Please try again.")}})}),$(function(){$(".writeSubmit").click(function(){""==$("#writeName").val()||""==$("#writePhone").val()||""==$("#writeTitle").val()||""==$("#writeText").val()?console.log("I'm sorry, the information you entered is incomplete."):/^1[34578]\d{9}$/.test($("#writePhone").val())?$.ajax({type:"POST",url:"/blog/addContact",data:{contactName:$("#writeName").val(),contactPhone:$("#writePhone").val(),contactTitle:$("#writeTitle").val(),contactContent:$("#writeText").val()},success:function(o){"1"===o.status&&(console.log($("#writeName").val()+$("#writePhone").val()+$("#writeTitle").val()+$("#writeText").val()),console.log("Submit success!"),window.location.reload())},error:function(){console.log("Sorry, there was an error in the server when it was submitted.")}}):console.log("I'm sorry, your phone number is incorrect.")})});