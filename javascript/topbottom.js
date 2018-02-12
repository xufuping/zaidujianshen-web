// 错误提示
var errorDiv = $(".errorSug");
errorDiv.on("click", function(){
    errorDiv.fadeOut("slow");
})

function errorSug () {
    errorDiv.fadeIn("slow");
    if (errorDiv.css('display') == "block") {
        setTimeout(function(){
            errorDiv.fadeOut("slow");
        }, 5000)
    }
}

$(function(){
    // 回到顶部
    var goTop = (function(){
        var $goTop = $('<div id="go-top">回到<br>顶部</div>');
        $("body").append($goTop);

        function init(){
            $(window).on("scroll", function(){
                var offsetTop = $("body").scrollTop();
                if (offsetTop > 100) {
                    $goTop.show();
                } else {
                    $goTop.hide();
                }
            })
            $goTop.on("click", function(){
                $(window).scrollTop(0);
            })
        }

        return {
            init: init
        }
    })();
    goTop.init();
});