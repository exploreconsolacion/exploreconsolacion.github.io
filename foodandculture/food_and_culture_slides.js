const slides1 = document.querySelectorAll(".slide1");
let cur1 = 0;

const slides2 = document.querySelectorAll(".slide2");
let cur2 = 0;

function showSlide(slides, index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = "flex";
        } else {
            slide.style.display = "none";
        }
    });
}

function startCycle(slides, cur, intervalTime) {
    setInterval(() => {
        cur = (cur + 1) % slides.length;
        showSlide(slides, cur);
    }, intervalTime);
}

showSlide(slides1, cur1);
startCycle(slides1, cur1, 2000);

showSlide(slides2, cur2);
startCycle(slides2, cur2, 2000);
