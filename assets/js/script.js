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

	$('.popup-account-toggler').mouseup('click', function() {
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

	$(window).resize( function() {
		var windowWidth = $(window).width();

		if(windowWidth < 768) {
			$('.popup-cart').removeClass('is-toggled');
			$('body').css('overflow-y', 'auto');
		}
		
		if(windowWidth >= 768) {
			closeMobileMenu();
		}
	});

	function closeLogin() {
		$('.popup-login-toggler').removeClass('is-toggled');
	};

	function closePopupAccount() {
		$('.popup-account-toggler').removeClass('is-toggled');
	};

	function closeCart() {
		$('.popup-cart').removeClass('is-toggled');
		$('body').css('overflow-y', 'auto');
	};

	function closeMobileMenu() {
		var mobileMenu = $('.mobile-menu');

		mobileMenu.removeClass('mobile-menu-toggled');
	}

	$(document).mouseup(function(e) {
		var popupLogin = $(".popup-login-container");
		var popupLoginToggler = $('.popup-login-toggler');

		var popupAccount = $(".popup-account-container");
		var popupAccountToggler = $('.popup-account-toggler');

		var popupCart = $(".popup-cart-container");
		var popupCartToggler = $('.popup-cart-toggler');

		var ukrPurhcaseList = $('.ukr-list');
		var ukrPurhcaseToggler = $('.ukr-selected-update');

		var ukrPurhcaseList = $('.ukr-list');
		var ukrPurhcaseToggler = $('.ukr-selected-update');

		var mobileMenuContainer = $('.mobile-menu-container');
		
    // if the target of the click isn't the container nor a descendant of the container
		if (!popupLogin.is(e.target) && popupLogin.has(e.target).length === 0 && popupLoginToggler.has(e.target).length === 0) {
			closeLogin();
		}
		if (!popupAccount.is(e.target) && popupAccount.has(e.target).length === 0 && popupAccountToggler.has(e.target).length === 0) {
			closePopupAccount();
		}
		if (!popupCart.is(e.target) && popupCart.has(e.target).length === 0 && popupCartToggler.has(e.target).length === 0) {
			closeCart();
		}
		if (!ukrPurhcaseList.is(e.target) && ukrPurhcaseList.has(e.target).length === 0 && ukrPurhcaseToggler.parent('.ukr-field').has(e.target).length === 0) {
			ukrPurhcaseList.removeClass('is-toggled');
		}
		if (!mobileMenuContainer.is(e.target) && mobileMenuContainer.has(e.target).length === 0) {
			closeMobileMenu();
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

	function checkOptionToggler() {
		var $toggler = $('.overview-list .option-toggle:checked');
		var optionContainer = $toggler.parents('.option');

		if(optionContainer.hasClass('is-toggled')) {
			optionContainer.removeClass('is-toggled');
		}
		else {
			optionContainer.addClass('is-toggled')
		}
	}
	checkOptionToggler();

	$('.overview-list .option-toggle').on('change', function() {
		var $option = $(this).parents('.option');

		if($option.hasClass('is-toggled')) {
			$option.removeClass('is-toggled');
		}
		else {
			$option.addClass('is-toggled');
		}
	});

	$('.support-response .reply-form .form-tab').on('click', function() {
		var $replyForm = $(this).parent('.reply-form');
		var $expand = $replyForm.find('.form-expand');

		if($replyForm.hasClass('is-toggled')) {
			$replyForm.removeClass('is-toggled');
			$expand.slideUp(200);
		}
		else {
			$replyForm.addClass('is-toggled');
			$expand.slideDown(200);
		}
	});

	$('.myaccount-dashboard .domain-list .domain-list-tab').on('click', function() {
		var $parent = $(this).parent('.domain-list');
		var $expand = $parent.find('.domain-list-content');

		if($parent.hasClass('is-toggled')) {
			$parent.removeClass('is-toggled');
			$expand.slideUp(200);
		}
		else {
			$parent.addClass('is-toggled');
			$expand.slideDown(200);
		}
	});

	$('.info-edit-toggler').on('click', function() {
		$('.user-profile-info').addClass('edit-toggled');

		return false;
	});

	$('.info-edit-close').on('click', function() {
		$('.user-profile-info').removeClass('edit-toggled');

		return false;
	});

	$('.order-history-table .table-filter .filter-tab').on('click', function() {
		var $parent = $(this).parent('.table-filter');
		var $expand = $parent.find('.filter-form');

		if($parent.hasClass('is-toggled')) {
			$parent.removeClass('is-toggled');
			$expand.slideUp(200);
		}
		else {
			$parent.addClass('is-toggled');
			$expand.slideDown(200);
		}
	});

	$('.form-edit-toggle .form-edit-toggle-open').on('click', function() {
		var $parent = $(this).parents('.form-edit-toggle');

		$parent.addClass('is-toggled');

		return false;
	});

	$('.form-edit-toggle .form-edit-toggle-close').on('click', function() {
		var $parent = $(this).parents('.form-edit-toggle');

		$parent.removeClass('is-toggled');

		return false;
	});
	
	$('.logbook-check-all').on('click', function() {
		var $check = $(this);

		if($check.hasClass('is-toggled')) {
			$check.removeClass('is-toggled');
			$('.logbook-check').prop('checked', false);
		}
		else {
			$check.addClass('is-toggled');
			$('.logbook-check').prop('checked', true);
		}
	});

	function detectLogCheck() {
		var logBookCheck = $('.logbook-check');
		var $checked = $('.logbook-check:checked');
		var checkAll = $('.logbook-check-all');

		if(logBookCheck.length > $checked.length) {
			checkAll.removeClass('is-toggled');
			checkAll.prop('checked', false);
		}
		else {
			checkAll.addClass('is-toggled');
			checkAll.prop('checked', true);
		}
	}

	$('.logbook-check').on('click', function() {
		detectLogCheck();
	});

	$('.mobile-menu-nav .item .child-menu-toggle').on('click', function() {
		var menuItem = $(this).parents('.item');
		var childMenu = menuItem.find('.list-child');

		if(menuItem.hasClass('is-toggled')) {
			menuItem.removeClass('is-toggled');
			childMenu.slideUp(200);
		}
		else {
			menuItem.addClass('is-toggled')
			childMenu.slideDown(200);
		}

		return false;
	});

	$('.mobile-menu-toggler').on('click', function() {
		var mobileMenu = $('.mobile-menu');

		mobileMenu.addClass('mobile-menu-toggled');
	});

	$('.mobile-menu-close').on('click', function() {
		closeMobileMenu();
	});

	$('.domain-search-filter-toggle').on('click', function() {
		var $parent = $(this).parent('.domain-search-aside-container');
		var filterContent = $parent.find('.domain-search-filter-content');

		if($parent.hasClass('is-toggled')) {
			$parent.removeClass('is-toggled');
			filterContent.slideUp(200);
		}
		else {
			$parent.addClass('is-toggled');
			filterContent.slideDown(200);
		}
	});

	$(window).resize(function() {
		var windowWidth = $(this).width();

		if(windowWidth > 1023) {
			$('.domain-search-filter-content').slideDown(200);
		}
	});

	$("body").on("click", ".button-qty", function() {

		var $button = $(this);
		var oldValue = $button.parent().find(".char-length-input").val();

		if(oldValue == '') {
			oldValue = 0;
		}
	
		if ($button.hasClass('button-qty-up')) {
			var newVal = parseFloat(oldValue) + 1;
		} else {
		 // Don't allow decrementing below zero
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}
	
		$button.parent().find(".char-length-input").val(newVal);
	
	});

});
