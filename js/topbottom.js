$(function(){(function(){var o=$('<div id="go-top">回到<br>顶部</div>');return $("body").append(o),{init:function(){$(window).on("scroll",function(){$("body").scrollTop()>100?o.show():o.hide()}),o.on("click",function(){$(window).scrollTop(0)})}}})().init()});