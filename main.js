function callFunctions() {
  onScroll();
  showButton();
  changeButtonColor();
}

/*

*/

function onScroll() {
  if (scrollY > 0) {
    document.getElementById("navigation").classList.add("scroll");
  } else {
    document.getElementById("navigation").classList.remove("scroll");
  }
}

/*

*/

function openMenu() {
  document.body.classList.add("menu-expand");
}

function closeMenu() {
  document.body.classList.remove("menu-expand");
}

function showButton() {
  if (scrollY > 415) {
    document.getElementById(`backButton`).classList.add(`show`);
  } else {
    document.getElementById("backButton").classList.remove("show");
  }
}

//

function changeButtonColor() {
  if (scrollY > 3660 || scrollY > 2140) {
    document.getElementById(`backButton`).classList.add(`color`);
  } else {
    document.getElementById("backButton").classList.remove("color");
  }
}

ScrollReveal({
  reset: true,
  distance: "2rem",
  origin: "bottom",
  duration: 1300,
});

ScrollReveal().reveal(
  `#home, #home im, #home .stats, #services, #services header, #services .card, #about, #about header, #about .content`
);

let element = document.querySelector(".status");
window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  if (scrollPosition >= 1) {
    element.classList.add("reveal");
    console.log(scrollPosition);
  } else if (scrollPosition < 260) element.classList.remove("reveal");
});
