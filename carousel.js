const carousel = document.getElementsByClassName("carousel")[0];
const card = document.getElementsByClassName("reviews")[0];
const next = document.getElementsByClassName("next")[0];
const prev = document.getElementsByClassName("prev")[0];

const gap = 30;
card.style.setProperty('--gap', `${gap}px`);

next.addEventListener("click", e => {
    console.log(width+gap, carousel.scrollWidth)
    carousel.scrollBy(width + gap, 0);
    if (carousel.scrollWidth !== 0) {
      prev.classList.add("active");
    }
    if (card.scrollWidth - width - gap <= carousel.scrollLeft + width) {
      next.classList.remove("active");
    }
});

prev.addEventListener("click", e => {
    carousel.scrollBy(-(width + gap), 0);
    if (carousel.scrollLeft - width - gap <= 0) {
      prev.classList.remove("active");
    }
    if (!card.scrollWidth - width - gap <= carousel.scrollLeft + width) {
      next.classList.add("active");
    }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));