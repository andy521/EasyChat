var number = 1;
var test = "id";
function chatwith(e){
	var name = $(e).children(".chatmessage-1").children(".chatmessage-1-info").children("h4").text();
	$(".main-right .main-right-nav h2").text(name);
}
function sendto(){
  var testid = test + number ;
  /**
  var $html = $("<div class='main-right-chatmessage-1'>"
  +"<div class='main-right-chatmessage-1-my' id=" + testid + "></div>"
  +"<div class='chatmessage-1-image' style='float:right;'>"
  +"<img src='cong.jpg' width='40px' height='40px'/>"

  +"</div>"
  +"</div>");
  **/
  var $html =$("<div class='content'>"     
		+"<div class='chatmessage-1-image' style='float:right;'>"
		+"<img src='image/cong.jpg' width='40px' height='40px'/>"
		+"</div>"
		+"<div class='bubble'>"
		+"<div class='bubble_cont'>"
		+"<div class='plain'>"
		+"<pre class='js_message_plain ng-binding' id=" + testid +"></pre>"
		+"</div>"
		+"</div>"
		+"</div>"
		+"</div>");
  $(".main-right-chatmessage").append($html);
  var message = $(".main-right-writemessage").val();
  var idtest = "#" + testid ;
  $(idtest).text(message);
  $(".main-right-writemessage").val("");
  number = number + 1;
}
function change_web_wechat_tab_chat(e){
	$(e).children("i").css("background","url(./image/sprite27fe59.png) 0 -2083px");
	$(".web_wechat_tab_friends").css("background","url(./image/sprite27fe59.png) 0 -2140px");

}
function change_web_wechat_tab_friends(e) {
	$(e).children("i").css("background", "url(./image/sprite27fe59.png) 0 -2175px");
	$(".web_wechat_tab_chat").css("background", "url(./image/sprite27fe59.png) 0 -2048px");
}
function dropdown(){
	$(".dropdown_memu").css("display","inline-block");
	event.stopPropagation();
}
function dropup(){
	$(".dropdown_memu").css("display","none");
}


function information(e){
	if($(e).text() == "修改个人设置"){
		$(e).text("保存个人设置");
		$('.main-right-change').find('li').each(function(){
			var $html=$("<input value='"+ $(this).find('span').text() + "'>");
			$(this).find('span').text("");
			$(this).find('span').append($html);
		});
	}
	else
	{
		$(e).text("修改个人设置");
		$('.main-right-change').find('li').each(function(){
			var $value = $(this).find('input').val();
			$(this).find('span').text($value);
		});
	}
}