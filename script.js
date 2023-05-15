(function(){
	
	'use strict';
	
	function hideSubmenus() {
			const submenus = document.querySelectorAll('ul li ul');
		for (let i=0; i<submenus.length; i++) {
			submenus[i].className = 'hide-menu';
			}
		}
		hideSubmenus();
		const menulinks = document.querySelectorAll('.menulink');
		for (let i=0; i<menulinks.length; i++) {
			menulinks[i].addEventListener('click', function(event){
				event.preventDefault();
				//alert('clicked');
		const thisMenu = this.parentNode.querySelector('ul');
		//alert(thisMenu.innerHTML);
		if (thisMenu.classList.contains('hide-menu')) {
			hideSubmenus();
			thisMenu.className = 'show-menu';
		} else {
			thisMenu.className = 'hide-menu';
		}
			});
		}
		
}());

