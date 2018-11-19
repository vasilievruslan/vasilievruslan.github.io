$(function(){

	var background = $('.banner__background')

	$(window).scroll(function(event) {
		var st = $(window).scrollTop();

		background.css({
			transform: `translateX(${st / 2}px)`
		})
	});

})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKXtcblxuXHR2YXIgYmFja2dyb3VuZCA9ICQoJy5iYW5uZXJfX2JhY2tncm91bmQnKVxuXG5cdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgc3QgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cblx0XHRiYWNrZ3JvdW5kLmNzcyh7XG5cdFx0XHR0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7c3QgLyAyfXB4KWBcblx0XHR9KVxuXHR9KTtcblxufSkiXSwiZmlsZSI6Im1haW4uanMifQ==
