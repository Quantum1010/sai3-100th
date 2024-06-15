var time = new Date().getTime();

$(window).on("load",function(){
	var now = new Date().getTime();
	if (now-time <= 7000) {
		setTimeout("stopload()", 1700 - (now-time));
		return;
	}else{
		stopload();
	}
});

function compLoad(){
	$(".load_img_plane").addClass("load_move");
}
function overlayfadeOut(){
	$("#loading").addClass("open");
}
function overlayDelete(){
	$("#loading").remove();
}
function mainIn(){
	$(".hero_img").removeClass("hide");
}

function stopload(){
	compLoad();
	$(document).on("animationend", ".load_move", function(){
		$(".load_text").text("Welcome!");
		$(".load_img_pin").addClass("load_move");
		setTimeout(overlayfadeOut, 800);
		setTimeout(mainIn, 800);
		setTimeout(overlayDelete, 1200);
	});
}

function loadcancel(){
	setTimeout(overlayfadeOut, 0);
	setTimeout(overlayDelete, 0);
	setTimeout(mainIn, 500);
}

var webStorage = function(){
	if(sessionStorage.getItem("access")){
		loadcancel();
	} else {
		setTimeout("stopload()",7000);
		sessionStorage.setItem("access", 0);
	}
}
webStorage();

$(document).on("animationend", ".hero", function(){
	$(this).addClass('move');
});

$(function(){
	$(window).load(function (){
		var w = $(window).width();
		var x = 896;
		var value = $(this).scrollTop();
		if(x <= w){
			$("body").css("background-position", "center top " +parseInt( -value / 12 ) +"px");
			$(".w01").css("transform", "translateY(" +parseInt( -value / 8 ) +"px");
			$(".w02").css("transform", "translateY(" +parseInt( -value / 3 ) +"px");
		}
	});

	$(window).scroll(function() {
		var w = $(window).width();
		var x = 896;
		var value = $(this).scrollTop();
		if(x <= w){
			$("body").css("background-position", "center top " +parseInt( -value / 12 ) +"px");
			$(".w01").css("transform", "translateY(" +parseInt( -value / 8 ) +"px");
			$(".w02").css("transform", "translateY(" +parseInt( -value / 3 ) +"px");
		}
	});
});

$(function(){
	$(window).bind("load orientationchange",function(){
		if(Math.abs(window.orientation) === 90){
			$("body").css("background-position", "center top");
		}
	})
})

$(function(){
	$(window).scroll(function (){
		$(".fadein").each(function(){
			var position = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > position - windowHeight + 200){
				$(this).addClass("active");
			}
		});
	});
});