/* This file contains main script for website
 * Style related scripts is located in style.js
 */
/* global document jQuery */

// initialize when document is ready
jQuery(document).ready(function($) {

	// initialize magnificPopup
	$('.js-popup-link').magnificPopup({
		type: 'inline',
		mainClass: 'mfp-animation',
		removalDelay: 200
	});

	$('.js-home-slider').find('.slides').flickity({
		autoPlay: 5000,
		imagesLoaded: true,
		wrapAround: true,
	});

	$('.js-client-slider').find('.slides').flickity({
		imagesLoaded: true,
		wrapAround: false,
		pageDots: false,
		contain: true,
		groupCells: true,
	});

	$('.js-partner-slider').find('.slides').flickity({
		imagesLoaded: true,
		wrapAround: false,
		pageDots: false,
		contain: true,
		groupCells: true,
	});

	$('.js-review-slider').find('.slides').flickity({
		imagesLoaded: true,
		wrapAround: false,
		contain: true,
		groupCells: true,
		cellAlign: 'left',
	});

	$('.js-about-slider').find('.slides').flickity({
		imagesLoaded: true,
		wrapAround: true,
		pageDots: false,
	});

	$('#mnsry_container').masonry();

	$('.popup-login-toggler').mouseup('click', function() {
		if($(this).hasClass('is-toggled')) {
			$(this).removeClass('is-toggled');
		}
		else {
			$(this).addClass('is-toggled');
		}

		return false;
	});

	$('.popup-cart-toggler').mouseup('click', function() {
		if($('.popup-cart').hasClass('is-toggled')) {
			$('.popup-cart').removeClass('is-toggled');
			$('body').css('overflow-y', 'auto');
		}
		else {
			$('.popup-cart').addClass('is-toggled');
			$('body').css('overflow-y', 'hidden');
		}

		return false;
	});

	function closeLogin() {
		$('.popup-login-toggler').removeClass('is-toggled');
	};

	function closeCart() {
		$('.popup-cart').removeClass('is-toggled');
		$('body').css('overflow-y', 'auto');
	};

	$(document).mouseup(function(e) {
		var popupLogin = $(".popup-login-container");
		var popupLoginToggler = $('.popup-login-toggler');

		var popupCart = $(".popup-cart-container");
		var popupCartToggler = $('.popup-cart-toggler');

		var ukrPurhcaseList = $('.ukr-list');
		var ukrPurhcaseToggler = $('.ukr-selected-update');
		
    // if the target of the click isn't the container nor a descendant of the container
		if (!popupLogin.is(e.target) && popupLogin.has(e.target).length === 0 && popupLoginToggler.has(e.target).length === 0) {
			closeLogin();
		}
		if (!popupCart.is(e.target) && popupCart.has(e.target).length === 0 && popupCartToggler.has(e.target).length === 0) {
			closeCart();
		}
		if (!ukrPurhcaseList.is(e.target) && ukrPurhcaseList.has(e.target).length === 0 && ukrPurhcaseToggler.parent('.ukr-field').has(e.target).length === 0) {
			ukrPurhcaseList.removeClass('is-toggled');
		}
	});

	function cartHeight() {
		var winHeight = $(window).height();

		$(".popup-cart-container").css('min-height', winHeight + 'px');
	}

	cartHeight();

	$(window).resize(function() {
		cartHeight();
	});

	$('.solution-label').on('click', function() {
		var $container = $(this).parent('.help-solution-item');
		var expandContainer = $(this).parent('.help-solution-item').find('.solution-expanded');

		if($container.hasClass('is-toggled')) {
			$container.removeClass('is-toggled');
			expandContainer.slideUp(300);
		}
		else {
			$container.addClass('is-toggled');
			expandContainer.slideDown(300);
		}
	});

	$('.ukr-selected-update').mouseup(function(e) {
		var ukrList = $('.ukr-list');

		if(ukrList.hasClass('is-toggled')) {
			ukrList.removeClass('is-toggled')
		}
		else {
			ukrList.addClass('is-toggled')
		}
	});

	$('.ukr-purchase-input').on('change', function() {
		var $text = $(this).parent('.ukr-item').find('.ukr-text-source').text();
		$('.ukr-list').removeClass('is-toggled');
		$('.ukr-selected-update').text($text);
	});

});
