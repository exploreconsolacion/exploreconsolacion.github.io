const slides = document.querySelectorAll(".slide");
let cur = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = "flex"; 
        } else {
            slide.style.display = "none";
        }
    });
}

function startCycle() {
    setInterval(() => {
        cur = (cur + 1) % 4;
        showSlide(cur);
    }, 2000);
}

showSlide(cur);
startCycle();
