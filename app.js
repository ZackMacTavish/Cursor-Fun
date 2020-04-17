let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll('.nav-links li');
let fontDesc = document.querySelectorAll('.font-desc');

window.addEventListener("mousemove", cursor);
window.addEventListener("scroll", cursor);

function cursor(e) {
mouseCursor.style.top = e.clientY + "px";
mouseCursor.style.left = e.clientX + "px";
}

navLinks.forEach(link => {
link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    link.classList.remove("hovered-link");

});

link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    link.classList.add("hovered-link");
});



});