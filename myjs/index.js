var fontroll = 0;
var Interval;
var page4_10open = 2;
var page4_7open = 1;

function check( obj ){
	if( obj.id=="email" ){
		var email = obj.value;
		var isemail=/^\w+([-\.]\w+)*@\w+([\.-]\w+)*\.\w{2,4}$/;
		if( isemail.test(email) ){
			$("#email_tishi").css("color","green");
			$("#email_tishi").html("邮箱输入合格");
		}else{
			$("#email_tishi").css("color","red");
			$("#email_tishi").html("邮箱输入有误");
		}
	}
}


function checknum( obj ){
	var num = obj.value.length;	
	$("#message_tishi").css("color","green");
	$("#message_tishi").html("（还可以输入"+(200-num)+"个字）");
	if( num>200 ){
		$("#message_tishi").html("（还可以输入0个字）");
		obj.value = obj.value.substring(0,200);
	}
}

$(function() {
		$(".page2_7 > div:eq(1)")
	
		var h = document.documentElement.clientHeight;
		$("#area_container").height( h-180 );
		$(".contact").css("margin-top",h-560);
		$("#page_1").height(h-60);$("#page_2").height(h-85);
		$("#page_3").height(h-85);$("#page_4").height(h-85);
		$("#page_5").height(h-85);$("#page_6").height(h-125);
		$("#page4_7ul").css("margin-top",$(".page4_7").height()-30);
		$(".page4_7div").height($(".page4_7").height()-30);
		$(".page4_10_book").height( $(".page4_10").height()-40 );
		$(".pageformat").height( $(".page4_10").height()-40 );
		$(".page2_7 > div:eq(1) > p").mouseenter(function(){
			Interval = window.setInterval(fontRoll,50);
		} );
		
		$(".page2_7 > div:eq(1) > p").mouseleave(function(){
			clearInterval(Interval);
		} );
		
		
		//业务动态
		//  翻页特效
		$("#bb-nav-dn").mouseup(function(){
			if(page4_10open==5){
				return;	
			}
			$(".pagebook"+page4_10open++).addClass("pageactive");
			$(".pagebook"+page4_10open).css("z-index",10);
		});
		$("#bb-nav-up").mouseup(function(){
			if(page4_10open==1){
				return;	
			}
			$(".pagebook"+(--page4_10open)).removeClass("pageactive");
			$(".pagebook"+(page4_10open+1)).css("z-index",0);
		});
		//page7换屏特效
		var page4_7ul = $("#page4_7ul > li");
		
		page4_7ul.click( function(){
			  var n =  $( this ).index()+1;
			 
			  if(n==page4_7open){
					return;  
			  }
			  $( this ).css({ color: "#FFF", background: "#F60" });
			  $("#page4_7ul > li:eq(" + (page4_7open-1) + ")").css({ color: "#F60", background: "#FFF" });
			  var left1 = (1-n)*530;  //page4_1移动距离
			  var left2 = (2-n)*530;  //page4_1移动距离
			  var left3 = (3-n)*530;  //page4_1移动距离
			  var left4 = (4-n)*530;  //page4_1移动距离
			  
			  $(".page4_7_1").css("margin-left",left1);
			  $(".page4_7_2").css("margin-left",left2);
			  $(".page4_7_3").css("margin-left",left3);
			  $(".page4_7_4").css("margin-left",left4);
			  
			  page4_7open = n;
		} );
		
		//换肤特效
		$(".menubg > li >a").click(function(){
			var bg = $(this).css('background-color');
			$("#header").css("background-color",bg);
			$("#copyright").css("background-color",bg);
		});
		
		$('.bg li a').click(function(){
			var bgImage = $(this).css('backgroundImage');
			$(".bodybg").css("background-color",'none');
			$('.bodybg').css('background-image',bgImage);
		});
		
		$('.bgsolid li a').click(function(){
			var bg = $(this).css('backgroundColor');
			$('.bodybg').css('background-image','none');
			$(".bodybg").css("background-color",bg);
		});
		
});

function fontRoll(){
	$(".page2_7 > div:eq(1) > p").css("margin-top",-fontroll);
	fontroll = fontroll+1;
	if(fontroll==600){
			fontroll = 0;
		}
	}
