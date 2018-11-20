var menuButton = document.querySelector('.menuToggle');
var menuList = document.querySelector('.navi');


function toggleMenu(){
	menuButton.classList.toggle('active');
	menuList.classList.toggle('active');
}

menuButton.addEventListener('click', toggleMenu)
