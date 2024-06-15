$(window).on('load', function(){
	setTimeout(fadeOut, 0);
	setTimeout(badgeIn, 1200);
	setTimeout(textIn, 2200);
});

function fadeOut(){
	$("#loading").fadeOut(800);
}
function badgeIn(){
	$(".hero_vote_badge").addClass('on');
}
function textIn(){
	$(".badge_text").removeClass('hide');
}

// mobile open menu -------------------------
$(function() {
	var nav = $('.nav'),
		trigger = $('#menu_btn'),
		link = $('header_nav li a'),
		link_text = $('.menu_text_anime'),
		ua = navigator.userAgent;

	$('#mobile_mmenu').on('click', function(){
		if (trigger.hasClass('open')){
			nav.removeClass('open');
			trigger.removeClass('open');
			link_text.removeClass('active');
		} else {
			nav.addClass('open');
			trigger.addClass('open');
			setTimeout(function(){
				link_text.addClass('active');
			},200);
		}
	});

	// if(window.matchMedia('(max-width: 1024px)').matches){
	// 	$('#wrapper').on('click', function(){
	// 		if (nav.hasClass('open')){
	// 			nav.removeClass('open');
	// 			trigger.removeClass('open');
	// 			link_text.removeClass('active');
	// 		}
	// 	});
	// }
});

$(function(){
	var backTop = $("#pageTop"),
		backTopClass = "hide";

	$(window).scroll(function () {
		if($(this).scrollTop() > 200){
			backTop.removeClass(backTopClass);
		}
		else{
			backTop.addClass(backTopClass);
		}
	});

	backTop.click(function () {
		$("body,html").animate({
			scrollTop: 0
		}, 600);
		return false;
	});
});

$(function(){
	var headerHight = 60,
		notsmooth = ".modal";

	$("a[href*='#']").not(notsmooth).click(function(){
		var href= $(this).attr("href"),
			target = $(href == "#header" || href == "" ? 'html' : href),
			position = target.offset().top;
		$("html, body").animate({scrollTop:position}, 550, "swing");
		return false;
	 });
});

$(function(){
	var ua = navigator.userAgent,
		offClass = "b_off";

	if(navigator.userAgent.indexOf('iPhone') > 0){
		$('.badge_store_google').addClass(offClass);
	}
	else if(navigator.userAgent.indexOf('Android') > 0){
		$('.badge_store_app').addClass(offClass);
	}
	else if(navigator.userAgent.indexOf('iPad') > 0){
		$('.badge_store_google').addClass(offClass);
	}
});