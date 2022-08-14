// This is unused and is in the Navbar Component mount function

const navthing = document.querySelector(".Navbar")
const body = document.querySelector("body")
let lastScrollY = window.scrollY

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    navthing.classList.add("HiddenNavbar");
    //body.style.paddingTop = "0rem";
  } else {
    navthing.classList.remove("HiddenNavbar")
    //body.style.paddingTop = "4rem";
  }
  lastScrollY = window.scrollY;
})