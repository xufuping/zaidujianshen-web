$(function(){$.ajax({type:"GET",url:"/blog/findAllProducts",success:function(o){if("1"===o.status){console.log("我是返回的数据总条数："+o.data.result.length);for(var r=0;r<o.data.result.length;r++){var e='<li><figure class="uk-overlay uk-overlay-hover"><div class="courseImg"><img src="'+o.data.result[r].productImg+'"/></div><div class="courseText"><p class="coursePrice"><i class="uk-icon-cny uk-icon-small"></i>'+o.data.result[r].productPrice+'</p><p class="uk-h3 courseTitle">'+o.data.result[r].productName+'</p></div><figcaption class="uk-overlay-panel uk-overlay-background uk-overlay-bottom uk-overlay-slide-bottom courseBox"><p class="courseIntro">'+o.data.result[r].productContent+"</p></figcaption></figure></li>";$(".courseShow").append(e)}}},error:function(){console.log("product-Server error. Please try again.")}})});