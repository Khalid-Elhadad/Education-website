let barIcon = document.querySelector(".fa-bars");
let navBar = document.querySelector(".nav-bar");
barIcon.onclick = () => {
  barIcon.classList.toggle("fa-times");
  navBar.classList.toggle("active");
};
window.onscroll = () => {
  barIcon.classList.remove("fa-times");
  navBar.classList.remove("active");
};

var swiper = new Swiper(".courses-swipper", {
grabCursor:true,
  spaceBetween: 20,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


var swiper = new Swiper(".teachers-swipper", {
  grabCursor:true,
    spaceBetween: 20,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  
  var swiper = new Swiper(".review-swipper", {
    grabCursor:true,
      spaceBetween: 20,
      loop:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });