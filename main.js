function callFunctions() {
   onScroll();
   showButton();
   changeButtonColor();
}

function openMenu() {
   document.body.classList.add('menu-expand');
}

function closeMenu() {
   document.body.classList.remove('menu-expand');
}

function onScroll() {
   if (scrollY > 0) {
      document.getElementById('navigation').classList.add('scroll');
   } else {
      document.getElementById('navigation').classList.remove('scroll');
   }
}

function showButton() {
   if (scrollY > 415) {
      document.getElementById(`backButton`).classList.add(`show`);
   } else {
      document.getElementById(`backButton`).classList.remove(`show`);
   }
}

function changeButtonColor() {
   if (window.matchMedia('(max-width: 420px)').matches) {
      if (scrollY > 4200) {
         document.getElementById(`backButton`).classList.add(`color`);
      } else {
         document.getElementById('backButton').classList.remove('color');
      }
   } else if (window.matchMedia('(max-height: 1200px)').matches) {
      if (scrollY > 3900) {
         document.getElementById(`backButton`).classList.add(`color`);
      } else {
         document.getElementById('backButton').classList.remove('color');
      }
   }
   console.log(scrollY);
}

ScrollReveal({
   reset: true,
   distance: '4rem',
   origin: 'bottom',
   duration: 1300,
});

ScrollReveal().reveal(
   `#home, #home im, #home .stats, #services, #services header, #services .card, #about, #about header, #about .content`
);
