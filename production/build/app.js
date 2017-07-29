(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _helpers = require("./helpers");

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {

	// MENU
	$(".menu__button").click(function () {
		$(this).toggleClass("active");
		$(".menu__box").toggleClass("active");
	});

	// MOB MENU
	$(document).mouseup(function (e) {
		// событие клика по веб-документу
		var div = $(".menu"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		&& div.has(e.target).length === 0) {
			// и не по его дочерним элементам
			$(".menu__button.active").toggleClass("active");
			$(".menu__box.active").toggleClass("active"); // скрываем его
			// div.hide(); // скрываем его
		}
	});
	$(document).scroll(function () {
		if ($(this).scrollTop() > 150) {
			$('.menu__button').addClass("mob_opasity");
		} else {
			$('.menu__button').removeClass("mob_opasity");
		}
	});

	// SUB MENU
	// if (document.documentElement.clientWidth > 768) {
	// 	$(".menu__links-home").hover(function() {
	// 		$(".menu__extra-home").toggleClass("visible");
	// 	});
	// 	$(".menu__links-pages").hover(function() {
	// 		$(".menu__extra-pages").toggleClass("visible");
	// 	});
	// 	$(".menu__extra").hover(function() {
	// 		$(this).toggleClass("visible");
	// 	});
	// }
	/*if (document.documentElement.clientWidth < 768) {
 	$(".menu__links-home").click(function() {
 		$(".menu__extra-home").toggleClass("visible");
 	});
 	$(".menu__links-pages").click(function() {
 		$(".menu__extra-pages").toggleClass("visible");
 	});
 }*/

	// SLIDER
	var swiper = new Swiper('.swiper-container', {
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		pagination: '.swiper-pagination',
		paginationType: 'fraction',
		loop: true
	});

	// ANIMATIONS
	$('.category').viewportChecker({
		classToAdd: 'visible animated fadeIn', // Class to add to the elements when they are visible,
		offset: 100 });

	// FORMS
	$(document).ready(function ($) {
		$('.hasTooltip').tooltip({ "html": true });
		if (window.MooTools) {

			// Mootools conflict fix for toggle with Bootstrap 3/JQuery
			window.addEvent('load', function () {
				$('[rel=tooltip],[data-toggle],a[data-toggle],button[data-toggle],[data-toggle=collapse],a[data-toggle=dropdown],.hasTooltip').each(function (e) {
					e.getParent().hide = null;
					e.hide = null;
				});
			});
		}
	});

	// VALIDATION
	$("#Form").validate({
		rules: {
			userName: {
				required: true,
				minlength: [3]
			},
			userEmail: {
				required: true,
				email: true,
				minlength: [5]
			},
			userPhone: {
				required: true,
				digits: true,
				minlength: [5]
			},
			userMessage: {
				required: true,
				minlength: [10]
			}
		},

		messages: {},

		focusCleanup: true,
		focusInvalid: false

		// submitHandler: function submitHandler() {
		// 	$.ajax({
		// 		type: "POST",
		// 		url: "mail.php",
		// 		data: $("#Form").serialize(),
		// 		success: function success(data) {
		// 			$("#send").modal("show");
		// 			setTimeout(function () {
		// 				$("#Form").trigger("reset");
		// 				$("#send").modal("hide");
		// 			}, 5000);
		// 		}
		// 	});
		// }
	});

	// RESET FORM
	$(".reset").click(function () {
		$("#Form").trigger("reset");
	});

	// BACK TO TOP
	// Back to top button
	var limit = $(window).height() / 3,
	    $backToTop = $('.back-to-top');
	$(window).scroll(function () {
		if ($(this).scrollTop() > limit) {
			$backToTop.fadeIn();
		} else {
			$backToTop.fadeOut();
		}
	});
	// scroll body to 0px on click
	$backToTop.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 1500);
		return false;
	});

	// PRELOADER
	$(window).load(function () {
		$('#before-load').find('i').fadeOut().end().delay(400).fadeOut('slow');
	});
})(jQuery);

},{"./helpers":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var HP = {
  random: function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

exports.default = HP;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiLCJzcmNcXGpzXFxoZWxwZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBRUMsV0FBVSxDQUFWLEVBQWE7O0FBRWI7QUFDQSxHQUFFLGVBQUYsRUFBbUIsS0FBbkIsQ0FBeUIsWUFBVTtBQUNsQyxJQUFFLElBQUYsRUFBUSxXQUFSLENBQW9CLFFBQXBCO0FBQ0EsSUFBRSxZQUFGLEVBQWdCLFdBQWhCLENBQTRCLFFBQTVCO0FBRUEsRUFKRDs7QUFRQTtBQUNBLEdBQUUsUUFBRixFQUFZLE9BQVosQ0FBb0IsVUFBVSxDQUFWLEVBQVk7QUFBRTtBQUNqQyxNQUFJLE1BQU0sRUFBRSxPQUFGLENBQVYsQ0FEK0IsQ0FDVDtBQUN0QixNQUFJLENBQUMsSUFBSSxFQUFKLENBQU8sRUFBRSxNQUFULENBQUQsQ0FBa0I7QUFBbEIsS0FDQyxJQUFJLEdBQUosQ0FBUSxFQUFFLE1BQVYsRUFBa0IsTUFBbEIsS0FBNkIsQ0FEbEMsRUFDcUM7QUFBRTtBQUN0QyxLQUFFLHNCQUFGLEVBQTBCLFdBQTFCLENBQXNDLFFBQXRDO0FBQ0EsS0FBRSxtQkFBRixFQUF1QixXQUF2QixDQUFtQyxRQUFuQyxFQUZvQyxDQUVVO0FBQzlDO0FBQ0E7QUFDRCxFQVJEO0FBU0EsR0FBRSxRQUFGLEVBQVksTUFBWixDQUFtQixZQUFZO0FBQzlCLE1BQUksRUFBRSxJQUFGLEVBQVEsU0FBUixLQUFzQixHQUExQixFQUErQjtBQUM5QixLQUFFLGVBQUYsRUFBbUIsUUFBbkIsQ0FBNEIsYUFBNUI7QUFDQSxHQUZELE1BRU87QUFDTixLQUFFLGVBQUYsRUFBbUIsV0FBbkIsQ0FBK0IsYUFBL0I7QUFDQTtBQUNELEVBTkQ7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBSE0sQ0FBVDs7a0JBTWUsRSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgSFAgZnJvbSAnLi9oZWxwZXJzJztcblxuKGZ1bmN0aW9uICgkKSB7XG5cblx0Ly8gTUVOVVxuXHQkKFwiLm1lbnVfX2J1dHRvblwiKS5jbGljayhmdW5jdGlvbigpe1xuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XG5cdFx0JChcIi5tZW51X19ib3hcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XG5cblx0fSk7XG5cblxuXG5cdC8vIE1PQiBNRU5VXG5cdCQoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpeyAvLyDRgdC+0LHRi9GC0LjQtSDQutC70LjQutCwINC/0L4g0LLQtdCxLdC00L7QutGD0LzQtdC90YLRg1xuXHRcdHZhciBkaXYgPSAkKFwiLm1lbnVcIik7IC8vINGC0YPRgiDRg9C60LDQt9GL0LLQsNC10LwgSUQg0Y3Qu9C10LzQtdC90YLQsFxuXHRcdGlmICghZGl2LmlzKGUudGFyZ2V0KSAvLyDQtdGB0LvQuCDQutC70LjQuiDQsdGL0Lsg0L3QtSDQv9C+INC90LDRiNC10LzRgyDQsdC70L7QutGDXG5cdFx0XHRcdCYmIGRpdi5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkgeyAvLyDQuCDQvdC1INC/0L4g0LXQs9C+INC00L7Rh9C10YDQvdC40Lwg0Y3Qu9C10LzQtdC90YLQsNC8XG5cdFx0XHQkKFwiLm1lbnVfX2J1dHRvbi5hY3RpdmVcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XG5cdFx0XHQkKFwiLm1lbnVfX2JveC5hY3RpdmVcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7IC8vINGB0LrRgNGL0LLQsNC10Lwg0LXQs9C+XG5cdFx0XHQvLyBkaXYuaGlkZSgpOyAvLyDRgdC60YDRi9Cy0LDQtdC8INC10LPQvlxuXHRcdH1cblx0fSk7XG5cdCQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAxNTApIHtcblx0XHRcdCQoJy5tZW51X19idXR0b24nKS5hZGRDbGFzcyhcIm1vYl9vcGFzaXR5XCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKCcubWVudV9fYnV0dG9uJykucmVtb3ZlQ2xhc3MoXCJtb2Jfb3Bhc2l0eVwiKTtcblx0XHR9XG5cdH0pO1xuXG5cblxuXHQvLyBTVUIgTUVOVVxuXHQvLyBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoID4gNzY4KSB7XG5cdC8vIFx0JChcIi5tZW51X19saW5rcy1ob21lXCIpLmhvdmVyKGZ1bmN0aW9uKCkge1xuXHQvLyBcdFx0JChcIi5tZW51X19leHRyYS1ob21lXCIpLnRvZ2dsZUNsYXNzKFwidmlzaWJsZVwiKTtcblx0Ly8gXHR9KTtcblx0Ly8gXHQkKFwiLm1lbnVfX2xpbmtzLXBhZ2VzXCIpLmhvdmVyKGZ1bmN0aW9uKCkge1xuXHQvLyBcdFx0JChcIi5tZW51X19leHRyYS1wYWdlc1wiKS50b2dnbGVDbGFzcyhcInZpc2libGVcIik7XG5cdC8vIFx0fSk7XG5cdC8vIFx0JChcIi5tZW51X19leHRyYVwiKS5ob3ZlcihmdW5jdGlvbigpIHtcblx0Ly8gXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoXCJ2aXNpYmxlXCIpO1xuXHQvLyBcdH0pO1xuXHQvLyB9XG5cdC8qaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA8IDc2OCkge1xuXHRcdCQoXCIubWVudV9fbGlua3MtaG9tZVwiKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdCQoXCIubWVudV9fZXh0cmEtaG9tZVwiKS50b2dnbGVDbGFzcyhcInZpc2libGVcIik7XG5cdFx0fSk7XG5cdFx0JChcIi5tZW51X19saW5rcy1wYWdlc1wiKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdCQoXCIubWVudV9fZXh0cmEtcGFnZXNcIikudG9nZ2xlQ2xhc3MoXCJ2aXNpYmxlXCIpO1xuXHRcdH0pO1xuXHR9Ki9cblxuXG5cblx0Ly8gU0xJREVSXG5cdHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcblx0XHRuZXh0QnV0dG9uOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG5cdFx0cHJldkJ1dHRvbjogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuXHRcdHBhZ2luYXRpb246ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuXHRcdHBhZ2luYXRpb25UeXBlOiAnZnJhY3Rpb24nLFxuXHRcdGxvb3A6IHRydWVcblx0fSk7XG5cblxuXG5cdC8vIEFOSU1BVElPTlNcblx0JCgnLmNhdGVnb3J5Jykudmlld3BvcnRDaGVja2VyKHtcblx0XHRjbGFzc1RvQWRkOiAndmlzaWJsZSBhbmltYXRlZCBmYWRlSW4nLCAvLyBDbGFzcyB0byBhZGQgdG8gdGhlIGVsZW1lbnRzIHdoZW4gdGhleSBhcmUgdmlzaWJsZSxcblx0XHRvZmZzZXQ6IDEwMCwgLy8gVGhlIG9mZnNldCBvZiB0aGUgZWxlbWVudHMgKGxldCB0aGVtIGFwcGVhciBlYXJsaWVyIG9yIGxhdGVyKS4gVGhpcyBjYW4gYWxzbyBiZSBwZXJjZW50YWdlIGJhc2VkIGJ5IGFkZGluZyBhICclJyBhdCB0aGUgZW5kXG5cdFx0Ly8gcmVwZWF0OiB0cnVlIC8vIEFkZCB0aGUgcG9zc2liaWxpdHkgdG8gcmVtb3ZlIHRoZSBjbGFzcyBpZiB0aGUgZWxlbWVudHMgYXJlIG5vdCB2aXNpYmxlXG5cdC8vIFx0Ly8gY2xhc3NUb0FkZDogJ3Zpc2libGUnLCAvLyBDbGFzcyB0byBhZGQgdG8gdGhlIGVsZW1lbnRzIHdoZW4gdGhleSBhcmUgdmlzaWJsZSxcblx0Ly8gXHQvLyBjbGFzc1RvQWRkRm9yRnVsbFZpZXc6ICdmdWxsLXZpc2libGUnLCAvLyBDbGFzcyB0byBhZGQgd2hlbiBhbiBpdGVtIGlzIGNvbXBsZXRlbHkgdmlzaWJsZSBpbiB0aGUgdmlld3BvcnRcblx0Ly8gXHQvLyBjbGFzc1RvUmVtb3ZlOiAnaW52aXNpYmxlJywgLy8gQ2xhc3MgdG8gcmVtb3ZlIGJlZm9yZSBhZGRpbmcgJ2NsYXNzVG9BZGQnIHRvIHRoZSBlbGVtZW50c1xuXHQvLyBcdC8vIHJlbW92ZUNsYXNzQWZ0ZXJBbmltYXRpb246IGZhbHNlLCAvLyBSZW1vdmUgYWRkZWQgY2xhc3NlcyBhZnRlciBhbmltYXRpb24gaGFzIGZpbmlzaGVkXG5cdC8vIFx0Ly8gb2Zmc2V0OiBbMTAwIE9SIDEwJV0sIC8vIFRoZSBvZmZzZXQgb2YgdGhlIGVsZW1lbnRzIChsZXQgdGhlbSBhcHBlYXIgZWFybGllciBvciBsYXRlcikuIFRoaXMgY2FuIGFsc28gYmUgcGVyY2VudGFnZSBiYXNlZCBieSBhZGRpbmcgYSAnJScgYXQgdGhlIGVuZFxuXHQvLyBcdC8vIGludmVydEJvdHRvbU9mZnNldDogdHJ1ZSwgLy8gQWRkIHRoZSBvZmZzZXQgYXMgYSBuZWdhdGl2ZSBudW1iZXIgdG8gdGhlIGVsZW1lbnQncyBib3R0b21cblx0Ly8gXHQvLyByZXBlYXQ6IGZhbHNlLCAvLyBBZGQgdGhlIHBvc3NpYmlsaXR5IHRvIHJlbW92ZSB0aGUgY2xhc3MgaWYgdGhlIGVsZW1lbnRzIGFyZSBub3QgdmlzaWJsZVxuXHQvLyBcdC8vIGNhbGxiYWNrRnVuY3Rpb246IGZ1bmN0aW9uKGVsZW0sIGFjdGlvbil7fSwgLy8gQ2FsbGJhY2sgdG8gZG8gYWZ0ZXIgYSBjbGFzcyB3YXMgYWRkZWQgdG8gYW4gZWxlbWVudC4gQWN0aW9uIHdpbGwgcmV0dXJuIFwiYWRkXCIgb3IgXCJyZW1vdmVcIiwgZGVwZW5kaW5nIGlmIHRoZSBjbGFzcyB3YXMgYWRkZWQgb3IgcmVtb3ZlZFxuXHQvLyBcdC8vIHNjcm9sbEhvcml6b250YWw6IGZhbHNlIC8vIFNldCB0byB0cnVlIGlmIHlvdXIgd2Vic2l0ZSBzY3JvbGxzIGhvcml6b250YWwgaW5zdGVhZCBvZiB2ZXJ0aWNhbC5cblx0fSk7XG5cblxuXHQvLyBGT1JNU1xuXHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKXtcblx0XHQkKCcuaGFzVG9vbHRpcCcpLnRvb2x0aXAoe1wiaHRtbFwiOiB0cnVlfSk7XG5cdFx0aWYod2luZG93Lk1vb1Rvb2xzKSB7XG5cblx0XHRcdC8vIE1vb3Rvb2xzIGNvbmZsaWN0IGZpeCBmb3IgdG9nZ2xlIHdpdGggQm9vdHN0cmFwIDMvSlF1ZXJ5XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnQoJ2xvYWQnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JCgnW3JlbD10b29sdGlwXSxbZGF0YS10b2dnbGVdLGFbZGF0YS10b2dnbGVdLGJ1dHRvbltkYXRhLXRvZ2dsZV0sW2RhdGEtdG9nZ2xlPWNvbGxhcHNlXSxhW2RhdGEtdG9nZ2xlPWRyb3Bkb3duXSwuaGFzVG9vbHRpcCcpLmVhY2goZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRlLmdldFBhcmVudCgpLmhpZGUgPSBudWxsO1xuXHRcdFx0XHRcdGUuaGlkZSA9IG51bGw7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHR9XG5cdH0pO1xuXG5cdC8vIFZBTElEQVRJT05cblx0JChcIiNGb3JtXCIpLnZhbGlkYXRlKHtcblx0XHRydWxlczoge1xuXHRcdFx0dXNlck5hbWU6IHtcblx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0XHRcdG1pbmxlbmd0aDogWzNdXG5cdFx0XHR9LFxuXHRcdFx0dXNlckVtYWlsOiB7XG5cdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdFx0XHRlbWFpbDogdHJ1ZSxcblx0XHRcdFx0bWlubGVuZ3RoOiBbNV1cblx0XHRcdH0sXG5cdFx0XHR1c2VyUGhvbmU6IHtcblx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0XHRcdGRpZ2l0czogdHJ1ZSxcblx0XHRcdFx0bWlubGVuZ3RoOiBbNV1cblx0XHRcdH0sXG5cdFx0XHR1c2VyTWVzc2FnZToge1xuXHRcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHRcdFx0bWlubGVuZ3RoOiBbMTBdXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdG1lc3NhZ2VzOiB7XG5cdFx0fSxcblxuXHRcdGZvY3VzQ2xlYW51cDogdHJ1ZSxcblx0XHRmb2N1c0ludmFsaWQ6IGZhbHNlXG5cblxuXG5cdFx0Ly8gc3VibWl0SGFuZGxlcjogZnVuY3Rpb24gc3VibWl0SGFuZGxlcigpIHtcblx0XHQvLyBcdCQuYWpheCh7XG5cdFx0Ly8gXHRcdHR5cGU6IFwiUE9TVFwiLFxuXHRcdC8vIFx0XHR1cmw6IFwibWFpbC5waHBcIixcblx0XHQvLyBcdFx0ZGF0YTogJChcIiNGb3JtXCIpLnNlcmlhbGl6ZSgpLFxuXHRcdC8vIFx0XHRzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGRhdGEpIHtcblx0XHQvLyBcdFx0XHQkKFwiI3NlbmRcIikubW9kYWwoXCJzaG93XCIpO1xuXHRcdC8vIFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdC8vIFx0XHRcdFx0JChcIiNGb3JtXCIpLnRyaWdnZXIoXCJyZXNldFwiKTtcblx0XHQvLyBcdFx0XHRcdCQoXCIjc2VuZFwiKS5tb2RhbChcImhpZGVcIik7XG5cdFx0Ly8gXHRcdFx0fSwgNTAwMCk7XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdH0pO1xuXHRcdC8vIH1cblx0fSk7XG5cblx0Ly8gUkVTRVQgRk9STVxuXHQkKFwiLnJlc2V0XCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG5cdFx0JChcIiNGb3JtXCIpLnRyaWdnZXIoXCJyZXNldFwiKTtcblx0fSk7XG5cblxuXG5cdC8vIEJBQ0sgVE8gVE9QXG5cdC8vIEJhY2sgdG8gdG9wIGJ1dHRvblxuXHR2YXIgbGltaXQgICAgID0gJCh3aW5kb3cpLmhlaWdodCgpLzMsXG5cdFx0JGJhY2tUb1RvcCA9ICQoJy5iYWNrLXRvLXRvcCcpO1xuXHQkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoICQodGhpcykuc2Nyb2xsVG9wKCkgPiBsaW1pdCApIHtcblx0XHRcdCRiYWNrVG9Ub3AuZmFkZUluKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRiYWNrVG9Ub3AuZmFkZU91dCgpO1xuXHRcdH1cblx0fSk7XG5cdC8vIHNjcm9sbCBib2R5IHRvIDBweCBvbiBjbGlja1xuXHQkYmFja1RvVG9wLmNsaWNrKGZ1bmN0aW9uICgpIHtcblx0XHQkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtcblx0XHRcdHNjcm9sbFRvcDogMFxuXHRcdH0sIDE1MDApO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSk7XG5cblxuXG5cdC8vIFBSRUxPQURFUlxuXHQkKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcblx0JCgnI2JlZm9yZS1sb2FkJykuZmluZCgnaScpLmZhZGVPdXQoKS5lbmQoKS5kZWxheSg0MDApLmZhZGVPdXQoJ3Nsb3cnKTtcblx0fSk7XG5cbn0oalF1ZXJ5KSk7IiwidmFyIEhQID0ge1xuICByYW5kb206IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSFA7Il19
