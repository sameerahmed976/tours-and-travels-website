import "./style.css";

const hamburger = document.querySelector(".menu__hamburger");
const navLinks = document.querySelectorAll(".nav__links li a");
const closeButton = document.querySelector(".close");
const btnUp = document.querySelector(".btn--up");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  overlay.style.height = "100%";
});

closeButton.addEventListener("click", () => {
  overlay.style.height = "0";
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    overlay.style.height = "0";

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - 64;

    window.scroll({
      top: position,
      left: 0,
      behavior: "smooth",
    });
  });
});

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnUp.style.display = "block";
    // console.log("Click");
  } else {
    btnUp.style.display = "none";
  }
});
btnUp.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
