(function () {
    	const burgerItem = document.querySelector('.burger');
    	const menu = document.querySelector('.header_nav');
    	const munuClose = document.querySelector('.header_nav_close');
    	burgerItem.addEventListener('click', () => {
    		menu.classList.add('header_nav_active');
    	});
    	munuClose.addEventListener('click', () => {
    		menu.classList.remove('header_nav_active');
    	});
	}());