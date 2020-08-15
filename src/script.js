let cookFooter = document.getElementById("cook-footer");
let scrollUpBtn = document.getElementById("scrollUp");
let menuBtn = document.getElementById("menu-icon");
let mobileHeader = document.getElementById("mobile-header");

new WOW().init();

window.onscroll = function () {
  console.log(window.pageYOffset)
  
  if (window.pageYOffset >= 500) {
  scrollUpBtn.classList.add("show");
  } else {
  scrollUpBtn.classList.remove("show");
  }
}

scrollUpBtn.onclick = function() {
  console.log("click");
  window.scrollTo({ 
    top: 100,
    behavior: "smooth" 
  });
}

menuBtn.onclick = function() {
  if(mobileHeader.classList.contains("open")) {
    menuBtn.classList.remove("close-icon");
    mobileHeader.classList.remove("open");
  } else{
    mobileHeader.classList.add("open");
    menuBtn.classList.add("close-icon");
  }
}


$(document).on('click', 'a.nav-link', function (event) {
          event.preventDefault();
          console.log("CLICKED ANCHOR!");

          $('html, body').animate({
              scrollTop: $($.attr(this, 'href')).offset().top - $(".header.web").height() - 30
          }, 500);
      });

// let menuBtn = document.getElementById("menu-icon");

// menuBtn.onclick = function() {
//   if(mobileHeader.classList.contains("open")) {
//     menuBtn.classList.remove("close-icon");
//     mobileHeader.classList.remove("open");
//   } else{
//     mobileHeader.classList.add("open");
//     menuBtn.classList.add("close-icon");
//   }
// }
