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
		var div = $(".menu");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			$(".menu__button.active").toggleClass("active");
			$(".menu__box.active").toggleClass("active");
		}
	});
	$(document).scroll(function () {
		if ($(this).scrollTop() > 150) {
			$('.menu__button').addClass("mob_opasity");
		} else {
			$('.menu__button').removeClass("mob_opasity");
		}
	});

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
		offset: 100 // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
		// repeat: true // Add the possibility to remove the class if the elements are not visible
		// 	// classToAdd: 'visible', // Class to add to the elements when they are visible,
		// 	// classToAddForFullView: 'full-visible', // Class to add when an item is completely visible in the viewport
		// 	// classToRemove: 'invisible', // Class to remove before adding 'classToAdd' to the elements
		// 	// removeClassAfterAnimation: false, // Remove added classes after animation has finished
		// 	// offset: [100 OR 10%], // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
		// 	// invertBottomOffset: true, // Add the offset as a negative number to the element's bottom
		// 	// repeat: false, // Add the possibility to remove the class if the elements are not visible
		// 	// callbackFunction: function(elem, action){}, // Callback to do after a class was added to an element. Action will return "add" or "remove", depending if the class was added or removed
		// 	// scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
	});
	$('.animated-box').viewportChecker({
		classToAdd: 'fadeInUp', // Class to add to the elements when they are visible,
		offset: 100
	});

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

	// SORT PORTFOLIO (mixItUp)
	$(window).load(function () {
		var $container = $("#mixItUp");
		$container.mixitup({
			targetSelector: ".gallery-item",
			filterSelector: ".filter",
			sortSelector: ".sort",
			buttonEvent: "click",
			effects: [],
			listEffects: null,
			easing: "smooth",
			layoutMode: "grid",
			targetDisplayGrid: "inline-block",
			targetDisplayList: "block",
			gridClass: "grid",
			listClass: "list",
			transitionSpeed: 600,
			showOnLoad: "all",
			sortOnLoad: false,
			multiFilter: false,
			filterLogic: "or",
			resizeContainer: true,
			minHeight: 0,
			failClass: "fail",
			perspectiveDistance: "3000",
			perspectiveOrigin: "50% 50%",
			animateGridList: true,
			onMixLoad: function onMixLoad() {
				$container.addClass("loaded");
			}
		});

		$("#sort .sort").click(function () {
			$("#sort .sort").removeClass("selected").removeClass("active");
			$("#sort .sort").closest("li").removeClass("active");
			$(this).closest("li").addClass("active");
			$(this).addClass("selected");
			if ($(this).attr("data-order") == "desc") {
				$(this).attr("data-order", "asc");
			} else {
				$(this).attr("data-order", "desc");
			}
		});
	});

	// SORT PORTFOLIO (same height)
	$(document).ready(function () {
		if (document.documentElement.clientWidth > 767) {
			$.fn.equivalent = function () {
				var $blocks = $(this),
				    maxH = $blocks.eq(0).height();
				$blocks.each(function () {
					maxH = $(this).height() > maxH ? $(this).height() : maxH;
				});
				$blocks.height(maxH);
			};
			$('.mix').equivalent();
		}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiLCJzcmNcXGpzXFxoZWxwZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBRUMsV0FBVSxDQUFWLEVBQWE7O0FBRWI7QUFDQSxHQUFFLGVBQUYsRUFBbUIsS0FBbkIsQ0FBeUIsWUFBVTtBQUNsQyxJQUFFLElBQUYsRUFBUSxXQUFSLENBQW9CLFFBQXBCO0FBQ0EsSUFBRSxZQUFGLEVBQWdCLFdBQWhCLENBQTRCLFFBQTVCO0FBRUEsRUFKRDs7QUFPQTtBQUNBLEdBQUUsUUFBRixFQUFZLE9BQVosQ0FBb0IsVUFBVSxDQUFWLEVBQVk7QUFDL0IsTUFBSSxNQUFNLEVBQUUsT0FBRixDQUFWO0FBQ0EsTUFBSSxDQUFDLElBQUksRUFBSixDQUFPLEVBQUUsTUFBVCxDQUFELElBQ0MsSUFBSSxHQUFKLENBQVEsRUFBRSxNQUFWLEVBQWtCLE1BQWxCLEtBQTZCLENBRGxDLEVBQ3FDO0FBQ3BDLEtBQUUsc0JBQUYsRUFBMEIsV0FBMUIsQ0FBc0MsUUFBdEM7QUFDQSxLQUFFLG1CQUFGLEVBQXVCLFdBQXZCLENBQW1DLFFBQW5DO0FBQ0E7QUFDRCxFQVBEO0FBUUEsR0FBRSxRQUFGLEVBQVksTUFBWixDQUFtQixZQUFZO0FBQzlCLE1BQUksRUFBRSxJQUFGLEVBQVEsU0FBUixLQUFzQixHQUExQixFQUErQjtBQUM5QixLQUFFLGVBQUYsRUFBbUIsUUFBbkIsQ0FBNEIsYUFBNUI7QUFDQSxHQUZELE1BRU87QUFDTixLQUFFLGVBQUYsRUFBbUIsV0FBbkIsQ0FBK0IsYUFBL0I7QUFDQTtBQUNELEVBTkQ7O0FBU0E7QUFDQSxLQUFJLFNBQVMsSUFBSSxNQUFKLENBQVcsbUJBQVgsRUFBZ0M7QUFDNUMsY0FBWSxxQkFEZ0M7QUFFNUMsY0FBWSxxQkFGZ0M7QUFHNUMsY0FBWSxvQkFIZ0M7QUFJNUMsa0JBQWdCLFVBSjRCO0FBSzVD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QUFTLGVBQVQsQ0FBeUIsV0FBekIsR0FBdUMsR0FBM0MsRUFBZ0Q7QUFDL0MsS0FBRSxFQUFGLENBQUssVUFBTCxHQUFrQixZQUFXO0FBQzVCLFFBQUksVUFBVSxFQUFFLElBQUYsQ0FBZDtBQUFBLFFBQ0EsT0FBTyxRQUFRLEVBQVIsQ0FBVyxDQUFYLEVBQWMsTUFBZCxFQURQO0FBRUEsWUFBUSxJQUFSLENBQWEsWUFBVTtBQUN0QixZQUFTLEVBQUUsSUFBRixFQUFRLE1BQVIsS0FBbUIsSUFBckIsR0FBOEIsRUFBRSxJQUFGLEVBQVEsTUFBUixFQUE5QixHQUFpRCxJQUF4RDtBQUNBLEtBRkQ7QUFHQSxZQUFRLE1BQVIsQ0FBZSxJQUFmO0FBQ0EsSUFQRDtBQVFBLEtBQUUsTUFBRixFQUFVLFVBQVY7QUFDQTtBQUNELEVBWkQ7QUFjQSxDQXpOQSxFQXlOQyxNQXpORCxDQUFEOzs7Ozs7OztBQ0ZBLElBQUksS0FBSztBQUNQLFVBQVEsZ0JBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUI7QUFDekIsV0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsTUFBaUIsTUFBTSxHQUFOLEdBQVksQ0FBN0IsQ0FBWCxJQUE4QyxHQUFyRDtBQUNEO0FBSE0sQ0FBVDs7a0JBTWUsRSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgSFAgZnJvbSAnLi9oZWxwZXJzJztcblxuKGZ1bmN0aW9uICgkKSB7XG5cblx0Ly8gTUVOVVxuXHQkKFwiLm1lbnVfX2J1dHRvblwiKS5jbGljayhmdW5jdGlvbigpe1xuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XG5cdFx0JChcIi5tZW51X19ib3hcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XG5cblx0fSk7XG5cblxuXHQvLyBNT0IgTUVOVVxuXHQkKGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKXtcblx0XHR2YXIgZGl2ID0gJChcIi5tZW51XCIpO1xuXHRcdGlmICghZGl2LmlzKGUudGFyZ2V0KVxuXHRcdFx0XHQmJiBkaXYuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHtcblx0XHRcdCQoXCIubWVudV9fYnV0dG9uLmFjdGl2ZVwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcblx0XHRcdCQoXCIubWVudV9fYm94LmFjdGl2ZVwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcblx0XHR9XG5cdH0pO1xuXHQkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuXHRcdGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gMTUwKSB7XG5cdFx0XHQkKCcubWVudV9fYnV0dG9uJykuYWRkQ2xhc3MoXCJtb2Jfb3Bhc2l0eVwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCgnLm1lbnVfX2J1dHRvbicpLnJlbW92ZUNsYXNzKFwibW9iX29wYXNpdHlcIik7XG5cdFx0fVxuXHR9KTtcblxuXG5cdC8vIFNMSURFUlxuXHR2YXIgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXInLCB7XG5cdFx0bmV4dEJ1dHRvbjogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuXHRcdHByZXZCdXR0b246ICcuc3dpcGVyLWJ1dHRvbi1wcmV2Jyxcblx0XHRwYWdpbmF0aW9uOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcblx0XHRwYWdpbmF0aW9uVHlwZTogJ2ZyYWN0aW9uJyxcblx0XHRsb29wOiB0cnVlXG5cdH0pO1xuXG5cblx0Ly8gQU5JTUFUSU9OU1xuXHQkKCcuY2F0ZWdvcnknKS52aWV3cG9ydENoZWNrZXIoe1xuXHRcdGNsYXNzVG9BZGQ6ICd2aXNpYmxlIGFuaW1hdGVkIGZhZGVJbicsIC8vIENsYXNzIHRvIGFkZCB0byB0aGUgZWxlbWVudHMgd2hlbiB0aGV5IGFyZSB2aXNpYmxlLFxuXHRcdG9mZnNldDogMTAwLCAvLyBUaGUgb2Zmc2V0IG9mIHRoZSBlbGVtZW50cyAobGV0IHRoZW0gYXBwZWFyIGVhcmxpZXIgb3IgbGF0ZXIpLiBUaGlzIGNhbiBhbHNvIGJlIHBlcmNlbnRhZ2UgYmFzZWQgYnkgYWRkaW5nIGEgJyUnIGF0IHRoZSBlbmRcblx0XHQvLyByZXBlYXQ6IHRydWUgLy8gQWRkIHRoZSBwb3NzaWJpbGl0eSB0byByZW1vdmUgdGhlIGNsYXNzIGlmIHRoZSBlbGVtZW50cyBhcmUgbm90IHZpc2libGVcblx0Ly8gXHQvLyBjbGFzc1RvQWRkOiAndmlzaWJsZScsIC8vIENsYXNzIHRvIGFkZCB0byB0aGUgZWxlbWVudHMgd2hlbiB0aGV5IGFyZSB2aXNpYmxlLFxuXHQvLyBcdC8vIGNsYXNzVG9BZGRGb3JGdWxsVmlldzogJ2Z1bGwtdmlzaWJsZScsIC8vIENsYXNzIHRvIGFkZCB3aGVuIGFuIGl0ZW0gaXMgY29tcGxldGVseSB2aXNpYmxlIGluIHRoZSB2aWV3cG9ydFxuXHQvLyBcdC8vIGNsYXNzVG9SZW1vdmU6ICdpbnZpc2libGUnLCAvLyBDbGFzcyB0byByZW1vdmUgYmVmb3JlIGFkZGluZyAnY2xhc3NUb0FkZCcgdG8gdGhlIGVsZW1lbnRzXG5cdC8vIFx0Ly8gcmVtb3ZlQ2xhc3NBZnRlckFuaW1hdGlvbjogZmFsc2UsIC8vIFJlbW92ZSBhZGRlZCBjbGFzc2VzIGFmdGVyIGFuaW1hdGlvbiBoYXMgZmluaXNoZWRcblx0Ly8gXHQvLyBvZmZzZXQ6IFsxMDAgT1IgMTAlXSwgLy8gVGhlIG9mZnNldCBvZiB0aGUgZWxlbWVudHMgKGxldCB0aGVtIGFwcGVhciBlYXJsaWVyIG9yIGxhdGVyKS4gVGhpcyBjYW4gYWxzbyBiZSBwZXJjZW50YWdlIGJhc2VkIGJ5IGFkZGluZyBhICclJyBhdCB0aGUgZW5kXG5cdC8vIFx0Ly8gaW52ZXJ0Qm90dG9tT2Zmc2V0OiB0cnVlLCAvLyBBZGQgdGhlIG9mZnNldCBhcyBhIG5lZ2F0aXZlIG51bWJlciB0byB0aGUgZWxlbWVudCdzIGJvdHRvbVxuXHQvLyBcdC8vIHJlcGVhdDogZmFsc2UsIC8vIEFkZCB0aGUgcG9zc2liaWxpdHkgdG8gcmVtb3ZlIHRoZSBjbGFzcyBpZiB0aGUgZWxlbWVudHMgYXJlIG5vdCB2aXNpYmxlXG5cdC8vIFx0Ly8gY2FsbGJhY2tGdW5jdGlvbjogZnVuY3Rpb24oZWxlbSwgYWN0aW9uKXt9LCAvLyBDYWxsYmFjayB0byBkbyBhZnRlciBhIGNsYXNzIHdhcyBhZGRlZCB0byBhbiBlbGVtZW50LiBBY3Rpb24gd2lsbCByZXR1cm4gXCJhZGRcIiBvciBcInJlbW92ZVwiLCBkZXBlbmRpbmcgaWYgdGhlIGNsYXNzIHdhcyBhZGRlZCBvciByZW1vdmVkXG5cdC8vIFx0Ly8gc2Nyb2xsSG9yaXpvbnRhbDogZmFsc2UgLy8gU2V0IHRvIHRydWUgaWYgeW91ciB3ZWJzaXRlIHNjcm9sbHMgaG9yaXpvbnRhbCBpbnN0ZWFkIG9mIHZlcnRpY2FsLlxuXHR9KTtcblx0JCgnLmFuaW1hdGVkLWJveCcpLnZpZXdwb3J0Q2hlY2tlcih7XG5cdFx0Y2xhc3NUb0FkZDogJ2ZhZGVJblVwJywgLy8gQ2xhc3MgdG8gYWRkIHRvIHRoZSBlbGVtZW50cyB3aGVuIHRoZXkgYXJlIHZpc2libGUsXG5cdFx0b2Zmc2V0OiAxMDBcblx0fSk7XG5cblxuXG5cdC8vIEZPUk1TXG5cdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCQpe1xuXHRcdCQoJy5oYXNUb29sdGlwJykudG9vbHRpcCh7XCJodG1sXCI6IHRydWV9KTtcblx0XHRpZih3aW5kb3cuTW9vVG9vbHMpIHtcblxuXHRcdFx0Ly8gTW9vdG9vbHMgY29uZmxpY3QgZml4IGZvciB0b2dnbGUgd2l0aCBCb290c3RyYXAgMy9KUXVlcnlcblx0XHRcdHdpbmRvdy5hZGRFdmVudCgnbG9hZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKCdbcmVsPXRvb2x0aXBdLFtkYXRhLXRvZ2dsZV0sYVtkYXRhLXRvZ2dsZV0sYnV0dG9uW2RhdGEtdG9nZ2xlXSxbZGF0YS10b2dnbGU9Y29sbGFwc2VdLGFbZGF0YS10b2dnbGU9ZHJvcGRvd25dLC5oYXNUb29sdGlwJykuZWFjaChmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdGUuZ2V0UGFyZW50KCkuaGlkZSA9IG51bGw7XG5cdFx0XHRcdFx0ZS5oaWRlID0gbnVsbDtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdH1cblx0fSk7XG5cblxuXHQvLyBWQUxJREFUSU9OXG5cdCQoXCIjRm9ybVwiKS52YWxpZGF0ZSh7XG5cdFx0cnVsZXM6IHtcblx0XHRcdHVzZXJOYW1lOiB7XG5cdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdFx0XHRtaW5sZW5ndGg6IFszXVxuXHRcdFx0fSxcblx0XHRcdHVzZXJFbWFpbDoge1xuXHRcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHRcdFx0ZW1haWw6IHRydWUsXG5cdFx0XHRcdG1pbmxlbmd0aDogWzVdXG5cdFx0XHR9LFxuXHRcdFx0dXNlclBob25lOiB7XG5cdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdFx0XHRkaWdpdHM6IHRydWUsXG5cdFx0XHRcdG1pbmxlbmd0aDogWzVdXG5cdFx0XHR9LFxuXHRcdFx0dXNlck1lc3NhZ2U6IHtcblx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0XHRcdG1pbmxlbmd0aDogWzEwXVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRtZXNzYWdlczoge1xuXHRcdH0sXG5cblx0XHRmb2N1c0NsZWFudXA6IHRydWUsXG5cdFx0Zm9jdXNJbnZhbGlkOiBmYWxzZVxuXG5cdFx0Ly8gc3VibWl0SGFuZGxlcjogZnVuY3Rpb24gc3VibWl0SGFuZGxlcigpIHtcblx0XHQvLyBcdCQuYWpheCh7XG5cdFx0Ly8gXHRcdHR5cGU6IFwiUE9TVFwiLFxuXHRcdC8vIFx0XHR1cmw6IFwibWFpbC5waHBcIixcblx0XHQvLyBcdFx0ZGF0YTogJChcIiNGb3JtXCIpLnNlcmlhbGl6ZSgpLFxuXHRcdC8vIFx0XHRzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGRhdGEpIHtcblx0XHQvLyBcdFx0XHQkKFwiI3NlbmRcIikubW9kYWwoXCJzaG93XCIpO1xuXHRcdC8vIFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdC8vIFx0XHRcdFx0JChcIiNGb3JtXCIpLnRyaWdnZXIoXCJyZXNldFwiKTtcblx0XHQvLyBcdFx0XHRcdCQoXCIjc2VuZFwiKS5tb2RhbChcImhpZGVcIik7XG5cdFx0Ly8gXHRcdFx0fSwgNTAwMCk7XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdH0pO1xuXHRcdC8vIH1cblx0fSk7XG5cblxuXHQvLyBSRVNFVCBGT1JNXG5cdCQoXCIucmVzZXRcIikuY2xpY2soZnVuY3Rpb24oKXtcblx0XHQkKFwiI0Zvcm1cIikudHJpZ2dlcihcInJlc2V0XCIpO1xuXHR9KTtcblxuXG5cdC8vIEJBQ0sgVE8gVE9QXG5cdC8vIEJhY2sgdG8gdG9wIGJ1dHRvblxuXHR2YXIgbGltaXQgICAgID0gJCh3aW5kb3cpLmhlaWdodCgpLzMsXG5cdFx0JGJhY2tUb1RvcCA9ICQoJy5iYWNrLXRvLXRvcCcpO1xuXHQkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoICQodGhpcykuc2Nyb2xsVG9wKCkgPiBsaW1pdCApIHtcblx0XHRcdCRiYWNrVG9Ub3AuZmFkZUluKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRiYWNrVG9Ub3AuZmFkZU91dCgpO1xuXHRcdH1cblx0fSk7XG5cdC8vIHNjcm9sbCBib2R5IHRvIDBweCBvbiBjbGlja1xuXHQkYmFja1RvVG9wLmNsaWNrKGZ1bmN0aW9uICgpIHtcblx0XHQkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtcblx0XHRcdHNjcm9sbFRvcDogMFxuXHRcdH0sIDE1MDApO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSk7XG5cblxuXHQvLyBQUkVMT0FERVJcblx0JCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XG5cdCQoJyNiZWZvcmUtbG9hZCcpLmZpbmQoJ2knKS5mYWRlT3V0KCkuZW5kKCkuZGVsYXkoNDAwKS5mYWRlT3V0KCdzbG93Jyk7XG5cdH0pO1xuXG5cblx0Ly8gU09SVCBQT1JURk9MSU8gKG1peEl0VXApXG5cdCQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCl7XG5cdFx0dmFyICRjb250YWluZXIgPSAkKFwiI21peEl0VXBcIik7XG5cdFx0JGNvbnRhaW5lci5taXhpdHVwKHtcblx0XHRcdHRhcmdldFNlbGVjdG9yOiBcIi5nYWxsZXJ5LWl0ZW1cIixcblx0XHRcdGZpbHRlclNlbGVjdG9yOiBcIi5maWx0ZXJcIixcblx0XHRcdHNvcnRTZWxlY3RvcjogXCIuc29ydFwiLFxuXHRcdFx0YnV0dG9uRXZlbnQ6IFwiY2xpY2tcIixcblx0XHRcdGVmZmVjdHM6IFtdLFxuXHRcdFx0bGlzdEVmZmVjdHM6IG51bGwsXG5cdFx0XHRlYXNpbmc6IFwic21vb3RoXCIsXG5cdFx0XHRsYXlvdXRNb2RlOiBcImdyaWRcIixcblx0XHRcdHRhcmdldERpc3BsYXlHcmlkOiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0dGFyZ2V0RGlzcGxheUxpc3Q6IFwiYmxvY2tcIixcblx0XHRcdGdyaWRDbGFzczogXCJncmlkXCIsXG5cdFx0XHRsaXN0Q2xhc3M6IFwibGlzdFwiLFxuXHRcdFx0dHJhbnNpdGlvblNwZWVkOiA2MDAsXG5cdFx0XHRzaG93T25Mb2FkOiBcImFsbFwiLFxuXHRcdFx0c29ydE9uTG9hZDogZmFsc2UsXG5cdFx0XHRtdWx0aUZpbHRlcjogZmFsc2UsXG5cdFx0XHRmaWx0ZXJMb2dpYzogXCJvclwiLFxuXHRcdFx0cmVzaXplQ29udGFpbmVyOiB0cnVlLFxuXHRcdFx0bWluSGVpZ2h0OiAwLFxuXHRcdFx0ZmFpbENsYXNzOiBcImZhaWxcIixcblx0XHRcdHBlcnNwZWN0aXZlRGlzdGFuY2U6IFwiMzAwMFwiLFxuXHRcdFx0cGVyc3BlY3RpdmVPcmlnaW46IFwiNTAlIDUwJVwiLFxuXHRcdFx0YW5pbWF0ZUdyaWRMaXN0OiB0cnVlLFxuXHRcdFx0b25NaXhMb2FkOiBmdW5jdGlvbigpe1xuXHRcdFx0XHQkY29udGFpbmVyLmFkZENsYXNzKFwibG9hZGVkXCIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0JChcIiNzb3J0IC5zb3J0XCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG5cdFx0XHQkKFwiI3NvcnQgLnNvcnRcIikucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcblx0XHRcdCQoXCIjc29ydCAuc29ydFwiKS5jbG9zZXN0KFwibGlcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG5cdFx0XHQkKHRoaXMpLmNsb3Nlc3QoXCJsaVwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcblx0XHRcdCQodGhpcykuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTtcblx0XHRcdGlmKCQodGhpcykuYXR0cihcImRhdGEtb3JkZXJcIik9PVwiZGVzY1wiKXtcblx0XHRcdFx0JCh0aGlzKS5hdHRyKFwiZGF0YS1vcmRlclwiLCBcImFzY1wiKVxuXHRcdFx0fVxuXHRcdFx0ZWxzZXtcblx0XHRcdFx0JCh0aGlzKS5hdHRyKFwiZGF0YS1vcmRlclwiLCBcImRlc2NcIilcblx0XHRcdH1cblx0XHR9KVxuXHR9KTtcblxuXG5cdC8vIFNPUlQgUE9SVEZPTElPIChzYW1lIGhlaWdodClcblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblx0XHRpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoID4gNzY3KSB7XG5cdFx0XHQkLmZuLmVxdWl2YWxlbnQgPSBmdW5jdGlvbiAoKXtcblx0XHRcdFx0dmFyICRibG9ja3MgPSAkKHRoaXMpLFxuXHRcdFx0XHRtYXhIID0gJGJsb2Nrcy5lcSgwKS5oZWlnaHQoKTtcblx0XHRcdFx0JGJsb2Nrcy5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0bWF4SCA9ICggJCh0aGlzKS5oZWlnaHQoKSA+IG1heEggKSA/ICQodGhpcykuaGVpZ2h0KCkgOiBtYXhIO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0JGJsb2Nrcy5oZWlnaHQobWF4SCk7XG5cdFx0XHR9XG5cdFx0XHQkKCcubWl4JykuZXF1aXZhbGVudCgpO1xuXHRcdH1cblx0fSk7XG5cbn0oalF1ZXJ5KSk7IiwidmFyIEhQID0ge1xuICByYW5kb206IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSFA7Il19
