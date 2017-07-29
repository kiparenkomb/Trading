import HP from './helpers';

(function ($) {

	// MENU
	$(".menu__button").click(function(){
		$(this).toggleClass("active");
		$(".menu__box").toggleClass("active");

	});


	// MOB MENU
	$(document).mouseup(function (e){
		var div = $(".menu");
		if (!div.is(e.target)
				&& div.has(e.target).length === 0) {
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
		offset: 100, // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
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
	$(document).ready(function($){
		$('.hasTooltip').tooltip({"html": true});
		if(window.MooTools) {

			// Mootools conflict fix for toggle with Bootstrap 3/JQuery
			window.addEvent('load', function() {
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

		messages: {
		},

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
	$(".reset").click(function(){
		$("#Form").trigger("reset");
	});


	// BACK TO TOP
	// Back to top button
	var limit     = $(window).height()/3,
		$backToTop = $('.back-to-top');
	$(window).scroll(function () {
		if ( $(this).scrollTop() > limit ) {
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
	$(window).load(function() {
	$('#before-load').find('i').fadeOut().end().delay(400).fadeOut('slow');
	});


	// SORT PORTFOLIO (mixItUp)
	$(window).load(function(){
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
			onMixLoad: function(){
				$container.addClass("loaded");
			}
		});

		$("#sort .sort").click(function(){
			$("#sort .sort").removeClass("selected").removeClass("active");
			$("#sort .sort").closest("li").removeClass("active");
			$(this).closest("li").addClass("active");
			$(this).addClass("selected");
			if($(this).attr("data-order")=="desc"){
				$(this).attr("data-order", "asc")
			}
			else{
				$(this).attr("data-order", "desc")
			}
		})
	});


	// SORT PORTFOLIO (same height)
	$(document).ready(function(){
		if (document.documentElement.clientWidth > 767) {
			$.fn.equivalent = function (){
				var $blocks = $(this),
				maxH = $blocks.eq(0).height();
				$blocks.each(function(){
					maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;
				});
				$blocks.height(maxH);
			}
			$('.mix').equivalent();
		}
	});

}(jQuery));