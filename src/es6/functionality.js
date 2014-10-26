;(function(undefined){
	"use strict";
	
	//	active links
	var links = document.getElementsByTagName('a');
	var linkHover = function(ev) {
		var h = this.href;
		Array.prototype.forEach.call(links,function(a){
			if (a.href === h) {
				a.classList.add('hovering');
			} else {
				a.classList.remove('hovering');
			}
		});
	};
	var linkOut = function(ev) {
		Array.prototype.forEach.call(links,function(a){
			a.classList.remove('hovering');
		});
	};
	Array.prototype.forEach.call(links,function(a){
		a.addEventListener('mouseenter',linkHover);
		a.addEventListener('mouseleave',linkOut);
	});

	//	twitter
	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

})();