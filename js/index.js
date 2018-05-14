/**
 * 首页特效 
 * nav 导航  显示隐藏二级菜单
 */
$(function () {
	var li = $("#nav>li");
	li.mouseenter(function(){
		$(this).children("ul").show(500);
	});
	li.mouseleave(function(){
		$(this).children("ul").hide(500);
	});


// 轮播图
	// 索引
	var index = 0;
	// 定时器
	var t;
	t = setInterval(play,5000);

	function play(){
		index++;
		if(index>$(".slideshow_img li").length-1){
			index=0;
		}
		// console.log($(".slideshow_img li"));
		// $(".slideshow_img li").eq(index).fadeIn(1000).sibilings().fadeOut();
		   $(".slideshow_img li").eq(index).fadeIn(600).siblings().fadeOut();
	}


// teacher  轮播     老师图片轮播
	var index2 = 0;
	var y;
	y = setInterval(roll,3000);
	function roll(){
		index2++;
		if(index2>$("#teacher li").length-1){
			index2=0;
		}
		$("#teacher li").eq(index2).fadeIn(1000).siblings().fadeOut();
	}
});







