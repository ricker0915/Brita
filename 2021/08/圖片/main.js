

/*延遲載圖*/
var lazyLoadInstance = new LazyLoad({
    elements_selector: ".articleList .lazy", //物件
    //threshold: 300, //預載量 預設300
});


/*回版頭*/
$(function(){
	$("#gotop").click(function(){
		$("html,body").stop(true,false).animate({scrollTop:0},700); //設定回頁面頂端
		return false;	
	});
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 300){ //設定大於300px才顯示浮層
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
    });
}); 

