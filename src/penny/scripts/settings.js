(function($) {
	"use strict";

	$(document).ready(function() {
		
		// ====================================================================

		// Fade In On Scroll

		$(window).scroll(function () {
		
			$('.row').each(function (i) {
				var bottom_of_object = $(this).position().top + 50;
				var bottom_of_window = $(window).scrollTop() + $(window).height();

				/* If the object is completely visible in the window, fade it in */
				if (bottom_of_window > bottom_of_object) {
					$(this).animate({
						'opacity': '1'
					}, 500);
				}

			});

		});
		
		// ====================================================================

		// Smooth Scroll on Menu Click

		$('.navbar-nav a[href^=#]').on("click",function(){
			var t= $(this.hash);
			var t=t.length&&t||$('[name='+this.hash.slice(1)+']');
			if(t.length){
				var tOffset=t.offset().top;
				$('html,body').animate({scrollTop:tOffset},'slow');
				return false;
			}
		});

		// ====================================================================

		// Superslides

		$('#slides').superslides({
			play: 5000,
			animation_speed: 2000,
			animation: 'fade',
			pagination: false
		});

		// ====================================================================

		// Owl Carousel

		$("#staff .owl-carousel").owlCarousel({
			items: 4,
			itemsDesktop: 4,
			itemsDesktopSmall: 4,
			itemsTablet: 4,
			slideSpeed: 800
		});

		$("#news .owl-carousel").owlCarousel({
			items: 2,
			itemsDesktop: 2,
			itemsDesktopSmall: 2,
			itemsTablet: 1,
			navigation: false,
			pagination: true,
			slideSpeed: 800,
			autoHeight: true
		});

		$("#testimonials .owl-carousel").owlCarousel({
			items: 1,
			itemsDesktop: 1,
			itemsDesktopSmall: 1,
			itemsTablet: 1,
			navigation: true,
			pagination: false,
			slideSpeed: 800,
			autoHeight: true,
			navigationText: [
				"<i class='fa fa-angle-left'></i>",
				"<i class='fa fa-angle-right'></i>"
			]
		});

		// ====================================================================

		// Fancybox

		$('.fancybox').fancybox({
			openEffect: 'none'
		});

		// ====================================================================

		// Direction-Aware Hover Effect

		$('.gallery > li').each(function(){
			$(this).hoverdir();
		});

		// ===================================================================

		// Column Menu

		$('.submenu li a').append("<i class='fa fa-angle-right'></i>");

	})

})(jQuery);