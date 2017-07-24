'use strict';

(function($){
	$.fn.parallax = function(options) {
		var settings = {};
		$.extend(settings, $.fn.parallax.defaults, options);

		return this.each(function(){
			var api = new API($(this), settings);

			api.init();
		})
	}

	$.fn.parallax.defaults = {
		speed: 1,
		aspRatio: 2
	}

	function API(elem, settings) {
		this.elem = elem;
		this.elOff;
	};

	API.prototype = {
		init: function() {
			var elementH = this.elem.height();
			var that = this;

			$(window).on('scroll load', function(){
				that.doParallax(elementH);
			})
		},

		shouldStart: function(control) {

			if(control.window > 0 || control.seen) {
				return true;
			}

			return false;
		},

		doParallax: function(elH) {
			var winTop = $(window).scrollTop();
			var elem = this.elem;
			var aspRatio = this.aspRatio || 2;
			var y = elH + (winTop / aspRatio);
			elem.css({
				'background-position': '100%' + y + 'px'
			});
		}
	}
})(jQuery);