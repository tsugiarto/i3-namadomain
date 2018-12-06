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

});
