var serviceArrow = document.querySelectorAll('.service .arrow');
for (var i = 0; i < serviceArrow.length; i++) {
	serviceArrow[i].onclick = function(e) {
		var target = e.target;
		target.parentElement.classList.toggle('open');
	}
}

var leftSliderArrow = document.querySelectorAll('.line-quote .arrow-left');
var rightSliderArrow = document.querySelectorAll('.line-quote .arrow-right');
for (var i = 0; i < rightSliderArrow.length; i++) {
	rightSliderArrow[i].onclick = function() {
		if (this.parentElement.nextElementSibling == null) {
			this.parentElement.classList.toggle('active');
			return this.parentElement.parentElement.children[0].classList.toggle('active');
		}
		this.parentElement.nextElementSibling.classList.toggle('active');
		this.parentElement.classList.toggle('active');
	}
}
for (var i = 0; i < leftSliderArrow.length; i++) {
	leftSliderArrow[i].onclick = function() {
		if (this.parentElement.previousElementSibling == null) {
			this.parentElement.classList.toggle('active');
			return this.parentElement.parentElement.children[this.parentElement.parentElement.children.length-1].classList.toggle('active');
		}
		this.parentElement.previousElementSibling.classList.toggle('active');
		this.parentElement.classList.toggle('active');
	}
}

