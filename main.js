// select the buttons
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slides = document.querySelectorAll(".slide");

let index = 0; // to log which slide is showing

// function to display slide
function showSlide() {
	slides.forEach((slide) => {
		slide.style.display = "none";
	});
	slides[index].style.display = "flex";
}

function showNext() {
	index++;
	if (index > slides.length - 1) {
		index = 0;
	}
	showSlide(index);
}

function showPrev() {
	index--;
	if (index < 0) {
		index = slides.length - 1;
	}
	showSlide(index);
}

// add event listeners to both buttons
next.addEventListener("click", showNext);
prev.addEventListener("click", showPrev);
