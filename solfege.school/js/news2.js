/************* bxslider ***************/

$(function(){
	$('#slider1').bxSlider({
		auto:true,
		speed:5000,
		pause:4000
	});
});


$(document).ready(function() {
	$(".news-link").click(function(){
  		 window.location = "./about/about.html#newspaper";
 	});
 	
 	$(".covid-link").click(function(){
  		 window.location = "./colds-flu-covid-news.html";
 	});
});

var d = document;
/* var highlights = d.querySelector('.highlights');
var items = d.querySelector('.items');
var itemCount = d.querySelectorAll('.item').length;
var scroller = d.querySelector('.scroller');
var pos = 0;
var transform = Modernizr.prefixed('transform');

function setTransform() {
  items.style[transform] = 'translate3d(' + (-pos * items.offsetWidth) + 'px,0,0)';
}

function prev() {
  pos = Math.max(pos - 1, 0);
  setTransform();
}

function next() {
  pos = Math.min(pos + 1, itemCount - 1);
  setTransform();
}

window.addEventListener('resize', setTransform);*/




