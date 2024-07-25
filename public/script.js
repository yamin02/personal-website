$(function() {


	//menu button animation================================================
	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");

		// makes button disabled until animaion is over
		var button = $(this);
		button.attr('disabled', 'disabled');
		setTimeout(function() {
			button.removeAttr('disabled');
		}, 700);
	});

	//=======================================================================
	//menu links click function
	//=======================================================================
	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	}).append("<span>");

	//set state of menu itself 
	$(".toggle_mnu").click(function() {
		// $(".top_mnu:visible").fadeOut(600);
		// $(".top_mnu:visible li a").removeClass("fadeInUp animated");
		// $(".top_mnu:hidden").fadeIn(600);
		// $(".top_mnu:hidden li a").addClass("fadeInUp animated");
		if ($(".top_mnu").is(":visible")) {
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		}
	});


	//===================================
	//Chrome Smooth Scroll===============
	//===================================
	try {
		$.browserSelector();
		if ($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch (err) {

	};

	// //prevent images from dragging=============
	// $("img, a").on("dragstart", function(event) {
	// 	event.preventDefault();
	// });

	//========================================
	//PageScroll2id smoothscroll to link =====
	//========================================
	$(".top_mnu ul a").mPageScroll2id();
	$(".up_button a").mPageScroll2id();

	// change fixed button position on resize==
	var ButtonPositionOnResize = function() {
			var oWidth = document.getElementById('bootstrapWidth').offsetWidth;
			// console.log('offset width:' + oWidth);
			var wWidth = $(window).width();
			// console.log('offset width:' + wWidth);
			var diff = wWidth - oWidth;
			// console.log('diff : ' + diff);
			if (diff > 0) {
				$(".toggle_mnu").css("right", diff / 2);
			} else {
				$(".toggle_mnu").css("right", 30);
			}
		}
		//returns value of position from right border
	var ButtonPositionOnResize_return = function() {
		var oWidth = document.getElementById('bootstrapWidth').offsetWidth;
		// console.log('offset width:' + oWidth);
		var wWidth = $(window).width();
		// console.log('offset width:' + wWidth);
		var diff = wWidth - oWidth;
		// console.log('diff : ' + diff);
		if (diff > 0) {
			return diff / 2;
		} else {
			return 30;
		}
	}

	ButtonPositionOnResize();

	$(window).resize(function() {
		ButtonPositionOnResize();
	});

	//=====================================
	// PARALLAX
	//=====================================
	// https://pixelcog.github.io/parallax.js/
	$('.main_head').parallax({
		imageSrc: './bg01.jpg',
		parallax: "scroll",
		zIndex: 1,
		position: "top center"
	});
});

$(window).load(function() {

	// //animation + waypoints plugin
	// $(".text_wrapper h1").animated("fadeInDown", "fadeOutUp");
	// $(".text_wrapper p").animated("fadeInUp", "fadeOutDown");
});