import "./style.css";
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper"),
    clearTimeout(resizeTimer),
    (resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 400));
});
const navToggle = document.querySelector(".nav-toggle"),
  menuToggle = document.querySelector(".menu-toggle");
navToggle.addEventListener("click", function (e) {
  this.classList.toggle("open"),
    menuToggle.classList.toggle("active"),
    e.stopPropagation();
});
const dropdown = document.querySelector(".dropdown a");
dropdown.addEventListener("click", function (e) {
  this.nextElementSibling.classList.toggle("show"),
    this.parentNode.classList.toggle("active"),
    e.stopPropagation();
});
const deepDropdown = document.querySelector(".second-level a");
deepDropdown.addEventListener("click", function (e) {
  this.nextElementSibling.classList.toggle("show"),
    this.parentNode.classList.toggle("active"),
    e.stopPropagation();
});
