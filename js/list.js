// sidebar 点击效果
$(function () {
	// 获取操作的元素 
	// 绑定click事件 
	/*改变dom元素*/
	
	$(".sidebar li").click(function(){
		$(".list_title h3").text($(this).text());
		// $(".list_txt h3").text($(this).text());
		// domValue.append($(this).text());
		$(".list_title li").eq(0).text($(this).text());
	});

	// 获取url参数 实现导航栏目跳转
	// 
	//单个参数获取方法
	function getUrl(){
		var url = location.search;
		if(url.indexOf("?")!=-1){
			var str = url.substr(1);
			var strs = str.split("=");
			return strs[1];
		}else{
			return 0;
		}	
	}
	// 获取到的索引值
	var val = getUrl();

	// nav 导航栏目
	var navArr = $("#nav>li>a");
	
	// 根据id值 获取nav导航栏目  （ js dom对象转成jquery对象才能调用jq方法 ）
	var navId = $(navArr[val]).text();
	$(".sidebar h3").text(navId);
	$(".list_title h3").text(navId);
	$(".list_title li").eq(0).text(navId);
	$(".list_title li").eq(2).text(navId);

	
	/**
 * 首页特效 
 * nav 导航  显示隐藏二级菜单
 */
	var li = $("#nav>li");
	li.mouseenter(function(){
		$(this).children("ul").show(500);
	});
	li.mouseleave(function(){
		$(this).children("ul").hide(500);
	});
	
});