var i=0;
var Timer;

$(function(){
  $(".picImg").eq(0).show().siblings().hide();   //默認第一張圖片顯示，其他的隱藏
    //自動輪播
    TimerBanner();

    //點擊左右按鈕
    $(".silder_left_btn").click(function(){
        clearInterval(Timer);
        i--;   //往左
        if(i==-1){
            i=1;
        }
        showPic();
        TimerBanner();
    });
    $(".silder_right_btn").click(function(){
        clearInterval(Timer);
        i++;   //往右
        if(i==2){
            i=0;
        }
        showPic();
        TimerBanner();
    });
});

//輪播部分
function TimerBanner(){
    Timer = setInterval(function(){
        i++;
        if(i==2){
            i=0;
        }
        showPic()
    },2000);
}
//顯示圖片
function showPic(){
    $(".picImg").eq(i).show().siblings().hide();
}