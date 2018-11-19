$(function() {


	$('a[href^="#"]').bind('click.smoothscroll', function(e) {
		e.preventDefault();
		$('.burger-menu').removeClass('menu-on');
		$('.navi').removeClass('active');
		$('body').removeClass('overflow');
		var target = this.hash,
			$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top - 40
		}, 900, 'swing', function() {
			window.location.hash = target;
		});
	});

	var background = $('.banner__background')

	$(window).scroll(function(event) {
		var st = $(window).scrollTop();

		background.css({
			transform: `translateX(${st / 2}px)`
		})
	});

	function showMenu() {
		$('.burger-menu').toggleClass('menu-on');
		$('.navi').toggleClass('active');
		$('body').toggleClass('overflow');
	}

	$('.burger-menu').click(function(event) {
		showMenu();
	});

})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKSB7XG5cblxuXHQkKCdhW2hyZWZePVwiI1wiXScpLmJpbmQoJ2NsaWNrLnNtb290aHNjcm9sbCcsIGZ1bmN0aW9uKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0JCgnLmJ1cmdlci1tZW51JykucmVtb3ZlQ2xhc3MoJ21lbnUtb24nKTtcblx0XHQkKCcubmF2aScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHQkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ292ZXJmbG93Jyk7XG5cdFx0dmFyIHRhcmdldCA9IHRoaXMuaGFzaCxcblx0XHRcdCR0YXJnZXQgPSAkKHRhcmdldCk7XG5cblx0XHQkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xuXHRcdFx0J3Njcm9sbFRvcCc6ICR0YXJnZXQub2Zmc2V0KCkudG9wIC0gNDBcblx0XHR9LCA5MDAsICdzd2luZycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSB0YXJnZXQ7XG5cdFx0fSk7XG5cdH0pO1xuXG5cdHZhciBiYWNrZ3JvdW5kID0gJCgnLmJhbm5lcl9fYmFja2dyb3VuZCcpXG5cblx0JCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciBzdCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuXHRcdGJhY2tncm91bmQuY3NzKHtcblx0XHRcdHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHtzdCAvIDJ9cHgpYFxuXHRcdH0pXG5cdH0pO1xuXG5cdGZ1bmN0aW9uIHNob3dNZW51KCkge1xuXHRcdCQoJy5idXJnZXItbWVudScpLnRvZ2dsZUNsYXNzKCdtZW51LW9uJyk7XG5cdFx0JCgnLm5hdmknKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG5cdFx0JCgnYm9keScpLnRvZ2dsZUNsYXNzKCdvdmVyZmxvdycpO1xuXHR9XG5cblx0JCgnLmJ1cmdlci1tZW51JykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRzaG93TWVudSgpO1xuXHR9KTtcblxufSkiXSwiZmlsZSI6Im1haW4uanMifQ==
