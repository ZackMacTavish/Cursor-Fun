let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll('.nav-links li');
let bigHover = document.querySelector('.text1');

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

bigHover.addEventListener("mouseover", () => {
    
    mouseCursor.classList.add("link-grow2")
    bigHover.classList.add("hovered-link2");
});

bigHover.addEventListener("mouseleave", () => {
    
    mouseCursor.classList.remove("link-grow2")
    bigHover.classList.remove("hovered-link2");
});

 

});

// if bigHover === mouseover { text1 + text 2 will invert only in mouseCursor}