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
        cur = (cur + 1) % 9;
        showSlide(cur);
    }, 2000);
}

showSlide(cur);
startCycle();

function showModal(src) {
        var modal = document.getElementById("modal");
        var modalImg = document.getElementById("modal-img");
            modal.classList.remove('hidden');
            modalImg.src = src;
        }

        function closeModal() {
            modal.classList.add('hidden');
        }