const banner = document.querySelector(".banner");
const left = document.getElementById("left");
const right = document.getElementById("right");

left.addEventListener("mouseenter", () => {
    banner.classList.add("hoverLeft");
});

left.addEventListener("mouseleave", () => {
    banner.classList.remove("hoverLeft");
});

right.addEventListener("mouseenter", () => {
    banner.classList.add("hoverRight");
});

right.addEventListener("mouseleave", () => {
    banner.classList.remove("hoverRight");
});